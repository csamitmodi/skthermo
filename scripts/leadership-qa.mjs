import {chromium} from '@playwright/test';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
const root='docs/qa/leadership';await mkdir(root,{recursive:true});const results=[];
for(const width of [1440,430,390,360]){
 await page.setViewportSize({width,height:1000});
 for(const route of ['/leadership','/about']){
 const response=await page.goto('http://localhost:3011'+route);assert.equal(response.status(),200);
 await page.locator('img').evaluateAll(images=>Promise.all(images.map(i=>{i.loading='eager';return i.decode();})));
 assert.equal(await page.locator('main h1').count(),1);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 if(route==='/leadership'){
 for(const id of ['nitesh','gaurav']){const image=await page.locator('#'+id+' .leader-portrait').boundingBox();const copy=await page.locator('#'+id+' .leader-copy').boundingBox();if(width<800)assert(image.y<copy.y);else assert(id==='nitesh'?image.x<copy.x:image.x>copy.x);}
 await page.locator('#nitesh summary').click();assert(await page.locator('#nitesh details').getAttribute('open')!==null);await page.locator('#nitesh summary').click();
 }
 await page.screenshot({path:`${root}/${route.slice(1)}-${width}.png`,fullPage:true});
 results.push({width,route,status:response.status(),overflow:false});
 }
}
assert.equal(errors.length,0,errors.join('\n'));await writeFile(root+'/results.json',JSON.stringify({results,errors},null,2));await browser.close();console.log('Leadership and About: desktop, 430/390/360px, image decoding, ordering and profile expansion passed.');
