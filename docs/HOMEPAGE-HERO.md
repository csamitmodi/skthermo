# Supplied SKP homepage hero integration

Source: `src/assets/skp-products/skp-homepage-hero.png.png`, 1983 × 793 pixels. The source is untouched and excluded from production payloads.

The embedded left-side logo, headline, support copy, buttons, icons and labels are removed by a deterministic crop. Desktop extracts x=860, y=0, width=1123, height=793. Mobile extracts x=900, y=125, width=1083, height=668, reducing the background and giving products more prominence. Neither crop adds products or claims. No image-generation service was used.

`scripts/prepare-home-hero.mjs` generates six quality-90 WebP derivatives, without enlargement. `src/data/homeHeroMedia.js` centrally records provenance, crops, dimensions and responsive sources. Replacing the source/artwork later does not require rewriting the homepage.

`src/components/homeHero.js` renders real HTML for the eyebrow, H1, concise supporting copy, product link, RFQ button and export link. The existing official logo remains in the header. The artwork is illustrative range imagery, not verified SKU photography.

Desktop has a full-width warm-white section, approximately 80–90% of the first screen including the header, with a readable left content zone and large product artwork to the right. CSS fades remove the hard edge; contain sizing preserves the product composition. The old boxed image, embedded-label treatment and separate trust strip were removed from the homepage opening. Product discovery follows directly.

Mobile uses a separate `<picture>` source with content, two real CTAs, the larger product crop, then the export link. It does not shrink the desktop layout. The image is eager with high fetch priority, explicit dimensions and reserved aspect ratio. No unnecessary catalogue preload was added.

At 1× fresh browser loads: 360/390/430 px select the 480 px mobile asset (49,700 bytes); 1440 px selects the 960 px desktop asset (159,216 bytes). Higher-density displays can select the sharper derivatives. These are asset measurements, not field Core Web Vitals results.

QA: visual review at 1920, 1440, 1024, 768, 430, 390 and 360 px; no horizontal overflow, no original PNG/catalogue downloads, correct desktop/mobile sources, one HTML H1, working product/export links and RFQ opening/Escape/focus restoration. The 152-route production build and ten regression tests pass. DNS, domains, product data and Export architecture remain unchanged.
