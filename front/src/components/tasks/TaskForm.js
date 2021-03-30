import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import TaskService from "../../services/task.service";
import ProjectService from "../../services/project.service";

const TaskForm = ({ setProjects, projectId }) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);

  const onChangeName = (e) => {
    const title = e.target.value;
    setName(title);
  };

  const vname = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    TaskService.saveTask(name, projectId).then(
      (response) => {
        ProjectService.getProjectsByUser().then(
          (response) => {
            setProjects(response.data);
          });
        setMessage(response.statusText);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

  return (
    <div className="card-footer">
      {message && (
        <div className={
            successful ? "alert alert-success" : "alert alert-danger"
          } role="alert">
          {message}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      <Form onSubmit={handleSubmit} ref={form}>
        <div className="form-group">
          <label>New Task</label>
          <Input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={onChangeName}
              validations={[vname]}
            />
        </div>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </Form>
    </div>
  );
};

export default TaskForm;
