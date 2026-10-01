import {company} from './company.js';
import {categoryImages,productImages} from '../image-map.js';
// verified = product family listed in legacy company evidence. It does not imply in-house manufacturing.
export const categoryDefinitions=[
 ['cups-glasses','Cups & Glasses','Paper cups and plastic beverage formats.',true],
 ['plates','Plates','Paper tableware for catering and meal service.',true],
 ['bowls','Bowls','Paper and plastic bowls for foodservice enquiries.',true],
 ['cutlery','Cutlery','Disposable spoons and forks for your service format.',true],
 ['paper-products','Paper Products','Tissues, rolls and paper cup production inputs.',true],
 ['thermoformed-products','Thermoformed Products','Plastic disposable products; production scope on enquiry.',true],
 ['custom-products','Custom Printed Products','Paper cup designs developed around your artwork brief.',true],
 ['trays','Trays','Discuss serving and portioning requirements.',false],
 ['food-containers','Food Containers','Define the container and lid format you need.',false],
 ['clamshell-containers','Clamshell Containers','Discuss hinged packaging requirements.',false],
 ['portion-sauce-cups','Portion & Sauce Cups','Share your portioning and accompaniment brief.',false],
 ['dessert-ice-cream-cups','Dessert & Ice Cream Cups','Ask about formats for dessert service.',false],
 ['takeaway-packaging','Takeaway Packaging','Discuss packaging for your takeaway operation.',false],
 ['specialty-products','Specialty Products','Tell us about a specific sourcing requirement.',false],
 ['plates-trays','Plates & Trays','Tableware and serving enquiries.',true]
].map(([slug,name,description,verified])=>({id:slug,slug,name,description,verified,enabled:true,legacy:slug==='plates-trays',image:categoryImages[slug],status:verified?'listed':'enquiry',manufacturingConfirmed:false}));
export const categories=categoryDefinitions.filter(c=>c.enabled);
export const primaryCategories=categories.filter(c=>c.verified&&!c.legacy);
export const enquiryCategories=categories.filter(c=>!c.verified);
// No poster captions are treated as product specifications. All technical unknowns remain null.
const rows=[
 ['paper-cups','Plain paper cups','cups-glasses','Paper','Beverages',true,'Unprinted paper cup requirements for beverage service. Share your target capacity and intended use.'],
 ['printed-paper-cups','Printed paper cups','cups-glasses','Paper','Beverages',true,'Paper cups with custom design enquiries. Supply your artwork, colours and quantity for a printing discussion.'],
 ['100ml-tea-cup','100 ml tea cup','cups-glasses','Paper','Beverages',true,'A 100 ml tea cup listed in the historical SK portfolio. Confirm the current dimensions, construction and packing with your quote.'],
 ['disposable-juice-glass','Disposable juice glass','cups-glasses',null,'Beverages',false,'Disposable glass requirements for beverage service. Confirm material, capacity and suitability for the drink you serve.'],
 ['water-plastic-glass','Water plastic glass','thermoformed-products','Plastic','Beverages',false,'Plastic beverage glasses from the listed disposable range. Ask for the current format and material specification.'],
 ['plastic-cups','Plastic disposable cups','cups-glasses','Plastic','Beverages',false,'Plastic cup requirements for foodservice and distribution. Define the capacity, appearance and intended beverage application.'],
 ['paper-bowls','Paper bowls','bowls','Paper','Food service',false,'Paper bowl requirements for foodservice procurement. Discuss capacity, coating and intended conditions of use.'],
 ['plastic-bowls','Plastic bowls','bowls','Plastic','Food service',false,'Plastic bowl requirements for meal service. Confirm polymer grade, dimensions and application before ordering.'],
 ['paper-plates','Paper plates','plates','Paper','Catering',false,'Paper plate requirements for catering and organised foodservice. Share the meal format, dimensions and quantity.'],
 ['disposable-spoons-forks','Disposable spoons & forks','cutlery',null,'Food service',false,'Disposable spoons and forks from the listed service range. Confirm material, finish and packing for your requirement.'],
 ['paper-blanks-bottoms','Paper blanks & bottoms','paper-products','Paper','Production',false,'Paper blanks and bottoms for paper cup production enquiries. Provide the drawing, grade and quantity required.'],
 ['table-tissues','Table tissues & tissue rolls','paper-products','Paper','Food service',false,'Table tissues and tissue rolls for service operations. Discuss format, dimensions and packing quantities.']
];
const defaults={subcategory:null,sku:null,capacity:null,dimensions:null,colour:null,variants:[],features:[],temperatureUse:null,customPrint:null,lidOptions:null,packaging:null,moq:null,packing:null,finish:null,gallery:[],specifications:{},specPdf:null,photographyStatus:'reference',status:'listed',enabled:true};
export const productDefinitions=rows.map(([slug,name,category,material,application,customizable,description])=>({...defaults,id:slug,slug,name,category,material,application,applications:[application],customizable,description,shortDescription:description.split('. ')[0]+(description.includes('. ')?'.':''),source:company.source,sizes:slug==='100ml-tea-cup'?['100 ml']:[],capacity:slug==='100ml-tea-cup'?'100 ml':null,customPrint:['paper-cups','printed-paper-cups','100ml-tea-cup'].includes(slug)?true:null,featured:['printed-paper-cups','plastic-cups','paper-plates'].includes(slug),image:productImages[slug]||categoryImages[category],images:[],referenceOnly:false}));
for(const c of enquiryCategories)productDefinitions.push({...defaults,id:c.slug+'-enquiry',slug:c.slug+'-enquiry',name:c.name+' enquiry',category:c.slug,material:null,application:'Requirement enquiry',applications:[],customizable:null,description:`Discuss your ${c.name.toLowerCase()} requirement. Availability and sourcing feasibility must be confirmed; this reference is not a confirmed product specification.`,shortDescription:'Availability and specification on enquiry.',sizes:[],featured:false,status:'pending',referenceOnly:true,image:c.image,source:null});
for(const p of productDefinitions){
 if(p.slug==='paper-blanks-bottoms'){p.image=null;p.photographyStatus='pending';}
 p.images=p.image?[p.image]:[];
}
export const products=productDefinitions.filter(p=>p.enabled&&categories.some(c=>c.slug===p.category));
export const listedProducts=products.filter(p=>p.status==='listed');
export function productsForCategory(c){if(!c)return listedProducts;if(c.legacy)return products.filter(p=>['plates','trays'].includes(p.category));if(c.slug==='custom-products')return listedProducts.filter(p=>p.customPrint===true);return products.filter(p=>p.category===c.slug);}
