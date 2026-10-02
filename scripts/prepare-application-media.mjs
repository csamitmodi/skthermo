import sharp from 'sharp';
import {mkdir,writeFile} from 'node:fs/promises';
// Overview fallbacks isolate photography only. Replace each source centrally when dedicated scenes arrive.
const overview='src/assets/skp-products/skp-solutions-applications-overview.png.png';
const definitions=[
 ['solutionsHero',overview,{left:650,top:0,width:886,height:208}],
 ['beverage-service',overview,{left:270,top:220,width:482,height:180}],
 ['catering-events',overview,{left:1040,top:220,width:480,height:180}],
 ['institutional-foodservice',overview,{left:270,top:418,width:482,height:186}],
 ['custom-branding',overview,{left:1040,top:418,width:480,height:186}],
 ['takeaway-delivery',overview,{left:270,top:620,width:482,height:187}],
 ['bakery',overview,{left:1040,top:620,width:480,height:187}],
 ['sweets-confectionery',overview,{left:270,top:822,width:482,height:187}],
 ['restaurants-qsr',overview,{left:1040,top:822,width:480,height:187}],
 ['contact','src/assets/skp-products/skp-contact-consultation.webp.png',null]
];
await mkdir('public/assets/applications',{recursive:true});const media={};
for(const [id,source,crop] of definitions){const meta=await sharp(source).metadata();const width=crop?.width||meta.width,height=crop?.height||meta.height;const widths=[320,480,800,1200].filter(w=>w<width);widths.push(width);const variants=[];
 for(const w of [...new Set(widths)]){let pipeline=sharp(source);if(crop)pipeline=pipeline.extract(crop);await pipeline.resize({width:w,withoutEnlargement:true}).webp({quality:90,effort:6}).toFile(`public/assets/applications/${id}-${w}.webp`);variants.push(`/assets/applications/${id}-${w}.webp ${w}w`);}
 media[id]={source,crop,status:id==='contact'?'representative-consultation':'overview-fallback',width,height,src:`/assets/applications/${id}-${width}.webp`,srcset:variants.join(', '),position:'center'};
}
await writeFile('src/data/applicationMedia.js','// Application scenes are range visuals, not SKU or facility evidence. Original artwork is untouched.\nexport const applicationMedia='+JSON.stringify(media,null,2)+';\n');
