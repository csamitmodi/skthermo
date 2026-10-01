# SKP product catalogue and Export upgrade

## Audit and scope

The existing dependency-free static JavaScript application was preserved. It is not React/Vite. All 66 existing routes and 404 were captured before coding, along with the existing source/derivative inventory. All 28 supplied SKP images were visually inspected individually. Existing manufacturing, quality, sustainability, company, legal and contact information was retained. No DNS, production domain or Vercel setup was changed.

Main findings: flat product navigation, only 12 listed products, seven sparse enquiry ranges, repeated early composite imagery, minimal application discovery and a generic Export page. The previous app already had an honest email fallback, basic accessibility, unique metadata and a reliable static build. These were extended. No retail commerce was added.

## Image inventory and category mapping

Every filename is prefixed **ChatGPT Image Oct 1, 2026,**. All sources are 1536 × 1024. The three 08_* images are earlier references; the 25 10_* images are newly supplied. This table records visual classification, not verified materials, dimensions or capabilities.

| Image suffix | Visually inspected family | Central category mapping |
|---|---|---|
| 08_29_50 PM.png | Broad range / earlier reference | Optional broad reference library |
| 08_30_10 PM.png | Broad studio range / earlier reference | Optional broad reference library |
| 08_33_22 PM.png | Broad range / earlier reference | Optional broad reference library |
| 10_18_40 PM.png | Catering / function range | catering-range |
| 10_18_49 PM.png | Lids & accessories | lids-accessories |
| 10_18_54 PM.png | Wooden / bamboo accessories | wooden-bamboo |
| 10_19_00 PM.png | Tissues / napkins / dining | tissues, paper-products |
| 10_19_04 PM.png | Paper bags / carry packaging | paper-bags |
| 10_19_08 PM.png | Paper / kraft food packaging | kraft-packaging |
| 10_19_33 PM.png | Bagasse / sugarcane range | bagasse |
| 10_20_11 PM.png | Areca / supari leaf tableware | areca |
| 10_20_15 PM.png | Bakery packaging | bakery-packaging |
| 10_20_31 PM.png | Sweets / mithai packaging | sweets-packaging |
| 10_20_34 PM.png | Takeaway packaging | takeaway-packaging |
| 10_20_38 PM.png | Aluminium foil packaging | aluminium-foil |
| 10_20_43 PM.png | Portion / sauce / dessert / ice cream / utility cups | portion-sauce-cups, dessert-ice-cream-cups, utility-cups |
| 10_20_46 PM.png | Food / clamshell containers | food-containers, clamshell-containers |
| 10_20_50 PM.png | Spoons / forks / cutlery | cutlery |
| 10_20_53 PM.png | Packing thali / meal trays | meal-trays |
| 10_20_57 PM.png | Bowls | bowls |
| 10_21_01 PM.png | Trays | trays |
| 10_21_05 PM.png | Plates | plates |
| 10_21_08 PM.png | Cups | cups-glasses, custom-products |
| 10_21_12 PM.png | Broad range / 16 families | Optional broad reference library |
| 10_21_33 PM.png | Broad range / 15 families | Optional broad reference library |
| 10_21_37 PM.png | Broad range / 16 families | thermoformed-products |
| 10_21_41 PM.png | Broad range / 16 families | specialty-products |
| 10_21_47 PM.png | Broad range / 20 families; export panel excluded from claims | Optional broad reference library |

## Derived imagery

64 native-resolution product/group crops are stored in src/assets/products/derived/ and served as responsive WebP assets. Individual cup, plate, bowl, tray, meal tray, spoon, container, portion, dessert, foil, takeaway, bakery, mithai, leaf/fibre, kraft, bag, tissue, wooden accessory, lid and catering compositions support discovery. Small crops retain their original resolution and are not used as large hero photographs. Card containers provide consistent 4:3 presentation and whitespace. The earlier wide studio composition remains the clean broad hero; its logo and caption regions are excluded.

Crops were reviewed in six contact sheets. Fork/knife cutouts and a clear-bowl candidate were rejected because they clipped neighbouring silhouettes or retained labels. Selected crops use small neutral patches in empty background areas to remove residual captions; those regions and crop rectangles are recorded centrally. No product geometry or SKP logos were recreated. Originals are untouched.

Full catalogues are separate high-quality WebP images, fetched only on request through the accessible catalogue dialog. All 28 are available in the optional Resources selector. No full poster is used as a homepage card. Embedded poster specifications, certificates, environmental statements and export assertions remain unverified.

The exhaustive source/crop/role mapping is in docs/qa/product-export/asset-mapping.json and src/data/productMedia.js. All presentation imagery remains temporary; dedicated company-approved product photographs are still required. Earlier derivative files and archived legacy originals are retained. No legacy product photographs are used in the active product presentation. Paper blanks retain a photograph-pending state because no suitable visual was supplied. Actual factory photography remains an empty central slot, with the existing explicitly neutral technical illustration retained.

## Product architecture and routes

Five groups: Tableware; Food Packaging; Material Ranges; Specialty Packaging; Foodservice Essentials. 27 enabled ranges plus the existing Plates & Trays compatibility route. 12 historical listed products are preserved; 56 new visual-format enquiry records do not receive Product schema or invented technical values. Historical generic enquiry routes remain supported. Cross-category views share underlying records for leaf/fibre plates, bowls, trays and wooden cutlery rather than duplicating them.

Category routes:

- /products/cups-glasses — Cups & Glasses
- /products/plates — Plates
- /products/bowls — Bowls
- /products/cutlery — Cutlery
- /products/paper-products — Paper Products
- /products/thermoformed-products — Thermoformed Products
- /products/custom-products — Custom Printed Products
- /products/trays — Trays
- /products/food-containers — Food Containers
- /products/clamshell-containers — Clamshell Containers
- /products/portion-sauce-cups — Portion & Sauce Cups
- /products/dessert-ice-cream-cups — Dessert & Ice Cream Cups
- /products/takeaway-packaging — Takeaway Packaging
- /products/specialty-products — Specialty Products
- /products/plates-trays — Plates & Trays (compatibility)
- /products/meal-trays — Meal & Packing Trays
- /products/utility-cups — Multipurpose & Utility Cups
- /products/aluminium-foil — Aluminium Foil Packaging
- /products/sweets-packaging — Sweets & Mithai Packaging
- /products/bakery-packaging — Bakery Packaging
- /products/areca — Areca / Supari Leaf Tableware
- /products/bagasse — Bagasse / Sugarcane Tableware
- /products/kraft-packaging — Paper / Kraft Packaging
- /products/paper-bags — Paper Bags & Carry Packaging
- /products/tissues — Tissues & Napkins
- /products/wooden-bamboo — Wooden / Bamboo Accessories
- /products/lids-accessories — Lids & Accessories
- /products/catering-range — Catering & Function Range

There are 152 static routes total. Home, Products, every category/detail experience, Solutions, Export, Resources and shared navigation/footer/RFQ were updated. Industries inherits the improved range visuals and now supports pending range discussions where explicitly configured. About, Manufacturing, Quality, Sustainability, Contact, RFQ, legal pages and 404 retain their working architecture. Unique metadata and shared components apply throughout.

## Discovery and components

Products starts with five major visual groups, grouped range links and product/material/business pathways. Search recognizes cups, glasses, thali, trays, sauce, ice cream, foil, bakery, mithai, supari, kraft, bags, napkins, wooden/bamboo accessories, lids and catering. Filters expose only documented material, application, capacity and printing data. Pending formats remain labelled. Mobile filters use an accessible drawer. Results are paginated in groups of 12, keeping the initial catalogue concise.

The desktop mega-menu has four grouped columns plus Essentials, Solutions and International Buyer links. Mobile navigation uses native nested disclosures. Export is in primary navigation. Footer links to the five groups, solutions, company pages, export and verified contacts.

Reusable category cards, product cards, category intro, group discovery, technical detail/gallery, catalogue callout/dialog, export page and shared forms compose the journey. Category cards and product pages lead to domestic quotes and category/product-prefilled Export enquiries. Null technical, export packing and commercial fields stay hidden. Download links appear only for real documents.

Home now shows eight strategic range cards, six business discovery paths, material-direction links, the retained manufacturing/custom/quality story and a contextual Export feature. It does not display the entire poster collection.

## Export and RFQ

Export has a broad product hero, eight buyer enquiry profiles, nine portfolio ranges, a private-label/custom requirement discussion, a six-stage conditional sourcing conversation, quality/specification questions, destination-specific documentation guidance and a dedicated enquiry form. No existing countries, customers, certifications, shipping services or guaranteed capabilities are claimed.

Central export data supports IEC/GST/other documentation entries; all remain pending/hidden without evidence. Packing fields support inner pack, master carton, pieces/carton, dimensions, gross/net weight, CBM, palletization and container loading. Commercial fields support MOQ, samples, lead time, payment terms, Incoterms and port of loading. No defaults are published.

The dedicated Export form requires contact name, company, country, email, category and consent. Phone, buyer type, specific requirement, quantity, branding, destination and files are optional. Domestic forms retain only name/email/consent as required. Product selection shows the corresponding reference thumbnail. Product/category links prefill the correct form. No verified backend exists: the interface prepares an unsent email draft with a text-download fallback. Artwork must be attached manually. Invalid attachment errors and status announcements are supported. No test enquiry was sent.

## SEO, performance and accessibility

New routes receive unique titles/descriptions, canonical, Open Graph/Twitter data, breadcrumbs and sitemap entries. Organization/WebSite schema remains evidence-based. Product schema is restricted to historical listed records without offers, fabricated availability or reviews. 404 remains a real noindex response.

Responsive WebP sizes, native-resolution crops, below-fold lazy loading, explicit image dimensions and eager/high-priority broad hero loading keep the large source library out of initial payloads. The 68.6 MB source PNG library is excluded from deployment. Full catalogue images load only when explicitly opened. No framework migration, new runtime library or external font downloads were introduced. Exact measured asset sizes are in payload.json.

Native buttons/SVG icons, labelled forms, consent, status messages, focus indicators and skip navigation are preserved. Native catalogue/RFQ dialogs contain focus, Escape closes them and focus returns to the opener. Catalogue zoom scrolls internally on mobile. Mobile navigation uses semantic disclosures; filter drawer background is inert. Solid-background text contrast and reduced-motion checks cover updated representative pages. This is a focused review, not a WCAG certification.

## QA and information still required

Production build and eight source/build tests pass. Browser QA covers all 152 routes, every image, metadata, internal links and form labels; all routes at 360, 390, 430, 768, 1024 and 1440 px; every product/category RFQ; all 28 catalogue files; search/filter/no-result states; mobile and desktop menus; zoom/Escape/focus; Export prefill/email draft/download/file error; 404 and no initial homepage catalogue requests. Route screenshots and visual contact sheets support manual review. Final machine-readable results are in docs/qa/product-export/results.json.

SK must confirm actual category availability, sourcing versus manufacturing scope, exact SKU photographs, materials/coatings, dimensions/capacities, suitability, lids, packing/MOQ, lead times, custom/private-label scope, export feasibility, registration/documentation, destination requirements, commercial/shipping terms, certifications, actual factory photographs, company history/partners, current contacts and WhatsApp. An approved lead backend and approved real catalogue PDFs remain recommended.

## Version control

Commit message: Upgrade SKP product catalogue and export experience. Git push and Vercel deployment are verified after committing; the final user report records the hash and deployment result. No domain setup was modified.
