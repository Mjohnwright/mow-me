const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//Item Model
// const User = require('../../models/index');

// @route   GET api/items
// @desc    GET All Items
// @accces  Public
// router.get('/', (req, res) => {
//     User.find()
//         .sort({ date: -1 })
//         .then(users => res.json(user))
    
// });

// @route   POST api/users
// @desc    create a Post
// @accces  Public
// router.post('/user/', (req, res) => {
//   const newUser = new User({
//       name: req.body
//   });

//    newUser.save().then(user => res.json(user));
// });

// Matches with "/api/users"
router.route("/user")

    .post(usersController.create);

router.route("/login")
    .post(users.usersController.create);
    .post(usersController.create)
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove)
.route("/login")
    .post(usersController.create)
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

module.exports = router;

