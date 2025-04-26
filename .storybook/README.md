# Storybook Configuration

This directory contains the Storybook configuration for our Next.js + Mantine project. Storybook is used for developing and testing UI components in isolation.

## Files Overview

### `main.ts`

- Core configuration file for Storybook
- Disables telemetry and crash reports for privacy
- Configures story discovery in the `components` directory
- Integrates dark mode support via `storybook-dark-mode`

### `preview.tsx`

- Sets up the preview environment for all stories
- Integrates Mantine's theming system with Storybook
- Syncs Storybook's dark mode with Mantine's color scheme
- Provides consistent layout across all stories
- Wraps stories with necessary providers (MantineProvider, ColorSchemeWrapper)

## Integration Details

The setup ensures:

- Consistent theming between the main app and Storybook
- Dark mode support that works across both environments
- Privacy-focused configuration
- Automatic story discovery from the components directory

## Usage

1. Create stories in the `components` directory using the pattern: `*.stories.tsx` or `*.story.tsx`
2. Use the dark mode toggle in Storybook's toolbar to test both light and dark themes
3. Components will automatically inherit the Mantine theme and color scheme settings

## Example Story Structure

```tsx
// components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
};
```
