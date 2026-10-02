# SKP visual experience and buyer journey — October 2026

## Supplied image inventory and mapping
All five original 1983 × 793 PNG sources were visually inspected, preserved untouched and mapped by content. `src/data/siteMedia.js` is the single replacement point; `scripts/prepare-site-media.mjs` reproduces derivatives.

| Source filename (in src/assets/skp-products) | Visual content | Usage |
|---|---|---|
| manufacturing-production.webppng.png | Paper rolls, cup-forming machinery and cup conveyor | Manufacturing hero and one later Production Focus section |
| custom-printing-private-label.webppng.png | Plain cups, colour/printing references and branded cups | Custom Solutions hero, supported by an HTML plain → design/printing → branded packaging journey |
| export-bulk-supply.webppng.png | Cartons, pallets, container/dispatch scene and packaging | Export hero and one later private-label/buying-brief CTA |
| quality-control.webppng.png | Cup measurement and inspection scene | Quality hero |
| applications-foodservice.webppng.png | Beverage, takeaway, bakery and catering applications | Industries hero and one homepage application section |

These are representative AI visuals, not photographs of SK premises, machinery, staff, tests or shipments. A single restrained contextual note accompanies each relevant hero. No pictured equipment, capacity, certification, export market or printing technology became company data. Future approved photography replaces this mapping without page redesign.

## Reusable faded visual system
`src/components/immersive.js` supports an image key, position, overlay strength, content width, hero priority, optional depth and disclosure. CSS warm overlays and top/bottom gradients blend sections into the off-white site. The homepage hero is unchanged; Products remains a clean browsing surface.

Manufacturing and Export each have one bounded native sticky scene on desktop above 1024px with a fine pointer, hover capability and no reduced-motion preference. This is a restrained depth effect inside a section, not page-wide fixed backgrounds; it uses no JavaScript scroll listener. Tablet uses static scenes. At 768px and below, scenes become separately cropped normal image blocks and clean text follows. Reduced motion disables sticky depth. Background imagery is decorative for assistive technology.

## Focused refinement
- Homepage: preserved the supplied hero and Product Universe; combined manufacturing/custom and quality/material gateways; replaced repeated application cards with compact business links; condensed Export to a clear gateway. Removed separate repetitive credibility, material, workflow and quality panels while retaining dedicated-page detail. The captured 390px homepage decreased from 11,339px to 6,816px (about 40%).
- Products: family discovery comes before search, with material and application gateways. Category applications/related-range sections remain available. Quote/discussion actions use consistent wording and preserve category/product context.
- Product accuracy: all 87 range records and 27 categories were audited again. Existing name/image corrections remain intact. No new SKU specifications were introduced; unverified specifications and Product schema remain hidden. Historical tea-cup capacity stays internal with no mismatched product photograph. Missing imagery uses a neutral range treatment without promising a photograph is available.
- Navigation: existing grouped desktop menu and mobile accordions preserved and tested. Removed a duplicate Export footer link, retained international access, simplified Disclaimer label.
- RFQ: core domestic contact, category/product, quantity and message stay visible; optional location/buyer and technical/artwork details use native accessible disclosures. Export retains required name/company/country/email/category/consent and optional commercial fields. Enquiry adapter, category filtering, stale-selection clearing and honest email-draft fallback remain intact. No email was sent during QA. WhatsApp stays hidden because no verified number exists.
- Manufacturing/Quality/Custom: new editorial heroes and concise buying-oriented sections; no invented processes, equipment or certificates. About retains factual identity and hidden future leadership/history/trust data.
- Legal/404/SEO: existing privacy, B2B terms, disclaimer, unique metadata, canonicals, social preview, Organization/WebSite/breadcrumb schema, robots and sitemap verified. 404 gained Homepage access. Corrected a literal HTML break in the new editorial breadcrumbs. No fake product prices/reviews/availability or default Vite imagery.

## Performance
25 responsive WebP derivatives: desktop 640/960/1440px and mobile 480/800px, using selected 1150px-wide mobile source crops. Originals remain out of production output. 1440px files range 112–203KB versus 1.9–2.4MB sources; mobile 480px files range 34–56KB. Only needed route imagery is requested. Heroes are eager/high priority; later scenes lazy-load, with explicit dimensions. Homepage does not fetch full catalogue originals. No runtime library or scrolling script was added. Solid-background contrast, visible focus, menu/dialog keyboard behaviour and reduced motion were checked; this is not a claim of formal WCAG certification or measured field Core Web Vitals.

## Validation
- Production build: 152 pre-rendered routes, success.
- Automated source/build checks: 11 passing.
- Browser audit: every route, image, internal link, unique title/description/canonical and form label; 152 routes at 360, 390, 430, 768, 1024 and 1440px with no horizontal overflow.
- Search: 24 terms, pagination, clear/no-results, verified-only filters.
- All product RFQ prefills, category RFQ/catalogue mappings, 28 on-demand catalogue originals, Escape/focus restoration, desktop menu, mobile accordions and filters.
- Five buyer journeys: Plates, Bagasse, Catering, Export and mobile category → product → RFQ.
- Export email-draft preparation, destination, download and invalid attachment; no fake success and no messages sent.
- Focused 11-page visual audit at all six widths, native sticky/static mobile and reduced-motion checks; console/page error checks passed.
- `vercel.json`: unchanged, minimal static-output configuration, valid JSON without BOM; checked by build tests. No domain/DNS changes.

QA evidence: `docs/qa/immersive`, `docs/qa/immersive-full`, `docs/qa/immersive-journeys`. Individual full-route captures are reproducible and ignored; review sheets and representative captures retained.

## Actual SK information still required
Actual factory, machinery, production, warehouse/dispatch, quality, team and product photographs; approved SKU-to-photo mapping and dimensions/materials/capacity/packing/MOQ/lid compatibility; company history/leadership/infrastructure/capacity; current quality documents/certifications/material declarations; export commercial scope/terms/documentation; verified WhatsApp and current contacts; approved legal copy and a real direct-enquiry backend. Unavailable facts remain hidden, not public placeholders. Reference catalogue crops and all five new scenes remain illustrative until approved actual photography is supplied.

## Version control / deployment
Commit message: `Polish SKP visual experience and buyer journey`. Commit hash, push and visible Vercel result are reported after successful final QA. Only the existing preview deployment is used; skgroupalwar.com and DNS are untouched.
