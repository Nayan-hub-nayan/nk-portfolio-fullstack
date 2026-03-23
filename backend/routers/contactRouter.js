const express = require("express");
const { EmailSend, contactDetails } = require("../controlers/contactController");

const router= express.Router();

router.post("/send",EmailSend); 
router.get("/", contactDetails);


module.exports = router;