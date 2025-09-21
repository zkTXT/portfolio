import React, {useState} from 'react'


export default function ContactForm(){
const [values,setValues] = useState({name:'',email:'',message:''})
const [sent,setSent] = useState(false)
function onChange(e){setValues({...values,[e.target.name]:e.target.value})}
function onSubmit(e){
e.preventDefault()
// For production, replace with EmailJS / backend endpoint.
console.log('contact',values)
setSent(true)
}
return (
<form className="card contact-form" onSubmit={onSubmit}>
<label>Nom</label>
<input name="name" value={values.name} onChange={onChange} required />
<label>Email</label>
<input name="email" type="email" value={values.email} onChange={onChange} required />
<label>Message</label>
<textarea name="message" rows={6} value={values.message} onChange={onChange} required />
<div style={{marginTop:10}}>
<button className="btn" type="submit">Envoyer</button>
</div>
{sent && <div style={{marginTop:8,color:'var(--accent)'}}>Merci — message simulé envoyé.</div>}
</form>
)
}