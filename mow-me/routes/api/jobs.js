const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// Matches with "/api/books"
router.route("/api/newJob")
  .post(jobsController.create)

// Matches with "/api/books/:id"
// router
  router.get("/:id", jobsController.findById)
  router.put("/:id", jobsController.update)
  router.delete("/:id", jobsController.remove)
 
  // router.put(jobsController.findById)
  // .put(jobsController.update)
  // .delete(jobsController.remove)
  // router.route("/updateJobs")
  // .get(jobsController.findById)
  // .put(jobsController.update)
  // .delete(jobsController.remove);

module.exports = router;