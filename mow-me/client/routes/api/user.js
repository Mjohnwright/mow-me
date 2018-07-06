const router = require("express").Router();
const usersController = require("../../controllers/usersController");


// Matches with "/api/newUser"
router.route("/api/newUser")
  .post(usersController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;

