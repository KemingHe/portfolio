'use client';

import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { ReactElement } from 'react';

import { ChatPageNavbar } from '@/components/chat-page-navbar';

export const ChatPage = (): ReactElement => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  // Fixed width for the navigation column
  const navColumnWidth = 60;

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar
        p="md"
        style={{
          display: 'grid',
          gridTemplateColumns: `${navColumnWidth}px 1fr`,
          gridTemplateRows: 'auto 1fr auto',
        }}
      >
        <ChatPageNavbar />
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
};
