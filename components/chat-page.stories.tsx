import type { Meta, StoryObj } from '@storybook/react';

import { ChatPage } from '@/components/chat-page';

const meta = {
  title: 'Pages/ChatPage',
  component: ChatPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
