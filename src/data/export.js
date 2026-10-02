// International enquiry architecture. Null commercial/packing fields stay hidden.
export const exportData={
 title:'Packaging Solutions for Global Buyers.',
 description:'Explore SKP foodservice and disposable packaging ranges for international sourcing, distribution, private-label and bulk enquiries. Share the product format, destination and quantities you need.',
 buyers:['Importers','Distributors','Wholesalers','Foodservice suppliers','Restaurant supply companies','Private-label buyers','Institutional procurement','Hospitality suppliers'],
 portfolio:['cups-glasses','plates','food-containers','takeaway-packaging','bagasse','areca','kraft-packaging','aluminium-foil','wooden-bamboo'],
 journey:[['Share your requirement','Product format, estimated quantity, destination and intended use.'],['Discuss the specification','Review construction, dimensions, compatibility and current availability.'],['Review samples & commercials','Discuss sample availability, packing, quantities and commercial terms.'],['Confirm the order','Agree the specification and responsibilities before placing an order.'],['Plan production & packing','Discuss production or sourcing feasibility and the required pack configuration.'],['Agree dispatch arrangements','Review shipping responsibilities and documentation for the destination.']],
 documents:['IEC','GST','FSSAI if applicable','Certificate of Origin','Commercial invoice','Packing list','Shipping documents','Product declarations','Test reports','Material declarations','Certificates'].map(name=>({name,status:'pending',verified:false,document:null})),
 packing:{innerPack:null,masterCarton:null,piecesPerCarton:null,cartonDimensions:null,grossWeight:null,netWeight:null,cbm:null,palletization:null,containerLoadingQuantity:null},
 commercial:{moq:null,sampleAvailability:null,leadTime:null,paymentTerms:null,incoterms:null,portOfLoading:null},
 registration:null,capacity:null,tradeMemberships:[],exportMarkets:[],certifications:[],clients:[]
};
