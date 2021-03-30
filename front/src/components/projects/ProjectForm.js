import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import ProjectService from "../../services/project.service";

const ProjectForm = ({ setProjects }) => {
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

    ProjectService.saveProject(name).then(
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
    <div className="col-sm-4">
      <div className="card mb-4">
        <h5 className="card-header">New Project</h5>
        <div className="card-body">
          {message && (
            <div className={
                successful ? "alert alert-success" : "alert alert-danger"
              } role="alert">
              {message}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          <Form onSubmit={handleSubmit} ref={form}>
            <div className="form-group">
              <label>Project Name</label>
              <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  validations={[vname]}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Project</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
