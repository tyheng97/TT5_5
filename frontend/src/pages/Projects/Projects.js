import ContentWrapper from "../../components/utility/ContentWrapper";
import PageWrapper from "../../components/utility/PageWrapper";
import classes from "./Projects.module.css";

const projectList = [
  { id: 2, name: "Hi", description: "231r4124", budget: "143" },
  { id: 3, name: "Hi", description: "231r4124", budget: "143" },
];

const Project = (props) => {
  return (
    <div>
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
  fetch("http://localhost:3002/api/projects/")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error", error));

  return (
    <PageWrapper>
      <ContentWrapper>
        <h1> All Projects </h1>
        {projectList.map((project) => {
          return <Project {...project} key={project.id} />;
        })}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Projects;
