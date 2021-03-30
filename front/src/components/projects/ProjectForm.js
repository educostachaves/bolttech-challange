import React from "react";

const ProjectForm = () => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <h5 className="card-header">New Project</h5>
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
  );
};

export default ProjectForm;
