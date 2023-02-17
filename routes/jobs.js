const express = require('express');
const router = express.Router();

router.get('/jobs', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'this route will display all job in future',
  });
});

module.exports = router;
