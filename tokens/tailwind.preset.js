/**
 * SgtPooki LLC — Tailwind CSS Preset
 * Provides Nordic Slate & Ice Blue design system tokens for Tailwind CSS (v3 & v4).
 * Supports both standard Tailwind conventions and Open Props token compatibility.
 *
 * Usage in tailwind.config.js:
 *   presets: [require('@sgtpooki/brand/tailwind.preset.js')],
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          carbon: '#0C0D0F',
          graphite: '#14161A',
          ice: '#93C5FD',
          precision: '#2563EB',
          slate: '#1E293B',
        },
        bg: {
          canvas: 'var(--bg-canvas, #0C0D0F)',
          surface: 'var(--bg-surface, #14161A)',
          'surface-subtle': 'var(--bg-surface-subtle, #1A1D24)',
          elevated: 'var(--bg-elevated, #20242C)',
        },
        border: {
          subtle: 'var(--border-subtle, #1E222A)',
          DEFAULT: 'var(--border-default, #262A32)',
          emphasis: 'var(--border-emphasis, #3B4250)',
        },
        content: {
          primary: 'var(--text-primary, #F1F5F9)',
          secondary: 'var(--text-secondary, #94A3B8)',
          tertiary: 'var(--text-tertiary, #94A3B8)',
          inverse: 'var(--text-inverse, #0F172A)',
        },
        accent: {
          DEFAULT: 'var(--brand-accent, #93C5FD)',
          hover: 'var(--brand-accent-hover, #BFDBFE)',
          primary: 'var(--btn-primary-bg, #2563EB)',
          'primary-hover': 'var(--btn-primary-hover, #1D4ED8)',
        },
        status: {
          success: 'var(--status-success, #34D399)',
          'success-bg': 'var(--status-success-bg, rgba(16, 185, 129, 0.12))',
          warning: 'var(--status-warning, #F59E0B)',
          'warning-bg': 'var(--status-warning-bg, rgba(245, 158, 11, 0.12))',
          error: 'var(--status-error, #EF4444)',
          'error-bg': 'var(--status-error-bg, rgba(239, 68, 68, 0.12))',
          info: 'var(--status-info, #38BDF8)',
          'info-bg': 'var(--status-info-bg, rgba(56, 189, 248, 0.12))',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        display: [
          '"Space Grotesk"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      borderRadius: {
        DEFAULT: 'var(--radius-2, 6px)',
        sm: 'var(--radius-1, 4px)',
        md: 'var(--radius-2, 6px)',
        lg: 'var(--radius-3, 8px)',
        xl: 'var(--radius-4, 12px)',
        full: 'var(--radius-round, 9999px)',
        '1': 'var(--radius-1, 4px)',
        '2': 'var(--radius-2, 6px)',
        '3': 'var(--radius-3, 8px)',
        '4': 'var(--radius-4, 12px)',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow-2)',
        sm: 'var(--shadow-1)',
        md: 'var(--shadow-2)',
        lg: 'var(--shadow-3)',
        '1': 'var(--shadow-1)',
        '2': 'var(--shadow-2)',
        '3': 'var(--shadow-3)',
      },
      transitionTimingFunction: {
        'ease-1': 'var(--ease-1)',
        'ease-2': 'var(--ease-2)',
        'spring-1': 'var(--ease-spring-1)',
        'spring-2': 'var(--ease-spring-2)',
      },
    },
  },
};
