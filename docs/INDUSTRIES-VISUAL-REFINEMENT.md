# Industries visual discovery

Only the `/industries` landing experience and its Hindi equivalent changed. The eight industry names, their existing detail routes, product relationships, main navigation and verified company information remain intact. No other page was redesigned. No DNS or production-domain changes were made.

The supplied `skp-industries-visual-reference.png.png` was visually inspected. Its headings, descriptions, CTAs and neighbouring card borders are excluded from derived images. All page content and interactions are real HTML. The image originals remain untouched.

## Mapping and destinations

| Industry | Visual used | Existing destination | Relevant product categories |
| --- | --- | --- | --- |
| Restaurants & QSR | Existing clean restaurant application scene from Solutions overview | /industries/restaurants-qsr | Cups & Glasses; Bowls; Cutlery |
| Hotels | Hotel dining/tableware crop from Industries reference | /industries/hotels | Cups & Glasses; Plates; Paper Products |
| Catering | Existing clean catering/buffet application scene from Solutions overview | /industries/catering | Plates; Bowls; Cutlery |
| Events | Event dining/tableware crop from Industries reference | /industries/events | Cups & Glasses; Plates; Cutlery |
| Institutional Foodservice | Existing clean institutional meal-service application scene from Solutions overview | /industries/institutional-buyers | Cups & Glasses; Bowls; Plates; Cutlery |
| Corporate Buyers | Office pantry/cup crop from Industries reference | /industries/corporate-buyers | Cups & Glasses; Paper Products; Plates |
| Retail & Food Businesses | Packaging display crop from Industries reference | /industries/retail | Cups & Glasses; Bowls; Paper Products |
| Distributors & Wholesalers | Carton/warehouse crop from Industries reference | /industries/wholesalers-distributors | Cups & Glasses; Plates; Bowls; Cutlery; Paper Products |

The hero uses the clean upper-right foodservice composition from the Industries reference. Five new card crops plus the hero are kept in `src/assets/industries/derived/`. Optimized public variants are in `public/assets/industries/`. Restaurant, Catering and Institutional cards reuse already optimized, correctly matched application derivatives. Central provenance, dimensions, crop coordinates and responsive sources are in `src/data/industryMedia.js`. Regenerate with `node scripts/prepare-industry-media.mjs`.

## Presentation

Wide desktop above 1150px: three columns with substantial image-led cards. Tablet and intermediate desktop from 768–1150px: two columns. Mobile below 768px: one card per row, image first and HTML content below.

Desktop uses a CSS warm-white gradient layered above the scene and below the real heading/copy. The fade protects text and reveals the industry environment toward the right. Mobile displays the whole selected scene with `object-fit: contain`; smaller portrait crops retain their proportions and suitable display sizes. No fixed background, parallax, heavy shadows or permanent image fade was added. Hover image/arrow movement is restrained and disabled for reduced motion. Each card is one native link, avoiding nested interactive elements.

## Image limitations and future replacement

All current imagery is representative application context, not evidence of SKP clients, premises, stock or logistics. No specifications, technical claims, customer relationships or business statistics were inferred from the imagery.

Hotels, Events, Corporate Buyers, Retail & Food Businesses and Distributors & Wholesalers particularly need dedicated higher-resolution industry visuals for future larger presentations: their usable source areas are only 195–225 pixels wide. Current mobile portrait scenes are kept compact rather than enlarged across the entire card. Restaurant, Catering and Institutional have larger existing application crops, but dedicated high-resolution images would also improve detail and future flexibility. The central map allows replacement without redesigning the page.

## Performance, accessibility and QA

Fourteen new responsive WebP variants were generated at quality 92 without source enlargement. No original full reference PNG is downloaded by the Industries page. Hero imagery is eager/high priority; card imagery is lazy with explicit dimensions and responsive sizing. Existing application derivatives are reused rather than copied or regenerated. No additional runtime dependencies or JavaScript scroll effects were added.

English and Hindi headings, descriptions, CTA text and alt text remain HTML/localized. Native links, visible keyboard focus, semantic headings and reduced-motion behavior are preserved. Cards carry no technical SKU specifications.

Chrome QA passed at 1440, 1024, 768, 430, 390 and 360px in both languages. All eight industry journeys and their category links passed. No horizontal overflow, missing images, original reference-image requests or JavaScript errors were detected. Screenshots and machine-readable results are in `docs/qa/industries/`. Production build succeeded with 364 pre-rendered routes; all 14 source/build tests passed after updating the old Industries-hero asset assertion to the new centralized mapping.

This work is included in the user-authorized website commit and deployment. The final delivery report records the commit and GitHub/Vercel result.
