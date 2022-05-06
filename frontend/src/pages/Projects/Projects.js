import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div>
      <h1> All Projects </h1>
      <div className={classes.header}>
        <div className={classes.container}>
          <p>Project #projectid</p>
          <p>Name: Project Name</p>
          <p>Description: project description</p>
          <p>Total Expenses: </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
