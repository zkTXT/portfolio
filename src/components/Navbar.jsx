import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar(){
const { pathname } = useLocation()
return (
<nav className="container nav">
<div className="logo">Zekri Ilyes</div>
<div className="nav-links">
<Link to="/" aria-current={pathname==='/'}>À propos</Link>
<Link to="/blog" aria-current={pathname.startsWith('/blog')}>Blog</Link>
<Link to="/entreprises" aria-current={pathname==='/entreprises'}>Entreprises</Link>
<Link to="/contact" aria-current={pathname==='/contact'}>Contact</Link>
</div>
</nav>
)
}