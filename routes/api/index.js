const router = require("express").Router();
const registerRoutes = require("./Register");

router.use("/register", registerRoutes);

module.exports = router;
