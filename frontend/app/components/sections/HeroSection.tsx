import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from './HeroSection.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface HeroCarousel {
  id: number;
  image: string; // Assuming the image field is a string containing the image URL
}

const HeroSection = () => {
  const [carouselData, setCarouselData] = useState<HeroCarousel[]>([]);

  useEffect(() => {
    // Replace with the URL of your Strapi instance
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/hero-carousels'); // Adjust this based on your Strapi endpoint
        const data = response.data.data; // Assuming response structure includes 'data'
        setCarouselData(data);
      } catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    };

    fetchCarouselData();
  }, []);

  return (
    <div>
      <Carousel withIndicators height={550} loop controlsOffset='xl' controlSize={40}>
        {carouselData.map((carouselItem) => (
          <Carousel.Slide key={carouselItem.id}>
            <div
              className={classes.card}
              style={{
                backgroundImage: `url(${carouselItem.image})`, // Set the background image of each slide
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
              }}
            ></div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
