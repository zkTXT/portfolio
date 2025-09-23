import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Site e-commerce OOTD©",
      short: "Un site de partage et d’achat de vêtements en 3D.",
      tech: "PHP, MySQL, JS",
    },
    {
      id: 2,
      title: "Forum Professionnel WorkNet",
      short: "Un forum style années 90 pour recruteurs et candidats.",
      tech: "JS, Golang, HTML/CSS",
    },
    {
      id: 3,
      title: "Portfolio React",
      short: "Mon portfolio personnel développé en React.",
      tech: "React, CSS",
    },
        {
      id: 4,
      title: "Portfolio React",
      short: "Mon portfolio personnel développé en React.",
      tech: "React, CSS",
    },
        {
      id: 5,
      title: "Portfolio React",
      short: "Mon portfolio personnel développé en React.",
      tech: "React, CSS",
    },
        {
      id: 6,
      title: "Portfolio React",
      short: "Mon portfolio personnel développé en React.",
      tech: "React, CSS",
    },
        {
      id: 7,
      title: "Portfolio React",
      short: "Mon portfolio personnel développé en React.",
      tech: "React, CSS",
    },
        {
      id: 8,
      title: "Portfolio React",
      short: "Mon portfolio personnel développé en React.",
      tech: "React, CSS",
    },
        {
      id: 9,
      title: "Portfolio React",
      short: "Mon portfolio personnel développé en React.",
      tech: "React, CSS",
    },
        {
      id: 10,
      title: "Portfolio React",
      short: "Mon portfolio personnel développé en React.",
      tech: "React, CSS",
    },
        {
      id: 11,
      title: "Portfolio React",
      short: "Mon portfolio personnel développé en React.",
      tech: "React, CSS",
    },
  ];

  return (
    <div>
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="card project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p style={{ color: "var(--muted)" }}>{project.short}</p>
            <p>
              <b>Technos :</b> {project.tech}
            </p>
            <Link className="btn" to={`/projects/${project.id}`}>
              Voir détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
