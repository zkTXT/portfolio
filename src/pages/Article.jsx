import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'


export default function Article(){
const { id } = useParams()
const article = articles.find(a => a.id === id)
if(!article) return (
<div className="card">
<h2>Article non trouvé</h2>
<Link to="/blog" className="btn">Retour au blog</Link>
</div>
)


return (
<div>
<div className="card">
<h1>{article.title}</h1>
<div style={{color:'var(--muted)'}}>{article.date} • {article.category}</div>
<div style={{marginTop:12}} dangerouslySetInnerHTML={{__html: markdownToHtml(article.content)}} />
<div style={{marginTop:12}}>
<Link to="/blog" className="btn">Retour</Link>
</div>
</div>
</div>
)
}


function markdownToHtml(md){
// Minimal markdown->HTML conversion for headings and lists used in our sample content.
return md
.replace(/^### (.*$)/gim, '<h3>$1</h3>')
.replace(/^\- (.*$)/gim, '<li>$1</li>')
.replace(/\n\n/gim, '<p></p>')
.replace(/\n/gim, '<br/>')
}