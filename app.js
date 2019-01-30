const express = require('express');
const myController = require('./controllers/myController');

const app = express();

app.set('view engine','ejs');

app.use('/styles',express.static('styles'));
app.use('/scripts',express.static('scripts'));
app.use('/public',express.static('public'));

myController(app);

app.listen(3000);
