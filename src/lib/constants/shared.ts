export type TTheme = (typeof theme)[keyof typeof theme];
export const theme = {
  light: 'light',
  dark: 'dark',
  system: 'system'
} as const;
