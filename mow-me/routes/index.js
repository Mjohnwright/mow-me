const path = require("path");
const router = require("express").Router();
const apiUserRoutes = require("./api");
const apiJobsRoutes = require("./api");

// API user routes
router.use("/api", apiUserRoutes);
// API jobs routes
router.use("/api", apiJobsRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){

	/* GET login page. */
	router.get('/login', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('/login', { message: req.flash('message') });
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/jobboard',
		failureRedirect: '/login',
		failureFlash : true  
	}));

	/* GET Registration Page */
	router.get('/register', function(req, res){
		res.render('/login',{message: req.flash('message')});
	});

	/* Handle Registration POST */
	router.post('/register', passport.authenticate('signup', {
		successRedirect: '/jobboard',
		failureRedirect: '/register',
		failureFlash : true  
	}));

	/* GET Home Page */
	router.get('/', isAuthenticated, function(req, res){
		res.render('/', { user: req.user });
	});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}

module.exports = router;