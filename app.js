const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'pug');


// local imports
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users/index');
const indexController = require('./controllers/index');
const userIndexController = require('./controllers/users/index');

// Middleware for parsing JSON requests
app.use(express.json());

// Routes specification
app.use('/', indexRouter, indexController);
app.use('/users', userRouter, userIndexController);

// Serve static files
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/js', express.static(path.join(__dirname, '/public/js')));
app.use('/images', express.static(path.join(__dirname, '/public/images')));
app.use('/sound', express.static(path.join(__dirname, '/public/sound')));


app.listen(port, () => {
    console.log(`PlovSaver is running at ${port}`);
});
