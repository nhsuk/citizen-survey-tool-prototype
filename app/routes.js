// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.post('/latest/when-symptoms-started', (req, res, next) => {
	if (req.session.data['symptoms'] === "No - I do not have any symptoms"){
	  res.redirect('/latest/health-conditions');
	}
	next();
});

module.exports = router;
