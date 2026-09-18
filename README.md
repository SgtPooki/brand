# @sgtpooki/brand

> Master brand identity, design tokens, visual assets, and presets for **SgtPooki LLC** and `sgtpooki.com`.

This repository provides the canonical design system tokens, typography scales, SVG/PNG assets, and integrations for Tailwind CSS and Open Props across all SgtPooki products.

---

## Installation

Install directly into any project using Git:

```bash
# npm
npm install github:SgtPooki/brand

# pnpm
pnpm add github:SgtPooki/brand

# yarn
yarn add github:SgtPooki/brand
```

---

## Usage

### 1. Tailwind CSS (AOT Compile / Standard Apps)

Add the preset to your `tailwind.config.js`:

```javascript
// tailwind.config.js
module.exports = {
  presets: [
    require('@sgtpooki/brand/tailwind.preset.js'),
  ],
  content: [
    './src/**/*.{js,ts,jsx,tsx,html,astro}',
  ],
};
```

Import the CSS custom properties in your root CSS file:

```css
@import "@sgtpooki/brand/tokens.css";
```

### 2. Open Props / Pure CSS (Zero JS / Zero Build Step)

For static HTML, Python/Go templates, or Cloudflare Workers without a JavaScript build pipeline:

```html
<!-- 1. Open Props (for standard sizing & typography scales) -->
<link rel="stylesheet" href="https://unpkg.com/open-props">

<!-- 2. SgtPooki Nordic Slate & Ice Blue Tokens -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SgtPooki/brand@main/tokens/tokens.css">
<!-- or load from your local static asset mount -->
```

Toggle theme dynamically:
```html
<html data-theme="dark"> <!-- or "light" -->
```

### 3. Visual Assets

All approved production assets live under `assets/`:
- `assets/svg/`: Single-path vector SVGs (`sp-chamfer-ice-blue.svg`, `sp-chamfer-slate.svg`, etc.)
- `assets/png_dark/` & `assets/png_light/`: High-resolution transparent PNGs (16px to 1024px)
- `assets/mobile/`: Apple touch icon (opaque `#0C0D0F`), Android Chrome, PWA maskable icons
- `assets/favicon.ico`: 16px, 32px, 48px multi-resolution favicon
- `assets/cli_splash.txt`: Terminal ANSI truecolor splash screen

---

## Documentation

See [`GUIDELINES.md`](./GUIDELINES.md) for full brand architecture, endorsement rules, WCAG contrast audits, and typography specs.
