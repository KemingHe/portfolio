import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { addons } from '@storybook/preview-api';
import type { Decorator, Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

import { theme } from '../app-config/theme';

import '@mantine/core/styles.css';

// Ensures consistent layout across all stories
export const parameters: Preview['parameters'] = {
  layout: 'fullscreen',
  options: { showPanel: false },
};

const channel = addons.getChannel();

// Syncs Storybook's dark mode with Mantine's theme system for consistent visual testing
const ColorSchemeWrapper = ({ children }: { readonly children: ReactNode }) => {
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    const handleColorScheme = (isDark: boolean): void => {
      setColorScheme(isDark ? 'dark' : 'light');
    };

    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [setColorScheme]);

  return <>{children}</>;
};

// Decorators are applied in reverse order
export const decorators: Decorator[] = [
  (Story) => (
    <ColorSchemeWrapper>
      <Story />
    </ColorSchemeWrapper>
  ),
  (Story) => (
    <MantineProvider theme={theme}>
      <Story />
    </MantineProvider>
  ),
];
