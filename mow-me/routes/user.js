const router = require("express").Router();
const booksController = require("../../controllers/usersController");

// Matches with "/api/books"
router.route("/newUser")
  .post(usersController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;