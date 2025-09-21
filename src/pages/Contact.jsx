import React from 'react'
import ContactForm from '../components/ContactForm'


export default function Contact(){
return (
<div>
<h1>Contact</h1>
<p style={{color:'var(--muted)'}}>Utilise le formulaire pour me contacter directement.</p>
<div style={{marginTop:12}} className="grid-2">
<ContactForm />
<div className="card">
<h3>Informations</h3>
<p style={{color:'var(--muted)'}}>Email : ilyeszekri2@gmail.com</p>
<p style={{color:'var(--muted)'}}>LinkedIn : <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">TonProfil</a></p>
</div>
</div>
</div>
)
}


// EOF