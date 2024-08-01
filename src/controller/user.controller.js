const { getUserData, createUser, login } = require("../service/user.service");

exports.getdata = (req, res) => {
  getUserData(req, res);
};

exports.createUser = (req, res) => {
  createUser(req, res);
};

exports.userLogin = (req, res) => {
  login(req, res);
};
