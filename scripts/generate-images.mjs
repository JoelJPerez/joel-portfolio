// Generates branded placeholder images for projects + the Open Graph image.
// Run: node scripts/generate-images.mjs   (requires: npm i sharp --no-save)
// Placeholders are meant to be REPLACED by real screenshots later:
// just drop a real PNG at public/projects/<slug>.png with the same name.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

mkdirSync('public/projects', { recursive: true });

const ACCENT = '#8b72ff';
const BG = '#0c0e16';
const CARD = '#141726';
const LINE = '#232739';
const MUTED = '#9aa0b5';

// Abstract dashboard mockup inside a browser frame
function projectPlaceholder(title, subtitle) {
  const bars = [58, 92, 74, 110, 66, 96, 84, 120, 72, 100]
    .map(
      (h, i) =>
        `<rect x="${470 + i * 62}" y="${560 - h}" width="36" height="${h}" rx="6" fill="${ACCENT}" opacity="${0.35 + (i % 3) * 0.22}"/>`,
    )
    .join('');
  const rows = [0, 1, 2, 3]
    .map(
      (i) =>
        `<rect x="470" y="${180 + i * 54}" width="${560 - i * 90}" height="22" rx="11" fill="${LINE}"/>`,
    )
    .join('');
  const navItems = [0, 1, 2, 3, 4]
    .map(
      (i) =>
        `<rect x="120" y="${190 + i * 58}" width="${190 - (i % 2) * 40}" height="20" rx="10" fill="${i === 0 ? ACCENT : LINE}" opacity="${i === 0 ? 1 : 0.9}"/>`,
    )
    .join('');

  return `<svg width="1200" height="750" viewBox="0 0 1200 750" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="750" fill="${BG}"/>
  <!-- grid -->
  <g stroke="${LINE}" stroke-width="1" opacity="0.5">
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 63}" y1="0" x2="${i * 63}" y2="750"/>`).join('')}
    ${Array.from({ length: 13 }, (_, i) => `<line x1="0" y1="${i * 63}" x2="1200" y2="${i * 63}"/>`).join('')}
  </g>
  <!-- browser window -->
  <rect x="80" y="70" width="1040" height="610" rx="18" fill="${CARD}" stroke="${LINE}" stroke-width="2"/>
  <!-- title bar -->
  <rect x="80" y="70" width="1040" height="52" rx="18" fill="${LINE}" opacity="0.55"/>
  <circle cx="118" cy="96" r="7" fill="${MUTED}" opacity="0.7"/>
  <circle cx="142" cy="96" r="7" fill="${MUTED}" opacity="0.5"/>
  <circle cx="166" cy="96" r="7" fill="${MUTED}" opacity="0.3"/>
  <rect x="420" y="84" width="360" height="24" rx="12" fill="${BG}"/>
  <!-- sidebar -->
  <rect x="100" y="142" width="330" height="518" fill="${BG}" opacity="0.45"/>
  <rect x="120" y="164" width="46" height="10" rx="5" fill="${ACCENT}"/>
  ${navItems}
  <!-- content rows -->
  ${rows}
  <!-- chart -->
  ${bars}
  <line x1="470" y1="560" x2="1090" y2="560" stroke="${LINE}" stroke-width="2"/>
  <!-- caption -->
  <text x="600" y="712" font-family="DejaVu Sans Mono, monospace" font-size="26" font-weight="bold" fill="#e8eaf2" text-anchor="middle">${title}</text>
  <text x="600" y="740" font-family="DejaVu Sans Mono, monospace" font-size="15" fill="${MUTED}" text-anchor="middle">${subtitle}</text>
</svg>`;
}

// Open Graph image, 1200x630
function ogImage() {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${BG}"/>
  <g stroke="${LINE}" stroke-width="1" opacity="0.55">
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 63}" y1="0" x2="${i * 63}" y2="630"/>`).join('')}
    ${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${i * 63}" x2="1200" y2="${i * 63}"/>`).join('')}
  </g>
  <rect x="0" y="0" width="1200" height="630" fill="url(#fade)"/>
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${BG}" stop-opacity="0"/>
      <stop offset="1" stop-color="${BG}" stop-opacity="0.85"/>
    </linearGradient>
  </defs>
  <text x="90" y="180" font-family="DejaVu Sans Mono, monospace" font-size="26" fill="${ACCENT}">~/joel-perez</text>
  <text x="90" y="290" font-family="DejaVu Sans, sans-serif" font-size="72" font-weight="bold" fill="#e8eaf2">Joel Perez</text>
  <text x="90" y="360" font-family="DejaVu Sans, sans-serif" font-size="34" fill="${MUTED}">Full-Stack Developer</text>
  <text x="90" y="470" font-family="DejaVu Sans Mono, monospace" font-size="24" fill="#e8eaf2">.NET  ·  React  ·  Angular  ·  SQL  ·  AWS</text>
  <rect x="90" y="510" width="150" height="6" rx="3" fill="${ACCENT}"/>
</svg>`;
}

await sharp(Buffer.from(projectPlaceholder('OrderFlow', 'screenshot placeholder — replace with real capture')))
  .png()
  .toFile('public/projects/orderflow.png');
await sharp(Buffer.from(projectPlaceholder('VoiceAgent Studio', 'screenshot placeholder — replace with real capture')))
  .png()
  .toFile('public/projects/voiceagent-studio.png');
await sharp(Buffer.from(ogImage())).png().toFile('public/og-image.png');

console.log('images generated');
