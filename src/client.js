import {initLanguage,basePath,languagePath,routeLanguage} from './i18n.js';
import {initPlatform} from './platformClient.js';
import {submitEnquiry} from './enquiry.js';
const config=JSON.parse(document.querySelector('#site-config').textContent);
const products=config.products;
const platformClient=initPlatform(config);
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
function setProduct(f,slug){const p=products.find(x=>x.slug===slug);f.elements.product.value=p?.slug||'';if(p){f.elements.category.value=p.category;f.elements.size.value=p.capacity||'';}filterProductOptions(f);const preview=f.querySelector('.rfq-product-preview');if(preview){preview.replaceChildren();preview.hidden=!p;if(p){if(p.image){const img=document.createElement('img');img.src=p.image;img.alt=p.name;img.width=160;img.height=100;preview.append(img);}const label=document.createElement('span');label.textContent=p.name;preview.append(label);}}}
function resetResult(f){f.querySelector('.form-status').textContent='';f.querySelector('.email-result').hidden=true;}
function filterProductOptions(f){for(const option of f.elements.product.options){if(!option.value)continue;const p=products.find(p=>p.slug===option.value);option.hidden=option.value.endsWith('-enquiry')||Boolean(f.elements.category.value&&p?.category!==f.elements.category.value);}}
document.querySelectorAll('[data-quote]').forEach(b=>b.addEventListener('click',()=>{const f=modal.querySelector('form');f.reset();setProduct(f,b.dataset.quote);if(b.dataset.category)f.elements.category.value=b.dataset.category;filterProductOptions(f);f.elements.enquiryType.value=b.dataset.kind||'Domestic bulk';if([...f.elements.pathway.options].some(o=>o.value===b.dataset.kind))f.elements.pathway.value=b.dataset.kind;modal.querySelector('#rfq-title').textContent=products.find(p=>p.slug===b.dataset.quote)?.name||'Discuss your requirement.';resetResult(f);quoteOpener=b;modal.showModal();document.body.classList.add('modal-open');}));
modal.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('close',()=>{document.body.classList.remove('modal-open');quoteOpener?.focus();});
modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
document.querySelectorAll('[data-lead-form]').forEach(f=>{
 let draft='';const status=f.querySelector('.form-status');
 f.addEventListener('input',()=>resetResult(f));
 f.elements.pathway.addEventListener('change',()=>f.elements.enquiryType.value=f.elements.pathway.value);
 f.elements.product.addEventListener('change',()=>setProduct(f,f.elements.product.value));
 f.elements.category.addEventListener('change',()=>{setProduct(f,'');f.elements.size.value='';filterProductOptions(f);resetResult(f);});
 f.addEventListener('submit',async e=>{
  e.preventDefault();if(!f.reportValidity()||f.elements.website.value)return;
  const file=f.elements.artwork.files[0];if(file&&(file.size>5*1024*1024||! /\.(pdf|png|jpe?g)$/i.test(file.name))){status.textContent='Select a PDF, PNG or JPG smaller than 5 MB.';status.focus();return;}
  const data=new FormData(f);const p=products.find(x=>x.slug===data.get('product'));const subject=`SKP ${data.get('enquiryType')} - ${p?.name||data.get('company')||data.get('name')}`;
  const labels={enquiryType:'Enquiry type',name:'Name',company:'Company',email:'Email',phone:'Phone',country:'Country',city:'State / city',buyerType:'Buyer type',category:'Product category',product:'Product',size:'Size / capacity',quantity:'Estimated quantity',customization:'Customization',destination:'Destination port / city',branding:'Custom branding requirement',shippingAddress:'Shipping city / address',courierPreference:'Courier preference / account',message:'Message'};
  draft=[subject,...Object.entries(labels).filter(([k])=>data.get(k)).map(([k,label])=>`${label}: ${k==='product'?(p?.name||data.get(k)):k==='category'?(config.categories[data.get(k)]||data.get(k)):data.get(k)}`),file?`Attachment: ${file.name} (attach manually)`:''].filter(Boolean).join('\n');
  const selected=platformClient.payload(f);if(selected){data.set('items',JSON.stringify(selected.items));draft+='\n\nSelected Product Families\n'+selected.items.map((x,i)=>`${i+1}. ${x.name} (${config.categories[x.category]})${x.quantity?' - Quantity: '+x.quantity:''}${x.notes?' - '+x.notes:''}`).join('\n');}
  const submit=f.querySelector('[type=submit]');submit.disabled=true;status.textContent=config.leadEndpoint?'Sending your enquiry...':'Preparing your enquiry...';
  try{const result=await submitEnquiry(data,{endpoint:config.leadEndpoint,email:config.email,subject,draft});if(result.mode==='email'){f.querySelector('[data-email-link]').href=result.href;f.querySelector('.email-result').hidden=false;status.textContent='Continue in your email app to send this enquiry. Your draft has not been sent.';}else{f.reset();status.textContent='Your enquiry was received.';}}catch{status.textContent='Delivery could not be confirmed. Contact the team by email or phone.';}finally{submit.disabled=false;status.focus();}
 });
 f.querySelector('[data-download-enquiry]').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([draft],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='skp-enquiry.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
});
const params=new URLSearchParams(location.search);if(['/rfq','/export'].includes(basePath(location.pathname))){const f=document.querySelector('main form');const kind=params.get('kind');if(kind&&[...f.elements.pathway.options].some(o=>o.value===kind)){f.elements.pathway.value=kind;f.elements.enquiryType.value=kind;}if(params.get('category')&&config.categories[params.get('category')])f.elements.category.value=params.get('category')==='plates-trays'?'plates':params.get('category');if(params.get('product'))setProduct(f,params.get('product'));}
const search=document.querySelector('#search');if(search){
 const ids=['search','category','material','application','size','custom'];const filterEls=ids.map(id=>document.getElementById(id));
 let resultPage=0;const pageSize=12,pagination=document.querySelector('.catalog-pagination');
 const update=(resetPage=true)=>{if(resetPage)resultPage=0;const [query,cat,mat,app,size,custom]=filterEls.map(el=>el?.value.toLowerCase().trim()||'');const cards=[...document.querySelectorAll('.catalog-products .product-card')];const matches=cards.filter(card=>query.split(/\s+/).every(term=>card.dataset.name.includes(term))&&(!cat||(cat==='custom-products'?card.dataset.custom==='true':card.dataset.categories.split(' ').includes(cat)))&&(!mat||card.dataset.material.toLowerCase()===mat)&&(!app||card.dataset.application.toLowerCase()===app)&&(!size||card.dataset.size.toLowerCase()===size)&&(!custom||card.dataset.custom===custom));const pages=Math.ceil(matches.length/pageSize);resultPage=Math.min(resultPage,Math.max(0,pages-1));cards.forEach(card=>card.hidden=true);matches.slice(resultPage*pageSize,(resultPage+1)*pageSize).forEach(card=>card.hidden=false);document.querySelector('#result-count').textContent=`${matches.length} ${matches.length===1?'product family':'product families'}`;document.querySelector('#no-results').hidden=matches.length>0;pagination.hidden=pages<=1;document.querySelector('#result-page').textContent=`Page ${resultPage+1} of ${pages}`;document.querySelector('#previous-results').disabled=resultPage===0;document.querySelector('#next-results').disabled=resultPage>=pages-1;};
 for(const [id,step] of [['previous-results',-1],['next-results',1]])document.getElementById(id).addEventListener('click',()=>{resultPage+=step;update(false);document.querySelector('.results-bar').scrollIntoView({block:'start'});});

 filterEls.filter(Boolean).forEach(el=>el.addEventListener('input',update));
 const clearFilters=()=>{filterEls.filter(Boolean).forEach(el=>el.value='');update();};document.querySelector('#reset-filters').addEventListener('click',clearFilters);document.querySelector('[data-clear-filters]')?.addEventListener('click',clearFilters);
 document.querySelector('#category').addEventListener('change',e=>{if(basePath(location.pathname)!=='/products')location.href=languagePath('/products'+(e.target.value?'/'+e.target.value:''),routeLanguage(location.pathname));});
 search.value=params.get('q')||'';update();
 const toggle=document.querySelector('.filter-toggle'),panel=document.querySelector('#filter-panel'),close=document.querySelector('.filter-close');let inert=[];
 function closeDrawer(){document.body.classList.remove('filters-open');toggle.setAttribute('aria-expanded','false');panel.removeAttribute('role');panel.removeAttribute('aria-modal');for(const [node,prior] of inert)node.inert=prior;inert=[];toggle.focus();}
 toggle.addEventListener('click',()=>{document.body.classList.add('filters-open');toggle.setAttribute('aria-expanded','true');panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');let current=panel;while(current.parentElement&&current.parentElement!==document.documentElement){for(const node of current.parentElement.children){if(node!==current&&!['SCRIPT','STYLE'].includes(node.tagName)){inert.push([node,node.inert]);node.inert=true;}}current=current.parentElement;}search.focus();});
 close.addEventListener('click',closeDrawer);
 panel.addEventListener('keydown',e=>{if(!document.body.classList.contains('filters-open'))return;if(e.key==='Escape'){e.preventDefault();closeDrawer();}if(e.key==='Tab'){const focusable=[...panel.querySelectorAll('button,input,select')].filter(e=>!e.disabled);const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
 addEventListener('resize',()=>{if(innerWidth>768&&document.body.classList.contains('filters-open'))closeDrawer();});
}
document.querySelectorAll('[data-gallery]').forEach(b=>b.addEventListener('click',()=>{const source=b.querySelector('img'),target=document.querySelector('.detail-art img');for(const a of ['src','srcset','width','height','alt'])target.setAttribute(a,source.getAttribute(a));document.querySelectorAll('[data-gallery]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));}));

// Native dialog supplies focus containment and inert background; explicit restore on close.
const catalogueModal=document.querySelector('#catalogue-modal');let catalogueOpener=null;
const stage=catalogueModal.querySelector('.catalogue-stage'),slot=document.querySelector('#catalogue-image-slot'),zoom=document.querySelector('#catalogue-zoom'),catalogueStatus=catalogueModal.querySelector('.catalogue-load-status');
function openCatalogue(key,title,opener){const src=config.catalogues[key];if(!src)return;catalogueOpener=opener;document.querySelector('#catalogue-title').textContent=title;stage.classList.remove('zoomed');zoom.textContent='Zoom in';zoom.setAttribute('aria-pressed','false');slot.replaceChildren();const img=document.createElement('img');img.id='catalogue-image';img.width=1536;img.height=1024;img.alt=title+' - complete range illustration';img.decoding='async';catalogueStatus.textContent='Loading range...';img.onload=()=>catalogueStatus.textContent='';img.onerror=()=>catalogueStatus.textContent='The catalogue could not be loaded. Close this view and contact the team.';img.src=src;slot.append(img);catalogueModal.showModal();document.body.classList.add('modal-open');catalogueModal.querySelector('.catalogue-close').focus();}
document.querySelectorAll('[data-catalogue]').forEach(b=>b.addEventListener('click',()=>openCatalogue(b.dataset.catalogue,b.dataset.catalogueTitle,b)));
catalogueModal.querySelector('.catalogue-close').addEventListener('click',()=>catalogueModal.close());
catalogueModal.addEventListener('close',()=>{document.body.classList.remove('modal-open');slot.replaceChildren();catalogueOpener?.focus();});
zoom.addEventListener('click',()=>{const enabled=stage.classList.toggle('zoomed');zoom.textContent=enabled?'Fit to screen':'Zoom in';zoom.setAttribute('aria-pressed',String(enabled));stage.scrollTop=0;stage.scrollLeft=0;});
const catalogueSelect=document.querySelector('#reference-catalogue');document.querySelector('#open-reference-catalogue')?.addEventListener('click',e=>openCatalogue(catalogueSelect.value,catalogueSelect.selectedOptions[0].textContent,e.currentTarget));

// Keep Tab navigation within dialog controls, including browser focus-wrap edge cases.
for(const dialog of [modal,catalogueModal])dialog.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const controls=[...dialog.querySelectorAll('a[href],button,input,select,textarea,[tabindex]')].filter(el=>!el.disabled&&el.tabIndex>=0&&el.getClientRects().length);const first=controls[0],last=controls.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});

initLanguage();
