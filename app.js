const express = require('express');
const app =  express();
require('dotenv').config()
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose-connection');
const ownerRouter = require('./routes/ownerRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter  = require('./routes/productsRouter');
const indexRouter = require('./routes/index');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.render('index.ejs', {error: ''})
// } )

app.use('/', indexRouter);
app.use('/owner', ownerRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

