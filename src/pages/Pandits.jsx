import React from 'react'
import SectionLabel from '../components/common/SectionLabel'
import PanditCard from '../components/cards/PanditCard'
import pandits from '../data/pandits.json'

export default function Pandits() {
  return (
    <div>
      <section style={{ background: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div className="container-main">
          <SectionLabel light>Our Pandits</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: 'var(--text-white)', marginBottom: '1rem', maxWidth: '600px' }}>
            Vedic Scholars Across Every Tradition
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,245,240,0.7)', maxWidth: '560px', lineHeight: 1.8 }}>
            All formally educated. Background verified. Trained in specific community traditions.
          </p>
        </div>
      </section>
      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {pandits.map((pandit, i) => (
              <PanditCard key={pandit.id} pandit={pandit} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
