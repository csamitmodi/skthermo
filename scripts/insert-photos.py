from pathlib import Path
p=Path('src/data.js');s=p.read_text(encoding='utf-8');s+='''
// Recovered from SK's existing product pages. Exact current specifications require confirmation.
const productPhotos={
 'printed-paper-cups':'printed-paper-cups',
 'disposable-juice-glass':'disposable-juice-glass',
 'water-plastic-glass':'water-plastic-glass',
 'plastic-cups':'plastic-cups',
 '100ml-tea-cup':'100ml-tea-cup'
};
for(const product of products){const photo=productPhotos[product.slug];product.image=photo?'/assets/products/'+photo+'.jpg':null;product.imageSource=photo?company.source:null;}
const categoryPhotos={'cups-glasses':'disposable-juice-glass','thermoformed-products':'water-plastic-glass','custom-products':'printed-paper-cups'};
for(const category of categories){const photo=categoryPhotos[category.slug];category.image=photo?'/assets/products/'+photo+'.jpg':null;}
export const imagery={hero:'/assets/products/100ml-tea-cup.jpg',custom:'/assets/products/printed-paper-cups.jpg'};
''';p.write_text(s,encoding='utf-8')
p=Path('src/render.js');s=p.read_text(encoding='utf-8');s=s.replace('nav,pages,routes}', 'nav,pages,routes,imagery}')
s=s.replace("const heading=", '''const photo=(src,alt,priority=false)=>`<img class="actual-product-photo" src="${src}" alt="${esc(alt)}" width="1280" height="1000" loading="${priority?'eager':'lazy'}" decoding="async" ${priority?'fetchpriority="high"':''}>`;
const heading=''')
s=s.replace('${art(p.visual)}${p.customizable?', '${p.image?photo(p.image,p.name+" — image from SK’s existing website"):art(p.visual)}${!p.image?\'<span class="image-label">Product illustration</span>\':\'\'}${p.customizable?')
s=s.replace('${art(c.visual)}<span class="number">', '${c.image?photo(c.image,c.name+" — range image from SK’s existing website"):art(c.visual)}${!c.image?\'<span class="image-label">Product illustration</span>\':\'\'}<span class="number">')
s=s.replace("${art('printed','hero-product')}", '${photo(imagery.hero,"Paper cup visual from SK’s existing website",true)}')
s=s.replace('Product illustration ? not a product photograph', 'Image from SK’s existing website')
s=s.replace("${art('printed')}<span>YOUR IDENTITY.", '${photo(imagery.custom,"Printed cups from SK’s existing website")}<span>YOUR IDENTITY.')
s=s.replace('${art(p.visual)}<p class="caption">Product illustration. Request actual photographs and samples.</p>', '${p.image?photo(p.image,p.name,true):art(p.visual)}<p class="caption">${p.image?"Image from SK’s existing website. Historical image text is not a current specification; confirm appearance and suitability with the team.":"Product illustration. Request actual photographs and samples."}</p>')
# ASCII question marks were introduced by PowerShell encoding. Preserve JS ternaries and URL queries.
s=s.replace('>?</span>', '>&#8599;</span>').replace('<span>?</span>', '<span>&#8599;</span>').replace(' ↗',' &#8599;')
s=s.replace(' ?</a>', ' &#8599;</a>').replace(' ?</h3>', ' &#8599;</h3>').replace(' ?</button>', ' &#8599;</button>')
s=s.replace('Products <span>?</span>', 'Products <span>&#8964;</span>').replace('More ?</button>', 'More &#8964;</button>').replace('aria-label="Close enquiry">?</button>', 'aria-label="Close enquiry">&times;</button>').replace('aria-controls="mobile-nav">?</button>', 'aria-controls="mobile-nav">&#9776;</button>')
s=s.replace('MATERIAL ? FORM ? FINISH','MATERIAL &rarr; FORM &rarr; FINISH').replace('INDIA ? YOUR DESTINATION','INDIA &rarr; YOUR DESTINATION').replace('<div class="globe">+</div>','<div class="globe">+</div>').replace('>Open email app ?</a>','>Open email app &#8599;</a>').replace('Call our team ?</a>','Call our team &#8599;</a>')
s=s.replace('<span>? ${new Date()', '<span>&copy; ${new Date()').replace('Khairthal ? Alwar ? Rajasthan','Khairthal &middot; Alwar &middot; Rajasthan')
p.write_text(s,encoding='utf-8')
p=Path('src/styles.css');s=p.read_text(encoding='utf-8');s+='''
.actual-product-photo{display:block;width:100%;height:100%;object-fit:contain;background:#f3f2ed}.product-image .actual-product-photo,.category-visual .actual-product-photo{transition:transform .35s}.product-image:hover .actual-product-photo,.category-card:hover .actual-product-photo{transform:scale(1.03)}.image-label{position:absolute;bottom:8px;left:10px;font-size:8px;color:#647179;background:#ffffffe8;padding:2px 6px}.hero-visual>.actual-product-photo{position:absolute;inset:0;object-fit:cover}.hero-visual .visual-label{z-index:2;background:#ffffffed;padding:8px;color:#142e3b}.hero-visual .visual-note{background:#ffffffed;padding:14px;bottom:42px}.hero-visual .illustration-note{background:#ffffffed;padding:4px 8px;color:#142e3b}.brand-visual>.actual-product-photo{height:auto;aspect-ratio:1.3;object-fit:contain}.detail-art>.actual-product-photo{height:auto;max-height:540px;object-fit:contain}.detail-art .caption{padding-top:15px}
''';p.write_text(s,encoding='utf-8')
