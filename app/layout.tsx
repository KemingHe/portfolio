import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';
import type { ReactElement } from 'react';

import { inter } from '@/app-config/fonts';
import { theme } from '@/app-config/theme';
import type { LayoutProps } from '@/types/app-props';

import '@mantine/core/styles.css';

export { metadata } from '@/app-config/metadata';

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
};

export default Layout;
