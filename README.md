# SKP / S. K. Thermoformers website

A dependency-free, pre-rendered B2B catalogue and enquiry website. The existing application uses JavaScript templates, not React. Node 20+ is required; Node 24 is used locally.

## Commands

- `npm.cmd run dev`: development server at http://localhost:3000
- `npm.cmd run build`: clean static output in `dist/`
- `npm.cmd test`: metadata, route, content safety, enquiry and production asset checks (run build first)
- `npm.cmd run preview`: production preview on port 3000; use `PORT=3001` for browser QA
- `node scripts/product-export-qa.mjs`: comprehensive headless Edge checks at localhost:3001
- `node scripts/accessibility-qa.mjs`: focused text contrast, keyboard skip navigation and reduced-motion review

## Content architecture

- `src/data/company.js`: legal identity, contacts, capability toggles and unfilled evidence slots
- `src/data/products.js`: category definitions and structured products; unknown technical values remain null
- `src/data/industries.js`: markets and enabled application solutions; buyer pathways do not claim existing customers
- `src/data/pages.js`: editorial and website-information content
- `src/data/productMedia.js`: all 28 visual references, crop coordinates, roles and source provenance
- `src/data/export.js`: international buyer pathways and unverified/null export data
- `src/data.js`: compatibility exports and central route list
- `src/image-map.js`: centralized, replaceable image records with responsive sizes and provenance
- `src/components/`: layout, UI, catalogue/detail, forms and page templates
- `src/render.js`: route dispatch, metadata and evidence-conscious structured data
- `src/client.js`: menus, filtering, accessible enquiry dialog and unsent email drafts

152 static routes preserve existing URLs and add grouped discovery, 27 enabled product ranges, 56 visual-format enquiry pages and nine application solutions. Twelve historical listed products retain evidence-based fields. Unknown availability/specifications stay pending, and material/category views share underlying records. Disable a category or product using its `enabled` flag.

## Adding verified information

Update the central data, not individual templates. Product fields support SKU, capacity, dimensions, colour, applications, features, temperature use, printing, lids, packaging, MOQ, variants, images and an actual PDF sheet. Empty values are omitted from public specifications. Gallery and variant sections render only when values exist. Product schema is omitted for pending enquiry records.

Company slots include leadership, dated history, milestones, factory/machinery/quality media, production capacity, certifications, export markets, client logos, catalogue and WhatsApp. No fabricated names, metrics, factory photographs or badges are published. Register approved photography in `imageAssets` and update the relevant central image key. Approved leadership, history, milestone and certificate entries have conditional templates; other future content can be added using these central slots without page-by-page data edits.

## Imagery

Supplied SKP catalogue composites remain in `src/assets/skp-products/`. `node scripts/prepare-product-library.mjs` builds 64 reviewed native-resolution crop derivatives and 28 optional WebP catalogues. `node scripts/clean-generated-derivatives.mjs` removes only stale generated crop files. Source rectangles and any whitespace cleanup regions are traceable centrally. They are presentation references, not exact SKU or factory photography. Small source panels limit detail sharpness; dedicated photographs are the next priority. Legacy product imagery stays archived. Originals and archives are excluded from deployment.

`node scripts/prepare-brand-assets.mjs` builds a JPEG social card and proportional SKP favicon from the supplied logo and code-native layout.

## Enquiries

Domestic forms require only name, email and consent. The dedicated Export form additionally requires company, country and category. Product/category quote context, buyer type, pathway, quantity, destination and artwork selection are supported. No message is sent automatically. Buyers must send the prepared email draft; the text download is a fallback. Attachments are selected and validated locally but must be attached manually in email mode.

A verified HTTPS `company.leadEndpoint` can enable multipart submission expecting a 2xx JSON `{success:true}` response. Server validation, safe file handling, lead delivery and privacy requirements must be implemented before activating that endpoint.

## Deployment and SEO

`vercel.json` retains static hosting with explicit build output, clean URLs, legacy PHP redirects and modest asset caching. GitHub main triggers the existing Vercel project. No domain connection is made.

Build metadata uses `SITE_URL` if provided, otherwise Vercel's project production URL, otherwise the local Vercel alias in company data. The old skgroupalwar.com site remains evidence/source information and is not connected or changed. Every route has a unique title/description, canonical, social metadata and relevant breadcrumbs. Pending reference products do not get Product schema. No prices, offers, reviews or availability are fabricated. The sitemap and robots use the same host; 404 is noindex with recovery links.

## QA and remaining information

See `docs/PRODUCT-EXPORT.md` for the complete image mapping, changes and remaining data; `docs/qa/product-export/results.json` for all 152 routes and six-width browser QA; `docs/qa/product-export/asset-mapping.json` for provenance; and `docs/qa/product-export/accessibility-performance.json` for focused accessibility review. Browser checks cover images, links, metadata, search/filter synonyms, every product RFQ, category context, all 28 catalogues, desktop/mobile menus, catalogue zoom/focus, Export prefill, honest email drafts/downloads, file errors and 404. No enquiry was sent. Local measurements are not field Core Web Vitals scores.

Required next: current product and factory photographs, specifications, construction details, packing/MOQ/lead times, manufacturing scope, verified certificates, company/partner history and photos, export/private-label scope, current contacts and approved legal/submission integration.
