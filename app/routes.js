// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.post('/latest/when-symptoms-started', (req, res, next) => {
	// Skip symptoms date if no symptoms
	if ((req.session.data['symptoms'] === "No - I do not have any symptoms")
		// Don't interfere with POST middleware if user has reached summary before 
		&& !req.session.data.household) {
	  res.redirect('/latest/health-conditions');
	}
	next();
});

module.exports = router;
