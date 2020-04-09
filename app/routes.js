// External dependencies
const express = require('express');
const router = express.Router();

// Skip date of symptoms if no symptoms - LATEST
router.post('/latest/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "I feel OK"){
	  res.redirect('/latest/health-problems');
	}
	next();
});

// Skip date of symptoms if no symptoms - TESTING
router.post('/testing/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "None of these"){
	  res.redirect('/testing/health-problems');
	}
	next();
});

// Skip date of symptoms if no symptoms - RETURN V2
router.post('/return-v2/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "I am feeling OK"){
	  res.redirect('/return-v2/health-problems');
	}
	next();
});

// Return journey - skip to check answers - RETURN V2
router.post('/return-v2/return/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "I am feeling OK"){
	  res.redirect('/return-v2/return/check-your-answers');
	}
	next();
});


// Return journey - skip to check answers - RETURN V1
router.post('/return-v1/return-with-data/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "I am feeling OK"){
	  res.redirect('/return-v1/return-with-data/check-your-answers');
	}
	next();
});

// Return journey - skip to check answers - RETURN V1
router.post('/return-v1/return-without-data/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "I am feeling OK"){
	  res.redirect('/return-v1/return-without-data/check-your-answers');
	}
	next();
});

// Ethnicity question routing - TESTING
router.post('/testing/postcode', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "White"){
    res.redirect('/testing/ethnic-group-white')
  }
  if (install == "Mixed"){
    res.redirect('/testing/ethnic-group-mixed')
  }
  if (install == "Asian or Asian British"){
    res.redirect('/testing/ethnic-group-asian')
  }
  if (install == "Black or Black British"){
    res.redirect('/testing/ethnic-group-black')
  }
  if (install == "Other Ethnic groups"){
    res.redirect('/testing/ethnic-group-other')
  }
  else {
    res.redirect('/testing/postcode')
  }

})

module.exports = router;
