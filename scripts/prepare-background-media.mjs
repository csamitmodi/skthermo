import sharp from 'sharp';import {mkdir,writeFile} from 'node:fs/promises';
const industrySource='src/assets/skp-products/skp-industries-people-visual-reference.png.png';
const definitions=[
 ['restaurants-qsr',industrySource,{left:16,top:346,width:392,height:178}],
 ['hotels',industrySource,{left:421,top:346,width:382,height:178}],
 ['catering',industrySource,{left:817,top:346,width:380,height:178}],
 ['events',industrySource,{left:16,top:676,width:392,height:175}],
 ['institutional-buyers',industrySource,{left:422,top:676,width:382,height:175}],
 ['corporate-buyers',industrySource,{left:817,top:676,width:380,height:175}],
 ['retail',industrySource,{left:17,top:1003,width:581,height:143}],
 ['wholesalers-distributors',industrySource,{left:614,top:1003,width:583,height:143}],
 ['contact','src/assets/skp-products/skp-contact-hero-reference.png.png',{left:650,top:126,width:1022,height:481}]
];
await mkdir('public/assets/backgrounds',{recursive:true});await mkdir('src/assets/industries/derived',{recursive:true});const media={};
for(const [key,source,crop] of definitions){const variants=[],widths=[240,360,640,960,crop.width].filter(w=>w<=crop.width);
 for(const width of [...new Set(widths)]){await sharp(source).extract(crop).resize({width,withoutEnlargement:true}).webp({quality:91,effort:6}).toFile(`public/assets/backgrounds/${key}-${width}.webp`);variants.push(`/assets/backgrounds/${key}-${width}.webp ${width}w`);}
 media[key]={source,crop,status:'representative-context',width:crop.width,height:crop.height,src:`/assets/backgrounds/${key}-${crop.width}.webp`,srcset:variants.join(', '),heroMode:key==='contact'?'cover':'bounded-reference',position:'center',mobilePosition:'center',dedicatedHeroRequired:key!=='contact'};
}
await writeFile('src/data/backgroundMedia.js','// Contextual imagery is not evidence of SK staff, premises, customers or specifications. Original files are unchanged.\nexport const backgroundMedia='+JSON.stringify(media,null,2)+';\n');
