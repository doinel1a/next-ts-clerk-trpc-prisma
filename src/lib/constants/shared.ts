const BASE = 'next-ts-clerk-trpc-prisma';
export const storageKey = {
  theme: `${BASE}-theme`
} as const;

export type TTheme = (typeof theme)[keyof typeof theme];
export const theme = {
  light: 'light',
  dark: 'dark',
  system: 'system'
} as const;
