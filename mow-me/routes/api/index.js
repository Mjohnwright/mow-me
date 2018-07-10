const router = require("express").Router();
const jobRoutes = require("./jobs");
const userRoutes = require("./user");

// job routes
router.use("/jobs", jobRoutes);
// user routes
router.use("/user", userRoutes);

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = router;