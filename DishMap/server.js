// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const JwtUtil = require("./server/jwt");
// Setup database
const db = require("./db");

// Get our API routes
const api = require("./server/routes/api");
const authRoute = require("./server/routes/auth");
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist (folder where build files are located)
app.use(express.static(path.join(__dirname, "dist/DishMap")));

// Set our api routes
app.use("/api", api);
app.use("/api", authRoute);

// Catch all other routes and return the index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/DishMap/index.html"));
});



// 5.04 新增，暂未测试
app.use(function (req, res, next) {
  // 把登陆和注册请求去掉了，其他的多有请求都需要进行token校验
  if (req.url != "/auth/login" && req.url != "/auth/register") {
    let token = req.headers.token;
    let jwt = new JwtUtil(token);
    let result = jwt.verifyToken();
    // 如果考验通过就next，否则就返回登陆信息不正确
    if (result == "err") {
      console.log(result);
      res.send({ status: 403, msg: "登录已过期,请重新登录" });
      // res.render('login.html');
    } else {
      next();
    }
  } else {
    next();
  }
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
