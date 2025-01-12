'use client';
import { Anchor, AppShell, Burger, Container, Flex, Group, Tabs, Text, VisuallyHidden } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import NavbarContent from './components/NavbarContent';
import Content from './components/Content';
import FooterSection from './components/sections/FooterSection';
import BackToTopAffix from './components/BackToTopAffix';

const tabs = [
  { name: 'Featured', id: '#featured' },
  { name: 'Why Us', id: '#whyus' },
  { name: 'Testimonials', id: '#testimonials' },
  { name: 'Connect', id: '#connect' },
];

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  const items = tabs.map((tab) => (
    <Anchor href={tab.id} key={tab.id} underline='never'>
    <Tabs.Tab value={tab.name}>
        {tab.name}
    </Tabs.Tab>
    </Anchor>
  ));

  const isSmall = useMediaQuery('(max-width: 768px)');

  return (
    <AppShell
      header={{ height: {base: 60, md: 90} }}
      aside={{
        width: 300,
        
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="md"
    >
      <AppShell.Header style={{
        padding: '15px'
      }}>
        <Group justify='space-between'>
          <Text size='1.7rem' fw={700} c='green'> Lento</Text>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
          />
        </Group>
        {!isSmall && (<Tabs>
          <Tabs.List justify='center'>{items}</Tabs.List>
        </Tabs>)}
      </AppShell.Header>


      <AppShell.Aside p="md">
        <NavbarContent />
      </AppShell.Aside>

      <AppShell.Main>
        <Content />
        <BackToTopAffix />
      </AppShell.Main>
    </AppShell>
  );
}
