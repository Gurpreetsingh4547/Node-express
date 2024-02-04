const exprss = require('express');
const path = require('path');
const app = exprss();

// Setup static and middleware
app.use(exprss.static(path.resolve(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

app.all('*', (req, res) => {
    res.status(404);
    res.send('<h1>Resource not found</h1>');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});

// Express Method
// app.get();
// app.post();
// app.put();
// app.delete();
// app.use();
// app.all();
// app.listen();