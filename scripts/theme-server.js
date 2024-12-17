import express from 'express';
import { Liquid } from 'liquidjs';
import path from 'path';
import { fileURLToPath } from 'url';
import { addCustomFilters } from './utils/liquidFilters.js';
import { getThemeData } from './utils/themeData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3001;

async function setupThemeServer() {
  // Initialize Liquid engine
  const engine = new Liquid({
    root: path.resolve(__dirname, '../src/theme'),
    extname: '.liquid',
    cache: process.env.NODE_ENV === 'production',
    dynamicPartials: true,
    strictFilters: true,
    strictVariables: true
  });

  // Add custom filters
  addCustomFilters(engine);

  // Load theme data
  const themeData = await getThemeData();

  // Middleware to inject theme data into all templates
  app.use(async (req, res, next) => {
    res.locals = {
      ...res.locals,
      settings: themeData.data.current,
      theme: themeData.schema
    };
    next();
  });

  // Static files
  app.use('/assets', express.static(path.resolve(__dirname, '../src/theme/assets')));

  // Set up liquid as template engine
  app.engine('liquid', engine.express());
  app.set('views', path.resolve(__dirname, '../src/theme'));
  app.set('view engine', 'liquid');

  // Routes
  app.get('/', (req, res) => {
    res.render('templates/index', {
      template: 'index',
      shop: mockShop
    });
  });

  app.get('/products/:handle', (req, res) => {
    const product = mockShop.products.find(p => p.handle === req.params.handle);
    if (!product) {
      return res.status(404).render('templates/404');
    }
    
    res.render('templates/product', {
      template: 'product',
      product,
      shop: mockShop
    });
  });

  // 404 handler
  app.use((req, res) => {
    res.status(404).render('templates/404');
  });

  app.listen(port, () => {
    console.log(`Theme server running at http://localhost:${port}`);
    console.log(`Theme editor: http://localhost:${port}/editor`);
  });
}

// Mock data
const mockShop = {
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
  ]
};

setupThemeServer().catch(console.error);