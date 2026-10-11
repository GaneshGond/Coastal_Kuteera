# Coastal Kuteera Homestay — responsive website

A responsive single-page React + Vite website inspired by the supplied Coastal Kuteera design. It includes bilingual branding, rooms, amenities, coastal food, Uttara Kannada culture, gallery, Gokarna attractions, a Google Maps embed, directions, click-to-call and WhatsApp enquiry links. No payment gateway is included.

## Run locally

1. Install Node.js (LTS) if it is not already installed: https://nodejs.org/
2. Extract this project folder.
3. Open a terminal inside `coastal-kuteera-website`.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

To create a production build, run `npm run build`; output is written to `dist/`.

## Configuration

Edit `src/config.js` to update the homestay's name, address, Google Maps link, phone numbers, or WhatsApp number. WhatsApp click-to-chat does not require a paid API for ordinary one-to-one enquiries; the visitor opens WhatsApp and sends the pre-filled message themselves.

## Images and accuracy

The layout, section order, color palette, bilingual branding, and key UI elements follow the supplied design. The displayed photos are remote illustrative Unsplash images and can be replaced with the homestay's actual photographs for a closer visual match. Confirm the exact map pin/address and contact numbers before publishing. No payment flow is present.
