import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../common/SectionLabel'
import PanditCard from '../cards/PanditCard'
import DivaDivider from '../common/DivaDivider'
import pandits from '../../data/pandits.json'

export default function QualifiedPandits() {
  const featured = pandits.slice(0, 4)

  return (
    <section style={{ background: 'linear-gradient(180deg, var(--bg-gold-tint) 0%, var(--bg-cream) 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle corner decoration */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,152,74,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="container-main">
        <div style={{ maxWidth: '600px', marginBottom: '3rem' }}>
          <SectionLabel>Our Pandits</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1rem' }}>
            Vedic Scholars, Not Just Ceremonial Priests
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            Each pandit on our platform holds formal Vedic education and deep expertise
            in regional Hindu funeral traditions. They guide, they explain, they hold
            your family through every step.
          </p>
        </div>

        <DivaDivider />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginTop: '2.5rem',
          }}
        >
          {featured.map((pandit, i) => (
            <PanditCard key={pandit.id} pandit={pandit} index={i} />
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <Link
            to="/pandits"
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
            Meet All Our Pandits <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
