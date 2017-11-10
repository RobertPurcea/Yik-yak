const express = require('express');
const path = require('path');

const app = express();

app.get('/data', (req, res) => res.json({ data: "some data" }));

module.exports = app;
