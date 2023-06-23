const express = require("express");
const taskRouter = require("./routes/taskRoutes");

const app = express();

app.use(express.json());
// Handle home page
app.all("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: `Welcome to task manager API`,
  });
});
app.use("/tasks", taskRouter);
// Handle invalid request
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: `Cannot resolve ${req.originalUrl} on this server`,
  });
});

module.exports = app;
