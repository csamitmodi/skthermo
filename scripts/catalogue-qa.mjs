import { chromium } from '@playwright/test';
import { routes,products,categories } from '../src/data.js';
import { mkdir,writeFile } from 'node:fs/promises';
const browser=await chromium.launch({headless:true,channel:"msedge"});
const page=await browser.newPage();const errors=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
await mkdir('docs/qa/skp',{recursive:true});
for(const route of routes){const res=await page.goto('http://localhost:3001'+route);if(res.status()!==200)throw Error(route+' HTTP '+res.status());await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>{i.loading='eager';return i.decode().catch(()=>{});})));const broken=await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.naturalWidth).map(i=>i.src));if(broken.length)throw Error(route+' broken '+broken);}
for(const width of [1440,390]){
 await page.setViewportSize({width,height:1000});
 for(const route of ['/', '/products',...categories.map(c=>'/products/'+c.slug),...products.map(p=>'/products/'+p.slug)]){
  await page.goto('http://localhost:3001'+route);
  await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>{i.loading='eager';return i.decode();})));
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error('Overflow '+width+' '+route);
  if(['/','/products','/products/paper-cups','/products/food-containers'].includes(route))await page.screenshot({path:'docs/qa/skp/'+(route==='/'?'home':route.replaceAll('/','-'))+'-'+width+'.png',fullPage:true});
 }
}
await page.goto('http://localhost:3001/products');await page.locator('#search').fill('printed');if(await page.locator('.catalog-products .product-card:visible').count()!==1)throw Error('Search');await page.locator('#reset-filters').click();await page.locator('#material').selectOption('Plastic');if(await page.locator('.catalog-products .product-card:visible').count()!==3)throw Error('Material');
await page.goto('http://localhost:3001/products/paper-cups');await page.getByRole('button',{name:'Request a product quote',exact:true}).click();if(await page.locator('#rfq-modal select[name=product]').inputValue()!=='paper-cups')throw Error('Quote context');await page.getByRole('button',{name:'Close enquiry'}).click();
await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'Open navigation'}).click();if(!await page.locator('#mobile-nav').isVisible())throw Error('Mobile navigation');
if(errors.length)throw Error(errors.join('\n'));
await writeFile('docs/qa/skp/results.json',JSON.stringify({routes:routes.length,viewports:[1440,390],missingImages:0,consoleErrors:errors,overflow:0,search:'passed',materialFilter:'passed',quoteContext:'passed',mobileNavigation:'passed'},null,2));
await browser.close();console.log('Browser QA passed: '+routes.length+' routes, desktop/mobile, assets, filtering, quote context and navigation.');

