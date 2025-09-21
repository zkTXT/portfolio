import React from 'react'


export default function Footer(){
return (
<footer className="footer">
<div className="container">
<div>© {new Date().getFullYear()} Zekri Ilyes — Portfolio / Blog</div>
<div style={{marginTop:8}}>
<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" style={{color:'var(--muted)',textDecoration:'none'}}>LinkedIn - ilyeszekri2@gmail.com</a>
</div>
</div>
</footer>
)
}