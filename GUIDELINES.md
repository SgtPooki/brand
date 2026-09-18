# SgtPooki LLC — Brand Identity Guidelines

> **Status:** Ratified & Canonical  
> **Aesthetic:** Nordic Slate & Ice Blue (Developer-first, Minimalist Engineering)  
> **Scope:** Master brand guidelines for **SgtPooki LLC**, `sgtpooki.com`, and all SgtPooki products/services.  
> **Repository:** Managed independently in `@sgtpooki/brand` (`github:SgtPooki/brand`).

---

## 1. Brand Architecture & Product Endorsement

SgtPooki operates as an **Endorsed Brand House**. Individual products (whether internal tools, SaaS utilities, or public applications) maintain their distinct product identities while carrying the explicit endorsement of SgtPooki.

### Endorsement Matrix

| Context | Formal Presentation | Short / UI Presentation |
|---|---|---|
| **Company & Corporate** | `SgtPooki LLC` | `SgtPooki` |
| **Web Presence** | `sgtpooki.com` | `sgtpooki.com` |
| **Products & Services** | `[Product Name] — by SgtPooki` | `[Product Name]` with `by SgtPooki` badge & SP Monogram |
| **CLI / Developer Tools** | `[tool-name] (by SgtPooki)` | `[tool]` with ice-blue SP splash header |

### Rules for Endorsement
1. **Co-branding:** The product name always leads. The endorsement suffix (`— by SgtPooki` or `by SgtPooki`) appears in muted slate text (`--text-secondary`).
2. **Badge Treatment:** In navigation bars and headers, the SP Monogram may appear at 16–20px next to the "by SgtPooki" label as a subtle trust mark.
3. **No Dilution:** Never create derivative logos that glue external product icons directly onto the SP monogram. The monogram remains standalone.

---

## 2. The Brand Mark: Polished Chamfer SP

The core brand mark is the **Polished Chamfer SP Monogram** (`chamfer_polished_v1_no_bars`), featuring interlocking `S` and `P` letterforms sculpted with 45-degree corner chamfers and geometric ribbon cuts.

```
                  █████████████████           
               ████████████████████████        
              ███████████████████████████      
             ██████                 ██████     
             █████        █████      █████     
              ██████      █████      █████     
               ███████    █████     █████      
                 ██████   ██████████████       
                   █████  █████████████        
                   █████  ██████               
         ██████████████   █████                
       ███████████████   █████                 
                        █████                  
```

### Clear Space & Scale
- **Clear Space:** Maintain minimum clear padding equal to **50% of the mark's height** on all sides. Do not intrude text, borders, or backgrounds into this zone.
- **Minimum Digital Sizes:**
  - `16px`: Multi-resolution favicon & browser tabs.
  - `24px`: Navigation bars, compact buttons, and inline badges.
  - `48px`: Avatars, profile headers, and card titles.
  - `128px+`: Splash screens, README headers, marketing collateral.

### Mark Prohibitions
- **NEVER** procedural-draw text, bars, or additional geometry over the mark.
- **NEVER** rotate, flip, or skew the mark off its 45° chamfer axis.
- **NEVER** apply 3D emboss, bevels, drop shadows, or gradient strokes.
- **NEVER** use unapproved candy/neon colors (e.g. saturated green, fluorescent cyan).

---

## 3. Color Palette: Nordic Slate & Ice Blue

The palette takes inspiration from Linear and Raycast—restrained carbon surfaces, muted slate structures, and icy precision blue accents. This replaces high-saturation toy colors with an engineered, focused workspace aesthetic.

### Dark Mode (Primary)

| Token | Hex | Name / Usage | WCAG AA Contrast |
|---|---|---|---|
| `--bg-canvas` | `#0C0D0F` | Matte Carbon (Base app canvas) | Baseline |
| `--bg-surface` | `#14161A` | Graphite (Cards, modals, panels) | — |
| `--bg-surface-subtle` | `#1A1D24` | Elevated Slate (Hover states) | — |
| `--border-default` | `#262A32` | Hairline Slate Border | 3.2:1 vs Canvas |
| `--text-primary` | `#F1F5F9` | Slate 100 (Headings, primary copy) | **17.8:1** (AAA) |
| `--text-secondary` | `#94A3B8` | Slate 400 (Secondary copy, descriptions) | **7.4:1** (AAA) |
| `--text-tertiary` | `#94A3B8` | Slate 400 (Captions, subtle text) | **7.4:1** (AAA) |
| `--brand-mark` | `#93C5FD` | Muted Ice Blue (Primary SP Monogram) | **10.2:1** (AAA) |
| `--btn-primary-bg` | `#2563EB` | Precision Blue (Primary CTA button) | **4.6:1** vs White text |
| `--btn-primary-hover` | `#1D4ED8` | Deep Precision Blue (CTA Hover) | **6.1:1** vs White text |

### Light Mode

| Token | Hex | Name / Usage | WCAG AA Contrast |
|---|---|---|---|
| `--bg-canvas` | `#F8FAFC` | Slate 50 (App canvas background) | Baseline |
| `--bg-surface` | `#FFFFFF` | Pure White (Cards, elevated containers) | — |
| `--border-default` | `#E2E8F0` | Slate 200 (Standard border rule) | — |
| `--text-primary` | `#0F172A` | Slate 900 (Headings, body copy) | **18.9:1** (AAA) |
| `--text-secondary` | `#475569` | Slate 600 (Secondary copy) | **7.1:1** (AAA) |
| `--text-tertiary` | `#64748B` | Slate 500 (Captions, subtle text) | **4.6:1** (AA) |
| `--brand-mark` | `#1E293B` | Deep Slate (Primary mark in light mode) | **13.5:1** (AAA) |
| `--brand-mark-alt` | `#2563EB` | Precision Blue (Accent mark variant) | **4.8:1** (AA) |
| `--btn-primary-bg` | `#2563EB` | Precision Blue (CTA button) | **4.6:1** vs White text |

---

## 4. Typography System

| Role | Font Family | Fallbacks | Usage |
|---|---|---|---|
| **Display / Headlines** | `Space Grotesk` | `-apple-system, BlinkMacSystemFont, sans-serif` | H1, H2, Hero titles, Product branding |
| **Interface & Body** | `Inter` | `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | UI controls, paragraph copy, tables |
| **Code & Terminal** | `JetBrains Mono` | `ui-monospace, Menlo, Monaco, monospace` | Terminal output, code blocks, metrics, logs |

### Hierarchy & Letter Spacing
- **Display Headings (`h1`, `h2`):** Font weight `600` or `700`, letter spacing `-0.02em` (tight).
- **Section Headings (`h3`, `h4`):** Font weight `600`, letter spacing `-0.01em`.
- **UI Labels & Badges:** `Inter` 500 or 600, letter spacing `0.01em`, uppercase tracking where appropriate.
- **Code & Numbers:** `JetBrains Mono` 400 or 500, tabular figures enabled (`font-variant-numeric: tabular-nums`).

---

## 5. Integration Workflows

### Mode A: Tailwind CSS (Recommended for Apps with a Build Step)

Install the brand package:
```bash
npm install github:SgtPooki/brand
```

Add the preset in `tailwind.config.js`:
```javascript
module.exports = {
  presets: [
    require('@sgtpooki/brand/tailwind.preset.js'),
  ],
  content: [
    './src/**/*.{js,ts,jsx,tsx,html,astro}',
  ],
};
```

Import the tokens in your CSS:
```css
@import "@sgtpooki/brand/tokens.css";
```

Available Tailwind utility classes:
- Backgrounds: `bg-bg-canvas`, `bg-bg-surface`, `bg-bg-elevated`
- Borders: `border-border`, `border-border-subtle`, `border-border-emphasis`
- Text: `text-content-primary`, `text-content-secondary`, `text-content-tertiary`
- Brand & Buttons: `text-brand-ice`, `bg-accent-primary`, `hover:bg-accent-primary-hover`
- Radii: `rounded-md`, `rounded-lg`, `rounded-1`, `rounded-2`
- Shadows: `shadow-sm`, `shadow-md`, `shadow-1`, `shadow-2`
- Fonts: `font-sans`, `font-mono`, `font-display`

---

### Mode B: Open Props & Pure CSS (Zero-JS / Zero Build Step)

For static HTML, Python/Go templates, or Cloudflare Workers where you do not want an npm/compiler pipeline:

```html
<!-- 1. Open Props for standard sizing & fluid typography -->
<link rel="stylesheet" href="https://unpkg.com/open-props">

<!-- 2. SgtPooki Brand Tokens -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SgtPooki/brand@main/tokens/tokens.css">
```

Write standard modern CSS referencing standard custom properties:
```css
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  padding: var(--size-4);
  box-shadow: var(--shadow-2);
  border-radius: var(--radius-2);
  transition: all var(--transition-fast);
}

.card:hover {
  border-color: var(--border-emphasis);
  box-shadow: var(--shadow-3);
}
```

Toggle theme dynamically:
```html
<html data-theme="dark"> <!-- or data-theme="light" -->
```

---

## 6. Asset Directory Reference

All ratified production assets live under `assets/`:

```
brand/
├── package.json                     # @sgtpooki/brand package manifest
├── README.md                        # Quickstart and integration docs
├── GUIDELINES.md                    # Master Brand Specification (this file)
├── tokens/
│   ├── tokens.css                   # Semantic CSS Custom Properties (Open Props compatible)
│   ├── tailwind.preset.js           # Exportable Tailwind CSS Preset (v3 & v4)
│   └── tailwind-v4.css              # Native Tailwind v4 @theme integration
├── templates/
│   └── social/
│       └── og-template.html         # Product Open Graph card template
└── assets/
    ├── favicon.ico                  # 16x16, 32x32, 48x48 multi-res web favicon
    ├── cli_splash.txt               # ANSI truecolor terminal splash screen
    ├── social/
    │   └── og-default.png           # 1200x630 universal master social card (CODE. SYSTEMS. AGENTS.)
    ├── svg/
    │   ├── sp-chamfer-ice-blue.svg  # Native vector mark (#93C5FD)
    │   ├── sp-chamfer-precision-blue.svg # Native vector mark (#2563EB)
    │   ├── sp-chamfer-slate.svg     # Native vector mark (#1E293B)
    │   └── sp-chamfer-white.svg     # Native vector mark (#FFFFFF)
    ├── png_dark/                    # Dark mode transparent PNGs (Ice Blue & White)
    │   ├── sp-chamfer-ice-[16..1024]px.png
    │   └── sp-chamfer-white-[16..1024]px.png
    ├── png_light/                   # Light mode transparent PNGs (Deep Slate)
    │   └── sp-chamfer-[16..1024]px.png
    └── mobile/                      # App & mobile icons
        ├── apple-touch-icon.png     # 180x180 px on opaque #0C0D0F (prevents iOS black box)
        ├── android-chrome-192x192.png # Standard Android home icon
        └── pwa-maskable-512x512.png # PWA maskable icon with 80% safe zone
```

---

## 7. Platform Specifics

### iOS & Apple Touch Icons
- **Strict Requirement:** iOS automatically turns transparent PNG backgrounds into harsh pitch black. All Apple Touch Icons (`apple-touch-icon.png`) **must have an opaque matte carbon (`#0C0D0F`) background** with the ice-blue mark centered at 65% scale.

### PWA Maskable Icons
- Android and modern browsers dynamically clip PWA icons using circles, rounded squircles, or teardrops. The PWA maskable icon (`pwa-maskable-512x512.png`) enforces the **80% safe circle rule**, guaranteeing the mark is never clipped regardless of the user's OS icon mask.

### CLI & Terminal Applications
- CLI tools should display `assets/cli_splash.txt` on startup or `--version` flags when stdout is interactive.
- **NO_COLOR Standard:** Always inspect `process.env.NO_COLOR` or `std::env::var("NO_COLOR")` ([no-color.org](https://no-color.org)). If present (or when piped/non-TTY), suppress ANSI escape codes and output clean plaintext.

### Social Preview Cards (Open Graph / Twitter)
- **Universal Default Card:** `assets/social/og-default.png` (1200x630 px, opaque `#0C0D0F` carbon canvas). Centered SP monogram, `SgtPooki LLC`, and `CODE. SYSTEMS. AGENTS.` inside a **630x630 px center safe zone**. This guarantees clean rendering across 1.91:1, 2:1, and 1:1 mobile and chat crops (iMessage, Twitter, Slack, WhatsApp).
- **Product Social Cards:** Products define their own 1200x630 card following the Endorsement Matrix (`[Product Name] by SgtPooki`) using `templates/social/og-template.html`.
- **Crawler Directives:** Always set `og:image` as an absolute HTTPS URL (`image/png`, 1200x630), include `twitter:card="summary_large_image"`, and keep file sizes under 300 KB.
