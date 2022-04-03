const express = require("express");
const Router = express.Router();

const controller = require("../controller/TasksController");

Router.route("/").get(controller.getTasksList);
Router.route("/:id").get(controller.getTask);
Router.route("/create").post(controller.createTask);
Router.route("/delete/:id").delete(controller.deleteTask);
Router.route("/update/:id").patch(controller.updateTask);

module.exports = Router;
