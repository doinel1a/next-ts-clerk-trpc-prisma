import React from 'react';

import type { PropsWithChildren } from 'react';

import ClerkProvider from './clerk';
import ThemeProvider from './theme';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: TRootProvider) {
  return (
    <ThemeProvider>
      <ClerkProvider>{children}</ClerkProvider>
    </ThemeProvider>
  );
}
