const path = require("path");
const router = require("express").Router();
const apiUserRoutes = require("./api");
const apiJobsRoutes = require("./api");

// API user routes
router.use("/api", apiUserRoutes);
// API jobs routes
router.use("/api", apiJobsRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;