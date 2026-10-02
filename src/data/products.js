import {presentationOverrides} from './productPresentation.js';
import {translate} from '../locales/hi.js';
import {company} from './company.js';
import {categoryImages,productImages} from '../image-map.js';
import {productMedia,visualGroups} from './productMedia.js';
export const productGroups=[
 {id:'tableware',name:'Tableware',description:'Beverage and meal service formats.',image:'plate-round',categories:['cups-glasses','plates','trays','bowls','cutlery']},
 {id:'food-packaging',name:'Food Packaging',description:'Container, portioning and lid requirements.',image:'container-rectangular',categories:['food-containers','clamshell-containers','meal-trays','portion-sauce-cups','dessert-ice-cream-cups','utility-cups','lids-accessories','thermoformed-products']},
 {id:'material-ranges',name:'Material Ranges',description:'Formats inspired by leaf, fibre, paper and wood.',image:'areca-round',categories:['bagasse','areca','kraft-packaging','wooden-bamboo']},
 {id:'specialty-packaging',name:'Specialty Packaging',description:'Packaging briefs for takeaway, bakery and sweets.',image:'bakery-boxes',categories:['aluminium-foil','takeaway-packaging','bakery-packaging','sweets-packaging','paper-bags','catering-range','specialty-products','custom-products']},
 {id:'foodservice-essentials',name:'Foodservice Essentials',description:'Dining and paper service requirements.',image:'tissue-napkins',categories:['tissues','paper-products']}
];
const additional=[['meal-trays','Meal & Packing Trays','Discuss thali and divided meal packaging.'],['utility-cups','Multipurpose & Utility Cups','Define a small serving or sampling format.'],['aluminium-foil','Aluminium Foil Packaging','Discuss foil-style container and tray requirements.'],['sweets-packaging','Sweets & Confectionery','Packaging for sweets, confectionery and gifting requirements.'],['bakery-packaging','Bakery Packaging','Discuss boxes and presentation formats for baked goods.'],['areca','Areca / Supari Leaf Tableware','Explore leaf tableware concepts for your sourcing brief.'],['bagasse','Bagasse / Sugarcane Tableware','Explore fibre tableware concepts; confirm material and availability.'],['kraft-packaging','Paper / Kraft Packaging','Discuss kraft-style food packaging requirements.'],['paper-bags','Paper Bags & Carry Packaging','Discuss carry bag formats and branding requirements.'],['tissues','Tissues & Napkins','Listed tissue products; additional dining formats on enquiry.'],['wooden-bamboo','Wooden / Bamboo Accessories','Discuss cutlery and accessory sourcing requirements.'],['lids-accessories','Lids & Accessories','Define the required fit and compatible container.'],['catering-range','Catering & Function Range','Discuss coordinated tableware and event requirements.']];
// verified = product family listed in legacy company evidence. It does not imply in-house manufacturing.
export const categoryDefinitions=[
 ['cups-glasses','Cups & Glasses','Paper cups and plastic beverage formats.',true],
 ['plates','Plates','Plate formats for meal service; listed paper plates and other formats on enquiry.',true],
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
,...additional.map(([slug,name,description])=>[slug,name,description,slug==='tissues'])].map(([slug,name,description,verified])=>({id:slug,slug,name,description,verified,enabled:true,legacy:slug==='plates-trays',image:categoryImages[slug],media:productMedia[slug]||productMedia.plates,group:productGroups.find(g=>g.categories.includes(slug))?.id||'tableware',status:verified?'listed':'pending',verification:{availability:verified?'verified':'pending',specifications:'pending',manufacturing:'pending'},manufacturingConfirmed:false}));
const categoryCopy={plates:'Round, square and compartment plate formats for meal service and catering.',bagasse:'Fibre tableware formats for meals, takeaway and catering.',areca:'Leaf-style plates and bowls for foodservice and event requirements.',tissues:'Napkins and dining formats for foodservice operations.','thermoformed-products':'Formed packaging formats for beverage and foodservice requirements.'};
for(const c of categoryDefinitions)if(categoryCopy[c.slug])c.description=categoryCopy[c.slug];
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
const defaults={subcategory:null,sku:null,capacity:null,dimensions:null,colour:null,variants:[],features:[],temperatureUse:null,customPrint:null,lidOptions:null,packaging:null,moq:null,packing:null,finish:null,gallery:[],specifications:{},specPdf:null,photographyStatus:'reference',status:'listed',enabled:true,verification:{availability:'pending',specifications:'pending'},exportPacking:{innerPack:null,piecesPerPack:null,packsPerCarton:null,masterCarton:null,piecesPerCarton:null,cartonDimensions:null,grossWeight:null,netWeight:null,cbm:null,palletization:null,containerLoadingQuantity:null},commercial:{moq:null,samples:null,leadTime:null,paymentTerms:null,incoterms:null,portOfLoading:null}};
export const productDefinitions=rows.map(([slug,name,category,material,application,customizable,description])=>({...defaults,id:slug,slug,name,category,material,application,applications:[application],customizable,description,shortDescription:description.split('. ')[0]+(description.includes('. ')?'.':''),verification:{availability:'verified',specifications:'pending'},source:company.source,sizes:slug==='100ml-tea-cup'?['100 ml']:[],capacity:slug==='100ml-tea-cup'?'100 ml':null,customPrint:['paper-cups','printed-paper-cups','100ml-tea-cup'].includes(slug)?true:null,featured:['printed-paper-cups','plastic-cups','paper-plates'].includes(slug),image:productImages[slug]||categoryImages[category],images:[],referenceOnly:false}));
for(const c of enquiryCategories)productDefinitions.push({...defaults,id:c.slug+'-enquiry',slug:c.slug+'-enquiry',name:c.name+' enquiry',category:c.slug,material:null,application:'Requirement enquiry',applications:[],customizable:null,description:`Discuss your ${c.name.toLowerCase()} requirement. Availability and sourcing feasibility must be confirmed; this reference is not a confirmed product specification.`,shortDescription:'Availability and specification on enquiry.',sizes:[],featured:false,status:'pending',referenceOnly:true,image:c.image,source:null});
// Clean visual groups are concept enquiries, not newly verified SK products.
const bound={'plate-round':'paper-plates','cutlery-spoons':'disposable-spoons-forks','cup-paper':'paper-cups','cup-clear':'plastic-cups','bowl-paper':'paper-bowls','bowl-plastic':'plastic-bowls','tissue-napkins':'table-tissues','cup-print':'printed-paper-cups'};
for(const [category,media] of Object.entries(productMedia))for(const id of media.groups){const v=visualGroups.find(x=>x.id===id);if(bound[id])continue;productDefinitions.push({...defaults,id,slug:id,name:v.name,category,material:null,application:'Requirement enquiry',applications:[],customizable:null,description:`Use this ${v.name.toLowerCase()} visual to explain your requirement. Confirm availability, construction and suitability with SK Thermoformers before ordering.`,shortDescription:'Visual format reference. Availability requires confirmation.',source:null,sourceCatalogue:media.catalogue,sizes:[],featured:false,status:'pending',referenceOnly:true,image:id,images:[],searchTerms:category+' '+v.name});}
for(const p of productDefinitions){
 if(p.slug==='paper-blanks-bottoms'){p.image=null;p.photographyStatus='pending';}
 p.historicalData={name:p.name,material:p.material,capacity:p.capacity,description:p.description};
 Object.assign(p,presentationOverrides[p.slug]||{});
 p.contentState=p.status==='pending'?'pending':'range-level';
 p.verification={...p.verification,imageMatch:'range-level'};
 p.subcategory=p.name;
 p.name=p.name.replace(/ styles$| concepts$| presentation$| enquiry$/g,'');
 p.shortDescription=p.application!=='Requirement enquiry'?p.name+' for '+p.application.toLowerCase()+' and bulk requirements.':p.name+' for foodservice, distribution and bulk requirements.';
 p.description=p.shortDescription+' Share your intended use, quantity and packing requirements with our team.';
 // Company-approved entries can supply actual media and verified facts here later.
 Object.assign(p,presentationOverrides[p.slug]||{});
 p.images=p.images?.length?[...new Set(p.images)]:p.image?[p.image]:[];
}
export const products=productDefinitions.filter(p=>p.enabled&&categories.some(c=>c.slug===p.category));
export const listedProducts=products.filter(p=>p.status==='listed');
export function productsForCategory(c){if(!c)return products.filter(p=>!p.slug.endsWith('-enquiry'));if(c.legacy)return products.filter(p=>['plates','trays'].includes(p.category));if(c.slug==='custom-products')return listedProducts.filter(p=>p.customPrint===true);const crossViews={plates:['bagasse-plates','areca-round','areca-square','catering-round','catering-square'],bowls:['areca-bowls','kraft-bowls'],cutlery:['wood-spoons','wood-forks'],trays:['bagasse-trays','meal-divided']};if(crossViews[c.slug])return products.filter(p=>(p.category===c.slug&&!p.slug.endsWith('-enquiry'))||crossViews[c.slug].includes(p.slug));if(c.slug==='tissues')return [...products.filter(p=>p.category===c.slug),products.find(p=>p.slug==='table-tissues')].filter(Boolean);return products.filter(p=>p.category===c.slug&&!p.slug.endsWith('-enquiry'));}
export const homeCategories=['cups-glasses','plates','food-containers','takeaway-packaging','bagasse','kraft-packaging','aluminium-foil','catering-range'].map(slug=>categories.find(c=>c.slug===slug)).filter(Boolean);

export const relatedCategoryViews={plates:['bagasse-plates','areca-round','areca-square','catering-round','catering-square'],bowls:['areca-bowls','kraft-bowls'],cutlery:['wood-spoons','wood-forks'],trays:['bagasse-trays','meal-divided'],tissues:['table-tissues']};
// One identity/database, with localized display fields. English compatibility remains intact.
for(const item of [...categories,...products])item.localized=Object.fromEntries(['name','description','shortDescription'].filter(key=>item[key]).map(key=>[key,{en:item[key],hi:translate(item[key])}]));
// Additional photo roles can be supplied without duplicating one reference image in a gallery.
for(const p of products){p.mediaRoles={primary:p.image,alternate:[],side:[],packaging:[],application:[],technical:[],...p.mediaRoles};p.image=p.mediaRoles.primary;p.images=[...new Set([p.mediaRoles.primary,...p.images,...p.mediaRoles.alternate,...p.mediaRoles.side,...p.mediaRoles.packaging,...p.mediaRoles.application,...p.mediaRoles.technical].filter(Boolean))];}
