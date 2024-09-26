const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Set Content Security Policy
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' https://vercel.live; img-src 'self' https://reactmy-node-server-oqfcug4dl-anurags-projects-4c990b3d.vercel.app;");
    next();
});

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/Baloon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Could not connect to MongoDB", err));

// (Your existing routes here)

// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
