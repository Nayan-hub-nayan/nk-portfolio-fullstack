const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    user: {
        type: String, // or ObjectId if you have users
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    subtitle: {
        type: String
    },

    description: {
        type: String
    },

    // 🔥 UI Inspired Fields
    status: {
        type: String,
        enum: ["LIVE", "OFFLINE", "MAINTENANCE"],
        default: "LIVE"
    },

    uptime: {
        type: Number, // e.g. 99.985
    },

    latency: {
        type: Number // in ms
    },

    nodeId: {
        type: String, // AX-992
    },

    priority: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH_IMPACT"],
        default: "HIGH_IMPACT"
    },

    integrationStack: [
        {
            type: String // ["P2P_MESH_NET", "WASM_RUNTIME"]
        }
    ],

    // 🖼️ Media Fields
    thumbnail: {
        type: String // image URL
    },

    iconImage: {
        type: String // small icon
    },

    video: {
        type: String // video URL
    },

    images: [
        {
            type: String
        }
    ],
    url: {
        type: String,
        required: true
    },

    // ❤️ Engagement
    likes: {
        type: Number,
        default: 0
    },

    comments: [commentSchema],

    commentsCount: {
        type: Number,
        default: 0
    },

    // 🔐 Extra
    isEncrypted: {
        type: Boolean,
        default: true
    },

    createdBy: {
        type: String // or ObjectId
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Project", projectSchema);