const router = require("express").Router();
const jobRoutes = require("./jobs");
const userRoutes = require("./user");

// job routes
router.use("/jobs", jobRoutes);
// user routes
router.use("/", userRoutes);

module.exports = router;