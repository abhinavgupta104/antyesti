import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import cities from '../data/cities.json'

export default function CityDetail() {
  const { city } = useParams()
  const cityData = cities.find(c => c.name.toLowerCase() === city?.toLowerCase())

  if (!cityData) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)' }}>City not found</h2>
        <Link to="/cities" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>View All Cities</Link>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      <section style={{ background: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div className="container-main">
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>
            Antim Sanskar Services In
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: 'var(--text-white)', marginBottom: '0.5rem' }}>
            {cityData.name}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(245,245,240,0.7)', marginBottom: '2rem' }}>
            {cityData.pandits} qualified pandits · {cityData.services} services · Available 24/7
          </p>
          <a href="tel:+919999999999" className="btn-hero-primary">
            <Phone size={15} /> Book in {cityData.name}
          </a>
        </div>
      </section>

      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="city-detail-grid">
          <div>
            <h2 className="section-h2" style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>Crematoriums We Serve</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cityData.crematoriums.map((c, i) => (
                <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-body)', borderLeft: '2px solid var(--sage-light)', paddingLeft: '0.85rem' }}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-h2" style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>Services Available in {cityData.name}</h2>
            <p className="body-text">All {cityData.services} Antyesti services are available in {cityData.name} — including Antim Sanskar, 13-day rituals, Asthi Visarjan coordination, and grief counselling. Our {cityData.pandits} qualified pandits cover all major community traditions in this city.</p>
            <Link to="/book" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Book Service in {cityData.name}
            </Link>
          </div>
        </div>
      </section>

      <style>{`.city-detail-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .city-detail-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
