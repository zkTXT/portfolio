import React from 'react'
import CV from '../components/CV'
import Timeline from '../components/Timeline'
import { companies } from '../data/companies'


export default function Home(){
const timeline = [
{title:'Bachelor Informatique', period:'2023 - 2025', desc:'Études en informatique, projets, TPs.'},
{title:'Stage — Entreprise X', period:'Avr 2025 - Juin 2025', desc:'Stage front-end React.'}
]
return (
<div>
<div className="header-hero">
<div>
<div className="card">
<h1 className="hero-title">Zekri Ilyes — Développeur / Étudiant</h1>
<p className="hero-sub">Étudiant passionné dans le domaine de l'informatique, actuellement a l'école Ynov Paris Campus en Bachelor 3.</p>
<p style={{color:'var(--muted)'}}>Compétences : React • JavaScript • PHP • SQL • Linux • Golang • Java • C++ • HTML/CSS • Cisco Packet Tracer • Vmware/VirtualBox • Kali Linux</p>
<div style={{marginTop:12}}>
<a className="btn" href="/blog">Voir mes articles</a>
<a style={{marginLeft:10}} className="btn" href="/entreprises">Mes expériences</a>
</div>
</div>


<div style={{marginTop:16}} className="grid-2">
<Timeline items={timeline} />
<div className="card">
<h3>Contact rapide</h3>
<p style={{color:'var(--muted)'}}>Email : <a href="mailto:ilyeszekri2@gmail.com">ilyeszekri2@gmail.com</a></p>
<p style={{color:'var(--muted)'}}>LinkedIn : <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">...</a></p>
</div>
</div>
</div>


<aside>
<CV />
</aside>
</div>


<section style={{marginTop:22}}>
<h2>À propos</h2>
<div className="card" style={{marginTop:10}}>
<p style={{color:'var(--muted)'}}>Passionné depuis toujours par le numérique, j’ai orienté mes études vers ce
domaine. Curieux, autonome et motivé, je développe mes compétences à
travers des projets personnels et académiques, en explorant
continuellement de nouvelles technologies.
Je suis actuellement à la recherche d‘une alternance dans le
cadre de ma 3ème année de Bachelor.
Rythme : 2 semaines entreprise / 1 semaine école
</p>
</div>
</section>


<section style={{marginTop:22}}>
<h2>Projets récents</h2>
<div className="grid-2" style={{marginTop:10}}>
<div className="card">
<h3>Site e-commerce OOTD©</h3>
<p style={{color:'var(--muted)'}}>Technos : PHP, MySQL, JS — Site de partage de tenues et de vetements en general, ou l'on peut visionner des tenues en 3D, les acheter, ou tout simplement interagir avec (likes, repost, commenter).</p>
</div>
<div className="card">
<h3>Forum Professionel WorkNet</h3>
<p style={{color:'var(--muted)'}}>Technos : JS, Golang, HTML/CSS — Forum a l'aspect années 90 visant a aider les recuteurs et les chercheurs d'emplois a rentrer en contact. Sur le site l'on peut créer des annonces les commenter, les liker, les partager. Une messagerie est également presente ainsi qu'une page de profil soignée avec diverses informations sur l'utilisateur ou sur une entreprise.</p>
</div>
</div>
</section>
</div>
)
}