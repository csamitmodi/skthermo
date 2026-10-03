import sharp from 'sharp';
import {mkdir} from 'node:fs/promises';
const root='public/assets/leadership';
await mkdir(root,{recursive:true});
for(const name of ['nitesh','gaurav']){
 const source=`src/assets/skp-products/${name}-data-cofounder.webp.png`;
 for(const width of [400,640,960])for(const format of ['webp','avif'])await sharp(source).resize(width,Math.round(width*1.25),{fit:'cover',position:name==='nitesh'?'centre':'centre'}).toFormat(format,{quality:format==='webp'?86:65}).toFile(`${root}/${name}-${width}.${format}`);
}
const group='src/assets/skp-products/data-group-industries-background.png.png';
for(const width of [960,1440,1983])for(const format of ['webp','avif'])await sharp(group).resize(width).toFormat(format,{quality:format==='webp'?85:62}).toFile(`${root}/group-${width}.${format}`);
// Industry imagery only on narrow screens: omit the artwork's small embedded labels.
for(const width of [480,800])for(const format of ['webp','avif'])await sharp(group).extract({left:800,top:270,width:1180,height:340}).resize(width).toFormat(format,{quality:format==='webp'?86:65}).toFile(`${root}/group-mobile-${width}.${format}`);
console.log('Leadership portraits and Group artwork prepared in WebP and AVIF.');
