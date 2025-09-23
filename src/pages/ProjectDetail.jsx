import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();

  // Liste détaillée des projets
  const projectData = {
    1: {
      title: "Site e-commerce OOTD©",
      desc: "Site de partage de tenues et de vêtements en général, où l'on peut visionner des tenues en 3D, les acheter, ou interagir (likes, reposts, commentaires).",
      tech: "PHP, MySQL, JS",
    },
    2: {
      title: "Forum Professionnel WorkNet",
      desc: "Forum à l'aspect années 90 visant à aider recruteurs et chercheurs d'emploi. Annonces, commentaires, likes, partages, messagerie et profils complets.",
      tech: "JS, Golang, HTML/CSS",
    },
    3: {
      title: "Portfolio React",
      desc: "Mon portfolio en React avec un design moderne, des pages dynamiques et une navigation fluide.",
      tech: "React, CSS",
    },
    4: {
      title: "Portfolio React",
      desc: "Mon portfolio en React avec un design moderne, des pages dynamiques et une navigation fluide.",
      tech: "React, CSS",
    },
    5: {
      title: "Portfolio React",
      desc: "Mon portfolio en React avec un design moderne, des pages dynamiques et une navigation fluide.",
      tech: "React, CSS",
    },
    6: {
      title: "Portfolio React",
      desc: "Mon portfolio en React avec un design moderne, des pages dynamiques et une navigation fluide.",
      tech: "React, CSS",
    },
    7: {
      title: "Portfolio React",
      desc: "Mon portfolio en React avec un design moderne, des pages dynamiques et une navigation fluide.",
      tech: "React, CSS",
    },
    8: {
      title: "Portfolio React",
      desc: "Mon portfolio en React avec un design moderne, des pages dynamiques et une navigation fluide.",
      tech: "React, CSS",
    },
    9: {
      title: "Portfolio React",
      desc: "Mon portfolio en React avec un design moderne, des pages dynamiques et une navigation fluide.",
      tech: "React, CSS",
    },
    10: {
      title: "Portfolio React",
      desc: "Mon portfolio en React avec un design moderne, des pages dynamiques et une navigation fluide.",
      tech: "React, CSS",
    },
    11: {
      title: "Portfolio React",
      desc: "Mon portfolio en React avec un design moderne, des pages dynamiques et une navigation fluide.",
      tech: "React, CSS",
    },
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div>
        <h2>Projet introuvable</h2>
        <Link to="/projects" className="btn">
          Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <div className="card">
        <p style={{ color: "var(--muted)" }}>{project.desc}</p>
        <p>
          <b>Technos :</b> {project.tech}
        </p>
        <Link to="/projects" className="btn" style={{ marginTop: 12 }}>
          Retour aux projets
        </Link>
      </div>
    </div>
  );
}
