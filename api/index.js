// api/index.js
const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Define routes
app.get('/api/hello', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

module.exports.handler = serverless(app);
