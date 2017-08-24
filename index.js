require('dotenv').config();

const path = require('path');
const express = require('express');
const winston = require('winston');
const port = process.env.PORT || 3001;
const app = express();

app.use(express.static('build'));

// Redirect all other routes back to index.html, as this is simply serves up a SPA
app.get('/[^.]+$', function(req, res) {
  res
    .set('Content-Type', 'text/html')
    .sendFile(__dirname + '/build/index.html');
});

app.listen(port, () => {
  winston.info(`Web Client Asset Server started on port ${port}`);
});
