const express = require('express');
const router = express.Router();
const getCartItem = require('../db/crud/getCartItem');
const createCartItem = require('../db/crud/createCartItem');
const deleteCartItem = require('../db/crud/deleteCartItem');

router.get('/list', async (req, res, next) => {
  const result = await getCartItem();

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json({
      result: false,
    });
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  const result = await createCartItem(body);

  if (result) {
    res.status(201).json({
      result: true,
      body: body,
    });
  } else {
    res.status(400).json({
      result: false,
      body: body,
    });
  }
  // 500
});

router.delete('/', async (req, res, next) => {
  const body = req.body;
  const result = await deleteCartItem(body);

  if (result) {
    res.status(201).json({
      result: true,
      body: body,
    });
  } else {
    res.status(400).json({
      result: false,
      body: body,
    });
  }
});

module.exports = router;
