import "../styles/projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        <div className="card">
          <h3>Project 1</h3>
          <p>Simple React app</p>
        </div>

        <div className="card">
          <h3>Project 2</h3>
          <p>Node.js API</p>
        </div>

        <div className="card">
          <h3>Project 3</h3>
          <p>MongoDB CRUD app</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;