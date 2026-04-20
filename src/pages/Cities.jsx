import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import SectionLabel from '../components/common/SectionLabel'
import cities from '../data/cities.json'

export default function Cities() {
  return (
    <div>
      <section style={{ background: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div className="container-main">
          <SectionLabel light>Cities We Serve</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: 'var(--text-white)', marginBottom: '1rem', maxWidth: '600px' }}>
            Available Across India — 24 Hours a Day
          </h1>
        </div>
      </section>
      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {cities.map(city => (
              <Link key={city.id} to={`/cities/${city.name.toLowerCase()}`}
                style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '4px', textDecoration: 'none', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-gold)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <MapPin size={14} color="var(--sage)" />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>{city.name}</span>
                </div>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{city.state}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-sage)' }}>{city.pandits} pandits</span>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-sage)' }}>{city.services} services</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
