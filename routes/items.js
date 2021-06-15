const express = require('express');
const router = express.Router();
const getItems = require('../db/crud/getItems');

router.get('/list', async (req, res, next) => {
  const result = await getItems();

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json({
      result: false,
    });
  }
});

module.exports = router;
