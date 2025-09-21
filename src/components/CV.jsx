import React from 'react'


export default function CV(){
return (
<div className="card">
<h3>Curriculum Vitae</h3>
<p style={{color:'var(--muted)'}}>Téléchargement / aperçu rapide</p>
<ul style={{lineHeight:1.6}}>
<li><strong>Nom :</strong> Zekri Ilyes</li>
<li><strong>Formation :</strong> Bachelor Informatique — Ynov Paris Campus</li>
<li><strong>Compétences :</strong> React, PHP, SQL, Bash, Linux</li>
<li><strong>Langues :</strong> Français (natif), Anglais (technique), Arabe (avancé), Espagnol (débutant)</li>
</ul>
<div style={{marginTop:10}}>
<a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Télécharger le CV (PDF)</a>
</div>
</div>
)
}