import sharp from 'sharp';
import fs from 'node:fs/promises';
const source='src/assets/skp-products/skp-tea-cup-range-reference.png.png';
const crop={left:760,top:120,width:912,height:427},widths=[320,480,768,912];
await fs.mkdir('public/assets/product-scenes',{recursive:true});
for(const width of widths)await sharp(source).extract(crop).resize({width,withoutEnlargement:true}).webp({quality:91}).toFile(`public/assets/product-scenes/tea-cup-${width}.webp`);
const media={source,crop,status:'application-reference',src:'/assets/product-scenes/tea-cup-912.webp',srcset:widths.map(w=>`/assets/product-scenes/tea-cup-${w}.webp ${w}w`).join(', '),width:912,height:427,position:'center'};
await fs.writeFile('src/data/productSceneMedia.js','// Clean application artwork, never SKU evidence. Original remains untouched.\nexport const productSceneMedia='+JSON.stringify({teaCup:media},null,2)+';\n');
