import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ContentWrapper from "../../components/utility/ContentWrapper";
import PageWrapper from "../../components/utility/PageWrapper";
import classes from "./Projects.module.css";

const projectList = [
  { id: 2, name: "Hi", description: "231r4124", budget: "143" },
  { id: 3, name: "Hi", description: "231r4124", budget: "143" },
];

const Project = (props) => {
  let navigate = useNavigate();
  const clickHandler = (e) => {
    // navigate(`/projects/${project.id}`)
  };
  return (
    <div onClick={clickHandler} className={classes.project}>
      <div className={classes.header}>
        <div className={classes.container}>
          <p>{props.id}</p>
          <p>{props.name}</p>
          <p>{props.description}</p>
          <p>{props.budget}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/api/projects/")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error", error));
  }, []);
  console.log(projects);
  return (
    <PageWrapper>
      <ContentWrapper>
        <h1> All Projects </h1>
        {projects.map((project) => {
          return <Project {...project} key={project.id} />;
        })}
      </ContentWrapper>
    </PageWrapper>
  );
};
export default Projects;
