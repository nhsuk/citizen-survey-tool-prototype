// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.post('/latest/when-symptoms-started', (req, res, next) => {
	if (
		// Skip no syptoms 
		(req.session.data['symptoms'] === "No - I do not have any symptoms") 
		&& !req.session.data.household) {
	  res.redirect('/latest/health-conditions');
	}
	next();
});

module.exports = router;
