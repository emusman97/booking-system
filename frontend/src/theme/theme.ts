import type { Theme } from './types';

export const theme: Theme = {
  colors: {
    primary: '#ff7a59',
    primaryLight: '#ff9c85',
    secondary: '#fcd34d',
    border: '#EBEBEB',
    success: '#22c55e',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
    light: '#f9fafb',
    dark: '#1f2937',
    white: '#ffffff',
    black: '#000000',
    gray: {
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    text: {
      primary: '#1e1e4b',
      secondary: '#4b5563',
      muted: '#999999',
      disabled: '#9ca3af',
      success: '#22c55e',
      danger: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
      city: '#797C9A',
    },
  },
  typography: {
    fontFamily: {
      base: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      heading:
        "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'Fira Code', 'Courier New', monospace",
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      loose: 1.8,
    },
  },
  spacing: {
    0: '0',
    1: '4px', // 4px
    2: '8px', // 8px
    3: '12px', // 12px
    4: '16px', // 16px
    5: '20px', // 20px
    6: '24px', // 24px
    8: '32px', // 32px
    10: '40px', // 40px
    12: '48px', // 48px
    16: '64px', // 64px
    20: '80px', // 80px
    21: '96px',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    md: '0.25rem', // 4px
    lg: '0.5rem', // 8px
    xl: '1rem', // 16px
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px #9FA4BD1F, 0 1px 2px #9FA4BD3D',
    md: '0 3px 6px #9FA4BD29, 0 3px 6px #9FA4BD3B',
    lg: '0 10px 20px #9FA4BD30, 0 6px 6px #9FA4BD3B',
    xl: '0 14px 28px #9FA4BD40, 0 10px 10px #9FA4BD38',
  },
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
  },
} as const;
