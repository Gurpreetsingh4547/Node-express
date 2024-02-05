// Import the express library
const exprss = require('express');
const app = exprss();
const logger = require('./logger');
const authorize = require('./authorize-middleware');

// Third party middleware
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('Home Page');
});

app.get('/api/product', (req, res) => {
    res.send('Home Page');
});

app.get('/api/items', (req, res) => {
    res.send('Home Page');
});

// Start the server and listen on port 5000
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});