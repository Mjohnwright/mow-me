const router = require("express").Router();
const jobRoutes = require("./jobs");

// job routes
router.use("/jobs", jobRoutes);

module.exports = router;