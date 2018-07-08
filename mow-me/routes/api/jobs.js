const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");


//router.post("/api/newJob",jobsController.create )
  

router.route("/:id")
.post(jobsController.create)
.get( jobsController.findById)
.put( jobsController.update)
.delete( jobsController.remove);

router.route("/allJobs")
.post(jobsController.findAll)
.delete( jobsController.remove);

 
 


module.exports = router;