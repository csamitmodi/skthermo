// Integration boundary only. Credentials/private records never live in browser storage.
import {platform} from '../data/platform.js';
export function customerServices({auth=null,transport=fetch,apiBase=platform.apiBase}={}){
 async function request(resource,options={}){if(!platform.authEnabled||!auth||!apiBase)throw new Error('Customer services are not enabled');const session=await auth.getSession();if(!session)throw new Error('Authentication required');const response=await transport(apiBase+resource,{...options,credentials:'include'});if(!response.ok)throw new Error('Customer request could not be completed');return response.json();}
 return {auth,customer:()=>request('/customer'),enquiries:()=>request('/enquiries'),quotations:()=>request('/quotations'),orders:()=>request('/orders'),savedProducts:()=>request('/saved-products'),documents:()=>request('/documents'),reviews:()=>request('/reviews'),samples:()=>request('/samples'),repeatRequirement:items=>items.map(({productId,quantity,notes})=>({productId,quantity,notes}))};
}
