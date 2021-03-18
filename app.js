require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./database/client');

const restaurantRouter = require('./routes/restaurantRouter');
const cityRouter = require('./routes/cityRouter');
const tagRouter = require('./routes/tagRouter');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/restaurant', restaurantRouter);
app.use('/city', cityRouter);
app.use('/tag', tagRouter);

module.exports = app;
