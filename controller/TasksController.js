const Task = require("../models/Tasks");

const getTasksList = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json({ tasks });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      res.status(404).send(`No data found for task : ${task} `);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createTask = async (req, res) => {
  const data = req.body;

  try {
    const task = await Task.create(data);
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
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
