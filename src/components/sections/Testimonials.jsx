import React from 'react'
import SectionLabel from '../common/SectionLabel'
import TestimonialCard from '../cards/TestimonialCard'
import testimonials from '../../data/testimonials.json'

export default function Testimonials() {
  const featured = testimonials.slice(0, 3)

  return (
    <section style={{ background: 'var(--bg-page)' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 3.5rem' }}>
          <SectionLabel>Families We Have Served</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1rem' }}>
            Words from Grieving Families We've Supported
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            Every family is unique. Every loss is profound. Here is what some of
            the families we have walked with have shared.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="testimonials-grid"
        >
          {featured.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
