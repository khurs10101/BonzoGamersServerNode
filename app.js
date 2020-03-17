var express = require("express");
var app = express();
const connectdb = require("./config/db");
var userRoutes = require("./routes/api/users");
var authRoutes = require("./routes/api/auth");
var postRoutes = require("./routes/api/posts");
// var profileRoutes = require("./routes/api/profile");

// Init body parser middleware
app.use(express.json({ extended: false }));

const PORT = process.env.port || 6200;
connectdb();

// Users routes
app.use("/api/users", userRoutes);

// Users routes
app.use("/api/auth", authRoutes);

// // Users routes
// app.use("/api/profile", profileRoutes);

// Users routes
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});