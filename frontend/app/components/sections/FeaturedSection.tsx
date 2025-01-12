import { Badge, Button, Card, Container, Flex, Group, Image, SimpleGrid, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './FeaturedSection.module.css';

interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
}

const FeaturedSection = () => {
    const [products, setProducts] = useState<Product[]>([]); 
    const [loading, setLoading] = useState<boolean>(true); 

    // Fetch products from Strapi CMS
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/products'); 
                const fetchedProducts = response.data.data.map((product: any) => ({
                    id: product.id,
                    title: product.title,
                    image: product.image, 
                    description: product.description,
                }));
                console.log(fetchedProducts);
                setProducts(fetchedProducts); // Update the products state with the fetched data
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false); // Set loading to false in case of error
            }
        };

        fetchProducts();
    }, []); 

    // Show a loading spinner while data is being fetched
    if (loading) {
        return (
            <Container size="responsive" px={{ base: 50, sm: 80, md: 120, lg: 150 }} id="featured" my={60}>
                <Text>Loading...</Text>
            </Container>
        );
    }

    return (
        <Container size="responsive" px={{ base: 50, sm: 80, md: 120, lg: 150 }} id="featured" my={60}>
            <Badge size="lg">Featured Products</Badge>
            <Text size="2rem" fw={500} my={20} mb={40}>
                What we manufacture at Lento
            </Text>
            <SimpleGrid cols={{ base: 1, lg: 3, md: 3, sm: 2, xs: 1 }} className={classes.cardsGrid} spacing={{ base: 40, md: 80, lg: 100 }}>
                {products.map((item) => (
                    <Card shadow="sm" radius="md" withBorder key={item.id} h={250}>
                        <Flex flex={1} justify='center' p={0}>
                            <Image src={item.image} alt="image" height={100} width='auto' fallbackSrc='https://placehold.co/600x400?text=Placeholder'/>
                        </Flex>

                        <Card.Section p={10}>
                            <Text fw={500}>{item.title}</Text>
                            <Text size="sm" c="dimmed">
                                {item.description}
                            </Text>
                            <Button color="blue" mt="md" radius="md">
                                Get details
                            </Button>
                        </Card.Section>

                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default FeaturedSection;
