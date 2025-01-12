import { Carousel } from '@mantine/carousel';
import { Text, useMantineTheme, Card, Group, Avatar, Container, Flex, Badge, Stack, Space } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface CardProps {
    id: number;
    image: string;
    name: string;
    description: string;
}

function TestimonialCard({ id, image, name, description }: CardProps) {
    return (
        <Card radius={0} px={{ base: 40, md: 100 }} w="100%" h="100%" bg='#3f94e4' c='white'>
            <Card.Section p='md' flex={1}>
                <Group justify='start' h='100%'>
                    <Avatar src={image} size="120" />
                </Group>
            </Card.Section>

            <Stack flex={1}>
                <Text fw={500} fz="lg">
                    {name}
                </Text>

                <Text fz="sm" c="white">
                    {description}
                </Text>
            </Stack>
        </Card>
    );
}

function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState<any[]>([]); // State to store fetched testimonials

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    // Fetch testimonials from Strapi API using axios
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/testimonials'); // Replace with your Strapi API URL
                setTestimonials(response.data.data); // Set the fetched testimonials into state
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    const slides = testimonials.map((item) => (
        <Carousel.Slide key={item.id}>
            <TestimonialCard
                id={item.id}
                image={item.image || 'https://via.placeholder.com/150'} // Fallback image if none provided
                name={item.name}
                description={item.body} // Assuming the 'body' field contains the testimonial text
            />
        </Carousel.Slide>
    ));

    return (
        <Flex align='start' py={50} direction={{ base: 'column', md: 'row' }} id='testimonials'>
            <Flex flex={1} direction='column' align='start' justify='start' h='100%' py={40} px={20}>
                <Badge size='lg'>Testimonials</Badge>
                <Space h='md' />
                <Text fz={{ base: '2rem', md: '6rem' }} lh='1' pr={{ base: 0, md: 20 }}>
                    What our customers say about us
                </Text>
            </Flex>

            <Carousel
                align='center'
                orientation='horizontal'
                slideSize='100%'
                height={350}
                w={{ base: '100%', md: '40%' }}
                bg='#3f94e4'
                py={10}
                controlsOffset='lg'
                loop
                style={{
                    borderRadius: '15px',
                }}
            >
                {slides}
            </Carousel>
        </Flex>
    );
}

export default TestimonialsSection;
