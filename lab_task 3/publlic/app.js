// app.js

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/auth-demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Serve static files
app.use(express.static("public"));

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
