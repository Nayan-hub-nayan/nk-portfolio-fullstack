const express = require("express");
const { createProject, getProjectById, getAllProjects } = require("../controlers/projectController");
const upload = require("../middleware/uploads-middleware");

const router = express.Router();

router.post("/", upload.fields([{ name: "thumbnail", maxCount: 1 }, { name: "iconImage", maxCount: 1 }, { name: "video", maxCount: 1 }]), createProject);
router.get("/", getAllProjects);
router.get("/:id", getProjectById);

module.exports = router;