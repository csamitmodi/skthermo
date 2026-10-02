# Solutions, Contact and English terminology refinement

## Scope and implementation

The working static JavaScript application and its bilingual pre-rendering were preserved. This pass changes the Solutions landing page, Contact page and direct-contact access. Product verification rules, product/category architecture, Export structure and homepage hero remain intact. No DNS or production-domain configuration changed.

### Solutions visual mapping

No dedicated `solution-*` image has been supplied yet. All eight application scenes below are **temporary clean photographic-area crops** from `src/assets/skp-products/skp-solutions-applications-overview.png.png`. Their crop coordinates and untouched source provenance are in `src/data/applicationMedia.js`; generation is reproducible with `node scripts/prepare-application-media.mjs`. No headings, descriptions, numbers or buttons from the overview are used as website UI.

| Application / derived basename | Explore Solution destination |
| --- | --- |
| Beverage Service / beverage-service | /solutions/beverage-service |
| Catering & Events / catering-events | /solutions/catering-events |
| Institutional Foodservice / institutional-foodservice | /solutions/institutional-foodservice |
| Custom Branding / custom-branding | /solutions/custom-branding |
| Takeaway & Delivery / takeaway-delivery | /solutions/takeaway-delivery |
| Bakery / bakery | /solutions/bakery |
| Sweets & Confectionery / sweets-confectionery | /solutions/sweets-confectionery |
| Restaurants & QSR / restaurants-qsr | /solutions/restaurants-qsr |

The Solutions hero uses the overview's clean upper-right foodservice composition, `solutionsHero`. Eight individually supplied high-resolution application images are still needed, ideally with product foregrounds and recognisable industry backgrounds. Current cards retain their native panoramic proportions and are not enlarged into full-screen heroes. Each card has real HTML number, heading, concise description and link. Two large columns at desktop/tablet widths become one column below 768px. The end CTA carries `source=solutions` into the real enquiry payload; the single suitability note appears below the cards.

### Contact image and conversion

`skp-contact-consultation.webp.png` was visually inspected and mapped to `applicationMedia.contact`. Responsive WebP derivatives show the representative consultation, laptop and packaging samples in a compact split hero. Mobile places content before the image. The person is not named or represented as an actual SK employee; one restrained caption identifies the consultation visual as representative.

Call links use `tel:+919414015833`. WhatsApp uses the expressly approved number `919414015833`, encoded messages and normal safe external links. General message:

> Hello SK Thermoformers,\nI would like to discuss a foodservice packaging requirement.

Product/category pages use their actual human-readable family name. Export and Custom Solutions use international and custom-branding messages respectively. No internal product ID or invented specification is passed. Central helpers are in `src/components/contactActions.js`.

Desktop has two compact, labelled phone/WhatsApp icon actions in the lower-right gutter. Mobile has Call / WhatsApp / Enquire with safe-area padding and reserved page space. Existing enquiry-list access remains above the bar. The bar is hidden while forms are focused, the mobile menu is open, filters are open or a modal is open. Desktop controls also hide while form fields are focused. Product/detail mobile Enquire preserves the category/product query; Export Enquire leads to its existing form.

Contact combines direct details and the existing enquiry form, then a concise four-step buying conversation and compact closing CTA. Historical secondary phone numbers are retained internally but removed from the Contact page. The primary phone, email and address remain unchanged. Footer phone/email are clickable and WhatsApp has a readable action.

The existing email-draft fallback remains honest; nothing is reported as delivered without backend confirmation. Form IDs, `data-event` hooks and a `skp:action` event prepare call, WhatsApp, RFQ, form-start and form-submit analytics without installing a service or sending personal data to analytics.

## Terminology and routing

Public solution/category labels use **Sweets & Confectionery**. Updated areas include centralized solution/product-category/catalogue labels, homepage solution links, Products application discovery, search placeholder, shared category cards, RFQ selectors/context, catalogue titles, image alt text, generated breadcrumbs/metadata/schema and English/Hindi translations.

The solution slug changes to `/solutions/sweets-confectionery`. The old English and Hindi solution routes redirect permanently to the corresponding new routes. Local preview uses HTTP 301; Vercel's `permanent: true` redirects use its permanent redirect handling. Internal links, canonical URLs, hreflang and sitemap entries use the new slug. Product/category identifiers and the already-English `/products/sweets-packaging` and `/catalogues/sweets-packaging` routes are retained to protect relationships and saved enquiries. No old Mithai industry route existed.

Remaining legacy terms are intentional: backward-compatible search aliases in `catalogue.js`; legacy redirect sources in server/build/Vercel configuration and their QA assertions; historical audit/report-generation text and tests for those aliases. Originals and catalogue artwork are preserved. Embedded artwork text is not converted into verified website specifications. Active HTML names, descriptions, headings and controls contain no legacy terminology.

## Other-page visual audit — no redesign performed

| Page | Finding |
| --- | --- |
| /industries | Strong existing application hero; lower market grid remains predominantly text and would benefit from dedicated market imagery later. |
| /manufacturing | Existing production hero and bounded immersive section provide visual depth. Actual plant/machinery photography remains the main credibility improvement needed. |
| /quality | Existing inspection hero is visually coherent; lower content is compact and text-led. Actual inspection/documentation evidence should precede expansion. |
| /about | Most under-visualised page: concise company information with no real team/plant photography. Add approved documentary imagery and company story when supplied. |
| /export | Already visually substantial, with immersive logistics imagery and product discovery; no automatic redesign warranted. |
| /products | Existing visual group discovery is appropriate. Keep product browsing clean; no application background or automatic redesign added. |

Visual rule: use people when human activity explains consultation or an application. Product/category pages remain product-focused. Actual factory, machinery, team, leadership and inspection images take priority over representative AI scenes; never represent a fictional facility or person as documentary SK photography.

## Performance and accessibility

29 WebP derivatives use responsive `srcset` / `sizes` without enlargement. Original PNGs stay untouched and outside the production payload. The two page heroes load eagerly with high fetch priority; below-fold application images are lazy loaded and dimensioned. The Solutions page does not fetch the full overview graphic. Contact loads only its consultation derivatives. No new runtime dependency or scroll animation was introduced.

Keyboard-operable native links, visible focus states, accessible names on icon controls, strong WhatsApp contrast on the footer and reduced-motion hover fallback are preserved. English/Hindi content and controls use the centralized translation architecture; form input and enquiry selections are not reset by language changes.

## Validation

Production build: 364 pre-rendered routes. Source/build tests: 14 passed. Chrome QA checks both languages at 1440, 1024, 768, 430, 390 and 360px; all eight solution links and images; Contact fields and real mailto draft; correct call/WhatsApp links and encoded contextual messages; RFQ source/product/category; mobile controls and enquiry-list positioning; reduced motion; no overflow or JavaScript errors. All 364 public routes were checked for unintended public legacy terminology and successful responses. Results and screenshots are in `docs/qa/solutions-contact/`.

`vercel.json` remains valid BOM-free JSON with the static build configuration and the two scoped permanent redirects. No deployment/domain connection was changed. This work is included in the user-authorized website commit and deployment. The final delivery report records the commit and GitHub/Vercel result.
