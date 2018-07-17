const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// Matches with "/api/jobs"
router
  .route("/")
  .post(jobsController.create);

  // .get(jobsController.findAll)

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(jobsController.findById)
  .put(jobsController.update)
  .delete(jobsController.remove);

  router
  .route("/")
  .get(jobsController.findAll);

module.exports = router;
