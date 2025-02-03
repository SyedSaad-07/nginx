const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const replicaApp = process.env.APP_NAME

// app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'LandingPage')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'LandingPage/index.html'));
    console.log(`Request has been served by ${replicaApp}`);
});

app.listen(port, () => {
    console.log(`${replicaApp} listening on port ${port}`);
});
