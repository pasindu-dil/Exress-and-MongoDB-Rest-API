const express = require('express');

const router = express.Router();

router.get('/goals', (req, res) => {
    res.status(400).json({ message: "Get method..." });
});

module.exports = router;