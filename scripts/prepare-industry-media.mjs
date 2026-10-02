import sharp from 'sharp';
import {mkdir,writeFile} from 'node:fs/promises';
import {applicationMedia} from '../src/data/applicationMedia.js';
const source='src/assets/skp-products/skp-industries-visual-reference.png.png';
// Rectangles visually checked to exclude embedded headings, descriptions, CTAs and neighbouring borders.
const crops={hero:{left:760,top:0,width:766,height:219},hotels:{left:790,top:237,width:219,height:242},events:{left:285,top:498,width:225,height:244},'corporate-buyers':{left:1330,top:498,width:195,height:244},retail:{left:295,top:764,width:215,height:230},'wholesalers-distributors':{left:795,top:762,width:214,height:232}};
await mkdir('src/assets/industries/derived',{recursive:true});await mkdir('public/assets/industries',{recursive:true});const media={};
for(const [key,crop] of Object.entries(crops)){const widths=[160,320,640,crop.width].filter(w=>w<=crop.width);const variants=[];
 await sharp(source).extract(crop).webp({quality:92,effort:6}).toFile(`src/assets/industries/derived/industry-${key}.webp`);
 for(const width of [...new Set(widths)]){await sharp(source).extract(crop).resize({width,withoutEnlargement:true}).webp({quality:92,effort:6}).toFile(`public/assets/industries/industry-${key}-${width}.webp`);variants.push(`/assets/industries/industry-${key}-${width}.webp ${width}w`);}
 media[key]={source,crop,status:'reference-crop',width:crop.width,height:crop.height,src:`/assets/industries/industry-${key}-${crop.width}.webp`,srcset:variants.join(', '),position:'center'};
}
// Existing clean application scenes take priority over smaller reference crops where they accurately match.
for(const [key,application] of [['restaurants-qsr','restaurants-qsr'],['catering','catering-events'],['institutional-buyers','institutional-foodservice']])media[key]={...applicationMedia[application],status:'application-crop',position:'center'};
await writeFile('src/data/industryMedia.js','// Representative industry context only; never documentary evidence of SK facilities or customers.\nexport const industryMedia='+JSON.stringify(media,null,2)+';\n');
