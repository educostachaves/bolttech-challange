import React, { useState, useEffect } from "react";

import ProjectService from "../services/project.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    ProjectService.getProjectsByUser().then(
      (response) => {
        console.log(response.data);
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Projects</h3>
      </header>

      <section className="row">
        <div className="col-sm-4">
          <div className="card">
            <h5 className="card-header">Featured <small><a href="">delete</a></small></h5>
            <div className="card-body">
              <h5>To Do</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                      Default checkbox <small><a href="">delete</a></small>
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                      Default checkbox <small><a href="">delete</a></small>
                    </label>
                  </div>
                </li>
              </ul>
              <hr/>
              <h5>Done</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                      Default checkbox
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                      Default checkbox
                    </label>
                  </div>
                </li>
              </ul>
              <hr/>
              <h5>Add Task</h5>
              <form>
                <div className="form-group">
                  <label>Project Name</label>
                  <input type="text" className="form-control" placeholder="Type project name" />
                </div>
                <button type="submit" className="btn btn-primary">Add Project</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <h5 className="card-header">Add Project</h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Project Name</label>
                  <input type="text" className="form-control" placeholder="Type project name" />
                </div>
                <button type="submit" className="btn btn-primary">Add Project</button>
              </form>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default BoardUser;
