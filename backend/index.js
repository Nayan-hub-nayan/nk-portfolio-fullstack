require('dotenv').config();
const express = require('express');
const connectDB = require('./utils/db');
const { home, register, login } = require('./controlers/auth-controler');
const { addservice } = require('./controlers/serviceController');
const { contact } = require('./controlers/contactController');
const serviceModel = require("./models/service-model");
const contactRouter = require("./routers/contactRouter");
const projectRouter = require("./routers/projectRouter");
const authRouter = require("./routers/authRouter");
const serviceRouter = require("./routers/serviceRouter");
const cors = require("cors")
const app = express();

// ✅ Allow CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://your-frontend-domain.vercel.app", "https://prapal.in"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
)

connectDB();
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.get("/", home);
app.use("/auth", authRouter);

app.use("/api/service", serviceRouter);

app.use("/api/contact", contactRouter);

app.use("/api/projects", projectRouter);

module.exports = app;
