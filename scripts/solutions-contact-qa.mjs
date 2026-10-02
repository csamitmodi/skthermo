import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {routes} from '../src/data.js';
import {solutions} from '../src/data/industries.js';
const root='docs/qa/solutions-contact';await fs.mkdir(root,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage();const errors=[],result={browser:'Chrome',viewports:[],checks:[],errors};
page.on('pageerror',e=>errors.push(e.message));
const base='http://localhost:3006';
for(const lang of ['','/hi'])for(const width of [1440,1024,768,430,390,360])for(const route of ['/solutions','/contact']){
 await page.setViewportSize({width,height:1000});await page.goto(base+lang+route);await page.evaluate(()=>document.fonts.ready);
 assert.equal(await page.locator('h1').count(),1);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),lang+route+' overflow '+width);
 if(route==='/solutions'){assert.equal(await page.locator('.solution-visual-card').count(),8);const columns=await page.locator('.solution-visual-grid').evaluate(e=>getComputedStyle(e).gridTemplateColumns.split(' ').length);assert.equal(columns,width<768?1:2);}
 else{assert.equal(await page.locator('main a[href="tel:+919414015833"]').count(),4);assert.equal(await page.locator('main [name=name][required]').count(),1);assert.equal(await page.locator('main [name=company][required]').count(),0);}
 for(const image of await page.locator('main img').all()){await image.scrollIntoViewIfNeeded();await image.evaluate(img=>img.decode());assert(await image.evaluate(img=>img.naturalWidth>0));}
 await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:root+'/'+(lang?'hi':'en')+route.replace('/','-')+'-'+width+'.png',fullPage:true});
 result.viewports.push({lang:lang?'hi':'en',route,width});
}
await page.setViewportSize({width:1440,height:1000});
for(const route of ['/','/products/bagasse','/products/paper-cups','/products/sweets-packaging','/export','/custom-solutions','/solutions/sweets-confectionery']){
 await page.goto(base+route);const a=page.locator('.floating-contact .contact-whatsapp');const href=await a.getAttribute('href'),url=new URL(href);assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,'/919414015833');assert(url.searchParams.get('text').startsWith('Hello SK Thermoformers,\n'));assert(!/mithai|halwai/i.test(url.searchParams.get('text')));if(route==='/export')assert(url.searchParams.get('text').includes('international/export'));if(route==='/products/bagasse')assert(url.searchParams.get('text').includes('Bagasse'));if(route==='/custom-solutions')assert(url.searchParams.get('text').includes('custom branding'));assert.equal(await a.getAttribute('rel'),'noopener noreferrer');assert.equal(await page.locator('.floating-contact .contact-call').getAttribute('href'),'tel:+919414015833');
}
for(const prefix of ['','/hi']){const r=await page.request.get(base+prefix+'/solutions/mithai-halwai?source=legacy',{maxRedirects:0});assert.equal(r.status(),301);assert.equal(r.headers().location,prefix+'/solutions/sweets-confectionery?source=legacy');}
result.checks.push('Approved telephone and WhatsApp number, encoded contextual messages, safe external links, English/Hindi legacy redirects preserve query context');
await page.goto(base+'/solutions');for(const card of await page.locator('.solution-visual-card').all()){const href=await card.getAttribute('href');assert(routes.includes(href));assert.equal((await page.request.get(base+href)).status(),200);}
await page.locator('.solutions-end [data-quote]').click();assert(await page.locator('#rfq-modal').isVisible());assert.equal(await page.locator('#rfq-modal form').getAttribute('data-source'),'solutions');await page.keyboard.press('Escape');
await page.goto(base+'/contact');await page.locator('main a[href="#business-enquiry"]').first().click();const f=page.locator('main form');await f.locator('[name=name]').fill('QA Buyer');await f.locator('[name=email]').fill('qa@example.com');await f.locator('[name=category]').selectOption('sweets-packaging');await f.locator('[name=quantity]').fill('10000');await f.locator('[name=message]').fill('Confectionery packaging requirement');await f.locator('[name=consent]').check();await f.locator('[type=submit]').click();assert((await f.locator('.form-status').textContent()).includes('draft has not been sent'));const email=decodeURIComponent(await f.locator('[data-email-link]').getAttribute('href'));assert(email.includes('Sweets & Confectionery'));assert(email.includes('Source: /contact'));assert(!/mithai|halwai/i.test(email));
result.checks.push('Eight solution journeys, solutions RFQ source, Contact form and honest email-draft fallback retain category/quantity; no enquiry sent');
await page.setViewportSize({width:390,height:850});await page.goto(base+'/products/paper-cups');await page.locator('[data-add-enquiry]').first().click();const bar=page.locator('.mobile-contact-bar');assert(await bar.isVisible());assert(await page.locator('.mobile-enquiry-access').isVisible());const br=await bar.boundingBox(),er=await page.locator('.mobile-enquiry-access').boundingBox();assert(er.y+er.height<br.y,'Enquiry control overlaps contact bar');await page.locator('.mobile-contact-bar a:last-child').click();await page.waitForURL('**/rfq?product=paper-cups');await page.waitForFunction(()=>document.querySelector('main form [name=product]')?.value==='paper-cups');assert(new URL(page.url()).searchParams.get('product')==='paper-cups');assert.equal(await page.locator('main form [name=product]').inputValue(),'paper-cups');assert.equal(await page.locator('main form [name=category]').inputValue(),'cups-glasses');await page.locator('main form [name=name]').focus();assert(!(await bar.isVisible()));
await page.goto(base+'/solutions');await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.locator('.solution-scene img').first().evaluate(e=>getComputedStyle(e).transitionDuration),'0s');
result.checks.push('Mobile contact bar, preserved enquiry list, non-overlapping controls, context-prefilled RFQ, input-focus fallback and reduced motion');
for(const route of ['/industries','/manufacturing','/quality','/about','/export','/products']){await page.setViewportSize({width:1440,height:1000});await page.goto(base+route);await page.screenshot({path:root+'/audit-'+route.slice(1)+'.png',fullPage:true});}
// Check all static routes for public legacy wording, not compatibility aliases in data/search.
for(const route of routes){const response=await page.request.get(base+route);assert.equal(response.status(),200,route);const html=await response.text();const visible=html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<!--[\s\S]*?-->/g,'').replace(/<[^>]*>/g,'');assert(!/mithai|halwai/i.test(visible),route+' public legacy terminology');assert(!/mithai|halwai/i.test(html.match(/<title>[\s\S]*?<\/title>/)?.[0]||''));}
assert.equal(errors.length,0,errors.join('\n'));await fs.writeFile(root+'/results.json',JSON.stringify(result,null,2));await browser.close();console.log('Solutions / Contact / terminology QA passed.');
