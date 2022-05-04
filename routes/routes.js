const router = require("express").Router();

const conIndex = require("../controllers/index");
const conAuth = require("../controllers/auth");

module.exports = () => {
  router.get("/", conIndex.get_homepage);
  router.get("/login", conAuth.get_login);
  router.get("/signup", conAuth.get_signup);
  return router;
};
