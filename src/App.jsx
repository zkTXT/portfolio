import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article'
import Entreprises from './pages/Entreprises'
import Contact from './pages/Contact'


export default function App(){
return (
<>
<Navbar />
<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:id" element={<Article />} />
<Route path="/entreprises" element={<Entreprises />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer />
</>
)
}