const express = require("express");
const { register, login, home } = require("../controlers/auth-controler");
const router = express.Router();

router.post("/register", register);

router.post("/login", login);
router.get("/", home);
module.exports = router;