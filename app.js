const express = require("express");
const app = express();
const Router = require("./routes/TasksRoutes");

const connectDb = require("./db/connect"); //connecting and invoking the database
require("dotenv").config();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Task Manager");
});

app.use("/api/tasks", Router);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(process.env.PORT || 3000, console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
