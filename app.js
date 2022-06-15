const express = require('express');
//const fs = require('fs');

const app = express();
const port = 8080;

let path

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', {root: __dirname})
})

app.get('/contact-me', (req, res) => {
  res.sendFile('./views/contact-me.html', {root:_dirname})
})

app.listen(port, () => {
  console.log('My node app is running with express now!')
})