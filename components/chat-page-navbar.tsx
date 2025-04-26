'use client';

import {
  AppShell,
  Box,
  Center,
  Image,
  ScrollArea,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { IconFolder, IconHistory, IconSettings } from '@tabler/icons-react';
import type { ReactElement } from 'react';
import { useState } from 'react';

import type { Category, CategoryItem } from '@/types/navbar-category';

const categories: CategoryItem[] = [
  { icon: IconHistory, label: 'History', value: 'history' },
  { icon: IconFolder, label: 'Files', value: 'files' },
  { icon: IconSettings, label: 'Settings', value: 'settings' },
];

export const ChatPageNavbar = (): ReactElement => {
  const [activeCategory, setActiveCategory] = useState<Category>('history');
  return (
    <>
      {/* Header row - app logo */}
      <AppShell.Section style={{ gridColumn: '1', gridRow: '1' }}>
        <Center h={40}>
          <Image
            src="/images/mantine-template-icon-512x512px-transparent.png"
            alt="Mantine Template"
            w={32}
            h={32}
          />
        </Center>
      </AppShell.Section>

      {/* Header row - active category */}
      <AppShell.Section style={{ gridColumn: '2', gridRow: '1' }}>
        <Box h={40} p="xs" style={{ display: 'flex', alignItems: 'center' }}>
          <Text fw={500} truncate>
            {categories.find((cat) => cat.value === activeCategory)?.label}
          </Text>
        </Box>
      </AppShell.Section>

      {/* Navbar - categories */}
      <AppShell.Section
        component={ScrollArea}
        grow
        style={{ gridColumn: '1', gridRow: '2' }}
      >
        <Stack gap="xs" align="center" py="xs">
          {categories.map((category: CategoryItem) => (
            <UnstyledButton
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              p="xs"
              style={{
                backgroundColor:
                  activeCategory === category.value
                    ? 'var(--mantine-color-blue-light)'
                    : undefined,
                borderRadius: 'var(--mantine-radius-sm)',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ThemeIcon variant="light" size="md">
                <category.icon size={18} stroke={1.5} />
              </ThemeIcon>
            </UnstyledButton>
          ))}
        </Stack>
      </AppShell.Section>

      {/* Navbar - content */}
      <AppShell.Section
        component={ScrollArea}
        grow
        style={{ gridColumn: '2', gridRow: '2' }}
      >
        {activeCategory === 'history' && <HistoryContent />}
        {activeCategory === 'files' && <FilesContent />}
        {activeCategory === 'settings' && <SettingsContent />}
      </AppShell.Section>

      {/* Footer row */}
      <AppShell.Section
        style={{ gridColumn: '1 / span 2', gridRow: '3' }}
        py="xs"
      >
        Navbar footer always at the bottom
      </AppShell.Section>
    </>
  );
};

const HistoryContent = (): ReactElement => {
  const mockHistory = Array(30)
    .fill(0)
    .map((_, i) => ({
      id: `history-${i + 1}`,
      title: `Chat ${i + 1}`,
    }));

  return (
    <Stack p="xs">
      <Text size="sm">Recent chat history</Text>
      {mockHistory.map((item) => (
        <Skeleton key={item.id} h={28} mt="sm" animate={false} />
      ))}
    </Stack>
  );
};

const FilesContent = (): ReactElement => {
  const mockFiles = Array(30)
    .fill(0)
    .map((_, i) => ({
      id: `file-${i + 1}`,
      name: `File ${i + 1}`,
    }));

  return (
    <Stack p="xs">
      <Text size="sm">Your project files</Text>
      {mockFiles.map((item) => (
        <Skeleton key={item.id} h={28} mt="sm" animate={false} />
      ))}
    </Stack>
  );
};

const SettingsContent = (): ReactElement => {
  const mockSettings = Array(30)
    .fill(0)
    .map((_, i) => ({
      id: `setting-${i + 1}`,
      name: `Setting ${i + 1}`,
    }));

  return (
    <Stack p="xs">
      <Text size="sm">Chat settings and preferences</Text>
      {mockSettings.map((item) => (
        <Skeleton key={item.id} h={28} mt="sm" animate={false} />
      ))}
    </Stack>
  );
};
