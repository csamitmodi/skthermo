# SKP catalogue update

## Asset review and provenance
All three supplied 1536 × 1024 catalogue composites were visually reviewed before implementation. Originals remain in `src/assets/skp-products/` and are excluded from the production source copy. `scripts/prepare-skp-images.mjs` records exact crop coordinates and creates WebP derivatives without upscaling. `src/image-map.js` is the central replacement map for category, product, hero and brand imagery.

- 08_30_10: broad range hero; cups, glasses, plates, bowls, plastic cutlery, food containers, paper products, thermoformed packaging, custom print and specialty panels. Captions and unverified promotional claims are excluded.
- 08_29_50: trays, clamshells, portion cups, desserts and takeaway panels, retaining complete small SKP marks where present.
- 08_33_22: original SKP logo crop, preserving proportions.

These are product-family references, not documentary factory photographs or confirmed SKU variants. Individual panels are only 180–373 pixels wide. Responsive derivatives avoid wasting bandwidth, but dedicated high-resolution product photography is still needed for detailed inspection. Product-family references are labelled accordingly.

## Catalogue structure
14 primary product families; previous plates-trays route remains for compatibility. Existing product detail URLs remain. Seven new enquiry records cover families without confirmed historical portfolio evidence. `categoryDefinitions` supports enabled/disabled families; dependent product records and routes are filtered automatically. Materials, applications and 100 ml historical capacity use existing data; no poster size, certification, environmental, leak resistance or microwave claims were adopted.

## Legacy assets
Seven old product photographs are preserved under `public/assets/archive/legacy-products/`; none appear in current product presentation. Existing stock imagery and generated hero originals remain in the library for historical provenance, with no new product use. Paper blanks/bottoms retains an explicitly labelled illustration because none of the supplied panels represents this production input accurately.

## Information requiring company confirmation
Current category availability and supplier/manufacturer scope; exact variants, polymer grades/coatings, sizes, packing, MOQ, lead times, printing scope, documentation and suitability. Wooden cutlery is a visual reference only: existing cutlery detail uses plastic range imagery and no wooden manufacturing claim is made. The enquiry integration remains email-draft based; an online lead endpoint has not been supplied.

## Verification
Production build: 61 routes. Existing automated tests pass. Headless Edge QA checks every route and image, product pages at 1440 and 390 pixels, overflow, console errors, search/material filters, selected product quote context and mobile navigation. Results and reviewed screenshots are in `docs/qa/skp/`. Corrected existing malformed text encoding and replaced action/navigation glyphs with inline SVGs. Fixed production preview root-path validation and added configurable preview port.
