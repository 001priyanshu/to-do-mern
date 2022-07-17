const Task = require("../models/task");

module.exports.createTask = (req, res) => {
  const { description, task, date, time } = req.body;

  Task.create(
    { description: description, task: task, date, time },
    (err, task) => {
      if (err) {
        res.status(422).json({
          error: err,
        });
        return;
      }
      res.status(200).json({
        task,
      });
    }
  );
};

module.exports.alltasks = (req, res) => {
  Task.find()
    .then((tasks) => {
      res.json({
        tasks,
      });
    })
    .catch((err) => {
      res.status(422).json({
        error: err,
      });
    });
};

module.exports.updateTask = (req, res) => {
  const { description, date, task, _id, time } = req.body;
  Task.findByIdAndUpdate(_id, { $set: req.body }, (err, tasks) => {
    if (err) {
      res.status(422).json({
        error: err,
      });
    }
    (tasks.description = description),
      (tasks.date = date),
      (tasks.task = task),
      (tasks.time = time);
    res.json({
      tasks,
    });
  });
};

module.exports.deleteTasks = (req, res) => {
  const deletetasks = req.body;
  const arr = [];
  for (task of deletetasks.deletetasks) {
    Task.findByIdAndDelete(task._id, (err, tasks) => {
      if (err) {
        res.status(422).json({
          error: err,
        });
      }
    });
  }
};

module.exports.categoryTasks = (req, res) => {
  Task.find({ task: req.params.cat }, (err, tasks) => {
    if (err) {
      res.status(422).json({
        error: err,
      });
    }
    res.json({
      tasks,
    });
  });
};
