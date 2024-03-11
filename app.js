const express = require('express');
const app = express();
const port = 3000;

// local imports
const indexRouter = require('./routes/index');
const indexController = require('./controllers/index'); 

const userRouter = require('./routes/users/index'); 
const userIndexController = require('./controllers/users/index'); 

app.set('view engine', 'pug');

// route specification
app.use(express.json());

app.use('/', indexRouter, indexController); 
app.use('/users', userRouter, userIndexController);


// serve static files
app.use('/css', express.static(__dirname + '/public/css')); 
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/sound', express.static(__dirname + '/public/sound'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});