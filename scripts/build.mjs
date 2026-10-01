import {mkdir,writeFile,cp,rm} from 'node:fs/promises';import path from 'node:path';import {render} from '../src/render.js';import {routes,company} from '../src/data.js';
const output=path.resolve('dist');if(output!==path.join(process.cwd(),'dist')||path.dirname(output)!==process.cwd())throw Error('Unexpected build output directory');
await rm(output,{recursive:true,force:true});await mkdir('dist/src',{recursive:true});
// Runtime uses one small module and serialized enquiry data. Keep source/reference archives in Git, not mobile payloads.
for(const file of ['client.js','styles.css'])await cp('src/'+file,'dist/src/'+file);
await cp('public','dist',{recursive:true,filter:source=>!/[\\/](archive|library)([\\/]|$)/.test(source)});
const host=process.env.SITE_URL||(process.env.VERCEL_PROJECT_PRODUCTION_URL?'https://'+process.env.VERCEL_PROJECT_PRODUCTION_URL:company.url);const baseUrl=host.replace(/\/$/,'');
for(const route of routes){const dir=route==='/'?'dist':`dist${route}`;await mkdir(dir,{recursive:true});await writeFile(`${dir}/index.html`,render(route,{baseUrl}));}
await writeFile('dist/404.html',render('/404',{baseUrl}));
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(r=>`<url><loc>${baseUrl}${r==='/'?'':r}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/_redirects','/about.php /about 301\n/contact.php /contact 301\n/infrastructure.php /manufacturing 301\n/gallery.php /manufacturing 301\n/blog.php /resources 301\n/product.php /products 301\n');
console.log(`Production build complete: ${routes.length} pre-rendered routes. SEO base: ${baseUrl}`);
