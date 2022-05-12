const User = require("../models/User");
const msg = require("../utils/messages");

module.exports = {
  get_login: function (req, res) {
    res.render("login");
  },

  get_signup: function (req, res) {
    res.render("signup");
  },
  post_signup: async function (req, res, next) {
    const { username, email, password, password2 } = req.body;
    console.log({ username, email, password, password2 });
    try {
      const user = new User({
        username,
        email,
        password,
      });
      await user.save();
      res.status(201).json({ msg: msg.signupFormSuccess });
    } catch (err) {
      next(err);
    }
  },
};
