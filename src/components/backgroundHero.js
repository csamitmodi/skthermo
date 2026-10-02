import {esc} from './ui.js';
// Responsive imagery is a decorative background layer; HTML stays above CSS fades.
export function backgroundHero({media,content,kind='',position=media.position||'center',overlay='cream',mode=media.heroMode||'cover'}){
 return `<section class="background-hero background-hero-${esc(kind)} ${mode==='bounded-reference'?'background-hero-bounded':''}" data-overlay="${esc(overlay)}" style="--hero-position:${esc(position)};--scene-width:${media.width}px;--scene-ratio:${media.width/media.height}"><div class="hero-background-layer" aria-hidden="true"><img src="${media.src}" srcset="${media.srcset}" sizes="${mode==='bounded-reference'?media.width+'px':'100vw'}" width="${media.width}" height="${media.height}" alt="" decoding="async" loading="eager" fetchpriority="high"></div><div class="hero-cream-overlay" aria-hidden="true"></div><div class="wrap background-hero-content">${content}</div></section>`;
}
