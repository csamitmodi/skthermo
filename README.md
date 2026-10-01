# SK Thermoformers — implementation and handover

A new, independent identity and dependency-free, pre-rendered B2B website. The workspace was empty: no existing source, assets, routing, framework, forms, SEO or deployment configuration existed to retain. No other local project was inspected or reused.

## Run

Requires Node.js 20+ (Node 24 used in verification). No package installation required.

- Development: `npm.cmd run dev` ? http://localhost:3000
- Production: `npm.cmd run build` ? dist/
- Preview: `npm.cmd run preview` (stop the development server first)
- Checks: `npm.cmd test`

Deploy the contents of dist to a static host. Every route has its own index.html, so SPA fallback is unnecessary. The included _redirects supports Netlify-style legacy redirects; configure equivalent redirects on your chosen host. The development server also redirects known legacy PHP URLs. Audit legacy product detail/blog URLs before switching the live domain: current site access was incomplete. Query-based product.php URLs currently redirect to the catalogue; map them to exact new products when historical IDs are confirmed.

## Architecture

- src/data.js: company, contacts, categories, products, applications, manufacturing journey, navigation, page content, missing data and capability toggles.
- src/render.js: shared layout, product and category cards, industry pages, editorial pages, RFQ and enquiry forms, metadata and JSON-LD.
- src/client.js: accessible menu disclosures, native modal dialog, product filters/search, contextual RFQ, validation, draft generation and optional submission adapter.
- src/styles.css: original design system, responsive layouts, reduced-motion support, focus states.
- scripts/build.mjs: static production build, sitemap, robots, 404 and redirect output.
- scripts/server.mjs: local development / static preview server.

47 pages: homepage; 8 category pages; 12 product detail pages; industries listing and 12 industry pages; About, Manufacturing, Custom Solutions, Quality, Sustainability, Export, Resources, Contact, RFQ and 3 legal drafts. Category/detail routes share the /products/[slug] architecture. Keep all slugs unique.

## Data changes

Add a product to products and it appears automatically in discovery, enquiry selection, detail routes and sitemap. Populate sizes, specifications, packing, finish, gallery and specPdf with verified data. Current gallery/PDF fields are reserved; extend rendering when approved files are supplied. Current images are original SVG illustrations, visibly labelled and never represented as photographs. Replace art calls with verified assets plus dimensions, alt text and responsive images when available.

company.metrics, certifications, leadership, social and whatsapp are intentionally empty. Numeric and certification badges are not rendered. Private-label/OEM capabilities are false; enquiry options allow buyers to ask without asserting that these services exist. If enabling new capabilities, add verified supporting copy and conditional sections. Do not activate services merely because a buyer submits an enquiry.

## Forms / backend

Forms support category, product, capacity, quantity, customization, location, name, company, phone, email, message, artwork and consent. Product RFQs preserve category and known size. Catalogue/general enquiries do not require a quantity. Email draft generation happens locally. The visitor must click Open email app and send the draft; there is no fake delivery success. A downloadable text fallback is provided. Files must be attached manually in email mode.

Set company.leadEndpoint to an approved HTTPS endpoint to enable submission. The adapter sends multipart FormData, and expects a 2xx JSON response containing {"success":true}. Required server work: field validation, file type/content and size checks, malware scanning, safe attachment storage, rate limits, honeypot checking, abuse monitoring, explicit CORS policy, lead/email delivery, retention rules and CRM if desired. Frontend validation is not a security boundary. No external analytics or tracking is included.

## SEO / accessibility / performance

All routes are pre-rendered HTML with unique titles, descriptions, canonicals, OpenGraph and Twitter metadata. Organization, WebSite, Product (no offers or prices) and BreadcrumbList JSON-LD are emitted where appropriate. Sitemap and robots are generated. SVG social card is included; supply a 1200×630 PNG/JPEG for broad social-preview compatibility.

Semantic landmarks, skip link, labelled fields, native validation, consent, visible focus, keyboard menu dismissal, modal focus management, reduced motion and no unnecessary animation. System fonts and inline SVG eliminate font and image requests. No third-party runtime packages. Responsive rules target 320, 375, 390, 430, 768, 1024 and 1440+ widths. No invented SKU sizes or capacity filters.

## Verification

Production build: passed, 47 routes. Node syntax checks: passed. Automated route, unique-title, canonical, internal-link, no-fabricated-commerce, product-context and form-disclosure checks: passed. Live HTTP check: all 47 pages and 5 assets returned 200. No TypeScript or lint configuration exists. Browser inventory contained no apps or browsers, so screenshot review, actual mobile overflow checks, browser console checks, keyboard interaction testing and Lighthouse measurements remain unverified. Run these before launch; no performance score is claimed.

## Required from the company

Current product list, dimensions/capacities, material grades/coatings, finishes, applications, packing, MOQ, lead times, sample process and artwork requirements. Factory/production/packing/warehouse photographs and video, genuine product photography, current certificates and test reports, downloadable catalogue, leadership details, dated milestones and confirmed metrics. Confirm WhatsApp, contact details, OEM/private-label/export scope and shipping documentation. Approve legal drafts before public launch.

Asset folders are provided under public/assets: products, factory, machines, quality, warehouse, team, certificates and applications. No competitor photographs or fake factory imagery have been used.


## Product photography update
Recovered seven images from SK’s original website; five are mapped to matching products, three category cards use relevant range photos, and the hero/custom section use original-site imagery. Sources: docs/image-sources.json. Unmatched categories retain explicitly labelled illustrations. Historic image text is not treated as a current specification. UTF-8 encoding and broken arrow glyphs were corrected.
