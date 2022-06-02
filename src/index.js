const express = require('express');
const morgan = require('morgan');
const app = express();
const {engine} = require('express-handlebars');
const port = 3001;
const path = require('path');

// HTTP loggers
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH: ', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})