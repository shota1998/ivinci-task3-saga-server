const express = require('express');
const itemsRoutes = require('./routes/items');
const cartRoutes = require('./routes/cart');

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());
app.use('/items', itemsRoutes);
app.use('/cart', cartRoutes);
app.listen(8080);
