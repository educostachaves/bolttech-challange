import React from "react";

import TaskService from "../../services/task.service";
import ProjectService from "../../services/project.service";

const Task = ({ data, setProjects }) => {
  const { id, name, done } = data;

  const handleDelete = (e) => {
    e.preventDefault();

    if (window.confirm("Want to delete?")) {
      TaskService.deleteTask(id).then(
        () => {
          ProjectService.getProjectsByUser().then(
            (response) => {
              setProjects(response.data);
            });
        }
      );
    }
  };

  return (
    <li className="list-group-item">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="true" id="defaultCheck1" checked={done ?? 'checked'} />
        <label className="form-check-label" for="defaultCheck1">
          &nbsp; {name}
          {!done ? (
            <small>
              (<a onClick={handleDelete} href="#">delete</a>)
            </small>) : null}
        </label>
      </div>
    </li>
  );
};

export default Task;
