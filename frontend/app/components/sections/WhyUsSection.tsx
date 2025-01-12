import { IconBulb, IconChecklist, IconHeartHandshake, IconUser } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './WhyUsSection.module.css';

const data = [
  {
    title: 'Quality',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconChecklist,
  },
  {
    title: 'Customer first',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconUser,
  },
  {
    title: 'Innovation',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconBulb,
  },
  {
    title: 'Teamwork',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconHeartHandshake,
  },
];

function WhyUsSection() {
  const theme = useMantineTheme();
  const features = data.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py={100} id='whyus' my={20}>
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Why Choose Lento
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Redefine your relationship with energy
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Our top of the line hydrotech products manufactured with precision allow you to save money and minimize your carbon-footprint.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default WhyUsSection