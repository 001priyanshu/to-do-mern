const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task");

router.post("/create", taskController.createTask);
router.get("/alltasks", taskController.alltasks);
router.put("/updatetasks", taskController.updateTask);
router.delete("/deletetasks", taskController.deleteTasks);
router.get("/categorytasks/:cat", taskController.categoryTasks);

module.exports = router;
