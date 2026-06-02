import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
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
  const [scrollPct, setScrollPct] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setScrolled(window.scrollY > 30)
      setScrollPct(Math.min(pct * 100, 100))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
        style={{ position: 'sticky', top: 0, zIndex: 200 }}
      >
        {/* Progress bar */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            width: `${scrollPct}%`,
            background: 'linear-gradient(90deg, var(--forest-mid), var(--gold))',
            transition: 'width 0.1s linear',
            zIndex: 10,
          }}
        />

        <div
          className="container-main"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '80px',
            gap: '1.5rem',
          }}
        >
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
              gap: '0.25rem',
              margin: '0 auto',
              padding: 0,
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.to)
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.86rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--forest)' : 'var(--text-body)',
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '6px',
                      background: isActive ? 'rgba(26,58,42,0.07)' : 'transparent',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--forest)'
                        e.currentTarget.style.background = 'rgba(26,58,42,0.05)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--text-body)'
                        e.currentTarget.style.background = 'transparent'
                      }
                    }}
                  >
                    {link.label}
                    {/* Active dot */}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '4px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '3px',
                          height: '3px',
                          borderRadius: '50%',
                          background: 'var(--gold)',
                          display: 'block',
                        }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA + Mobile toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <a
              href="tel:+919999999999"
              className="btn-primary hidden-mobile"
              style={{
                padding: '0.5rem 1.2rem',
                fontSize: '0.84rem',
                background: 'linear-gradient(135deg, var(--forest-mid), var(--forest))',
              }}
            >
              <Phone size={14} />
              Call 24/7
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'none',
                background: mobileOpen ? 'rgba(26,58,42,0.08)' : 'none',
                border: '1px solid',
                borderColor: mobileOpen ? 'rgba(26,58,42,0.2)' : 'transparent',
                cursor: 'pointer',
                color: 'var(--forest)',
                padding: '0.4rem',
                borderRadius: '6px',
                transition: 'all 0.2s ease',
              }}
              className="show-mobile"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

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

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 190,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(340px, 88vw)',
          background: 'var(--bg-page)',
          zIndex: 195,
          boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
          overflowY: 'auto',
        }}
        aria-hidden={!mobileOpen}
      >
        {/* Close button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <img src={logoSrc} alt="Antyesti" style={{ height: '52px', objectFit: 'contain' }} />
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              background: 'rgba(26,58,42,0.06)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              color: 'var(--forest)',
              padding: '0.4rem',
              borderRadius: '6px',
            }}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Phone CTA */}
        <a
          href="tel:+919999999999"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 1.25rem',
            background: 'linear-gradient(135deg, var(--forest-mid), var(--forest))',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontFamily: 'var(--font-ui)',
            fontWeight: 600,
            fontSize: '0.95rem',
            marginBottom: '1.75rem',
            boxShadow: '0 4px 16px rgba(26,58,42,0.25)',
          }}
        >
          <Phone size={18} />
          Call 24/7 — +91-99999-99999
        </a>

        {/* Nav links */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.to)
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.9rem 0.5rem',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--forest)' : 'var(--text-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--border)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--gold)',
                      }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Bottom */}
        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            Available 24/7 for your family<br />
            <span style={{ color: 'var(--gold)' }}>Avg. response: under 5 minutes</span>
          </p>
        </div>
      </div>
    </>
  )
}
