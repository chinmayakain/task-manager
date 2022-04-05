const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a task name"],
    trim: true,
    maxlength: [60, "task name cannot exceed 30 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Tasks", TaskSchema);
