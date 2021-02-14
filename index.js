var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var port = process.env.PORT || 3000;

var indexRouter = require('./routes/index.route');
var mercadoRouter = require('./routes/mercado.route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/mercado', mercadoRouter);

app.use((error, req, res, next) => {
    return res.status(500).json({ error: error.toString() });
});

app.listen(port, () => {
    console.log(`Listen ${port}`);
});