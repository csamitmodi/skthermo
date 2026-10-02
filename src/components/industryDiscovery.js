import {markets} from '../data/industries.js';
import {industryMedia} from '../data/industryMedia.js';
import {esc,icon,cta} from './ui.js';
const copy={
 'restaurants-qsr':['Packaging formats for dine-in support, takeaway and quick-service requirements.','Food packaging in a restaurant and quick-service setting'],
 hotels:['Foodservice tableware and packaging for hospitality requirements.','Tableware in a hotel dining environment'],
 catering:['Tableware and food packaging for catering and organised meal service.','Plates, bowls and food containers at a catering buffet'],
 events:['Disposable foodservice solutions for functions and event requirements.','Tableware and cutlery in an event dining setting'],
 'institutional-buyers':['Packaging formats for organised and institutional meal service.','Meal trays and containers in an institutional foodservice environment'],
 'corporate-buyers':['Foodservice and pantry packaging for corporate requirements.','Cups and service products in an office pantry environment'],
 retail:['A broad range of foodservice packaging formats for business requirements.','Foodservice packaging displayed for business selection'],
 'wholesalers-distributors':['Explore product ranges for distribution and bulk sourcing requirements.','Cartons and product stacks illustrating a distribution environment']
};
function visual(key,alt,hero=false){const a=industryMedia[key];return `<img src="${a.src}" srcset="${a.srcset}" sizes="${hero?'(max-width:767px) 90vw, 48vw':'(max-width:767px) 280px, (max-width:1024px) 230px, 220px'}" width="${a.width}" height="${a.height}" loading="${hero?'eager':'lazy'}" decoding="async" ${hero?'fetchpriority="high"':''} alt="${esc(alt)}">`;}
export function industryDiscovery(){return `<section class="wrap industry-discovery-hero"><div><p class="eyebrow">INDUSTRIES WE SERVE</p><h1>Packaging solutions across foodservice industries.</h1><p class="lede">Explore packaging requirements across restaurants, hospitality, catering, institutions, retail and distribution.</p></div><figure>${visual('hero','Foodservice tableware and packaging in a hospitality environment',true)}</figure></section><section class="wrap industry-discovery-section" aria-label="Explore industries"><div class="industry-visual-grid">${markets.map(m=>`<a class="industry-visual-card ${industryMedia[m.slug].status==='reference-crop'?'industry-portrait-scene':''}" href="/industries/${m.slug}"><div class="industry-card-scene">${visual(m.slug,copy[m.slug][1])}</div><div class="industry-card-content"><h2>${esc(m.name)}</h2><p>${copy[m.slug][0]}</p><span class="text-link">Explore relevant products ${icon()}</span></div></a>`).join('')}</div></section>${cta('Tell us how your business serves food.','Share your application, product formats and quantities. We can discuss the details around your requirement.')}`;}
