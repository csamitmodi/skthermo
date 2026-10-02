# Connected Industries and Contact background heroes

## Implementation and current asset limitation

The supplied industry design reference was located as `src/assets/skp-products/skp-industries-people-visual-reference.png.png`, rather than the approximate `skp-industries-page-reference` name. It was visually inspected and provides all eight environments with natural human activity and relevant products. It is a 1214 × 1296 page composition, not eight high-resolution photographs.

Clean scenes were derived without embedded headings, numbers, buttons or neighbouring borders. Individual usable scenes are only 380–583px wide and 143–178px high. **They are not stretched to cover a large desktop hero.** The eight detail pages currently use a neutral cream background with a native-resolution industry scene integrated into the background layer. This is an intentional temporary quality safeguard, not the finished full-cover photographic treatment. Dedicated high-resolution backgrounds remain necessary for all eight details.

The reusable `backgroundHero` component already supports full-area photography with `object-fit: cover`, background positioning, warm horizontal/bottom CSS overlays, real HTML content and mobile recomposition. The Industries landing page uses the existing high-resolution `applications-foodservice.webppng.png` composition as its full-cover background. Contact uses a clean, sufficiently larger photographic-area crop from `skp-contact-hero-reference.png.png` as its full-cover background. Neither reference is displayed as a webpage screenshot.

Central media is in `src/data/backgroundMedia.js`; central industry experience configuration is in `src/data/industryExperience.js`. The latter controls title, copy, hero/card roles, position, overlay, product categories and enquiry context without eight duplicated components. A dedicated `hero` media entry with `heroMode: 'cover'` can replace a bounded reference scene without redesigning the template. Card and hero roles may use different crops of the same future scene.

## Routes, visual mapping and product families

All eight industry cards and detail backgrounds use the corresponding clean scene from the people/activity reference. The routes are preserved; each also has a `/hi` equivalent.

| Industry | Detail route | Existing product families linked |
| --- | --- | --- |
| Restaurants & QSR | /industries/restaurants-qsr | Cups & Glasses; Food Containers; Takeaway Packaging; Portion & Sauce Cups; Cutlery; Lids & Accessories |
| Hotels | /industries/hotels | Cups & Glasses; Plates; Bowls; Food Containers; Cutlery; Tissues & Napkins |
| Catering | /industries/catering | Plates; Bowls; Trays; Cutlery; Food Containers |
| Events | /industries/events | Plates; Cups & Glasses; Bowls; Cutlery; Meal & Packing Trays |
| Institutional Foodservice | /industries/institutional-buyers | Meal & Packing Trays; Food Containers; Bowls; Cups & Glasses |
| Corporate Buyers | /industries/corporate-buyers | Cups & Glasses; Bowls; Plates; Meal & Packing Trays; Tissues & Napkins |
| Retail & Food Businesses | /industries/retail | Cups & Glasses; Food Containers; Plates; Bowls; Takeaway Packaging; Paper Bags |
| Distributors & Wholesalers | /industries/wholesalers-distributors | Cups & Glasses; Plates; Bowls; Cutlery; Food Containers; Takeaway Packaging; Paper Bags |

Mappings are application enquiry pathways using existing range-level category data. They do not assert SKU availability or new manufacturing capability. No dimensions, capacities, materials, temperature claims, certifications, customers, employee identities, contracts or warehouse scale were inferred from visuals.

Each detail page follows a shared flow: background hero with breadcrumbs and two HTML CTAs; industry requirement/brief; relevant visual product families; application/service visual and bulk/custom CTA; contextual business enquiry form. Existing inactive specialist routes remain intact. The landing cards use the same scene as their destination and show native panoramas without enlarging small crops.

## Dedicated hero images required

For **each** entry below provide an approved, text-free landscape image at **16:9 or wider**, preferably **2560 × 1440 or larger**, with usable clean area on the left and environment/activity/products toward the centre/right. Separate mobile crops can be supplied later. These recommendations describe required artwork, not SK company facts.

| Industry | Recommended scene | Products to include | Natural human activity |
| --- | --- | --- | --- |
| Restaurants & QSR | Modern restaurant or service counter | Cups, meal boxes, bowls, takeaway containers, portion cups, cutlery | Staff preparing or serving food |
| Hotels | Hotel dining, breakfast or buffet service | Plates, bowls, cups, food containers | Hospitality staff arranging or serving food |
| Catering | Professional banquet/buffet | Plates, bowls, trays, containers, cutlery | Catering team preparing or serving buffet |
| Events | Function foodservice setting | Plates, cups, bowls, cutlery, containers | Service staff working around meal service |
| Institutional Foodservice | Organised cafeteria or canteen | Compartment trays, containers, bowls, cups | Staff serving and people using organised dining |
| Corporate Buyers | Office pantry or workplace dining | Paper cups, bowls, plates, meal packaging | Employees or pantry staff naturally using the space |
| Retail & Food Businesses | Food packaging supply/display area | Cups, containers, plates, bowls, takeaway formats | Staff arranging or selecting packaging |
| Distributors & Wholesalers | Clean wholesale/distribution environment | Bulk foodservice formats, cartons and product stacks | Staff handling cartons or stock |

## Contact

The new Contact reference was visually inspected: several people discussing packaging samples around a laptop. Only its right-side consultation photography is extracted: x=650, y=126, width=1022, height=481. This excludes the generated navigation, headline, buttons, panels and form. The source remains untouched.

Desktop uses the photo across the hero background at `center`, with cream opacity strongest behind the left-side HTML headline/copy and a progressive horizontal/bottom fade. The hero uses the shared 500–720px / approximately 70svh system. The previous rectangular side image and public representative caption were removed.

Direct Contact and Send a Business Enquiry are warm-white panels overlapping the lower hero edge slightly, with restrained borders/shadows. Approved contact details remain unchanged. The form adds an optional Industry / Application select; name, email and consent remain the only required fields. No example telephone number is populated as a real value.

Call: `tel:+919414015833`. WhatsApp: `https://wa.me/919414015833`, with an encoded message: “Hello SK Thermoformers,\nI would like to discuss a foodservice packaging requirement.” The actual link contains a newline, not literal backslash-n text. External links retain safe attributes. Existing floating/mobile contact controls remain; controls hide while fields are focused.

Send an Enquiry stays on Contact, scrolls to the form and focuses the Name field. It preserves existing entered values and URL context, and respects reduced motion. No enquiry is sent merely by clicking the CTA. The honest email-app fallback remains; no backend delivery is fabricated.

## Industry RFQ context

Industry buttons carry the human-readable industry name, not a SKU. The modal shows that context and includes it in the enquiry payload/email draft. Product-family links add an `industry` query parameter; product/RFQ links and quote buttons preserve it during the connected product journey. Contact accepts the same approved industry names. Context is validated against the eight enabled industries and is not written to persistent storage, avoiding accidental reuse in later unrelated enquiries.

Hidden industry fields are used in generic forms; Contact exposes the optional selector. Selecting a language does not change stored English field values, entered buyer data or enquiry-list products. Public titles/copy/labels/alt text and metadata use the central Hindi translation layer.

## Mobile, performance and accessibility

Below 768px the hero background is recomposed beneath the HTML content with a stronger top fade, preserving people/products without text over faces. It remains an integrated background layer, not a rectangular side card. Native reference-scene height follows its aspect ratio to avoid blank mobile bands. No fixed backgrounds, parallax or scroll listeners were added.

29 responsive WebP assets were generated at quality 91 without source enlargement, totaling about 644KB across all widths combined. Each detail route requests only its own scene; the main page lazily loads card scenes. The hero loads eagerly/high priority, with explicit source dimensions and CSS-reserved layout. Original PNGs stay out of the production payload.

Decorative hero imagery has empty alt text and is hidden from assistive technology; meaningful card/service images have localized descriptive alt text. Headings, breadcrumbs and actions remain semantic HTML. Native modal keyboard behavior, visible focus, labelled controls and reduced-motion handling are preserved.

## QA and deployment

Production build passed: 364 pre-rendered routes. All 14 source/build tests passed. Chrome QA covers 120 page/language/width combinations across the main Industries page, eight detail pages and Contact, at 1440, 1024, 768, 430, 390 and 360px. It checks image loading, one H1, no overflow, no reference-scene enlargement, all eight connected product/RFQ journeys, industry payloads, correct Call/WhatsApp links, same-page Contact focus, honest email draft and Hindi form-context preservation. Results and screenshots are in `docs/qa/background-heroes/`.

No DNS, domain, verified company details, unrelated navigation or technical product specifications were changed. This pass is included in the previously authorized GitHub/Vercel deployment workflow. The final delivery report records the commit and verified deployment status.
