import React from 'react'
import { useParams, Link } from 'react-router-dom'
import blog from '../data/blog.json'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blog.find(p => p.slug === slug)

  if (!post) return (
    <div style={{ textAlign: 'center', padding: '5rem' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)' }}>Article not found</h2>
      <Link to="/blog" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>Back to Blog</Link>
    </div>
  )

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      <section style={{ background: 'var(--bg-dark)', padding: '4rem 0' }}>
        <div className="container-main" style={{ maxWidth: '800px' }}>
          <span style={{ display: 'inline-block', padding: '0.2rem 0.65rem', background: 'rgba(122,158,126,0.2)', color: 'var(--sage-light)', border: '1px solid rgba(122,158,126,0.3)', borderRadius: '3px', fontFamily: 'var(--font-ui)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
            {post.category}
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 500, color: 'white', lineHeight: 1.3, marginBottom: '1rem' }}>
            {post.title}
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.82rem', color: 'rgba(245,245,240,0.4)' }}>
            By {post.author} · {post.readTime}
          </p>
        </div>
      </section>
      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main" style={{ maxWidth: '800px' }}>
          <p className="body-text" style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '1.5rem' }}>
            {post.excerpt}
          </p>
          <p className="body-text" style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '2rem' }}>
            This article is part of the Antyesti Vedic Knowledge series. Our pandits contribute their expertise to help families understand the rituals that guide them through loss.
          </p>
          <Link to="/blog" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.88rem', color: 'var(--forest)', textDecoration: 'none', borderBottom: '1px solid var(--gold)', paddingBottom: '2px' }}>
            ← Back to all articles
          </Link>
        </div>
      </section>
    </div>
  )
}
