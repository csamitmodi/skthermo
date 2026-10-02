import sharp from 'sharp';import {mkdir,writeFile} from 'node:fs/promises';
const source='src/assets/skp-products/skp-homepage-hero.png.png';
const crops={desktop:{left:860,top:0,width:1123,height:793},mobile:{left:900,top:125,width:1083,height:668}};
await mkdir('public/assets/home-hero',{recursive:true});
const media={source,crops,status:'range-level'};
for(const [role,crop] of Object.entries(crops)){
 const widths=role==='desktop'?[640,960,1123]:[480,720,1083];
 for(const width of widths)await sharp(source).extract(crop).resize({width,withoutEnlargement:true}).webp({quality:90,effort:6}).toFile(`public/assets/home-hero/${role}-${width}.webp`);
 media[role]={width:crop.width,height:crop.height,src:`/assets/home-hero/${role}-${widths.at(-1)}.webp`,srcset:widths.map(w=>`/assets/home-hero/${role}-${w}.webp ${w}w`).join(', ')};
}
await writeFile('src/data/homeHeroMedia.js','// Product-only crops. Original artwork and its embedded interface remain untouched.\nexport const homeHeroMedia='+JSON.stringify(media,null,2)+';\n');
