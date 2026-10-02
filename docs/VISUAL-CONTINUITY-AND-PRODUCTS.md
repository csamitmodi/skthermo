# Connected visual details and product presentation

## Listing-to-detail mapping

All existing listing designs and routes remain. `visualDetail` drives solution and industry backgrounds, HTML content, existing product families and contextual enquiry. CSS pseudo-elements use edge masks and cream overlays. Each page has a hero and a later visual requirement band; no separate rectangular side image, fixed background or parallax.

| TYPE | PAGE | LISTING IMAGE | DETAIL BACKGROUND | STATUS |
| --- | --- | --- | --- | --- |
| Solution | /solutions/beverage-service | /assets/applications/beverage-service-482.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Solution | /solutions/catering-events | /assets/applications/catering-events-480.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Solution | /solutions/institutional-foodservice | /assets/applications/institutional-foodservice-482.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Solution | /solutions/custom-branding | /assets/applications/custom-branding-480.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Solution | /solutions/takeaway-delivery | /assets/applications/takeaway-delivery-482.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Solution | /solutions/bakery | /assets/applications/bakery-480.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Solution | /solutions/sweets-confectionery | /assets/applications/sweets-confectionery-482.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Solution | /solutions/restaurants-qsr | /assets/applications/restaurants-qsr-480.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Solution | /solutions/distributors | /assets/backgrounds/wholesalers-distributors-583.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Industry | /industries/restaurants-qsr | /assets/backgrounds/restaurants-qsr-392.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Industry | /industries/hotels | /assets/backgrounds/hotels-382.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Industry | /industries/catering | /assets/backgrounds/catering-380.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Industry | /industries/events | /assets/backgrounds/events-392.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Industry | /industries/institutional-buyers | /assets/backgrounds/institutional-buyers-382.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Industry | /industries/corporate-buyers | /assets/backgrounds/corporate-buyers-380.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Industry | /industries/retail | /assets/backgrounds/retail-581.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |
| Industry | /industries/wholesalers-distributors | /assets/backgrounds/wholesalers-distributors-583.webp | Same scene, CSS fades/positions | Native-sized reference; dedicated HD background required |

The eight solution cards use clean scenes from `skp-solutions-applications-overview.png.png`; the eight industry cards use `skp-industries-people-visual-reference.png.png`. The existing additional `/solutions/distributors` route uses the matching distribution industry scene and is retained for compatibility, without adding a ninth listing card. No route errors or wrong-category links were found. All requested detail pages previously lost visual context after their hero; solution details had no visual hero at all.

## Background limitations and replacement

**DEDICATED BACKGROUND IMAGE REQUIRED for every solution and industry listed above.** Current scenes are only 380?583px wide. They remain bounded at native resolution; this is a quality-safe transitional atmosphere, not a completed large full-cover photographic experience. Supply text-free 16:9 or wider landscape assets, ideally 2560?1440+, with products and naturally working people in the correct environment and clean left-side space. Match the existing scene for each category. Per-page `heroImage`, `backgroundImage`, positions and theme are centralized; high-resolution media automatically activates cover mode. Existing sources are not enlarged or used as exact SKU/facility/client evidence.

Mobile at 360/390/430px places readable HTML above an integrated background scene and moves later visual context above the warm-white enquiry panel. Desktop positions the scene right in the hero and left in the later band. No heading overlays faces on narrow screens. On current small scenes, showing the whole scene preserves people/products rather than aggressive focal cropping.

## Tea Cup Range

`/products/100ml-tea-cup` remains the existing canonical route. Exact capacity is pending; public content remains Tea cup range with no published 100 ml assertion. The new `skp-tea-cup-range-reference.png.png` was inspected. Its clean photo crop is x760/y120/912?427, excluding mockup UI and unsupported feature claims. Four WebP derivatives (320/480/768/912px, quality91; 212KB combined) preserve the original. The hero uses a wide native-size caf?/cup background with cream fade; a later application band keeps the same visual world. No generated employee/location/technical claims are added.

Add to Enquiry is primary, Request Product Details secondary, Export/Samples are text links. Existing product/category IDs travel internally; the buyer sees the human-readable range, and no capacity/material is prefilled. RFQ source is Product Detail. WhatsApp message: Hello SK Thermoformers, followed by a newline and I would like to discuss your Tea Cup Range.

## Product fallback audit

Only two records previously had no usable primary image: Tea Cup Range and Paper blanks & bottoms. Tea Cup now has the application hero and the Cups & Glasses visual for catalogue cards. Paper blanks remains a neutral, typography-led production-input detail: tissue/tableware category imagery would be inaccurate. Dedicated production-input photography is needed. All other records retain their already mapped family visuals. No new exact SKU mapping is inferred.

`productVisuals.js` separates hero atmosphere from exact photography, prefers explicit hero/product media, then accurate category media, and blocks the paper-blanks category fallback. `productDetail.js` is shared across all 87 product detail routes. It renders specifications, variants and gallery only when evidence passes the existing verified image/specification gate. Pending products show a single product-details prompt; repeated commercial disclaimers were removed from product details. Related formats use actual current records, not products invented from the reference.

| PRODUCT ROUTE | NAME | RESOLVED VISUAL | ROLE |
| --- | --- | --- | --- |
| /products/paper-cups | Paper cups | /assets/products/cups-glasses/cup-paper-485.webp | product-family |
| /products/printed-paper-cups | Printed paper cups | /assets/products/custom-products/cup-print-425.webp | product-family |
| /products/100ml-tea-cup | Tea cup range | /assets/product-scenes/tea-cup-912.webp | application |
| /products/disposable-juice-glass | Disposable juice glass | /assets/products/cups-glasses/cup-clear-225.webp | product-family |
| /products/water-plastic-glass | Beverage glasses | /assets/products/cups-glasses/cup-clear-225.webp | product-family |
| /products/plastic-cups | Plastic disposable cups | /assets/products/cups-glasses/cup-clear-225.webp | product-family |
| /products/paper-bowls | Paper bowls | /assets/products/bowls/bowl-paper-514.webp | product-family |
| /products/plastic-bowls | Plastic bowls | /assets/products/bowls/bowl-plastic-446.webp | product-family |
| /products/paper-plates | Round plates | /assets/products/plates/plate-round-492.webp | product-family |
| /products/disposable-spoons-forks | Disposable spoons | /assets/products/cutlery/cutlery-spoons-330.webp | product-family |
| /products/paper-blanks-bottoms | Paper blanks & bottoms | Neutral production-input treatment | product-family |
| /products/table-tissues | Table napkins | /assets/products/tissues/tissue-napkins-374.webp | product-family |
| /products/trays-enquiry | Trays | /assets/products/trays/tray-serving-673.webp | product-family |
| /products/food-containers-enquiry | Food Containers | /assets/products/food-containers/container-rectangular-519.webp | product-family |
| /products/clamshell-containers-enquiry | Clamshell Containers | /assets/products/clamshell-containers/clamshell-rectangular-583.webp | product-family |
| /products/portion-sauce-cups-enquiry | Portion & Sauce Cups | /assets/products/portion-sauce-cups/portion-round-529.webp | product-family |
| /products/dessert-ice-cream-cups-enquiry | Dessert & Ice Cream Cups | /assets/products/dessert-ice-cream-cups/dessert-clear-531.webp | product-family |
| /products/takeaway-packaging-enquiry | Takeaway Packaging | /assets/products/takeaway-packaging/takeaway-boxes-375.webp | product-family |
| /products/specialty-products-enquiry | Specialty Products | /assets/skp/thermoformed-372.webp | product-family |
| /products/meal-trays-enquiry | Meal & Packing Trays | /assets/products/meal-trays/meal-round-738.webp | product-family |
| /products/utility-cups-enquiry | Multipurpose & Utility Cups | /assets/products/utility-cups/utility-serving-cups-509.webp | product-family |
| /products/aluminium-foil-enquiry | Aluminium Foil Packaging | /assets/products/aluminium-foil/foil-rectangular-574.webp | product-family |
| /products/sweets-packaging-enquiry | Sweets & Confectionery | /assets/products/sweets-packaging/sweet-window-418.webp | product-family |
| /products/bakery-packaging-enquiry | Bakery Packaging | /assets/products/bakery-packaging/bakery-boxes-516.webp | product-family |
| /products/areca-enquiry | Areca / Supari Leaf Tableware | /assets/products/areca/areca-round-579.webp | product-family |
| /products/bagasse-enquiry | Bagasse / Sugarcane Tableware | /assets/products/bagasse/bagasse-plates-492.webp | product-family |
| /products/kraft-packaging-enquiry | Paper / Kraft Packaging | /assets/products/kraft-packaging/kraft-burger-399.webp | product-family |
| /products/paper-bags-enquiry | Paper Bags & Carry Packaging | /assets/products/paper-bags/bag-handled-205.webp | product-family |
| /products/wooden-bamboo-enquiry | Wooden / Bamboo Accessories | /assets/products/wooden-bamboo/wood-spoons-445.webp | product-family |
| /products/lids-accessories-enquiry | Lids & Accessories | /assets/products/lids-accessories/lid-cups-532.webp | product-family |
| /products/catering-range-enquiry | Catering & Function Range | /assets/products/catering-range/catering-round-393.webp | product-family |
| /products/cup-textured | Textured cup | /assets/products/cups-glasses/cup-textured-373.webp | product-family |
| /products/plate-square | Square plate | /assets/products/plates/plate-square-490.webp | product-family |
| /products/plate-compartment | Compartment plate | /assets/products/plates/plate-compartment-474.webp | product-family |
| /products/plate-textured | Textured plate | /assets/products/plates/plate-textured-485.webp | product-family |
| /products/tray-serving | Serving tray | /assets/products/trays/tray-serving-673.webp | product-family |
| /products/tray-square | Square tray | /assets/products/trays/tray-square-392.webp | product-family |
| /products/tray-compartment | Compartment tray | /assets/products/trays/tray-compartment-586.webp | product-family |
| /products/meal-round | Round thali | /assets/products/meal-trays/meal-round-738.webp | product-family |
| /products/meal-divided | Divided meal tray | /assets/products/meal-trays/meal-divided-728.webp | product-family |
| /products/meal-lidded | Lidded meal tray | /assets/products/meal-trays/meal-lidded-415.webp | product-family |
| /products/container-rectangular | Rectangular container | /assets/products/food-containers/container-rectangular-519.webp | product-family |
| /products/container-round | Round container | /assets/products/food-containers/container-round-453.webp | product-family |
| /products/container-clear | Clear container | /assets/products/food-containers/container-clear-357.webp | product-family |
| /products/clamshell-rectangular | Rectangular hinged | /assets/products/clamshell-containers/clamshell-rectangular-583.webp | product-family |
| /products/clamshell-square | Square hinged | /assets/products/clamshell-containers/clamshell-square-460.webp | product-family |
| /products/portion-round | Round portion cup | /assets/products/portion-sauce-cups/portion-round-529.webp | product-family |
| /products/portion-square | Square portion cup | /assets/products/portion-sauce-cups/portion-square-415.webp | product-family |
| /products/sauce-lidded | Lidded sauce cup | /assets/products/portion-sauce-cups/sauce-lidded-490.webp | product-family |
| /products/dessert-clear | Clear dessert cup | /assets/products/dessert-ice-cream-cups/dessert-clear-531.webp | product-family |
| /products/dessert-opaque | Dessert cup | /assets/products/dessert-ice-cream-cups/dessert-opaque-494.webp | product-family |
| /products/ice-cream-printed | Ice cream cup | /assets/products/dessert-ice-cream-cups/ice-cream-printed-422.webp | product-family |
| /products/utility-serving-cups | Utility cup | /assets/products/utility-cups/utility-serving-cups-509.webp | product-family |
| /products/foil-rectangular | Rectangular foil formats | /assets/products/aluminium-foil/foil-rectangular-574.webp | product-family |
| /products/foil-round | Round foil formats | /assets/products/aluminium-foil/foil-round-572.webp | product-family |
| /products/foil-divided | Divided foil formats | /assets/products/aluminium-foil/foil-divided-363.webp | product-family |
| /products/takeaway-boxes | Takeaway box | /assets/products/takeaway-packaging/takeaway-boxes-375.webp | product-family |
| /products/takeaway-snack | Snack packaging | /assets/products/takeaway-packaging/takeaway-snack-357.webp | product-family |
| /products/sweet-window | Window sweet box | /assets/products/sweets-packaging/sweet-window-418.webp | product-family |
| /products/sweet-gift | Gift box | /assets/products/sweets-packaging/sweet-gift-484.webp | product-family |
| /products/sweet-divided | Divided sweet box | /assets/products/sweets-packaging/sweet-divided-499.webp | product-family |
| /products/bakery-boxes | Bakery box | /assets/products/bakery-packaging/bakery-boxes-516.webp | product-family |
| /products/bakery-domes | Cake dome | /assets/products/bakery-packaging/bakery-domes-516.webp | product-family |
| /products/bakery-slices | Pastry slice box | /assets/products/bakery-packaging/bakery-slices-414.webp | product-family |
| /products/areca-round | Leaf tableware round formats | /assets/products/areca/areca-round-579.webp | product-family |
| /products/areca-square | Leaf tableware square formats | /assets/products/areca/areca-square-430.webp | product-family |
| /products/areca-bowls | Leaf bowl formats | /assets/products/areca/areca-bowls-477.webp | product-family |
| /products/bagasse-plates | Fibre plate | /assets/products/bagasse/bagasse-plates-492.webp | product-family |
| /products/bagasse-hinged | Fibre hinged box | /assets/products/bagasse/bagasse-hinged-236.webp | product-family |
| /products/bagasse-trays | Fibre meal tray | /assets/products/bagasse/bagasse-trays-493.webp | product-family |
| /products/kraft-burger | Kraft-style burger box | /assets/products/kraft-packaging/kraft-burger-399.webp | product-family |
| /products/kraft-bowls | Kraft-style bowl | /assets/products/kraft-packaging/kraft-bowls-425.webp | product-family |
| /products/kraft-meal | Kraft-style meal box | /assets/products/kraft-packaging/kraft-meal-346.webp | product-family |
| /products/bag-handled | Handled paper bag | /assets/products/paper-bags/bag-handled-205.webp | product-family |
| /products/bag-flat | Flat paper bag | /assets/products/paper-bags/bag-flat-409.webp | product-family |
| /products/bag-diecut | Die-cut bag | /assets/products/paper-bags/bag-diecut-387.webp | product-family |
| /products/tissue-boxes | Tissue box | /assets/products/tissues/tissue-boxes-372.webp | product-family |
| /products/tissue-dinner | Dinner napkin | /assets/products/tissues/tissue-dinner-307.webp | product-family |
| /products/wood-spoons | Wooden spoon | /assets/products/wooden-bamboo/wood-spoons-445.webp | product-family |
| /products/wood-forks | Wooden fork | /assets/products/wooden-bamboo/wood-forks-257.webp | product-family |
| /products/bamboo-chopsticks | Bamboo accessory | /assets/products/wooden-bamboo/bamboo-chopsticks-253.webp | product-family |
| /products/lid-cups | Cup lid | /assets/products/lids-accessories/lid-cups-532.webp | product-family |
| /products/lid-flat-dome | Flat and dome lid | /assets/products/lids-accessories/lid-flat-dome-451.webp | product-family |
| /products/lid-containers | Container lid | /assets/products/lids-accessories/lid-containers-484.webp | product-family |
| /products/catering-round | Catering plate | /assets/products/catering-range/catering-round-393.webp | product-family |
| /products/catering-square | Catering square plate | /assets/products/catering-range/catering-square-347.webp | product-family |
| /products/catering-set | Place-setting concept | /assets/products/catering-range/catering-set-297.webp | product-family |

## Photography and facts still required

All 87 product records still need approved actual SKP product photographs and image-to-SKU verification before exact specifications can appear. Provide product codes, materials, dimensions/capacities, variants, lids, packing/carton data, MOQ and any documented performance or compliance claims separately. The historical tea capacity in source data is not treated as verified public data.

## Performance, accessibility and QA

Existing optimized WebP scene assets are reused and cached within a route. Only the current hero is preloaded; full original reference PNGs are excluded from production. Backgrounds are decorative CSS; headings, breadcrumbs, actions and forms remain HTML. Bilingual context values stay stable. Forms use the existing honest email-draft adapter; no delivery is faked. Vercel JSON remains unchanged, valid and BOM-free.

Production build: 364 routes. Source tests: 14 passed. Browser QA checks all requested solution/industry journeys in both languages at 1440/1024/768/430/390/360px, and all 87 product detail routes on desktop/mobile, with additional bilingual Tea Cup checks and action testing. Results and screenshots are in `docs/qa/visual-continuity` and `docs/qa/product-visuals`. No DNS/domain changes.

Final QA totals: 204 bilingual responsive cases and 17 solution/industry journeys; all 87 product detail routes passed desktop/mobile checks. Tea Cup enquiry-list imagery, RFQ preview, sample selection and context passed. Dedicated industry/solution backgrounds remain required; bounded scenes are not claimed to be full-cover heroes.
