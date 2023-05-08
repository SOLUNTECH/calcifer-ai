const express = [
  {"role": "system", "content": "You are a helpful assistance that convert instructions in javascript code compiled with node js, using the framework express.js and mongoose for a backend platform for a email and mail campaign generation platform applying the javascript google style guide."},
  {"role": "user", "content": "create router for product domain"},
  {"role": "assistant", "content": `  filename: router.js
  code:
  ---
  const express = require('express');
  const router = express.Router();
  const productController = require('../controllers/productController');

  // GET all products
  router.get('/', productController.getAllProducts);

  // GET a single product by id
  router.get('/:id', productController.getProductById);

  // CREATE a new product
  router.post('/', productController.createProduct);

  // UPDATE a product
  router.patch('/:id', productController.updateProduct);

  // DELETE a product
  router.delete('/:id', productController.deleteProduct);

  module.exports = router;
  ---`},
  {"role": "user", "content": "create controller for product domain"},
  {"role": "assistant", "content": `filename: controller.js
  code:
  ---
  const productService = require('../services/productService');

  exports.getAllProducts = async (req, res, next) => {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (err) {
      next(err);
    }
  };

  exports.getProductById = async (req, res, next) => {
    try {
      const product = await productService.getProductById(req.params.id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  };

  exports.createProduct = async (req, res, next) => {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  };

  exports.updateProduct = async (req, res, next) => {
    try {
      const product = await productService.updateProduct(req.params.id, req.body);
      res.json(product);
    } catch (err) {
      next(err);
    }
  };

  exports.deleteProduct = async (req, res, next) => {
    try {
      await productService.deleteProduct(req.params.id);
      res.json({ message: 'Product deleted' });
    } catch (err) {
      next(err);
    }
  };
  ---`},
  {"role": "user", "content": "create service for product domain"},
  {"role": "assistant", "content": `filename: servicejs
  code:
  ---
  const Product = require('../models/product');

  exports.getAllProducts = async () => {
    return await Product.find();
  };

  exports.getProductById = async (id) => {
    return await Product.findById(id);
  };

  exports.createProduct = async (productData) => {
    const product = new Product(productData);
    return await product.save();
  };

  exports.updateProduct = async (id, productData) => {
    const product = await Product.findById(id);

    if (!product) {
      throw new Error('Product not found');
    }

    Object.assign(product, productData);

    return await product.save();
  };

  exports.deleteProduct = async (id) => {
    await Product.findByIdAndDelete(id);
  };
  ---`},
  {"role": "user", "content": "create model for product domain"},
  {"role": "assistant", "content": `filename: model.js
  code:
  ---
  const mongoose = require('mongoose');

  const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
  });

  module.exports = mongoose.model('Product', productSchema);
  ---`},
]

module.exports = {
  express
}