const express = require('express');
const app = express();
const port = 3000;

// local imports
const indexController = require('./controllers/index'); 

app.set('view engine', 'pug');

// route specification
app.use('/', indexController); 


app.use('/css', express.static(__dirname + '/public/css')); 
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/sound', express.static(__dirname + '/public/sound'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});