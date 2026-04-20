import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import SacredGeoBg from '../common/SacredGeoBg'

// Sacred flame SVG — geometric, minimal
function SacredFlame() {
  return (
    <div style={{ position: 'relative', width: '280px', height: '320px' }}>
      <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        {/* Outer glow ring */}
        <ellipse cx="140" cy="280" rx="80" ry="18" fill="rgba(184,151,90,0.12)" />
        {/* Diya base */}
        <path d="M80 260 Q140 245 200 260 Q195 285 140 290 Q85 285 80 260Z" fill="rgba(184,151,90,0.3)" />
        <path d="M90 265 Q140 252 190 265 Q186 280 140 284 Q94 280 90 265Z" fill="rgba(184,151,90,0.5)" />
        {/* Wick */}
        <rect x="137" y="240" width="6" height="20" rx="3" fill="rgba(184,151,90,0.6)" />
        {/* Flame outer */}
        <path d="M140 50 C140 50 110 100 108 150 C106 190 115 220 140 240 C165 220 174 190 172 150 C170 100 140 50 140 50Z"
          fill="rgba(184,151,90,0.15)" />
        {/* Flame middle */}
        <path d="M140 90 C140 90 120 130 118 165 C116 195 124 218 140 234 C156 218 164 195 162 165 C160 130 140 90 140 90Z"
          fill="rgba(184,151,90,0.25)" />
        {/* Flame inner */}
        <path d="M140 130 C140 130 128 155 127 175 C126 192 131 210 140 222 C149 210 154 192 153 175 C152 155 140 130 140 130Z"
          fill="rgba(212,176,122,0.5)" />
        {/* Flame tip glow */}
        <ellipse cx="140" cy="140" rx="8" ry="25" fill="rgba(212,176,122,0.4)" />
        {/* Geometric circle frame */}
        <circle cx="140" cy="160" r="110" stroke="rgba(184,151,90,0.12)" strokeWidth="1" fill="none" />
        <circle cx="140" cy="160" r="85" stroke="rgba(184,151,90,0.08)" strokeWidth="1" fill="none" />
        {/* Cardinal lines */}
        <line x1="140" y1="50" x2="140" y2="75" stroke="rgba(184,151,90,0.15)" strokeWidth="1" />
        <line x1="30" y1="160" x2="55" y2="160" stroke="rgba(184,151,90,0.15)" strokeWidth="1" />
        <line x1="225" y1="160" x2="250" y2="160" stroke="rgba(184,151,90,0.15)" strokeWidth="1" />
      </svg>
    </div>
  )
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      style={{
        background: 'var(--bg-dark)',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <SacredGeoBg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <span />
      </SacredGeoBg>

      <div className="container-main" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* LEFT: Text content */}
          <div>
            {/* Sanskrit shlok — fades in first */}
            <div
              style={{
                marginBottom: '1.5rem',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(15px)',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
              }}
            >
              <p className="sanskrit-shlok" style={{ fontFamily: 'var(--font-sanskrit)', fontSize: '1.1rem', color: 'rgba(212,176,122,0.75)', marginBottom: '0.3rem' }}>
                आत्मनो मोक्षार्थं जगद्धिताय च
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '0.92rem',
                  color: 'rgba(245,245,240,0.5)',
                }}
              >
                For the liberation of the soul and the good of all
              </p>
            </div>

            {/* Main H1 — fades second */}
            <h1
              className="hero-h1"
              style={{
                marginBottom: '1.5rem',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(15px)',
                transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
              }}
            >
              Conducting the Sacred<br />
              Antim Sanskar —<br />
              <span style={{ color: 'var(--gold-light)' }}>As the Vedas Prescribe</span>
            </h1>

            {/* Sub text — fades third */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.75)',
                maxWidth: '540px',
                marginBottom: '2.5rem',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(15px)',
                transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
              }}
            >
              Qualified Vedic pandits. Structured rituals. Complete care for your family
              from the first moment to the 13th day — and beyond.
            </p>

            {/* Buttons — fades fourth */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '1.5rem',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(15px)',
                transition: 'opacity 0.7s ease 0.65s, transform 0.7s ease 0.65s',
              }}
            >
              <a href="tel:+919999999999" className="btn-hero-primary">
                <Phone size={15} />
                Call Us Now
              </a>
              <Link to="/services" className="btn-secondary-white">
                View Our Services <ArrowRight size={14} />
              </Link>
            </div>

            {/* Response time note */}
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.8rem',
                color: 'rgba(245,245,240,0.4)',
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.7s ease 0.8s',
              }}
            >
              ⦾ Average response time: under 5 minutes
            </p>
          </div>

          {/* RIGHT: Sacred flame illustration */}
          <div
            className="hero-flame"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 1s ease 0.4s',
            }}
          >
            <SacredFlame />
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1fr auto;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-flame {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
