const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../service/tasks.service");

exports.createTask = (req, res) => {
  createTask(req, res);
};
exports.getTasks = (req, res) => {
  getTasks(req, res);
};
exports.getTaskById = (req, res) => {
  getTaskById(req, res);
};
exports.updateTask = (req, res) => {
  updateTask(req, res);
};
exports.deleteTask = (req, res) => {
  deleteTask(req, res);
};
