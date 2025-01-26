// routes/authRoutes.js
const express = require("express");
const { login, signUp } = require("../controller/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);

module.exports = router;
