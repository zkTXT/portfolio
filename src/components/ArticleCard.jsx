import React from 'react'
import { Link } from 'react-router-dom'


export default function ArticleCard({article}){
return (
<article className="card article-card">
<h3>{article.title}</h3>
<div style={{color:'var(--muted)',fontSize:12}}>{article.date} • {article.category}</div>
<p style={{margin:0,color:'var(--muted)'}}>{article.excerpt}</p>
<div style={{marginTop:8}}>
<Link to={`/blog/${article.id}`} className="btn">Lire</Link>
</div>
</article>
)
}