import React from 'react'
import SectionLabel from '../components/common/SectionLabel'
import PackageCard from '../components/cards/PackageCard'
import packages from '../data/packages.json'

export default function PackagesPage() {
  return (
    <div>
      <section style={{ background: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div className="container-main">
          <SectionLabel light>Service Packages</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: 'var(--text-white)', marginBottom: '1rem', maxWidth: '600px' }}>
            Complete Care, Thoughtfully Structured
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,245,240,0.7)', maxWidth: '560px', lineHeight: 1.8 }}>
            Three packages built around the Vedic journey — from essential last rites to
            complete 13-day guidance and beyond.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="packages-page-grid">
            {packages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            All packages customizable for your community's traditions.
          </p>
        </div>
      </section>

      <style>{`
        .packages-page-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 900px) { .packages-page-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; } }
      `}</style>
    </div>
  )
}
