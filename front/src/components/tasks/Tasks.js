import React from "react";

import Task from "./Task";

const Tasks = ({ data, setProjects }) => {
  const tasks = data;
  const doneList = (tasks ? tasks.filter((a) => a.done ) : []);
  const todoList = (tasks ? tasks.filter((a) => !a.done ) : []);
  return (
    <div className="card-body">
      <h5>To Do</h5>
      <ul className="list-group list-group-flush">
      {todoList && todoList.map((task) => (
        <Task key={task.id} data={task} setProjects={setProjects}/>
      ))}
      </ul>
      <hr/>
      <h5>Done</h5>
      <ul className="list-group list-group-flush">
      { doneList && doneList.map((task) => (
        <Task key={task.id} data={task} setProjects={setProjects}/>
      ))}
      </ul>
    </div>
  );
};

export default Tasks;




