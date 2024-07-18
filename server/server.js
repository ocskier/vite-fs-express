const chalk = require('chalk');
const express = require('express');
const path = require('path');

const router = require('./routes');

const app = express();
const port = process.env.PORT || 3001;

// Parse incoming requests with JSON payloads
app.use(express.json());
// Parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../client', 'dist')));

app.use((req, res, next) => {
    console.log(`${chalk.yellow.bold(`Request Method Url: `)} ${chalk.blue(`${req.method} ${req.url}`)}`);
    next();
});

app.use(router);

// Route all requests to the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});