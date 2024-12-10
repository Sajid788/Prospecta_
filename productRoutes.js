const express = require('express');
const axios = require('axios');

const router = express.Router();

// Task 1: Get products by category
router.get('/products/category/:category', async (req, res) => {
    const { category } = req.params;

    try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        res.status(200).json({
            status: 'successful',
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: 'Failed to fetch products',
            error: error.message
        });
    }
});

// Task 2: Add a new product
router.post('/products', async (req, res) => {
    const productData = req.body;

    try {
        const response = await axios.post('https://fakestoreapi.com/products', productData);
        res.status(201).json({
            status: 'successful',
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: 'Failed to add product',
            error: error.message
        });
    }
});

// Task 3: Get all products
router.get('/products', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        res.status(200).json({
            status: 'successful',
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: 'Failed to fetch all products',
            error: error.message
        });
    }
});

module.exports = router;
