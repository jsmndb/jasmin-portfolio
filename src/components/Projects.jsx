import "../styles/projects.css";

function Projects() {
  const projectData = [
    {
      title: "Attendance System",
      description: "A digital attendance tracking system for students.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/",
    },

    {
      title: "Weather App",
      description: "A simple weather application using API data.",
      tech: ["React", "CSS", "API"],
      github: "https://github.com/",
    },

    {
      title: "Portfolio Website",
      description: "My personal developer portfolio website.",
      tech: ["React", "CSS"],
      github: "https://github.com/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <a href={project.github} target="_blank">
              <button>GitHub</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;