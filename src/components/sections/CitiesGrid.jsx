import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import SectionLabel from '../common/SectionLabel'
import cities from '../../data/cities.json'

export default function CitiesGrid() {
  return (
    <section style={{ background: 'var(--bg-section-alt)' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 3rem' }}>
          <SectionLabel>Cities We Serve</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1rem' }}>
            Available Across India — 24 Hours
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            Serving 15 major cities with qualified pandits and complete support.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '1rem',
          }}
        >
          {cities.map((city) => (
            <Link
              key={city.id}
              to={`/cities/${city.name.toLowerCase()}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.25rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-gold)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <MapPin size={13} color="var(--sage)" />
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  {city.name}
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.2rem',
                }}
              >
                {city.state}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.72rem',
                  color: 'var(--text-sage)',
                  marginTop: 'auto',
                  paddingTop: '0.5rem',
                }}
              >
                {city.pandits} pandits · {city.services} services
              </span>
            </Link>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
          }}
        >
          All India transport and coordination available for intercity cases
        </p>
      </div>
    </section>
  )
}
