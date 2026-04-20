import React from 'react'
import { Link } from 'react-router-dom'
import blog from '../data/blog.json'
import SectionLabel from '../components/common/SectionLabel'
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  return (
    <div>
      <section style={{ background: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div className="container-main">
          <SectionLabel light>Vedic Knowledge</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: 'var(--text-white)', marginBottom: '1rem', maxWidth: '600px' }}>
            Understanding Hindu Death Rituals
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,245,240,0.7)', lineHeight: 1.8 }}>
            Guides, explanations, and Vedic knowledge to help your family navigate this journey.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {blog.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`}
                style={{ display: 'flex', flexDirection: 'column', padding: '2rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '4px', textDecoration: 'none', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-gold)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <span style={{ display: 'inline-block', padding: '0.2rem 0.65rem', background: 'var(--bg-section-alt)', color: 'var(--text-sage)', border: '1px solid var(--border)', borderRadius: '3px', fontFamily: 'var(--font-ui)', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.06em', width: 'fit-content', marginBottom: '1rem' }}>
                  {post.category}
                </span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '0.75rem', flex: 1 }}>{post.title}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '1rem' }}>{post.excerpt.substring(0, 130)}...</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '0.85rem' }}>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{post.readTime} · {post.author}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 500, color: 'var(--forest)' }}>
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
