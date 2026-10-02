import {company} from '../data/company.js';
import {products,categories} from '../data/products.js';
import {solutions} from '../data/industries.js';
import {esc,icon} from './ui.js';
export const contactIcon=kind=>`<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${kind==='phone'?'<path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2-2-5Z"/>':'<path d="M20.5 11.6a8.6 8.6 0 0 1-12.8 7.5L3 20.5l1.4-4.7A8.6 8.6 0 1 1 20.5 11.6Z"/><path d="m8.2 7.5-1 .8c.1 4 3.1 7 7.1 7.2l1-1.1-2.6-1.4-.9.8a7 7 0 0 1-2.5-2.5l.8-.9-1.4-2.9Z"/>'}</svg>`;
export function whatsappMessage(path='/'){
 if(path==='/products/100ml-tea-cup')return 'Hello SK Thermoformers,\nI would like to discuss your Tea Cup Range.';
 if(path==='/export')return 'Hello SK Thermoformers,\nI would like to discuss an international/export requirement.';
 if(path==='/custom-solutions'||path==='/solutions/custom-branding')return 'Hello SK Thermoformers,\nI would like to discuss a custom branding/packaging requirement.';
 const slug=path.split('/').at(-1),p=path.startsWith('/products/')?products.find(p=>p.slug===slug)||categories.find(c=>c.slug===slug):path.startsWith('/solutions/')?solutions.find(s=>s.slug===slug):null;
 return p?`Hello SK Thermoformers,\nI would like to enquire about ${p.name}.`:'Hello SK Thermoformers,\nI would like to discuss a foodservice packaging requirement.';
}
export const whatsappUrl=path=>'https://wa.me/'+company.whatsapp+'?text='+encodeURIComponent(whatsappMessage(path));
export function contactActions({path='/',compact=false}={}){return `<a class="${compact?'text-link':'button outline'} contact-call" href="tel:+919414015833" data-event="call_click" aria-label="Call SK Thermoformers">${contactIcon('phone')} Call Us</a>${company.whatsapp?`<a class="${compact?'text-link':'button outline'} contact-whatsapp" href="${esc(whatsappUrl(path))}" target="_blank" rel="noopener noreferrer" data-event="whatsapp_click" aria-label="Chat with SK Thermoformers on WhatsApp">${contactIcon('whatsapp')} WhatsApp</a>`:''}`;}
export function contactControls(path){const enquire=path==='/contact'?'#business-enquiry':path.startsWith('/products/')?'/rfq?'+(products.some(p=>'/products/'+p.slug===path)?'product=':'category=')+encodeURIComponent(path.split('/').at(-1)):path==='/export'?'/export#export-enquiry':'/rfq';return `<nav class="floating-contact" aria-label="Direct contact">${contactActions({path,compact:true})}</nav><nav class="mobile-contact-bar" aria-label="Contact actions">${contactActions({path,compact:true})}<a href="${enquire}" data-event="rfq_click">${icon()} Enquire</a></nav>`;}
