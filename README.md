# SKP / S. K. Thermoformers website

A dependency-free, pre-rendered B2B catalogue and enquiry website. The existing application uses JavaScript templates, not React. Node 20+ is required; Node 24 is used locally.

## Commands

- `npm.cmd run dev`: development server at http://localhost:3000
- `npm.cmd run build`: clean static output in `dist/`
- `npm.cmd test`: metadata, route, content safety, enquiry and production asset checks (run build first)
- `npm.cmd run preview`: production preview on port 3000; use `PORT=3001` for browser QA
- `node scripts/refinement-qa.mjs`: comprehensive headless Edge checks at localhost:3001
- `node scripts/accessibility-qa.mjs`: focused text contrast, keyboard skip navigation and reduced-motion review

## Content architecture

- `src/data/company.js`: legal identity, contacts, capability toggles and unfilled evidence slots
- `src/data/products.js`: category definitions and structured products; unknown technical values remain null
- `src/data/industries.js`: markets and enabled application solutions; buyer pathways do not claim existing customers
- `src/data/pages.js`: editorial and website-information content
- `src/data.js`: compatibility exports and central route list
- `src/image-map.js`: centralized, replaceable image records with responsive sizes and provenance
- `src/components/`: layout, UI, catalogue/detail, forms and page templates
- `src/render.js`: route dispatch, metadata and evidence-conscious structured data
- `src/client.js`: menus, filtering, accessible enquiry dialog and unsent email drafts

66 static routes: all original routes remain, with a Solutions index and four application pages. Seven documented product families lead discovery. Seven unconfirmed families remain clearly labelled enquiry routes. Disable a category or product using its `enabled` flag. Custom Printed Products is a cross-category view of printing-enabled paper cup records.

## Adding verified information

Update the central data, not individual templates. Product fields support SKU, capacity, dimensions, colour, applications, features, temperature use, printing, lids, packaging, MOQ, variants, images and an actual PDF sheet. Empty values are omitted from public specifications. Gallery and variant sections render only when values exist. Product schema is omitted for pending enquiry records.

Company slots include leadership, dated history, milestones, factory/machinery/quality media, production capacity, certifications, export markets, client logos, catalogue and WhatsApp. No fabricated names, metrics, factory photographs or badges are published. Register approved photography in `imageAssets` and update the relevant central image key. Approved leadership, history, milestone and certificate entries have conditional templates; other future content can be added using these central slots without page-by-page data edits.

## Imagery

Supplied SKP catalogue composites remain in `src/assets/skp-products/`. `scripts/prepare-skp-images.mjs` records crops and produces WebP derivatives without upscaling. They are presentation references, not exact SKU or factory photography. Small source panels limit detail sharpness; dedicated photographs are the next priority. Legacy product imagery stays archived. Originals and archives are excluded from deployment.

`node scripts/prepare-brand-assets.mjs` builds a JPEG social card and proportional SKP favicon from the supplied logo and code-native layout.

## Enquiries

Only name, email and consent are required. Product/category quote context, buyer type, pathway, quantity, destination and artwork selection are supported. No message is sent automatically. Buyers must send the prepared email draft; the text download is a fallback. Attachments are selected and validated locally but must be attached manually in email mode.

A verified HTTPS `company.leadEndpoint` can enable multipart submission expecting a 2xx JSON `{success:true}` response. Server validation, safe file handling, lead delivery and privacy requirements must be implemented before activating that endpoint.

## Deployment and SEO

`vercel.json` retains static hosting with explicit build output, clean URLs, legacy PHP redirects and modest asset caching. GitHub main triggers the existing Vercel project. No domain connection is made.

Build metadata uses `SITE_URL` if provided, otherwise Vercel's project production URL, otherwise the local Vercel alias in company data. The old skgroupalwar.com site remains evidence/source information and is not connected or changed. Every route has a unique title/description, canonical, social metadata and relevant breadcrumbs. Pending reference products do not get Product schema. No prices, offers, reviews or availability are fabricated. The sitemap and robots use the same host; 404 is noindex with recovery links.

## QA and remaining information

See `docs/REFINEMENT.md`, `docs/qa/refinement/results.json` and `docs/qa/refinement/accessibility-performance.json`. All 66 routes were captured and visually reviewed. Browser checks cover six widths, assets, links, metadata, filters, every product RFQ, email-draft preparation, downloads, file validation, keyboard dismissal, focus restoration and 404. No enquiry was sent. Focused accessibility review is not a certification; local timings are not field Core Web Vitals scores.

Required next: current product and factory photographs, specifications, construction details, packing/MOQ/lead times, manufacturing scope, verified certificates, company/partner history and photos, export/private-label scope, current contacts and approved legal/submission integration.
