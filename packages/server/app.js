const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { mongoose } = require('./service/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/users', (req, res, next) => {
    debugger;
    const d = mongoose.UserSchema;
    return res.json({ message: 'hellpo' });
});

app.get('/users', (req, res, next) => {
    debugger;
    return res.json({ message: 'hellpo' });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    const { message, stack, name } = err;
    return res.status(err.status || 500).json({ message, stack, name });
});

module.exports = app;
