const http = require('http');
const { readFileSync } = require('fs');

// Get all Files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyle = readFileSync('./navbar-app/styles.css');
const homeLogo = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

// Create a server
const server = http.createServer((req, res) => {
    let url = req.url;

    // Check if the url is the root
    if(url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homePage);
        res.end();
    } else if (url === '/styles.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(homeStyle);
        res.end();
    } else if (url === '/logo.svg') {
        res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        res.write(homeLogo);
        res.end();
    } else if (url === '/browser-app.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(homeLogic);
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Page</h1>');
        res.end();
    } else {
        // If the url is not recognized, return a 404 message
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Page not found</h1>');
        res.end();
    }
        
});

// Start the server on port 8000
server.listen(8000);