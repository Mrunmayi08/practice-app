import React, { SyntheticEvent, useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AllTasks from './component/AllTasks';
import Navbar from "./component/Navbar";
import CompleteTask from './component/CompleteTask';
import InCompleteTask from './component/InCompleteTask';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const App: React.FC = () => {

  interface ListType {
    id: number,
    value: string,
    isComplete: boolean
  }

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([{
    id: Date.now(),
    value: "Learn react",
    isComplete: false,
  }
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const AddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (task !== "") {
      const taskDetails: any = {
        id: Date.now(),
        value: task,
        isComplete: false,
      };
      setTaskList([...taskList, taskDetails]);
      console.log(taskList)
      setTask("");
    }
  };


  const isCompleted = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    e.preventDefault();
    const element = taskList.findIndex((elem) => elem.id == id);
    const newTaskList = [...taskList];
    newTaskList[element] = {
      ...newTaskList[element],
      isComplete: true,
    };
    setTaskList(newTaskList)
  };

  const deleteList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id != id));
  };

  return (
    <div className="App">

      <form className="to-do-form" onSubmit={AddTodo}>
        <div className="inputField">
          <input
            type="text"
            placeholder="Enter task here"
            value={task}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <button className="btn btn-primary " type="submit">
            Add
          </button>
        </div>
      </form>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={() => <AllTasks isCompleted={(e, id) => isCompleted(e, id)} deleteList={(e, id) => deleteList(e, id)} list={taskList} />} />
        <Route
          path="/incomplete"
          component={() => (
            <InCompleteTask
              isCompleted={(e, id) => isCompleted(e, id)}
              list={taskList}
            />
          )}
        />
        <Route
          path="/complete"
          component={() => <CompleteTask list={taskList} />}
        />
      </BrowserRouter>
    </div>

  );
}

export default App;
