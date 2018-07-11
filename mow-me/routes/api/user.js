const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/users/register")
  .post(usersController.create);

  //validation for passport
  // router.post("/users/register", function(req, res){
    
  //   var firstName = req.body.firstName;
  //   var laststName = req.body.lastName;
  //   var phone = req.body.phone;
  //   var email =req.body.email;
  //   var username= req.body.username;
  //   var password = req.body.password;
  //   var passwordConf= req.body.passwordConf;

  //   req.checkBody('firstName', 'First name is required').notEmpty();
  //   req.checkBody('lastName', 'Last name is required').notEmpty();
  //   req.checkBody('email', 'Email is required').notEmpty();
  //   req.checkBody('email', 'Email is not valid').isEmail();
  //   req.checkBody('username', 'Username is required').notEmpty();
  //   req.checkBody('password', 'Password is required').notEmpty();
  //   req.checkBody('passwordConf', 'Passwords do not match').equals(req.body.password);

  //   var errors = req.validationErrors();
  //   if(errors){
  //     //errors will also need to be alerted to user on front end
  //     console.log(errors)
  //       res.render("/users/register", {
  //         errors:errors
  //       })
  //   }else{
  //     usersController.create();
  //       console.log("Passed registration!!!")
  //   }
  // })

  router.get('/users/login', function(req, res){
    res.render('/users/login')

  })

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;



