import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import pandits from '../data/pandits.json'

export default function PanditProfile() {
  const { id } = useParams()
  const pandit = pandits.find((p) => String(p.id) === String(id))

  if (!pandit) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)' }}>Pandit not found</h2>
        <Link to="/pandits" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>Back to Pandits</Link>
      </div>
    )
  }

  const initials = pandit.name.split(' ').filter(w => w.match(/^[A-Z]/)).slice(1, 3).map(w => w[0]).join('')

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      <section style={{ background: 'var(--bg-cream)', padding: '4rem 0' }}>
        <div className="container-main">
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '3px solid var(--sage)', background: 'var(--bg-section-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 500, color: 'var(--forest)' }}>{initials}</span>
            </div>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {pandit.name}
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {pandit.education}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {pandit.traditions.map(t => <span key={t} className="credential-pill">{t}</span>)}
                <span className="credential-pill">{pandit.experience} Years Experience</span>
                {pandit.languages.map(l => <span key={l} className="credential-pill">{l}</span>)}
              </div>
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div><p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--forest)' }}>{pandit.ceremoniesPerformed.toLocaleString()}+</p><p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ceremonies</p></div>
                <div><p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--forest)' }}>{pandit.experience}</p><p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Years</p></div>
              </div>
              <a href="tel:+919999999999" className="btn-primary">
                <Phone size={15} /> Book {pandit.name.split(' ')[1]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main" style={{ maxWidth: '800px' }}>
          <h2 className="section-h2" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>About</h2>
          <p className="body-text" style={{ marginBottom: '2rem' }}>{pandit.bio}</p>
          <h2 className="section-h2" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Specializations</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {pandit.specializations.map((s, i) => (
              <li key={i} className="credential-pill" style={{ fontSize: '0.85rem', padding: '0.35rem 0.85rem' }}>{s}</li>
            ))}
          </ul>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            City: {pandit.city} · Status: {pandit.available ? 'Available for booking' : 'Currently busy — enquire for next availability'}
          </p>
        </div>
      </section>
    </div>
  )
}
