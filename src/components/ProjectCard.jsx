import { FaLink, FaGithub } from "react-icons/fa6";

const ProjectCard = ({
  project_img,
  project_title,
  project_text,
  roles,
  skills,
  companyLink,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img src={project_img} alt={project_title} />
      </div>

      <h3>{project_title}</h3>
      <h4>{project_text}</h4>

      <p>Role & Responsibilities:</p>
      <ul>
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>

      <div className="project-skill-layout">
        {skills.map((skill, index) => (
          <p key={index} className="project-skill-card">
            {skill}
          </p>
        ))}
      </div>

      <div className="project-links">
        {companyLink && (
          <a
            href={companyLink}
            target="_blank"
            className="text-primary underline text-base hover:text-gray-400 hover:scale-100"
          >
            Company Website
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" title="Live Site">
            <FaLink />
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" title="GitHub Link">
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
