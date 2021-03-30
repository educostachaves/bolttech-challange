import React from "react";

import TaskService from "../../services/task.service";
import ProjectService from "../../services/project.service";

const Task = ({ data, setProjects }) => {
  const { id, name, done, updatedAt } = data;

  const handleDone = (e) => {
    e.preventDefault();

    TaskService.editTask(id, e.target.checked).then(
      () => {
        ProjectService.getProjectsByUser().then(
          (response) => {
            setProjects(response.data);
          });
      }
    );
  }

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
        <input type="checkbox" onClick={handleDone} className="form-check-input"  value="true" id="defaultCheck1" checked={done ?? 'checked'} />
        <label className="form-check-label" for="defaultCheck1" alt={updatedAt}>
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
