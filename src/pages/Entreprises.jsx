import React from 'react'
import { companies } from '../data/companies'

export default function Entreprises() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contexte et présentation des entreprises</h1>
      <p style={{ color: 'var(--muted)', marginBottom: 20 }}>
        Descriptions personnelles et synthétiques des entreprises où j'ai travaillé.
      </p>

      <div className="company-list">
        {companies.map(c => (
          <div key={c.id} className="company-card">
            {c.image && (
              <div className="company-image">
                <img src={c.image} alt={c.name} />
              </div>
            )}

            <div className="company-info">
              <h2>{c.name} — <span style={{ color: 'var(--muted)' }}>{c.location}</span></h2>
              <p><strong>Activité :</strong> {c.activity}</p>
              <p><strong>Mon rôle :</strong> {c.role} — <strong>Période :</strong> {c.period}</p>
              <p><strong>Contexte :</strong> {c.description}</p>
              <p><strong>Environnement :</strong> {c.environment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
