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
<p className="hero-sub">Je crée des interfaces web modernes avec React et j'aime résoudre des problèmes techniques.</p>
<p style={{color:'var(--muted)'}}>Compétences : React • JavaScript • PHP • SQL • Linux</p>
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
<p style={{color:'var(--muted)'}}>Brève présentation — explique ton parcours, ce que tu recherches (stage, alternance, emploi), et donne envie au recruteur de lire la suite.</p>
</div>
</section>


<section style={{marginTop:22}}>
<h2>Projets récents</h2>
<div className="grid-2" style={{marginTop:10}}>
<div className="card">
<h3>Projet A — Site e-commerce</h3>
<p style={{color:'var(--muted)'}}>Stack : PHP, MySQL, JS — Description courte du projet.</p>
</div>
<div className="card">
<h3>Projet B — Jeu Python</h3>
<p style={{color:'var(--muted)'}}>RPG en Python, features : inventaire, boss, etc.</p>
</div>
</div>
</section>
</div>
)
}