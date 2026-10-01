// Compatibility entry point for rendering, builds and existing tests.
import {company} from './data/company.js';import {categories,products} from './data/products.js';import {industries,solutions} from './data/industries.js';import {pages} from './data/pages.js';
export {company} from './data/company.js';export {categories,categoryDefinitions,products,primaryCategories,enquiryCategories,listedProducts} from './data/products.js';export {industries,markets,solutions} from './data/industries.js';export {pages} from './data/pages.js';
export const nav=[['Products','/products'],['Solutions','/solutions'],['Industries','/industries'],['Manufacturing','/manufacturing'],['Export','/export'],['Quality','/quality'],['About','/about'],['Contact','/contact']];
export const routes=['/','/products','/solutions','/industries',...Object.keys(pages).map(s=>'/'+s),'/contact','/rfq','/privacy-policy','/terms-and-conditions','/disclaimer',...categories.map(c=>'/products/'+c.slug),...products.map(p=>'/products/'+p.slug),...industries.map(i=>'/industries/'+i.slug),...solutions.map(s=>'/solutions/'+s.slug)];
export const process=['Requirement','Specification','Sample review if applicable','Commercial confirmation','Production / supply'];
export const imagery={hero:'hero',custom:'custom-printed',factory:company.media.factory};
