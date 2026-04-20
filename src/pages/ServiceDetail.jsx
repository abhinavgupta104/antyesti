import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Phone, Check } from 'lucide-react'
import ShlokBlock from '../components/common/ShlokBlock'
import services from '../data/services.json'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Service not found</h2>
        <Link to="/services" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>Back to Services</Link>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero */}
      <section style={{ background: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div className="container-main" style={{ maxWidth: '800px' }}>
          <p style={{ fontFamily: 'var(--font-sanskrit)', fontSize: '1.1rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>
            {service.nameDevanagari}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: 'white', marginBottom: '1rem' }}>
            {service.name}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,245,240,0.7)', lineHeight: 1.8 }}>
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'flex-start' }} className="service-detail-grid">
            {/* Main content */}
            <div>
              <ShlokBlock sanskrit={service.vedicReference.shlok} translation={`${service.vedicReference.translation} — ${service.vedicReference.scripture}`} />

              <h2 className="section-h2" style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }}>
                About This Service
              </h2>
              <p className="body-text" style={{ marginBottom: '2rem' }}>{service.fullDesc}</p>

              <h2 className="section-h2" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>What's Included</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem' }}>
                {service.inclusions.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Check size={15} color="var(--sage)" />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-body)' }}>{item}</span>
                  </li>
                ))}
              </ul>

              {service.price && (
                <div style={{ background: 'var(--bg-gold-tint)', border: '1px solid rgba(184,151,90,0.3)', borderRadius: '4px', padding: '1.25rem' }}>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-sage)', marginBottom: '0.3rem' }}>Pricing</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--forest)' }}>{service.price}</p>
                </div>
              )}
            </div>

            {/* Sticky sidebar */}
            <div style={{ position: 'sticky', top: '7rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  Get Help Now
                </h3>
                <a href="tel:+919999999999" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem', display: 'flex' }}>
                  <Phone size={15} /> Call 24/7
                </a>
                <Link to="/contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Request Callback
                </Link>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                  Average callback time: under 5 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .service-detail-grid { grid-template-columns: 2fr 1fr; }
        @media (max-width: 768px) { .service-detail-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
