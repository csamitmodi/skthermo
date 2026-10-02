import {imageAssets} from '../image-map.js';
import {productSceneMedia} from './productSceneMedia.js';
// Hero atmosphere and exact photography are deliberately separate roles.
// Production inputs cannot inherit finished-tableware photos from the paper category.
const blockedCategoryFallback=new Set(['paper-blanks-bottoms']);
export function productVisual(p,c){
 const explicit=p.heroImage&&imageAssets[p.heroImage];
 if(explicit)return {media:explicit,key:p.heroImage,role:'product-hero'};
 if(p.photographyStatus==='actual'&&p.verification.imageMatch==='verified'&&imageAssets[p.image])return {media:imageAssets[p.image],key:p.image,role:'verified-product-photo'};
 if(p.slug==='100ml-tea-cup')return {media:productSceneMedia.teaCup,key:null,role:'application'};
 const key=p.image&&imageAssets[p.image]?p.image:!blockedCategoryFallback.has(p.slug)?[c.heroImage,c.rangeImage,c.image].find(k=>imageAssets[k]):null;
 return {media:key?imageAssets[key]:null,key,role:p.image===key?'product-family':'category-range',dedicatedPhotographyRequired:p.photographyStatus!=='actual'};
}
export function productCardVisual(p,c){return p.image&&imageAssets[p.image]?p.image:blockedCategoryFallback.has(p.slug)?null:c.image;}
