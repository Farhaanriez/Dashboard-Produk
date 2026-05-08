import { colors } from './tokens/colors';
import { spacing, radius } from './tokens/spacing';
import { typography } from './tokens/typography';

export const theme = {
  colors,
  spacing,
  radius,
  typography,
  
  // Shadows untuk depth/elevation
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  
  // Transitions untuk animasi
  transitions: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
  },
} as const;

export type Theme = typeof theme;