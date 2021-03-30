import React from "react";

const TaskForm = () => {
  return (
    <div className="card-footer">
      <form>
        <div className="form-group">
          <label>New Task</label>
          <input type="text" className="form-control" placeholder="Type task name" />
        </div>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
