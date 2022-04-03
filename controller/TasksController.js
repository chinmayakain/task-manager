const Task = require("../models/Tasks");

const getTasksList = (req, res) => {
  res.send("List of all tasks");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
  const data = req.body;

  try {
    const task = await Task.create(data);
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
  }
};

const updateTask = (req, res) => {
  res.status(200).json(req.body);
};

const deleteTask = (req, res) => {
  res.status(200).send("Deleted the task");
};

module.exports = {
  getTasksList,
  getTask,
  updateTask,
  createTask,
  deleteTask,
};
