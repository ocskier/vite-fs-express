const chalk = require('chalk');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../client', 'dist')));

app.use((req, res, next) => {
    console.log(chalk.green(`Request URL: ${req.url}`));
    next();
});

// Route to return the current time
app.get('/api/time', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.json(`Current server time is: ${currentTime}`);
});

// Route all requests to the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});