# SKP digital catalogue and bilingual B2B platform

## Public experience delivered
- `/products` retains visual family discovery before the grid, with material/application paths. Search includes product/category/subcategory, known application terms, keywords/synonyms, Hindi names, and verified code/material/capacity fields when available. Unknown capacity/material values do not create filters. Clear/browse/send-requirement empty states are available.
- Product cards now offer **View Details** and **Add to Enquiry**. Product details offer **Add to Enquiry**, **Request Product Details**, Export and selective sample links. Existing specification/photo evidence gates remain unchanged. One valid image stays one image; primary/alternate/side/packaging/application/technical roles are ready for actual future photography.
- `/catalogues` groups 27 range cards using clean category previews. `/catalogues/:category` provides a large complete artwork view with previous/next range, back to library, category browsing, RFQ and sample links. The existing 28-source resource/lightbox library remains available. Catalogue artwork is illustrative and never becomes verified SKU data. Approved official English/Hindi PDF slots remain null, with no fake download.
- `/enquiry` is a procurement shortlist, not a cart. Unique product IDs, per-item estimated quantity and notes are saved in `skp-enquiry-v1`. Navigation, refresh and language changes preserve them. Invalid/unknown stored IDs are discarded. Blocked storage falls back to current-visit memory with an honest note. No contact details/passwords/private records are persisted.
- The list offers removal, adding more products, domestic/export intent, buyer information and **Request Bulk Quote**. Selected product names/categories, quantities and notes automatically enter the enquiry payload/draft. Empty lists show a browse action and hide buyer submission controls. A subtle desktop utility link/mobile sticky link exposes the count only for actual selections. Mobile access hides during input focus and dialogs.
- `/samples` supports selection of multiple product families, detail/category prefill or copying the enquiry list, buyer/company/business details, expected quantity, shipping address, optional courier preference and notes. Delivery fields precede the action. No sample availability, free sample or free shipping is promised.
- The existing `submitEnquiry` transport boundary serves single, bulk and sample requests. No direct backend is connected, so requests prepare an email draft/download and clearly say the draft has not been sent. No emails were sent in QA.
- Featured Catalogues/Samples links extend the existing grouped mega-menu/mobile accordions. Search, language and enquiry utilities stay secondary to Request a Quote. Homepage receives compact catalogue/list entry links, not additional long sections.

## English / Hindi
English remains default. Indexable `/hi` and `/hi/...` versions match the same 182 base routes: **364 public pre-rendered routes**. No location-based switching or translation widget is used.

`src/locales/en.js`, `hi.js` and `hiContent.js` form a central message-ID vocabulary/copy layer. A shared server renderer translates surrounding HTML, accessible attributes, placeholders and metadata while leaving images, product IDs, measurements, company identity and user input intact. `localized` display fields on the existing product/category records hold `{en, hi}` values; there is no separate Hindi product database. English-compatible base fields remain unchanged.

`src/i18n.js` updates text/attributes and links in place. It preserves DOM controls, form values and selections rather than re-rendering pages or navigating home. Language changes keep path/query/hash and update `lang`, titles, descriptions, canonical and social URL/locale. `skp-language` remembers the preference. Explicit Hindi URLs remain Hindi even if an earlier preference was English. Hindi dictionaries load on Hindi use, not the default English entry. System Unicode/Devanagari fonts avoid a new font download; Hindi headings/wrapping have specific typography rules.

Each indexed page has localized title/description, its own canonical and English/Hindi/x-default hreflang. The sitemap contains both URL sets and reciprocal xhtml alternates. Breadcrumb schema is localized for Hindi; Organization/WebSite data contains only factual company information. Range products still have no fabricated Product schema. Hindi validation and fallback/status messages are provided. Important page content is HTML, not image text.

SKP should review Hindi terminology and commercial/legal phrasing before treating it as company-approved copy. Catalogue artwork itself remains unchanged. Brand/contact details, technical terminology and source reference identifiers may intentionally remain Latin text.

## Customer portal — intentionally not public
`src/data/platform.js` declares account route definitions and record fields for customer, enquiry, quotation, order, document, sample and review data. `src/components/customerPortal.js` holds SKP portal panel/empty-state architecture for account home, enquiries, quotations, orders, saved products, documents, reviews and profile. Repeat requirement maps real historical items into a new enquiry rather than placing an order.

Authentication is disabled. Account routes are **not** in public navigation, sitemap or generated pages and return 404. There is no login form, password storage, fake dashboard, quotation amount, order tracking or private document. `src/services/customer.js` refuses service access without enabled authentication, a real provider/session and an API base.

Backend activation requires a proper authentication provider, server-side session/tenant authorization, protected customer APIs, ownership checks for documents, secure downloads, validated/rate-limited enquiry/sample endpoints, CSRF/session protections and an approved privacy/retention policy. Frontend flags are not a security boundary. Do not merely toggle a flag to publish customer data.

## Reviews and genuine trust
Product reviews and company testimonials are separate structures. Reviews require approved, verified-buyer/order-linked evidence before a summary is returned; zero real reviews returns null and renders no stars/average. A reusable summary/distribution/review display is ready for genuine records. Submission has no public form until authenticated order verification and moderation exist. Testimonials and client logos require real verified/approved records; current arrays are empty and render nothing. No fabricated social proof was added.

## Visual continuity
The previously supplied Manufacturing, Custom Printing, Export, Quality and Foodservice scenes remain mapped centrally in `siteMedia.js`. Manufacturing/Export retain bounded native desktop depth, with reduced-motion/static tablet and mobile image-block fallbacks. Homepage hero, product Universe, category imagery and specification corrections remain intact. This pass adds no full-page wallpaper or unrelated redesign.

Three additional, unrequested source images appeared in the working folder during the pass (contact consultation, industries visual reference, solutions applications overview). They were not changed or used and are left outside this scoped commit.

## Technical validation
- Production build: **364 pre-rendered routes**, success.
- Source/build/data checks: **14 passing**, including specification gates, persistence/deduplication/corrupt storage, hidden portal/trust, stable option IDs, language SEO and Vercel JSON.
- Browser audit: every route, images, internal links, metadata uniqueness/canonicals, form labels and one main heading. All routes at **360, 390, 430, 768, 1024, 1440px**, no horizontal overflow.
- Product search: 24 existing English terms plus Hindi search, clear/no-match/pagination and verified-only filters.
- All 87 product RFQ contexts, all category/catalogue mappings, 28 on-demand source catalogues, grouped menus, mobile accordion/filter controls and dialog zoom/Escape/focus restore.
- New multi-product list: add/duplicate prevention/remove, quantities/notes, reload, navigation, language switches preserving form data, complete email draft payload, sample selection/address/courier and honest fallback. No messages sent.
- Both languages across Home, Products, Detail, Catalogues, Manufacturing, Quality, Industries, Export, About, Contact, Enquiry and Samples at all six widths. English/Hindi 404 and inactive account routes, localized validation and language-switch validity reset checked separately.
- Focused computed contrast, keyboard skip link and reduced motion passed. This is not a formal WCAG certification or field Core Web Vitals claim.
- No new dependencies, external paid service, API keys or font requests. Clean previews lazy-load; full artwork is requested only in its viewer/lightbox. Original image sources remain outside production output.
- `vercel.json` remains unchanged: valid JSON without BOM, static build/dist output. DNS and skgroupalwar.com are untouched.

Evidence: `docs/qa/platform`, `docs/qa/platform-full`. Large reproducible per-route captures are ignored; representative screenshots/results remain.

## Still required from SKP
1. SKU-to-photo approval; actual materials, capacities, dimensions, variants, lid fit, packaging/carton data, MOQ and commercial terms.
2. Actual product, factory, machinery, production, quality, warehouse/dispatch and team photography; verified capacities/company history/infrastructure.
3. Genuine certification/test/material/food-contact documents and confirmed export/private-label scope.
4. Approved testimonials, order-linked reviews, customer/client-logo permissions.
5. Real authentication/customer APIs, secure document storage, enquiry/sample backend and review moderation/order verification.
6. Verified current contact/WhatsApp information, an approved official English/Hindi downloadable catalogue, and company review of Hindi/legal copy.

## Release
Requested commit message: `Expand SKP digital catalogue and B2B enquiry experience`. Hash, push confirmation and visible Vercel preview deployment result are reported after final QA. No production/domain changes.
