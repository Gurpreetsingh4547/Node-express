// Import the express library
const exprss = require('express');
const app = exprss();

// Import data
const { products } = require('./data');

// Handle GET request for the home page
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

// Handle GET request for all products
app.get('/api/products', (req, res) => {
    // Map the products to a new array with limited information
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    res.json(newProducts);
});

// Handle GET request for a single product by ID
app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    // Find the product with the specified ID
    const singleProduct = products.find((product) => product.id === Number(productId));
    // If no product is found, return a 404 error
    if (!singleProduct) {
        res.status(404).send('<h1>No product exists</h1>');
        return;
    }
    // Return the single product
    res.json(singleProduct);
});

// Handle GET request for a single product by ID
app.get('/api/v1/query', (req, res) => {
    const  { search, limit } = req.query;
    let sortedProducts = [...products];

    if(search) {
        sortedProducts = sortedProducts.filter(product => product.name.startsWith(search));
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if(sortedProducts.length < 1) {
        res.status(200).json({success: true,data : []});
        return;
    }

    res.status(200).json(sortedProducts);
});

// Start the server and listen on port 5000
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});