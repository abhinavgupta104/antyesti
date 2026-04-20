import React from 'react'
import SectionLabel from '../common/SectionLabel'
import PackageCard from '../cards/PackageCard'
import packages from '../../data/packages.json'

export default function PackagesSection() {
  return (
    <section style={{ background: 'var(--bg-section-alt)' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 3.5rem' }}>
          <SectionLabel>Service Packages</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1rem' }}>
            Choose the Right Care for Your Family
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            Three carefully structured packages built around the Vedic journey.
            All can be customized to your community's specific traditions.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
          className="packages-grid"
        >
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
          }}
        >
          All packages customizable for your community's traditions. Contact us to discuss.
        </p>
      </div>

      <style>{`
        .packages-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .packages-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
