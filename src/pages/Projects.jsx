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
      title: "RPG Python",
      short: "Un rpg avec diverses features entierement codé en python",
      tech: "Python",
    },
        {
      id: 4,
      title: "StayHard",
      short: "Application mobile de suivi sportif et lifestyle",
      tech: "Python, JavaScript, JSON, TSX",
    },
        {
      id: 5,
      title: "Sahara Plastic",
      short: "Site de sensibilisation vis a vis de la pollution dans le Sahara",
      tech: "TypeScript, CSS",
    },
        {
      id: 6,
      title: "E-shop Project",
      short: "Projet de site e-commerce codé en 48h",
      tech: "React, CSS, MySQL, WAMP, JavaScript",
    },
        {
      id: 7,
      title: "Groupie-Tracker",
      short: "Application d'achats d'albums et de billets de concerts",
      tech: "Golang, Fyne",
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
