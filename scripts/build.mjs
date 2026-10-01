import {mkdir,writeFile,cp} from 'node:fs/promises';
import {render} from '../src/render.js';
import {routes,company} from '../src/data.js';
await mkdir('dist',{recursive:true});await cp('src','dist/src',{recursive:true,filter:source=>!source.replaceAll('\\','/').includes('/assets/skp-products')});await cp('public','dist',{recursive:true});
for(const route of routes){const dir=route==='/'?'dist':`dist${route}`;await mkdir(dir,{recursive:true});await writeFile(`${dir}/index.html`,render(route));}
await writeFile('dist/404.html',render('/404'));
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${company.url}/sitemap.xml\n`);
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(r=>`<url><loc>${company.url}${r==='/'?'':r}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/_redirects','/about.php /about 301\n/contact.php /contact 301\n/infrastructure.php /manufacturing 301\n/gallery.php /manufacturing 301\n/blog.php /resources 301\n/product.php /products 301\n');
console.log(`Production build complete: ${routes.length} pre-rendered routes.`);
