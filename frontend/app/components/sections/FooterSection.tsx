import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Anchor, Button, Dialog, Group, Stack, Text, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function NewsletterButton() {
    const [opened, { toggle, close }] = useDisclosure(false);

    return (
        <>
            <Group justify="center">
                <Button onClick={toggle}>Subscirbe to newsletter</Button>
            </Group>

            <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
                <Text size="sm" mb="xs" fw={500}>
                    Subscribe to email newsletter
                </Text>

                <Group align="flex-end">
                    <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
                    <Button onClick={close}>Subscribe</Button>
                </Group>
            </Dialog>
        </>
    );
}

export default function FooterSection() {

    return (
        <Group justify='space-between' px={20} pb={80} py={20} style={{
            borderTop: '1px solid #e3e3e3'
        }} id='connect'>
            <Stack>
                <Text size='2rem' fw={700} c='green'>Lento</Text>

                <Stack>
                    <Anchor
                        c="dimmed"
                        href="#"
                        lh={1}
                        onClick={(event) => event.preventDefault()}
                        size="sm"
                    >
                        +91 1234 567 890
                    </Anchor>
                    <Anchor
                        c="dimmed"
                        href="#"
                        lh={1}
                        onClick={(event) => event.preventDefault()}
                        size="sm"
                    >
                        someemail@lento.com
                    </Anchor>
                </Stack>

                <Group gap="xs" justify="flex-start" wrap="nowrap">
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTwitter size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Stack>

            <NewsletterButton />
        </Group>
    );
}