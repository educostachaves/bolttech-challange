import React from "react";

import Tasks from "../tasks/Tasks";
import TaskForm from "../tasks/TaskForm";

const Project = ({ data }) => {
  const { name, tasks } = data;
  return (
    <div className="col-sm-4 mb-4">
      <div className="card">
        <h5 className="card-header">{name} <small><a href="#">delete</a></small></h5>
        <Tasks data={tasks} />
        <TaskForm />
      </div>
    </div>
  );
};

export default Project;




