import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../common/SectionLabel'
import blog from '../../data/blog.json'

const categoryColors = {
  'Rituals': 'var(--forest)',
  'Vedic Knowledge': 'var(--sage)',
  'Family Guide': 'var(--gold)',
  'City Guides': 'var(--forest-mid)',
  'Grief Support': 'var(--text-sage)',
}

export default function BlogPreview() {
  const featured = blog.slice(0, 3)

  return (
    <section style={{ background: 'var(--bg-page)' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 3rem' }}>
          <SectionLabel>Vedic Knowledge</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1rem' }}>
            Understanding Hindu Death Rituals
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            Guides and insights to help your family understand the meaning behind the rituals.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="blog-grid"
        >
          {featured.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.75rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
                e.currentTarget.style.borderColor = 'var(--border-gold)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Category badge */}
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.2rem 0.65rem',
                  background: 'var(--bg-section-alt)',
                  color: categoryColors[post.category] || 'var(--text-sage)',
                  border: '1px solid var(--border)',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.68rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  width: 'fit-content',
                  marginBottom: '1rem',
                }}
              >
                {post.category}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.35,
                  marginBottom: '0.75rem',
                  flex: 1,
                }}
              >
                {post.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  lineHeight: 1.65,
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem',
                }}
              >
                {post.excerpt.substring(0, 120)}...
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '0.85rem',
                }}
              >
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {post.readTime}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'var(--forest)',
                  }}
                >
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link
            to="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: 'var(--forest)',
              textDecoration: 'none',
              borderBottom: '1.5px solid var(--gold)',
              paddingBottom: '2px',
            }}
          >
            View All Articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        .blog-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
