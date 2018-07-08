const router = require("express").Router();
const jobRoutes = require("./jobs");
const userRoutes = require("./user");

// job routes
router.use("/jobs", jobRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;