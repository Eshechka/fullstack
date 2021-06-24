const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error) );

const authRoutes = require('./routes/auth.js');
const categoryRoutes = require('./routes/category.js');
const analyticsRoutes = require('./routes/analytics.js');
const orderRoutes = require('./routes/order.js');
const positionRoutes = require('./routes/position.js');
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);
app.use('/api/analytics', analyticsRoutes);

module.exports = app;