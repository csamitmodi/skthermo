import sharp from 'sharp';import {mkdir,writeFile} from 'node:fs/promises';
const definitions=[['manufacturing','manufacturing-production',740],['customPrinting','custom-printing-private-label',730],['export','export-bulk-supply',630],['quality','quality-control',280],['foodservice','applications-foodservice',650]];
await mkdir('public/assets/site-media',{recursive:true});const media={};
for(const [key,file,left] of definitions){const source=`src/assets/skp-products/${file}.webppng.png`;const meta=await sharp(source).metadata();const crop={left,top:0,width:Math.min(1150,meta.width-left),height:meta.height};const entry={source,status:'representative',position:'center',mobilePosition:'center',width:meta.width,height:meta.height};
 for(const width of [640,960,1440])await sharp(source).resize({width,withoutEnlargement:true}).webp({quality:88,effort:6}).toFile(`public/assets/site-media/${key}-${width}.webp`);
 for(const width of [480,800])await sharp(source).extract(crop).resize({width,withoutEnlargement:true}).webp({quality:88,effort:6}).toFile(`public/assets/site-media/${key}-mobile-${width}.webp`);
 entry.src=`/assets/site-media/${key}-1440.webp`;entry.srcset=[640,960,1440].map(w=>`/assets/site-media/${key}-${w}.webp ${w}w`).join(', ');entry.mobile={crop,width:crop.width,height:crop.height,srcset:[480,800].map(w=>`/assets/site-media/${key}-mobile-${w}.webp ${w}w`).join(', ')};media[key]=entry;
}
await writeFile('src/data/siteMedia.js','// Visually reviewed representative AI imagery. Replace centrally with approved actual photographs.\nexport const siteMedia='+JSON.stringify(media,null,2)+';\n');
