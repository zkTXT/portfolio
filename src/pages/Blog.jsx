import React from 'react'
import { articles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'


export default function Blog(){
return (
<div>
<h1>Blog</h1>
<p style={{color:'var(--muted)'}}>Articles et bilans professionnels — triés par date</p>
<div style={{marginTop:16}} className="article-list">
{articles.map(a => (
<ArticleCard key={a.id} article={a} />
))}
</div>
</div>
)
}