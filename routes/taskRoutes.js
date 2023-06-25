const express = require("express");
const taskController = require("../controller/taskController");
const router = express.Router();
// middleware to intercept route with id in api
router.param("id", taskController.checkId);
router
  .route("/")
  .get(taskController.getTasks)
  .post(taskController.checkBody, taskController.createTask);
router
  .route("/:id")
  .get(taskController.getTask)
  .patch(taskController.checkBody, taskController.updateTask)
  .delete(taskController.deleteTask);
router.get("/priority/:level", taskController.getTasksByPriority);

module.exports = router;
