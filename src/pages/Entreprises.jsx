import React from 'react'
import { companies } from '../data/companies'


export default function Entreprises(){
return (
<div>
<h1>Contexte et présentation des entreprises</h1>
<p style={{color:'var(--muted)'}}>Descriptions personnelles et synthétiques des entreprises où j'ai travaillé.</p>


<div style={{marginTop:16}} className="article-list">
{companies.map(c => (
<div key={c.id} className="card">
<h3>{c.name} — <span style={{color:'var(--muted)'}}>{c.location}</span></h3>
<p style={{color:'var(--muted)'}}><strong>Activité :</strong> {c.activity}</p>
<p style={{color:'var(--muted)'}}><strong>Mon rôle :</strong> {c.role} — <strong>Période :</strong> {c.period}</p>
<p style={{color:'var(--muted)'}}><strong>Contexte :</strong> {c.description}</p>
<p style={{color:'var(--muted)'}}><strong>Environnement :</strong> {c.environment}</p>
</div>
))}
</div>
</div>
)
}