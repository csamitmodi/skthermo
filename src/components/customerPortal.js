import {platform,accountRoutes,approvedReviews,reviewSummary} from '../data/platform.js';
import {esc,link} from './ui.js';
export const portalPanels={
 '/account':{title:'Customer Account',empty:'Explore your enquiries, quotations and documents.',columns:[]},
 '/account/enquiries':{title:'My Enquiries',empty:'No enquiries yet.',columns:['number','createdAt','items','status','updatedAt']},
 '/account/quotations':{title:'Quotations',empty:'No quotations yet.',columns:['number','date','validUntil','amount','currency','status']},
 '/account/orders':{title:'Orders',empty:'No orders yet.',columns:['number','poReference','date','quantity','status','dispatch']},
 '/account/saved-products':{title:'Saved Products',empty:'No saved products yet.',columns:['productId']},
 '/account/documents':{title:'Documents',empty:'No documents yet.',columns:['name','type','createdAt']},
 '/account/reviews':{title:'Product Reviews',empty:'Reviews are available only for verified completed purchases.',columns:['productId','rating','title','date']},
 '/account/profile':{title:'Company Profile',empty:'Manage your business information through the secure customer service.',columns:['company','displayName','email','country']}
};
// Not registered in public routing, sitemap or navigation until real auth exists.
export function customerPortal(path,session,records=[]){if(!platform.authEnabled||!session||!accountRoutes.includes(path))return '';return `<section class="wrap section portal-shell"><aside><h2>Customer Account</h2>${accountRoutes.map(url=>link(url.split('/').at(-1),url)).join('')}</aside><div><h1>${esc(session.company||'Customer Account')}</h1>${records.length?'<p>Your records are available through the secure customer service.</p>':'<div class="empty-state"><h2>No records yet.</h2><p>Start by exploring the SKP product range.</p>'+link('Explore Products','/products')+'</div>'}</div></section>`;}
export function testimonials(){const rows=platform.testimonials.filter(t=>t.verified&&t.approved);if(!rows.length)return '';return `<section class="wrap section"><h2>Buyer Experiences</h2>${rows.map(t=>`<blockquote><p>${esc(t.text)}</p><footer>${esc(t.name)} · ${esc(t.company)}</footer></blockquote>`).join('')}</section>`;}
export function customerLogos(){const logos=platform.customerLogos.filter(x=>x.approved&&x.src);if(!logos.length)return '';return `<section class="wrap section"><h2>Customers</h2>${logos.map(x=>`<img src="${esc(x.src)}" alt="${esc(x.name)}" width="180" height="80" loading="lazy">`).join('')}</section>`;}
export function productReviews(productId){const summary=reviewSummary(productId);if(!summary)return '';return `<section class="product-reviews"><h2>Buyer Reviews</h2><p>${summary.average.toFixed(1)} / 5 · ${summary.count} reviews</p><div class="rating-distribution">${summary.distribution.map(x=>`<label>${x.rating} / 5 <meter min="0" max="${summary.count}" value="${x.count}">${x.count}</meter></label>`).join('')}</div>${approvedReviews(productId).map(r=>`<article><h3>${esc(r.title)}</h3><p>${esc(r.text)}</p><p>${esc(r.displayName)} · ${esc(r.company)} · ${esc(r.date)}</p></article>`).join('')}</section>`;}
