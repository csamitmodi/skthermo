// Published legacy company evidence: docs/AUDIT.md. Null values await company confirmation.
export const company = {
 name:'S. K. Thermoformers', legalName:'M/s S. K. Thermoformers', brand:'SKP',
 url:'https://skthermo.vercel.app', legacyUrl:'https://www.skgroupalwar.com',
 email:'skthermoformers@gmail.com', phone:'+91 94140 15833',
 phones:['+91 94140 15833','+91 93515 86314','+91 93519 04615'],
 address:'Harsoli Road, Near Shailja Grits Udyog, Khairthal, Alwar - 301404, Rajasthan, India',
 source:'https://www.skgroupalwar.com/about.php', whatsapp:null, leadEndpoint:null,
 established:null, history:[], leadership:[], milestones:[], metrics:[], certifications:[],
 machinery:[], productionCapacity:null, exportMarkets:[], clientLogos:[], social:[], catalogue:null,
 services:{customSize:true,customPrint:true,packaging:true,privateLabel:false,oem:false,development:false},
 media:{factory:null,machinery:null,quality:null,team:null},
 todos:['Confirm current contacts','Provide current specifications and packing','Confirm MOQ and lead times','Provide actual product and factory photographs','Confirm partner details and history','Supply current certification evidence','Confirm export and private label scope','Approve legal copy and connect lead endpoint']
};
export const enquiryTypes=['Domestic bulk','Distributor enquiry','Institutional requirement','Custom requirement','Export enquiry','General enquiry'];
export const buyerTypes=['Distributor / wholesaler','Restaurant / QSR','Caterer / hospitality','Institutional buyer','Food business','Custom brand buyer','Export buyer'];
export const customOptions=[{label:'Standard product',enabled:true},{label:'Custom size',enabled:company.services.customSize},{label:'Printing / branding',enabled:company.services.customPrint},{label:'Custom packaging',enabled:company.services.packaging},{label:'Private label',enabled:company.services.privateLabel},{label:'Special development',enabled:company.services.development}].filter(x=>x.enabled);
export const customJourney=[['Share your brief','Tell us the product, application, volume and destination.'],['Discuss specifications','Review format, material and any printing or packing needs.'],['Review samples if applicable','Ask whether samples or development are appropriate for your requirement.'],['Confirm commercial terms','Agree specifications, packing, availability and delivery terms.'],['Plan production or supply','Proceed against the agreed product and order requirements.']];
