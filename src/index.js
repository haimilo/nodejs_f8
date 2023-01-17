const express = require('express');
const morgan = require('morgan');
const app = express();
const {engine} = require('express-handlebars');
const port = 3001;
const path = require('path');
const hbs = require('hbs')

// HTTP loggers
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH: ', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home.hbs');
})

app.get('/news', (req, res) => {
  res.render('news.hbs');
})
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})