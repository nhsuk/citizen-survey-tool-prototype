// External dependencies
const express = require('express');
const router = express.Router();

// Skip date of symptoms if no symptoms - LATEST
router.post('/latest/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "None of these"){
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

// Skip date of symptoms if no symptoms - SEX AND ETHNICITY
router.post('/sex-and-ethnicity/when-did-this-start', (req, res, next) => {
	if (req.session.data['symptoms'] === "None of these"){
	  res.redirect('/sex-and-ethnicity/health-problems');
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
router.post('/sex-and-ethnicity/postcode', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "White"){
    res.redirect('/sex-and-ethnicity/ethnic-group-white')
  }
  if (install == "Mixed or multiple ethnic groups"){
    res.redirect('/sex-and-ethnicity/ethnic-group-mixed')
  }
  if (install == "Asian or Asian British"){
    res.redirect('/sex-and-ethnicity/ethnic-group-asian')
  }
  if (install == "Black, African, Black British or Caribbean"){
    res.redirect('/sex-and-ethnicity/ethnic-group-black')
  }
  if (install == "Another ethnic group"){
    res.redirect('/sex-and-ethnicity/ethnic-group-other')
  }
  else {
    res.redirect('/sex-and-ethnicity/postcode')
  }

})

module.exports = router;
