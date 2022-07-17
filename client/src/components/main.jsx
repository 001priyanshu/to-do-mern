import { useState, useEffect } from "react";
import {
  UpdateDiv,
  Body,
  App,
  Heading,
  Fields,
  Inputs,
  ButtonsDiv,
  Button,
  Display,
  ScheduleDiv,
  CategoryButton,
  TasksDiv,
  TaskDiv,
  Field,
  CategoriesDiv,
  UpdateIconDiv,
} from "./main.styles";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const [deletetasks, setDeletetasks] = useState([]);

  useEffect(() => {
    fetch("/task/alltasks", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.tasks);
      });
  }, [tasks]);

  const defaultFields = () => {
    setDescription("");
    setTask("");
    setDate("");
    setTime("");
  };

  const fetchTask = () => {
    defaultFields();
    fetch("/task/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        task,
        date,
        time,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        tasks.push(data.task);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTasks = (id) => {
    defaultFields();
    setUpdate(false);
    fetch("/task/updatetasks", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        description,
        date,
        task,
        time,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const onUpdateClick = (Id, description, date, task) => {
    setDescription(description);
    setDate(date);
    setTask(task);
    setUpdate(true);
    setId(Id);
  };

  const onUnChecked = (Id) => {
    const array = deletetasks.filter((task) => task._id !== Id);
    setDeletetasks(array);
  };

  const deleteTask = () => {
    fetch("/task/deletetasks", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deletetasks,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setDeletetasks([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const scheduleFetch = (cat) => {
    fetch(`/task/categorytasks/${cat}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.tasks);
      });
  };

  return (
    <>
      <Body backImage={task}>
        <App>
          <Heading>
            <span>
              <h1>
                <i className="fa-solid fa-clipboard-list"></i>
              </h1>
            </span>
            <span>
              <h1>TODO APP</h1>
            </span>
          </Heading>

          <Fields>
            <Inputs style={{ overflow: "hidden" }}>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="what to do ?"
                autoComplete="off"
              />
            </Inputs>

            <Inputs>
              <label>Task</label>
              <select
                value={task}
                name="task"
                onChange={(e) => setTask(e.target.value)}
                required
              >
                <option value="none" selected>
                  none
                </option>
                <option value="doctor">Doctor's visit</option>
                <option value="gym">Gym</option>
                <option value="movie">Movie</option>
                <option value="office">Office</option>
                <option value="school">School</option>
                <option value="college">College</option>
                <option value="home">Home</option>
              </select>
            </Inputs>

            <Inputs>
              <label>Due Date</label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Inputs>

            <Inputs>
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Inputs>
          </Fields>

          <ButtonsDiv>
            <Button>
              <button type="submit" onClick={() => fetchTask()}>
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
                Add task
              </button>
            </Button>

            <Button>
              <button type="submit" onClick={() => deleteTask()}>
                <span>
                  <i className="fa-solid fa-trash-can-arrow-up"></i>
                </span>
                Delete task
              </button>
            </Button>

            <UpdateDiv update={update}>
              <button
                type="submit"
                onClick={() => {
                  updateTasks(id);
                }}
              >
                <span>
                  <i className="fa-solid fa-pencil"></i>
                </span>
                Update task
              </button>
            </UpdateDiv>
          </ButtonsDiv>

          <Display>
            <ScheduleDiv>
              <h3>Schedule</h3>

              <div>
                <CategoryButton
                  value="doctor"
                  onClick={() => scheduleFetch("doctor")}
                >
                  doctor's visit
                </CategoryButton>
                <CategoryButton
                  value="movie"
                  onClick={() => scheduleFetch("movie")}
                >
                  movie
                </CategoryButton>
                <CategoryButton
                  value="gym"
                  onClick={() => scheduleFetch("gym")}
                >
                  gym
                </CategoryButton>
                <CategoryButton
                  value="college"
                  onClick={() => scheduleFetch("college")}
                >
                  college
                </CategoryButton>
                <CategoryButton
                  value="school"
                  onClick={() => scheduleFetch("school")}
                >
                  school
                </CategoryButton>
                <CategoryButton
                  value="home"
                  onClick={() => scheduleFetch("grocery")}
                >
                  home
                </CategoryButton>
                <CategoryButton
                  value="office"
                  onClick={() => scheduleFetch("office")}
                >
                  office
                </CategoryButton>
              </div>
            </ScheduleDiv>

            <TasksDiv>
              {tasks.map((task) => {
                return (
                  <TaskDiv key={task._id}>
                    <Field className="field">
                      <span>
                        <span>
                          <input
                            type="checkbox"
                            value={task._id}
                            onChange={(e) => {
                              e.target.checked
                                ? deletetasks.push(task)
                                : onUnChecked(task._id);
                            }}
                          />
                        </span>
                        <span style={{ fontWeight: "600" }}>
                          {task.description}
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>
                            <i className="fa-solid fa-calendar-days"></i>
                          </span>
                          {task.date.substring(0, 10)}
                        </span>
                        <span>
                          <span>
                            <i className="fa-solid fa-clock"></i>
                          </span>
                          {task.time} PM
                        </span>
                      </span>
                    </Field>

                    <CategoriesDiv>
                      <span>{task.task}</span>
                    </CategoriesDiv>

                    <UpdateIconDiv>
                      <span>
                        <i
                          className="fa-solid fa-file-pen"
                          onClick={() =>
                            onUpdateClick(
                              task._id,
                              task.description,
                              task.date,
                              task.task,
                              task.time
                            )
                          }
                        ></i>
                      </span>
                    </UpdateIconDiv>
                  </TaskDiv>
                );
              })}
            </TasksDiv>
          </Display>
        </App>
      </Body>
    </>
  );
};

export default Main;
