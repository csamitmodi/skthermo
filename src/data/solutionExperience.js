import {solutions} from './industries.js';
import {backgroundMedia} from './backgroundMedia.js';
import {applicationMedia} from './applicationMedia.js';
// One record per existing solution. Card media remains the source of visual identity.
const positions={'beverage-service':'60% center','catering-events':'55% center','institutional-foodservice':'60% center','custom-branding':'center','takeaway-delivery':'60% center',bakery:'55% center','sweets-confectionery':'center','restaurants-qsr':'60% center'};
const media={...applicationMedia,distributors:backgroundMedia['wholesalers-distributors']};
export const solutionExperiences=solutions.filter(s=>media[s.slug]).map(s=>({...s,title:s.name,shortDescription:s.description,requirement:s.detail,brief:'Share the format, expected quantities, packing preferences and destination.',productCategories:s.categories,cardImage:media[s.slug],heroImage:media[s.slug].hero||media[s.slug],backgroundImage:media[s.slug].background||media[s.slug],heroPosition:positions[s.slug]||'center',backgroundPosition:'right center',heroOverlay:'cream',visualTheme:'application',ctaContext:s.name,dedicatedBackgroundRequired:media[s.slug].width<1600}));
