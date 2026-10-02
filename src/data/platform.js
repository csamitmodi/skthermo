// No authentication, customer records, review evidence or approved PDF is connected yet.
export const platform = {authEnabled:false,authProvider:null,apiBase:null,officialCatalogues:{en:null,hi:null},testimonials:[],customerLogos:[],reviews:[]};
export const accountRoutes=['/account','/account/enquiries','/account/quotations','/account/orders','/account/saved-products','/account/documents','/account/reviews','/account/profile'];
export const recordFields={
 customer:['id','company','displayName','email','country'],
 enquiry:['id','number','createdAt','items','status','updatedAt'],
 quotation:['id','number','date','validUntil','items','amount','currency','status','documentId'],
 order:['id','number','poReference','date','items','quantity','status','dispatch','documentIds'],
 document:['id','customerId','type','name','createdAt','secureDownloadEndpoint'],
 sampleRequest:['id','customerId','items','expectedQuantity','shippingAddress','country','courierPreference','status'],
 review:['id','productId','rating','title','text','displayName','company','date','verifiedBuyer','orderId','approved'],
 testimonial:['id','name','company','role','location','text','logo','photo','date','verified','approved']
};
export const enquiryStatuses=['Received','Under Review','Quotation Shared','Closed'];
export function approvedReviews(productId){return platform.reviews.filter(r=>r.productId===productId&&r.approved&&r.verifiedBuyer&&r.orderId&&r.rating>=1&&r.rating<=5);}
export function reviewSummary(productId){const reviews=approvedReviews(productId);if(!reviews.length)return null;return {count:reviews.length,average:reviews.reduce((sum,r)=>sum+r.rating,0)/reviews.length,distribution:[5,4,3,2,1].map(rating=>({rating,count:reviews.filter(r=>r.rating===rating).length}))};}
