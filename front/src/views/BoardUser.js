import React, { useState, useEffect } from "react";

import Project from '../components/projects/Project';
import ProjectForm from '../components/projects/ProjectForm';

import ProjectService from "../services/project.service";

const BoardUser = () => {
  const [projects, setProjects] = useState("");

  useEffect(() => {
    ProjectService.getProjectsByUser().then(
      (response) => {
        setProjects(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

          setProjects(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Projects</h3>
      </header>

      <section className="row">
        {projects && projects.map((project) =>
          <Project key={project.id} data={project} setProjects={setProjects}/>
        )}
        <ProjectForm setProjects={setProjects} />
      </section>
    </div>
  );
};

export default BoardUser;
