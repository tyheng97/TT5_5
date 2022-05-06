import { Link } from "react-router-dom";

export default function project({ project }) {
  return (
    <div className="project">
      <div className="projectInfo">
        <div className="projectCats">
          {project.categories.map((c) => (
            <span className="projectCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/project/${project._id}`} className="link">
          <span className="projectTitle">{project.title}</span>
        </Link>
        <hr />
      </div>
      <p className="projectDesc">{project.desc}</p>
    </div>
  );
}
