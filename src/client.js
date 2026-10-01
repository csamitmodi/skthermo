const config=JSON.parse(document.querySelector('#site-config').textContent);
const products=config.products;
const modal=document.querySelector('#rfq-modal');
const mobileToggle=document.querySelector('#mobile-toggle');
const mobileNav=document.querySelector('#mobile-nav');
let quoteOpener=null;
function closeMenus(restore=false){document.querySelectorAll('.nav-button').forEach(b=>{if(restore&&b.getAttribute('aria-expanded')==='true')b.focus();b.setAttribute('aria-expanded','false');document.getElementById(b.getAttribute('aria-controls')).hidden=true;});}
document.querySelectorAll('.nav-button').forEach(b=>b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')==='true';closeMenus();b.setAttribute('aria-expanded',String(!open));document.getElementById(b.getAttribute('aria-controls')).hidden=open;}));
document.addEventListener('click',e=>{if(!e.target.closest('.mega-container'))closeMenus();});
document.addEventListener('focusin',e=>{if(!e.target.closest('.mega-container'))closeMenus();});
function closeMobile(restore=false){mobileToggle.setAttribute('aria-expanded','false');mobileToggle.setAttribute('aria-label','Open navigation');mobileNav.hidden=true;if(restore)mobileToggle.focus();}
mobileToggle.addEventListener('click',()=>{const open=mobileToggle.getAttribute('aria-expanded')==='true';mobileToggle.setAttribute('aria-expanded',String(!open));mobileToggle.setAttribute('aria-label',open?'Open navigation':'Close navigation');mobileNav.hidden=open;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenus(true);if(!mobileNav.hidden)closeMobile(true);}});
addEventListener('scroll',()=>document.querySelector('#site-header').classList.toggle('scrolled',scrollY>30),{passive:true});
function setProduct(f,slug){const p=products.find(x=>x.slug===slug);f.elements.product.value=p?.slug||'';if(p){f.elements.category.value=p.category;f.elements.size.value=p.capacity||'';}}
function resetResult(f){f.querySelector('.form-status').textContent='';f.querySelector('.email-result').hidden=true;}
document.querySelectorAll('[data-quote]').forEach(b=>b.addEventListener('click',()=>{const f=modal.querySelector('form');f.reset();setProduct(f,b.dataset.quote);if(b.dataset.category)f.elements.category.value=b.dataset.category;f.elements.enquiryType.value=b.dataset.kind||'Domestic bulk';if([...f.elements.pathway.options].some(o=>o.value===b.dataset.kind))f.elements.pathway.value=b.dataset.kind;modal.querySelector('#rfq-title').textContent=products.find(p=>p.slug===b.dataset.quote)?.name||'Discuss your requirement.';resetResult(f);quoteOpener=b;modal.showModal();document.body.classList.add('modal-open');}));
modal.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('close',()=>{document.body.classList.remove('modal-open');quoteOpener?.focus();});
modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
document.querySelectorAll('[data-lead-form]').forEach(f=>{
 let draft='';const status=f.querySelector('.form-status');
 f.addEventListener('input',()=>resetResult(f));
 f.elements.pathway.addEventListener('change',()=>f.elements.enquiryType.value=f.elements.pathway.value);
 f.elements.product.addEventListener('change',()=>setProduct(f,f.elements.product.value));
 f.addEventListener('submit',async e=>{
  e.preventDefault();if(!f.reportValidity()||f.elements.website.value)return;
  const file=f.elements.artwork.files[0];if(file&&(file.size>5*1024*1024||! /\.(pdf|png|jpe?g)$/i.test(file.name))){status.textContent='Select a PDF, PNG or JPG smaller than 5 MB.';status.focus();return;}
  const data=new FormData(f);const p=products.find(x=>x.slug===data.get('product'));const subject=`SKP ${data.get('enquiryType')} - ${p?.name||data.get('company')||data.get('name')}`;
  const labels={enquiryType:'Enquiry type',name:'Name',company:'Company',email:'Email',phone:'Phone',country:'Country',city:'State / city',buyerType:'Buyer type',category:'Product category',product:'Product',size:'Size / capacity',quantity:'Estimated quantity',customization:'Customization',message:'Message'};
  draft=[subject,...Object.entries(labels).filter(([k])=>data.get(k)).map(([k,label])=>`${label}: ${k==='product'?(p?.name||data.get(k)):k==='category'?(config.categories[data.get(k)]||data.get(k)):data.get(k)}`),file?`Attachment: ${file.name} (attach manually)`:''].filter(Boolean).join('\n');
  if(!config.leadEndpoint){f.querySelector('[data-email-link]').href=`mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`;f.querySelector('.email-result').hidden=false;status.textContent='Your draft is ready. Nothing has been sent. Open your email app or download the enquiry text.';status.focus();return;}
  const submit=f.querySelector('[type=submit]');submit.disabled=true;status.textContent='Sending your enquiry...';try{const res=await fetch(config.leadEndpoint,{method:'POST',body:data});if(!res.ok)throw Error('Submission failed');const result=await res.json();if(result.success!==true)throw Error('Unconfirmed submission');f.reset();status.textContent='Your enquiry was received.';}catch{status.textContent='Delivery could not be confirmed. Contact the team by email or phone.';}finally{submit.disabled=false;status.focus();}
 });
 f.querySelector('[data-download-enquiry]').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([draft],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='skp-enquiry.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
});
const params=new URLSearchParams(location.search);if(location.pathname==='/rfq'){const f=document.querySelector('main form');const kind=params.get('kind');if(kind&&[...f.elements.pathway.options].some(o=>o.value===kind)){f.elements.pathway.value=kind;f.elements.enquiryType.value=kind;}if(params.get('product'))setProduct(f,params.get('product'));}
const search=document.querySelector('#search');if(search){
 const ids=['search','category','material','application','size','custom'];const filterEls=ids.map(id=>document.getElementById(id));
 const update=()=>{let count=0;const [query,cat,mat,app,size,custom]=filterEls.map(el=>el?.value.toLowerCase().trim()||'');document.querySelectorAll('.catalog-products .product-card').forEach(card=>{const match=query.split(/\s+/).every(term=>card.dataset.name.includes(term))&&(!cat||(cat==='custom-products'?card.dataset.custom==='true':card.dataset.category===cat))&&(!mat||card.dataset.material.toLowerCase()===mat)&&(!app||card.dataset.application.toLowerCase()===app)&&(!size||card.dataset.size.toLowerCase()===size)&&(!custom||card.dataset.custom===custom);card.hidden=!match;if(match)count++;});document.querySelector('#result-count').textContent=`${count} ${count===1?'product':'products'}`;document.querySelector('#no-results').hidden=count>0;};
 filterEls.filter(Boolean).forEach(el=>el.addEventListener('input',update));
 document.querySelector('#reset-filters').addEventListener('click',()=>{if(location.pathname!=='/products'){location.href='/products';return;}filterEls.filter(Boolean).forEach(el=>el.value='');update();});
 document.querySelector('#category').addEventListener('change',e=>{if(location.pathname!=='/products')location.href='/products'+(e.target.value?'/'+e.target.value:'');});
 search.value=params.get('q')||'';update();
 const toggle=document.querySelector('.filter-toggle'),panel=document.querySelector('#filter-panel'),close=document.querySelector('.filter-close');let inert=[];
 function closeDrawer(){document.body.classList.remove('filters-open');toggle.setAttribute('aria-expanded','false');panel.removeAttribute('role');panel.removeAttribute('aria-modal');for(const [node,prior] of inert)node.inert=prior;inert=[];toggle.focus();}
 toggle.addEventListener('click',()=>{document.body.classList.add('filters-open');toggle.setAttribute('aria-expanded','true');panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');let current=panel;while(current.parentElement&&current.parentElement!==document.documentElement){for(const node of current.parentElement.children){if(node!==current&&!['SCRIPT','STYLE'].includes(node.tagName)){inert.push([node,node.inert]);node.inert=true;}}current=current.parentElement;}search.focus();});
 close.addEventListener('click',closeDrawer);
 panel.addEventListener('keydown',e=>{if(!document.body.classList.contains('filters-open'))return;if(e.key==='Escape'){e.preventDefault();closeDrawer();}if(e.key==='Tab'){const focusable=[...panel.querySelectorAll('button,input,select')].filter(e=>!e.disabled);const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
 addEventListener('resize',()=>{if(innerWidth>768&&document.body.classList.contains('filters-open'))closeDrawer();});
}
document.querySelectorAll('[data-gallery]').forEach(b=>b.addEventListener('click',()=>{const source=b.querySelector('img'),target=document.querySelector('.detail-art img');for(const a of ['src','srcset','width','height','alt'])target.setAttribute(a,source.getAttribute(a));document.querySelectorAll('[data-gallery]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));}));
