// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.post('/latest/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "I am feeling OK"){
	  res.redirect('/latest/health-problems');
	}
	next();
});

// Add your routes here - above the module.exports line
router.post('/latest/return-with-data/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "I am feeling OK"){
	  res.redirect('/latest/return-with-data/check-your-answers');
	}
	next();
});

// Add your routes here - above the module.exports line
router.post('/latest/return-without-data/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "I am feeling OK"){
	  res.redirect('/latest/return-without-data/check-your-answers');
	}
	next();
});

module.exports = router;
