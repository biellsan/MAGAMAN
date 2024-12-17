export const mockShop = {
  name: 'My Store',
  description: 'Welcome to my store',
  products: [
    {
      id: 1,
      handle: 'sample-product',
      title: 'Sample Product',
      price: 19.99,
      featured_image: {
        src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        alt: 'Sample Product'
      }
    }
  ],
  collections: {
    featured: {
      title: 'Featured Collection',
      products: [
        {
          id: 1,
          handle: 'sample-product',
          title: 'Sample Product',
          price: 19.99,
          featured_image: {
            src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
            alt: 'Sample Product'
          }
        },
        {
          id: 2,
          handle: 'another-product',
          title: 'Another Product',
          price: 29.99,
          featured_image: {
            src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            alt: 'Another Product'
          }
        }
      ]
    }
  }
};