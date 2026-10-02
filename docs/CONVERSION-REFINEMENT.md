# Product visual and B2B conversion correction

The existing application, 152 routes, navigation, product taxonomy, Export structure and deployment configuration were preserved. The project remains the existing static JavaScript application, rather than React/Vite.

## Corrections to image/product relationships

| Previous presentation | Correction |
|---|---|
| Plain paper cups beside branded/printed cups | Public family name is now Paper cups; no assertion that the photographed cups are plain. |
| 100 ml tea cup beside a composition of several cup sizes | Historical capacity remains internal. Public name is Tea cup range, with no capacity or unrelated composition. Actual photography is requested. Existing URL is retained. |
| Disposable spoons & forks beside spoons only | Public family is Disposable spoons. Wooden fork imagery remains attached to its own fork family. |
| Table tissues & tissue rolls beside napkins | Public family is Table napkins; no roll claim beside that crop. |
| Paper plates beside generic round plate artwork | Public family is Round plates, with no asserted material specification. Historical paper-plate information remains internal. |
| Water plastic glass beside mixed clear beverage cup formats | Public family is Beverage glasses, without capacity/polymer specifications. |
| Related products selected by shared historical material | Related cards now stay in the same category and require a suitable image; plates no longer recommend cups because both were labelled Paper. |
| Historical capacity/material values automatically appearing in filters, RFQ or schema | Range images do not expose those values. Capacity/material filters are hidden until verified SKU records exist. RFQ carries product-family/category context and leaves capacity blank. |

All 87 records were audited through their mappings and detail routes. All 64 derived crop groups were visually reviewed. They remain range visuals, not verified SKU photographs. Technical tables, variants, features, export packing and commercial specifications require an explicit verified content state, verified specifications, verified image match and actual photography. A future approved entry can supply all of those in the centralized presentation mapping. No specifications were inferred from catalogue text.

## Buyer experience

- Homepage: clearer disposable tableware/foodservice packaging heading, explicit export link, new photography-only product-universe composition, category discovery, material image band and retained manufacturing/custom/quality story.
- Categories: up to three matching photography crops form an on-page visual hero. Visitors experience the range before opening a catalogue. Full artwork is a secondary Complete Range option.
- Cards: family name, brief application copy and enquiry actions; repeated warning badges and technical attributes removed. One restrained commercial note remains on product/category pages. Full-artwork caveats remain inside the optional viewer and legal information.
- Export: retained buyer profiles, sourcing journey, documentation discussion and dedicated form; added a container/fibre/kraft/foil visual band and cleaner public copy. No countries served, certifications or shipping capabilities were invented.
- RFQ: product/category/intent prefill retained; changing category clears stale product selection. Email fallback explicitly requires continuing in the buyer's email app. No message is sent automatically.
- Backend readiness: `submitEnquiry` separates form UI from transport, supports an approved endpoint, rejects unconfirmed delivery and defaults to an unsent email draft. No service, credentials or paid integration was added.
- Trust: approved facts can be enabled centrally; null/unverified registrations, capacity, clients, infrastructure and other company facts render nothing.

## Performance, mobile and SEO

Responsive WebP composition at 480/800/1200 px uses existing native-resolution crops without enlargement. Existing responsive assets, lazy loading, intrinsic image dimensions and critical hero loading remain. Homepage does not fetch full catalogues. No runtime library or external font was added. Product descriptions and category introductions are HTML; canonical, unique metadata, breadcrumbs and sitemap remain. Product schema is withheld for range-only records.

Mobile review covers 360/390/430 px, with broader layout checks at 768/1024/1440 px. Product compositions use contain/intrinsic sizing. Existing accessible menus, filter drawer, focus indicators and catalogue/RFQ dialog focus handling remain.

## QA and deployment

Production build: 152 routes. Ten source/build/transport tests pass. Full browser audit passed every route, asset, link, metadata, label, six-width overflow check, product RFQ prefill, search, filters, catalogue interaction and honest export-email fallback. Five requested buyer journeys pass. Category review sheets and desktop/mobile screenshots are in `docs/qa/conversion`. Final focused checks cover changed related-product logic, contrast, keyboard focus and buyer journeys.

`vercel.json` is valid UTF-8 JSON without a BOM. Its existing static build/output settings, clean URLs, legacy redirects and asset caching remain necessary and unchanged. No DNS or domain configuration was changed. Final commit/push/deployment results are reported in the completion message.

## Still required from SK

Actual SKU photographs and verified dimensions, capacities, construction/materials, product codes, lids, packing quantities, carton dimensions/weights/CBM, MOQ and commercial terms are still needed before publishing SKU specifications. Tea cups and paper blanks/bottoms especially need dedicated photography; all catalogue-derived groups await actual SKP photographs. Confirm manufacturing versus sourcing scope, customization/private label, export feasibility/documentation, company facts and certifications. Approved direct enquiry backend and company-reviewed commercial/legal copy remain follow-up work.
