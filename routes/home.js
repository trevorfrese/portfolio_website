const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;
