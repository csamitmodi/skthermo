// Transport boundary: an approved endpoint can replace the email fallback without changing forms.
export async function submitEnquiry(payload,{endpoint=null,email,subject,draft,transport=fetch}={}){
 if(!endpoint)return {mode:'email',href:`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`};
 const response=await transport(endpoint,{method:'POST',body:payload});
 if(!response.ok)throw new Error('Delivery not confirmed');
 const result=await response.json();
 if(result.success!==true)throw new Error('Delivery not confirmed');
 return {mode:'submitted'};
}
