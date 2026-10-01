import sharp from 'sharp';import {readFile,writeFile,stat} from 'node:fs/promises';
const audit=JSON.parse(await readFile('docs/qa/refinement-before/audit.json','utf8'));const entries=audit.assets.filter(x=>x.path.includes('/library/')||x.path.includes('/archive/'));
const inputs=await Promise.all(entries.map(async(a,i)=>({input:await sharp(a.path).resize(240,175,{fit:'contain',background:'#fff'}).toBuffer(),left:(i%4)*260,top:Math.floor(i/4)*195})));
await sharp({create:{width:1040,height:Math.ceil(entries.length/4)*195,channels:3,background:'#e8e8e8'}}).composite(inputs).jpeg().toFile('docs/qa/refinement-before/legacy-assets.jpg');
console.log('Reviewed asset inventory: '+audit.assets.length+' source and derivative images. Runtime JS bytes: '+(await stat('dist/src/client.js')).size+'; CSS bytes: '+(await stat('dist/src/styles.css')).size);
