const express = require("express");
const { createService, getAllServices, getServiceById } = require("../controlers/serviceController");

const router = express.Router();

router.post("/", createService );
router.get("/", getAllServices );
router.get("/:id", getServiceById );

module.exports = router;