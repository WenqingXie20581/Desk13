// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
// Setup database
const db = require("./db");

// Get our API routes
const api = require("./server/routes/api");
const authRoute = require("./server/routes/auth");
const userRoute = require("./server/routes/user");
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist (folder where build files are located)
app.use(express.static(path.join(__dirname, "dist/DishMap")));

// Set our api routes
app.use("/api", api);
app.use("/api", authRoute);
app.use("/user", userRoute);

// Catch all other routes and return the index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/DishMap/index.html"));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || "3000";
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
