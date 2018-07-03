const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// Matches with "/api/books"
router.route("/")
  .get(jobsController.findAll)
  .post(jobsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(jobsController.findById)
  .put(jobsController.update)
  .delete(jobsController.remove);

module.exports = router;