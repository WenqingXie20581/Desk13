const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

module.exports = function auth(req, res, next) {
  const token = req.header("x-access-token");
  if (!token) {
    return res.status(401).send("Access Denied"); //没登陆
  }

  try {
    const verified =
      jwt.verify(
        token,
        fs.readFileSync(path.join(__dirname, "../publickey.pem")),
        { algorithms: ["RS256"] }
      ) || {};
    req.token = verified;
    next();
  } catch (err) {
    if (err.name == "TokenExpiredError") {
      res.status(401).send("Login expired, please login again.");
    } else {
      res.status(401).send("Invalid token");
    }
  }
};
