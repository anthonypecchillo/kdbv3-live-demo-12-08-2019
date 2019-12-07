/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

// const bodyParser = require('body-parser');
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const db = require('../database');

const app = express();
const PORT = process.env.PORT || 8080;
console.log('PORT IS: ', PORT);

app.use(favicon(__dirname + '/build/favicon.ico'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
