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
      title: "RPG Python",
      desc: "RPG en tour par tour ergonomique, l'usage de diverses armes et potions ainsi que des boost d'attaque et de defense sont possible pour des combats toujours plus variés et plein d'autres objets vous attendent dans ce monde fantastique. N'attendez plus pour decouvrir le monde et ses ennemis toujours plus coriaces les uns que les autres !",
      tech: "Python",
    },
    4: {
      title: "StayHard",
      desc: "Application mobile de suivi sportif et lifestyle. Au sein de cet appli l'on peut accéder a sa salle de sport favorite a l'aide d'un QR code, planifier des seances, manger sainement a l'aide de recettes et videos explicatives, des tutos d'exercices et vous avez meme la possibilité d'avoir un coach personnel !",
      tech: "React, CSS",
    },
    5: {
      title: "Sahara Plastic",
      desc: "Site de sensibilisation vis a vis de la pollution dans le Sahara, avec des slides explicatives, des vidéos ainsi que des reportages poignants.",
      tech: "TypeScript, CSS",
    },
    6: {
      title: "E-shop Project",
      desc: "Ce projet est un site e-commerce dynamique développé en PHP et utilisant une base de données MySQL. il permet aux utilisateurs de consulter un catalogue de produits, s'inscrire et se connecter, gérer un panier, passer des commandes, accéder à un espace administrateur pour la gestion des produits et des utilisateurs",
      tech: "React, CSS, MySQL, WAMP, JavaScript",
    },
    7: {
      title: "Groupie-Tracker",
      desc: "Application d'achats d'albums et de billets de concerts, accompagné d'une interfance stable et optimisé",
      tech: "Golang, Fyne",
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
