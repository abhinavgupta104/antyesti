import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import logoSrc from '../../assets/logo.png'

const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/rituals', label: 'Rituals Guide' },
  { to: '/pandits', label: 'Pandits' },
  { to: '/packages', label: 'Packages' },
  { to: '/cities', label: 'Cities' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container-main" style={{ display: 'flex', alignItems: 'center', height: '80px', gap: '2rem' }}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
          }}
          aria-label="Antyesti Home"
        >
          <img
            src={logoSrc}
            alt="Antyesti — Sacred Farewell Rituals"
            style={{
              height: '72px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Link>

        {/* Desktop nav links */}
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2rem',
            margin: '0 auto',
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  color: location.pathname.startsWith(link.to) ? 'var(--forest)' : 'var(--text-body)',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  borderBottom: location.pathname.startsWith(link.to) ? '1.5px solid var(--gold)' : '1.5px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forest)' }}
                onMouseLeave={(e) => { if (!location.pathname.startsWith(link.to)) e.currentTarget.style.color = 'var(--text-body)' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          <a
            href="tel:+919999999999"
            className="btn-primary hidden-mobile"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
          >
            <Phone size={14} />
            Call 24/7
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--forest)',
              padding: '0.25rem',
            }}
            className="show-mobile"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            padding: '1.5rem',
            zIndex: 99,
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <a
            href="tel:+919999999999"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.25rem',
              background: 'var(--forest)',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'var(--font-ui)',
              fontWeight: 600,
              fontSize: '0.95rem',
              marginBottom: '1.25rem',
            }}
          >
            <Phone size={16} />
            Call 24/7 — +91-99999-99999
          </a>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.to} style={{ borderBottom: '1px solid var(--border)' }}>
                <Link
                  to={link.to}
                  style={{
                    display: 'block',
                    padding: '0.9rem 0.25rem',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
