import fs from 'fs';
import path from 'path';
const dir = 'site/assets/screenshots';
fs.mkdirSync(dir, { recursive: true });
function wrap(title, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750" role="img">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b0d1a"/><stop offset="1" stop-color="#151a30"/></linearGradient>
  <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffd34d"/><stop offset="1" stop-color="#d99a00"/></linearGradient>
  <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="12" stdDeviation="16" flood-opacity="0.35"/></filter>
</defs>
<rect width="1200" height="750" rx="20" fill="url(#bg)"/>
<rect x="0" y="0" width="1200" height="48" rx="20" fill="#101322"/><rect x="0" y="24" width="1200" height="24" fill="#101322"/>
<circle cx="28" cy="24" r="7" fill="#ff5f56"/><circle cx="50" cy="24" r="7" fill="#ffbd2e"/><circle cx="72" cy="24" r="7" fill="#27c93f"/>
<text x="600" y="30" text-anchor="middle" font-family="Segoe UI,system-ui,sans-serif" font-size="13" font-weight="700" letter-spacing="0.08em" fill="#a7b0c8">${title}</text>
<text x="1080" y="30" text-anchor="end" font-family="Segoe UI,system-ui,sans-serif" font-size="11" fill="#f5b301" font-weight="700">GMARK</text>
<rect x="0" y="48" width="200" height="702" fill="#0f1326"/>
<rect x="16" y="68" width="168" height="28" rx="8" fill="rgba(245,179,1,0.18)"/><text x="24" y="86" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#ffd34d">Command Center</text>
<g font-family="Segoe UI,sans-serif" font-size="11" fill="#6b7394"><text x="24" y="118">Restaurant Floor</text><text x="24" y="144">Kitchen Queue</text><text x="24" y="170">Rooms &amp; Stays</text><text x="24" y="196">Billing &amp; GST</text><text x="24" y="222">Inventory</text><text x="24" y="248">Finance</text></g>
<rect x="16" y="680" width="168" height="44" rx="10" fill="#1a2038"/><text x="24" y="698" font-family="Segoe UI,sans-serif" font-size="10" fill="#a7b0c8">Grand Maratha House</text><text x="24" y="712" font-family="Segoe UI,sans-serif" font-size="9" fill="#6b7394">Pune - 42 rooms</text>
<g transform="translate(220,64)">${body}</g>
</svg>`;
}
const mocks = {
  'dashboard': wrap('GMARK - Command Center', `
<rect x="0" y="0" width="960" height="670" rx="16" fill="#151a30" filter="url(#sh)"/>
<text x="24" y="36" font-family="Segoe UI,sans-serif" font-size="18" font-weight="800" fill="#eef1fa">Command Center</text><text x="24" y="54" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Live occupancy, revenue, kitchen SLA - whole hotel at a glance</text>
<g transform="translate(24,72)">
  <rect x="0" y="0" width="210" height="96" rx="12" fill="#1a2038" stroke="rgba(245,179,1,0.18)"/><text x="16" y="24" font-family="Segoe UI,sans-serif" font-size="10" letter-spacing="0.08em" fill="#a7b0c8">OCCUPANCY</text><text x="16" y="58" font-family="Segoe UI,sans-serif" font-size="28" font-weight="800" fill="#ffd34d">68%</text><text x="16" y="76" font-family="Segoe UI,sans-serif" font-size="11" fill="#6b7394">28 / 42 rooms</text>
  <rect x="226" y="0" width="210" height="96" rx="12" fill="#1a2038"/><text x="242" y="24" font-family="Segoe UI,sans-serif" font-size="10" letter-spacing="0.08em" fill="#a7b0c8">TODAY REVENUE</text><text x="242" y="58" font-family="Segoe UI,sans-serif" font-size="26" font-weight="800" fill="#eef1fa">Rs 41,280</text><text x="242" y="76" font-family="Segoe UI,sans-serif" font-size="11" fill="#27c93f">+12% vs yesterday</text>
  <rect x="452" y="0" width="210" height="96" rx="12" fill="#1a2038"/><text x="468" y="24" font-family="Segoe UI,sans-serif" font-size="10" letter-spacing="0.08em" fill="#a7b0c8">OPEN ORDERS</text><text x="468" y="58" font-family="Segoe UI,sans-serif" font-size="28" font-weight="800" fill="#eef1fa">4</text><text x="468" y="76" font-family="Segoe UI,sans-serif" font-size="11" fill="#ff5f56">1 delayed &gt;15m</text>
  <rect x="678" y="0" width="234" height="96" rx="12" fill="#1a2038"/><text x="694" y="24" font-family="Segoe UI,sans-serif" font-size="10" letter-spacing="0.08em" fill="#a7b0c8">ARRIVALS / DEPARTURES</text><text x="694" y="58" font-family="Segoe UI,sans-serif" font-size="22" font-weight="800" fill="#eef1fa">6  -&gt;  4</text><text x="694" y="76" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Next: R-204 at 11:00</text>
</g>
<g transform="translate(24,190)">
  <rect x="0" y="0" width="560" height="200" rx="12" fill="#1a2038"/><text x="16" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#eef1fa">Revenue - last 7 days</text>
  <g transform="translate(16,40)"><rect x="0" y="100" width="64" height="40" rx="6" fill="#2a3050"/><rect x="72" y="80" width="64" height="60" rx="6" fill="#2a3050"/><rect x="144" y="90" width="64" height="50" rx="6" fill="#2a3050"/><rect x="216" y="50" width="64" height="90" rx="6" fill="url(#gold)"/><rect x="288" y="65" width="64" height="75" rx="6" fill="#2a3050"/><rect x="360" y="30" width="64" height="110" rx="6" fill="#2a3050"/><rect x="432" y="55" width="64" height="85" rx="6" fill="#2a3050"/></g>
</g>
<g transform="translate(600,190)">
  <rect x="0" y="0" width="336" height="200" rx="12" fill="#1a2038"/><text x="16" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#eef1fa">Kitchen SLA</text>
  <rect x="16" y="36" width="304" height="36" rx="8" fill="#1e2a1e"/><text x="28" y="58" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">T03 - Paneer Tikka</text><text x="260" y="58" font-family="Segoe UI,sans-serif" font-size="10" font-weight="700" fill="#27c93f">READY</text>
  <rect x="16" y="80" width="304" height="36" rx="8" fill="#2a2210"/><text x="28" y="102" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">T07 - Dal Tadka</text><text x="240" y="102" font-family="Segoe UI,sans-serif" font-size="10" font-weight="700" fill="#ffbd2e">12m</text>
  <rect x="16" y="124" width="304" height="36" rx="8" fill="#2a1a1a"/><text x="28" y="146" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">R-102 - Veg Biryani</text><text x="240" y="146" font-family="Segoe UI,sans-serif" font-size="10" font-weight="700" fill="#ff5f56">18m</text>
</g>
<g transform="translate(24,410)">
  <rect x="0" y="0" width="912" height="140" rx="12" fill="#1a2038"/><text x="16" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#eef1fa">Recent activity</text>
  <text x="16" y="50" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">09:42  Check-in  R-204 - Sharma family (2N)  - Front Desk</text>
  <text x="16" y="72" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">09:38  Order     T05 - 3 items -&gt; Kitchen  - Captain</text>
  <text x="16" y="94" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">09:31  Payment  Bill #GM_2026_000042 - Rs 2,840 (CGST+SGST)  - Cashier</text>
  <text x="16" y="116" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">09:15  Stock     Low: Paneer (2.1 kg)  - Inventory</text>
</g>`),
  'restaurant': wrap('GMARK - Restaurant Floor', `
<rect x="0" y="0" width="960" height="670" rx="16" fill="#151a30"/>
<text x="24" y="36" font-family="Segoe UI,sans-serif" font-size="18" font-weight="800" fill="#eef1fa">Restaurant Floor</text><text x="24" y="54" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Tap a table, place an order - it reaches the kitchen in seconds</text>
<g transform="translate(24,72)">
  <rect x="0" y="0" width="140" height="110" rx="12" fill="#1e2a1e" stroke="#27c93f" stroke-width="2"/><text x="16" y="28" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#eef1fa">T01</text><text x="16" y="44" font-family="Segoe UI,sans-serif" font-size="10" fill="#27c93f">Occupied</text><text x="16" y="68" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">4 guests</text><text x="16" y="86" font-family="Segoe UI,sans-serif" font-size="10" fill="#6b7394">Rs 1,240 - 12m</text>
  <rect x="156" y="0" width="140" height="110" rx="12" fill="#1a2038"/><text x="172" y="28" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#eef1fa">T02</text><text x="172" y="44" font-family="Segoe UI,sans-serif" font-size="10" fill="#6b7394">Available</text>
  <rect x="312" y="0" width="140" height="110" rx="12" fill="#2a2210" stroke="#ffbd2e" stroke-width="2"/><text x="328" y="28" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#eef1fa">T03</text><text x="328" y="44" font-family="Segoe UI,sans-serif" font-size="10" fill="#ffbd2e">Reserved</text><text x="328" y="68" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">2 guests</text>
  <rect x="468" y="0" width="140" height="110" rx="12" fill="#1e2a1e" stroke="#27c93f" stroke-width="2"/><text x="484" y="28" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#eef1fa">T04</text><text x="484" y="44" font-family="Segoe UI,sans-serif" font-size="10" fill="#27c93f">Occupied</text><text x="484" y="68" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">6 guests</text>
  <rect x="624" y="0" width="140" height="110" rx="12" fill="#1a2038"/><text x="640" y="28" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#eef1fa">T05</text><text x="640" y="44" font-family="Segoe UI,sans-serif" font-size="10" fill="#6b7394">Available</text>
  <rect x="780" y="0" width="132" height="110" rx="12" fill="#1a2038"/><text x="796" y="28" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#eef1fa">T06</text><text x="796" y="44" font-family="Segoe UI,sans-serif" font-size="10" fill="#6b7394">Available</text>
  <rect x="0" y="126" width="140" height="110" rx="12" fill="#1a2038"/><text x="16" y="154" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#eef1fa">T07</text><text x="16" y="170" font-family="Segoe UI,sans-serif" font-size="10" fill="#6b7394">Available</text>
  <rect x="156" y="126" width="140" height="110" rx="12" fill="#2a1a1a" stroke="#ff5f56" stroke-width="2"/><text x="172" y="154" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#eef1fa">T08</text><text x="172" y="170" font-family="Segoe UI,sans-serif" font-size="10" fill="#ff5f56">Billing</text><text x="172" y="194" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Rs 2,840</text>
</g>
<g transform="translate(24,340)">
  <rect x="0" y="0" width="912" height="220" rx="12" fill="#1a2038"/><text x="16" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#eef1fa">Order - T01 (4 guests)</text><text x="780" y="24" font-family="Segoe UI,sans-serif" font-size="10" fill="#6b7394">KOT #1042</text>
  <text x="16" y="60" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">Paneer Tikka x2</text><text x="800" y="60" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">Rs 560</text>
  <text x="16" y="82" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">Butter Naan x4</text><text x="800" y="82" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">Rs 200</text>
  <text x="16" y="104" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">Dal Tadka x1</text><text x="800" y="104" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">Rs 240</text>
  <text x="16" y="142" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Subtotal</text><text x="800" y="142" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Rs 1,000</text>
  <text x="16" y="162" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">CGST 2.5% + SGST 2.5%</text><text x="800" y="162" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Rs 50</text>
  <text x="16" y="186" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#ffd34d">Total</text><text x="780" y="186" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#ffd34d">Rs 1,050</text>
</g>`),
  'kitchen': wrap('GMARK - Kitchen Display (KDS)', `
<rect x="0" y="0" width="960" height="670" rx="16" fill="#151a30"/>
<text x="24" y="36" font-family="Segoe UI,sans-serif" font-size="18" font-weight="800" fill="#eef1fa">Kitchen Queue</text><text x="24" y="54" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Live tickets by status - opening, preparing, ready, served</text>
<g transform="translate(24,72)">
  <rect x="0" y="0" width="296" height="520" rx="12" fill="#1a2038"/><text x="16" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#ffbd2e">PREPARING (3)</text>
  <rect x="12" y="36" width="272" height="88" rx="10" fill="#2a2210" stroke="#ffbd2e" stroke-width="1.5"/><text x="24" y="58" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#eef1fa">T01 - KOT #1042</text><text x="200" y="58" font-family="Segoe UI,sans-serif" font-size="10" fill="#ffbd2e">8m</text><text x="24" y="78" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Paneer Tikka x2 - Butter Naan x4</text>
  <rect x="12" y="132" width="272" height="88" rx="10" fill="#2a2210"/><text x="24" y="154" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#eef1fa">T04 - KOT #1043</text><text x="200" y="154" font-family="Segoe UI,sans-serif" font-size="10" fill="#a7b0c8">4m</text><text x="24" y="174" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Veg Biryani x2 - Raita x2</text>
  <rect x="12" y="228" width="272" height="88" rx="10" fill="#2a1a1a" stroke="#ff5f56"/><text x="24" y="250" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#eef1fa">R-102 - RS #201</text><text x="200" y="250" font-family="Segoe UI,sans-serif" font-size="10" font-weight="700" fill="#ff5f56">18m</text><text x="24" y="270" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Masala Dosa x1 - Filter Coffee x2</text>
  <rect x="312" y="0" width="296" height="520" rx="12" fill="#1a2038"/><text x="328" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#27c93f">READY (2)</text>
  <rect x="324" y="36" width="272" height="88" rx="10" fill="#1e2a1e" stroke="#27c93f" stroke-width="1.5"/><text x="336" y="58" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#eef1fa">T03 - KOT #1040</text><text x="512" y="58" font-family="Segoe UI,sans-serif" font-size="10" font-weight="700" fill="#27c93f">READY</text><text x="336" y="78" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Paneer Tikka x1</text>
  <rect x="624" y="0" width="288" height="520" rx="12" fill="#1a2038"/><text x="640" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#6b7394">SERVED</text>
  <rect x="636" y="36" width="264" height="64" rx="10" fill="#151a30" opacity="0.7"/><text x="648" y="58" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#6b7394">T02 - KOT #1038 - Served</text>
</g>`),
  'rooms': wrap('GMARK - Rooms and Folio', `
<rect x="0" y="0" width="960" height="670" rx="16" fill="#151a30"/>
<text x="24" y="36" font-family="Segoe UI,sans-serif" font-size="18" font-weight="800" fill="#eef1fa">Rooms and Stays</text><text x="24" y="54" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Room grid, bookings, folio - everything follows the guest</text>
<g transform="translate(24,72)">
  <rect x="0" y="0" width="110" height="80" rx="10" fill="#1e2a1e" stroke="#27c93f"/><text x="12" y="22" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#eef1fa">R-101</text><text x="12" y="36" font-family="Segoe UI,sans-serif" font-size="9" fill="#27c93f">OCCUPIED</text><text x="12" y="56" font-family="Segoe UI,sans-serif" font-size="10" fill="#a7b0c8">Sharma - 2N</text>
  <rect x="122" y="0" width="110" height="80" rx="10" fill="#1a2038"/><text x="134" y="22" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#eef1fa">R-102</text><text x="134" y="36" font-family="Segoe UI,sans-serif" font-size="9" fill="#6b7394">VACANT</text>
  <rect x="244" y="0" width="110" height="80" rx="10" fill="#2a2210" stroke="#ffbd2e"/><text x="256" y="22" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#eef1fa">R-103</text><text x="256" y="36" font-family="Segoe UI,sans-serif" font-size="9" fill="#ffbd2e">RESERVED</text>
  <rect x="366" y="0" width="110" height="80" rx="10" fill="#1e2a1e" stroke="#27c93f"/><text x="378" y="22" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#eef1fa">R-104</text><text x="378" y="36" font-family="Segoe UI,sans-serif" font-size="9" fill="#27c93f">OCCUPIED</text>
  <rect x="488" y="0" width="110" height="80" rx="10" fill="#1a2038"/><text x="500" y="22" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#eef1fa">R-105</text><text x="500" y="36" font-family="Segoe UI,sans-serif" font-size="9" fill="#6b7394">VACANT</text>
  <rect x="610" y="0" width="110" height="80" rx="10" fill="#2a1a1a" stroke="#ff5f56"/><text x="622" y="22" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#eef1fa">R-106</text><text x="622" y="36" font-family="Segoe UI,sans-serif" font-size="9" fill="#ff5f56">DIRTY</text>
</g>
<g transform="translate(24,280)">
  <rect x="0" y="0" width="912" height="260" rx="12" fill="#1a2038"/><text x="16" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#eef1fa">Folio - R-101 - Sharma family - 2 nights</text>
  <text x="16" y="58" font-family="Segoe UI,sans-serif" font-size="10" letter-spacing="0.06em" fill="#6b7394">DATE          DESCRIPTION              AMOUNT</text>
  <text x="16" y="80" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">13 Sep       Room charge (1 night)      Rs 2,400</text>
  <text x="16" y="102" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">13 Sep       Room service - Veg Biryani  Rs 320</text>
  <text x="16" y="124" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">14 Sep       Room charge (1 night)      Rs 2,400</text>
  <text x="16" y="146" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">14 Sep       CGST 9% + SGST 9% (room)     Rs 864</text>
  <text x="16" y="182" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#ffd34d">Balance</text><text x="780" y="182" font-family="Segoe UI,sans-serif" font-size="13" font-weight="800" fill="#ffd34d">Rs 5,984</text>
</g>`),
  'billing': wrap('GMARK - Billing and GST', `
<rect x="0" y="0" width="960" height="670" rx="16" fill="#151a30"/>
<text x="24" y="36" font-family="Segoe UI,sans-serif" font-size="18" font-weight="800" fill="#eef1fa">Billing and GST</text><text x="24" y="54" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">CGST+SGST split invoices - F and B 5%, rooms 12-18% - CA-ready register</text>
<g transform="translate(24,72)">
  <rect x="0" y="0" width="560" height="380" rx="12" fill="#fff"/><text x="20" y="28" font-family="Segoe UI,sans-serif" font-size="11" font-weight="800" fill="#0b0d1a">TAX INVOICE</text><text x="20" y="42" font-family="Segoe UI,sans-serif" font-size="9" fill="#6b7394">Grand Maratha House - Pune - GSTIN 27ABCDE1234F1Z5</text><text x="420" y="28" font-family="Segoe UI,sans-serif" font-size="9" fill="#6b7394">Bill # GM_2026_000042</text>
  <text x="20" y="70" font-family="Segoe UI,sans-serif" font-size="9" letter-spacing="0.06em" fill="#6b7394">ITEM                QTY    RATE      AMOUNT</text>
  <text x="20" y="90" font-family="Segoe UI,sans-serif" font-size="10" fill="#0b0d1a">Paneer Tikka</text><text x="200" y="90" font-family="Segoe UI,sans-serif" font-size="10" fill="#0b0d1a">2</text><text x="280" y="90" font-family="Segoe UI,sans-serif" font-size="10" fill="#0b0d1a">Rs 280</text><text x="420" y="90" font-family="Segoe UI,sans-serif" font-size="10" fill="#0b0d1a">Rs 560</text>
  <text x="20" y="108" font-family="Segoe UI,sans-serif" font-size="10" fill="#0b0d1a">Butter Naan</text><text x="200" y="108" font-family="Segoe UI,sans-serif" font-size="10" fill="#0b0d1a">4</text><text x="280" y="108" font-family="Segoe UI,sans-serif" font-size="10" fill="#0b0d1a">Rs 50</text><text x="420" y="108" font-family="Segoe UI,sans-serif" font-size="10" fill="#0b0d1a">Rs 200</text>
  <text x="20" y="224" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#0b0d1a">Total</text><text x="400" y="224" font-family="Segoe UI,sans-serif" font-size="12" font-weight="800" fill="#0b0d1a">Rs 1,050</text>
</g>
<g transform="translate(600,72)">
  <rect x="0" y="0" width="336" height="380" rx="12" fill="#1a2038"/><text x="16" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#eef1fa">Sales register</text>
  <text x="16" y="80" font-family="Segoe UI,sans-serif" font-size="10" fill="#eef1fa">GM_000042  Rs 1,050   Rs 50</text>
  <text x="16" y="98" font-family="Segoe UI,sans-serif" font-size="10" fill="#eef1fa">GM_000041  Rs 5,984   Rs 864</text>
  <text x="16" y="168" font-family="Segoe UI,sans-serif" font-size="10" fill="#a7b0c8">Day total</text><text x="220" y="168" font-family="Segoe UI,sans-serif" font-size="11" font-weight="800" fill="#ffd34d">Rs 41,280</text>
</g>`),
  'inventory': wrap('GMARK - Inventory', `
<rect x="0" y="0" width="960" height="670" rx="16" fill="#151a30"/>
<text x="24" y="36" font-family="Segoe UI,sans-serif" font-size="18" font-weight="800" fill="#eef1fa">Inventory</text><text x="24" y="54" font-family="Segoe UI,sans-serif" font-size="11" fill="#a7b0c8">Suppliers, purchases, stock levels, low-stock alerts - CSV import</text>
<g transform="translate(24,72)">
  <rect x="0" y="0" width="912" height="140" rx="10" fill="#1a2038"/><text x="16" y="22" font-family="Segoe UI,sans-serif" font-size="10" letter-spacing="0.06em" fill="#6b7394">MATERIAL              STOCK        UNIT     STATUS</text>
  <text x="16" y="42" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">Paneer</text><text x="200" y="42" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#ff5f56">2.1 kg</text><rect x="460" y="32" width="80" height="18" rx="9" fill="#2a1a1a"/><text x="500" y="44" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="9" font-weight="700" fill="#ff5f56">LOW STOCK</text>
  <text x="16" y="62" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">Basmati Rice</text><text x="200" y="62" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">42 kg</text><rect x="460" y="52" width="60" height="18" rx="9" fill="#1e2a1e"/><text x="490" y="64" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="9" font-weight="700" fill="#27c93f">OK</text>
  <text x="16" y="82" font-family="Segoe UI,sans-serif" font-size="11" fill="#eef1fa">Cooking Oil</text><text x="200" y="82" font-family="Segoe UI,sans-serif" font-size="11" fill="#ffbd2e">8 L</text><rect x="460" y="72" width="60" height="18" rx="9" fill="#2a2210"/><text x="490" y="84" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="9" font-weight="700" fill="#ffbd2e">REORDER</text>
</g>
<g transform="translate(24,220)">
  <rect x="0" y="0" width="560" height="200" rx="12" fill="#1a2038"/><text x="16" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#eef1fa">Recent purchases</text>
  <text x="16" y="48" font-family="Segoe UI,sans-serif" font-size="10" fill="#a7b0c8">14 Sep - Sai Traders - Paneer 10 kg - Rs 3,200</text>
  <rect x="16" y="108" width="140" height="32" rx="8" fill="url(#gold)"/><text x="86" y="128" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="11" font-weight="800" fill="#0b0d1a">New purchase</text>
</g>
<g transform="translate(600,220)">
  <rect x="0" y="0" width="336" height="200" rx="12" fill="#1a2038"/><text x="16" y="24" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#eef1fa">Low-stock alerts</text>
  <rect x="16" y="36" width="304" height="44" rx="8" fill="#2a1a1a"/><text x="28" y="54" font-family="Segoe UI,sans-serif" font-size="11" font-weight="700" fill="#ff5f56">Paneer - 2.1 kg left</text>
</g>`),
};
for (const [name, svg] of Object.entries(mocks)) {
  fs.writeFileSync(path.join(dir, `${name}.svg`), svg, 'utf8');
  console.log(`created ${name}.svg (${svg.length} bytes)`);
}
