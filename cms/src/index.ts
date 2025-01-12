import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await productSeeder({ strapi });
    await heroCarouselSeeder({ strapi });
    await testimonialSeeder({ strapi });
  },
};


const productSeeder = async ({ strapi }: {strapi: Core.Strapi}) => {
  // Check if there are already products in the DB
  console.log('Running product seeding script...');
  
  const existingProducts = await strapi.db.query('api::product.product').findMany();

  if (existingProducts.length > 0) {
    console.log('Products already exist in the database.');
    return; // Skip if data already exists
  }

  console.log('Seeding initial products...');

  // Define initial products to seed
  const initialProducts = [
    {
      title: 'Product 1',
      description: 'Description for product 1',
      image: 'https://m.media-amazon.com/images/I/71bP4E-3LqS.jpg',
    },
    {
      title: 'Product 2',
      description: 'Description for product 2',
      image: 'https://e7.pngegg.com/pngimages/942/717/png-clipart-power-converters-solar-power-product-solar-inverter-quality-policy-battery-backup-computer-hardware-power-converters.png', 
    },
    {
      title: 'Product 3',
      description: 'Description for product 3',
      image: 'https://m.media-amazon.com/images/I/51lZPwuL8+L.jpg',
    },
  ];

  // Insert products into the database
  await strapi.db.query('api::product.product').createMany({
    data: initialProducts,
  });

  console.log('Initial products seeded successfully!');
};

const heroCarouselSeeder = async ({ strapi }: { strapi: Core.Strapi }) => {
  // Check if there are already images in the DB for the hero-carousel
  console.log('Running hero carousel image seeding script...');
  
  const existingImages = await strapi.db.query('api::hero-carousel.hero-carousel').findMany();

  if (existingImages.length > 0) {
    console.log('Hero carousel images already exist in the database.');
    return; // Skip if data already exists
  }

  console.log('Seeding initial hero carousel images...');

  // Define initial image links to seed
  const initialImages = [
    {
      image: 'https://www.lentoindia.com/assets/sslider2.jpg',
    },
    {
      image: 'https://www.lentoindia.com/assets/lentowebsite4.jpg',
    },
    {
      image: 'https://www.lentoindia.com/assets/lentoslide2.webp', 
    },
  ];

  // Insert image links into the database for the hero-carousel
  await strapi.db.query('api::hero-carousel.hero-carousel').createMany({
    data: initialImages,
  });

  console.log('Initial hero carousel images seeded successfully!');
};

const testimonialSeeder = async ({ strapi }: { strapi: Core.Strapi }) => {
  // Check if testimonials already exist in DB
  const existingTestimonials = await strapi.db.query('api::testimonial.testimonial').findMany();

  if (existingTestimonials.length > 0) {
    console.log('Testimonials already exist in the database.');
    return;
  }

  console.log('Seeding initial testimonials...');

  const initialTestimonials = [
    {
      name: 'John Doe',
      body: 'Great product, highly recommend it!',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/025/337/669/small_2x/default-male-avatar-profile-icon-social-media-chatting-online-user-free-vector.jpg',
    },
    {
      name: 'Jane Smith',
      body: 'Amazing quality and fast shipping.',
      image: 'https://www.shutterstock.com/image-vector/profile-young-woman-default-avatar-260nw-1501664072.jpg',
    },
    {
      name: 'Alice Johnson',
      body: 'Fantastic customer service and the product exceeded my expectations.',
      image: 'https://www.shutterstock.com/image-vector/profile-young-woman-default-avatar-260nw-1574588815.jpg',
    },
  ];

  await strapi.db.query('api::testimonial.testimonial').createMany({
    data: initialTestimonials,
  });

  console.log('Initial testimonials seeded successfully!');
};
