import type { StorybookConfig } from '@storybook/nextjs';

//biome-ignore format: added alignment for clarity
export default {
  core: {
    disableWhatsNewNotifications: true,    // Reduces noise during development
    disableTelemetry            : true,    // Privacy-first approach
    enableCrashReports          : false,   // Prevents automatic data collection
  },
  stories  : ['../components/**/*.(stories|story).@(js|jsx|ts|tsx)'],   // Auto-discovers component stories
  addons   : ['storybook-dark-mode'],                                   // Enables theme switching for component testing
  framework: {
    name   : '@storybook/nextjs',
    options: {},
  },
} satisfies StorybookConfig;
