const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//api routes controller
router.post('/', productController.createProduct);
router.get('/', productController.listProducts);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.destroyProduct);

module.exports = router;