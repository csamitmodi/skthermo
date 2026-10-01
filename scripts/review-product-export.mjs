import {readFile,writeFile,stat} from 'node:fs/promises';import sharp from 'sharp';
const root='docs/qa/product-export';const result=JSON.parse(await readFile(root+'/results.json','utf8'));
for(let group=0;group<Math.ceil(result.pages.length/12);group++){
 const rows=result.pages.slice(group*12,group*12+12);const inputs=[];
 for(const [i,row] of rows.entries()){const index=group*12+i;const thumb=await sharp(`${root}/route-${index}.png`).resize(310,510,{fit:'inside',background:'#fff'}).toBuffer();inputs.push({input:thumb,left:i%4*330,top:Math.floor(i/4)*550+30});const label=Buffer.from(`<svg width="320" height="28" xmlns="http://www.w3.org/2000/svg"><text x="5" y="19" font-family="Arial" font-size="11" fill="#202020">${index}: ${row.route.replaceAll('&','&amp;')}</text></svg>`);inputs.push({input:label,left:i%4*330,top:Math.floor(i/4)*550});}
 await sharp({create:{width:1320,height:1650,channels:3,background:'#e4e2dc'}}).composite(inputs).jpeg({quality:85}).toFile(`${root}/sheet-${group}.jpg`);
}
console.log('Prepared labelled review sheets for every route.');
