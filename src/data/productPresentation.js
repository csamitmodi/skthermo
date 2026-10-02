// Published family labels describe visible shapes, never inferred SKU specifications.
export const presentationOverrides={
 'paper-cups':{name:'Paper cups',image:'cup-paper'},
 '100ml-tea-cup':{name:'Tea cup range',image:null},
 'disposable-spoons-forks':{name:'Disposable spoons',image:'cutlery-spoons'},
 'table-tissues':{name:'Table napkins',image:'tissue-napkins'},
 'water-plastic-glass':{name:'Beverage glasses',image:'cup-clear'},
 'paper-plates':{name:'Round plates',image:'plate-round'}
};
export const commercialNote='Product specifications, available sizes, materials and customization options may vary by requirement. Contact our team for current details.';
// Both the facts AND their relationship to the photograph must be approved.
export const canShowSpecifications=p=>p.contentState==='verified'&&p.verification.specifications==='verified'&&p.verification.imageMatch==='verified'&&p.photographyStatus==='actual';
