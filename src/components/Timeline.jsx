import React from 'react'


export default function Timeline({items}){
return (
<div className="card timeline">
{items.map((it,idx)=> (
<div key={idx} className="timeline-item">
<div style={{fontWeight:700}}>{it.title} <span style={{color:'var(--muted)',fontWeight:400}}> — {it.period}</span></div>
<div style={{color:'var(--muted)',marginTop:6}}>{it.desc}</div>
</div>
))}
</div>
)
}