const express = require("express");
const Project = require("../models/project-model.js");

const createProject = async (req, res) => {
    try {
        const {
            title,
            subtitle,
            description,
            status,
            uptime,
            latency,
            nodeId,
            priority,
            integrationStack,
            url,
            isEncrypted,
            createdBy
        } = req.body;

        // 🖼️ Safe file extraction
        const thumbnail = process.env.url + req.files?.thumbnail?.[0]?.path || "";
        const iconImage = process.env.url + req.files?.iconImage?.[0]?.path || "";
        const video = process.env.url + req.files?.video?.[0]?.path || "";

        // 📸 Multiple images
        const images = req.files?.images
            ? req.files.images.map(file => file.path)
            : [];

        // 💾 Create directly (no new Project())
        const newProject = await Project.create({
            title,
            subtitle,
            description,
            status,
            uptime,
            latency,
            nodeId,
            priority,
            integrationStack,
            thumbnail,
            iconImage,
            video,
            images,
            url,
            isEncrypted,
            createdBy,

            // 🔐 default values (secure)
            likes: 0,
            comments: [],
            commentsCount: 0
        });

        res.status(201).json({
            message: "Project created successfully ✅",
            project: newProject
        });

    } catch (error) {
        res.status(400).json({
            message: "Project creation failed ❌",
            error: error.message
        });
    }
};

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json({ message: "Get All Projects", projects });
    } catch (error) {
        res.json({ message: "Get All Projects failed" });
    }
}

const getProjectById = async (req, res) => {
    res.json({ message: "Get Project By ID - To be implemented" });
}

module.exports = { createProject, getAllProjects, getProjectById };