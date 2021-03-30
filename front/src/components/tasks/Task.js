import React from "react";

const Task = () => {
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
    </li>
  );
};

export default Task;
