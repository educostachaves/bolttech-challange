import React from "react";

import ProjectService from '../../services/project.service';

import Tasks from "../tasks/Tasks";
import TaskForm from "../tasks/TaskForm";

const Project = ({ data, setProjects }) => {
  const { name, id, tasks } = data;

  const handleDelete = (e) => {
    e.preventDefault();

    if (window.confirm("Want to delete?")) {
      ProjectService.deleteProject(id).then(
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
    <div className="col-sm-4 mb-4">
      <div className="card">
        <h5 className="card-header">{name}
          <small>
            (<a onClick={handleDelete} href="#">delete</a>)
          </small>
        </h5>
        <Tasks data={tasks} setProjects={setProjects} />
        <TaskForm projectId={id} setProjects={setProjects} />
      </div>
    </div>
  );
};

export default Project;




