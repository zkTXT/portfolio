import React from 'react'
import CV from '../components/CV'
import Timeline from '../components/Timeline'
import { companies } from '../data/companies'

// Import des icônes
import { FaReact, FaJs, FaPhp, FaDatabase, FaLinux, FaJava } from "react-icons/fa"
import { SiGoland, SiCisco, SiVmware } from "react-icons/si"

export default function Home() {
  const timeline = [
    { title: 'Bachelor Informatique', period: '2023 - 2025', desc: 'Études en informatique, projets, TPs.' },
    { title: 'Stage — Entreprise X', period: 'Avr 2025 - Juin 2025', desc: 'Stage front-end React.' }
  ]

  const skills = [
    { name: "React", desc: "Développement d’interfaces modernes et dynamiques.", icon: <FaReact size={32} color="#61DBFB" /> },
    { name: "JavaScript", desc: "Langage central du web pour créer des applications interactives.", icon: <FaJs size={32} color="#f7df1e" /> },
    { name: "PHP & SQL", desc: "Création d’API, gestion de bases de données relationnelles.", icon: <><FaPhp size={32} color="#8892be" /> <FaDatabase size={28} color="#4db33d" style={{ marginLeft: 6 }} /></> },
    { name: "Linux", desc: "Utilisation et administration de systèmes Linux (Ubuntu, Kali).", icon: <FaLinux size={32} color="#000" /> },
    { name: "Golang", desc: "Développement d’API performantes et outils systèmes.", icon: <SiGoland size={32} color="#00ADD8" /> },
    { name: "Cisco & Réseaux", desc: "Simulation et configuration réseaux avec Packet Tracer.", icon: <SiCisco size={32} color="#1ba0d7" /> },
    { name: "VMware / VirtualBox", desc: "Virtualisation et gestion de machines virtuelles.", icon: <SiVmware size={32} color="#607078" /> },
    { name: "Java / C++", desc: "Programmation orientée objet et algorithmique.", icon: <FaJava size={32} color="#f89820" /> }
  ]

  return (
    <div>
      <div className="header-hero">
        <div>
          <div className="card">
            <h1 className="hero-title">Zekri Ilyes — Développeur / Étudiant</h1>
            <p className="hero-sub">
              Étudiant passionné dans le domaine de l'informatique, actuellement à l'école Ynov Paris Campus en Bachelor 3.
            </p>
            <p style={{ color: 'var(--muted)' }}>
            </p>
            <div style={{ marginTop: 12 }}>
              <a className="btn" href="/blog">Voir mes articles</a>
              <a style={{ marginLeft: 10 }} className="btn" href="/entreprises">Mes expériences</a>
            </div>
          </div>

          <div style={{ marginTop: 16 }} className="grid-2">
            <Timeline items={timeline} />
            <div className="card">
              <h3>Contact rapide</h3>
              <p style={{ color: 'var(--muted)' }}>Email : <a href="mailto:ilyeszekri2@gmail.com">ilyeszekri2@gmail.com</a></p>
              <p style={{ color: 'var(--muted)' }}>LinkedIn : <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">...</a></p>
            </div>
          </div>
        </div>

        <aside>
          <CV />
        </aside>
      </div>

      {/* Section À propos */}
      <section style={{ marginTop: 22 }}>
        <h2>À propos</h2>
        <div className="card" style={{ marginTop: 10 }}>
          <p style={{ color: 'var(--muted)' }}>
            Passionné depuis toujours par le numérique, j’ai orienté mes études vers ce domaine. Curieux, autonome et motivé, je développe mes compétences à travers des projets personnels et académiques, en explorant continuellement de nouvelles technologies.
            Je suis actuellement à la recherche d‘une alternance dans le cadre de ma 3ème année de Bachelor.
            Rythme : 2 semaines entreprise / 1 semaine école
          </p>
        </div>
      </section>

      {/* Section Compétences */}
      <section style={{ marginTop: 22 }}>
        <h2>Compétences</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

<section style={{ marginTop: 22 }}>
  <h2>Projets récents</h2>
  <div className="grid-2" style={{ marginTop: 10 }}>
    <div className="card recent-project-card">
      <h3>Site e-commerce OOTD©</h3>
      <p style={{ color: 'var(--muted)' }}>
        Technos : PHP, MySQL, JS — Site de partage de tenues et de vêtements en général, où l'on peut visionner des tenues en 3D, les acheter, ou tout simplement interagir avec (likes, repost, commenter).
      </p>
      <a href="/projects" className="see-more-link">🔍 Voir plus</a>
    </div>
    <div className="card recent-project-card">
      <h3>Forum Professionel WorkNet</h3>
      <p style={{ color: 'var(--muted)' }}>
        Technos : JS, Golang, HTML/CSS — Forum à l'aspect années 90 visant à aider les recruteurs et les chercheurs d'emplois à rentrer en contact. Sur le site l'on peut créer des annonces, les commenter, les liker, les partager. Une messagerie est également présente ainsi qu'une page de profil soignée avec diverses informations sur l'utilisateur ou sur une entreprise.
      </p>
      <a href="/projects" className="see-more-link">🔍 Voir plus</a>
    </div>
  </div>
</section>
    </div>
  )
}
