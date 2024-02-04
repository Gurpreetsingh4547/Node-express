const http = require('http');
const { readFileSync } = require('fs');

// Get all Files
const homePage = readFileSync('./index.html');
// const aboutPage = readFileSync('./about.html');
// const errorPage = readFileSync('./404.html');

// Create a server
const server = http.createServer((req, res) => {
    let url = req.url;
    // Check if the url is the root
    if(url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homePage);
        res.end();
        return;
    }

    // Check if the url is '/about'
    if(url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Page</h1>');
        res.end();
        return;
    }

    // If the url is not recognized, return a 404 message
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Page not found</h1>');
    res.end();
    return;
});

// Start the server on port 8000
server.listen(8000);