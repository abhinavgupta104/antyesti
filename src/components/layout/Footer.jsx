import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react'
import logoSrc from '../../assets/logo.png'

const services = [
  { name: 'Antim Sanskar', slug: 'antim-sanskar' },
  { name: 'Cremation Services', slug: 'cremation-services' },
  { name: 'Pandit for Last Rites', slug: 'pandit-for-last-rites' },
  { name: 'Dead Body Transportation', slug: 'dead-body-transportation' },
  { name: 'Hearse Van Services', slug: 'hearse-van' },
  { name: 'Freezer Box Services', slug: 'freezer-box' },
  { name: 'Asthi Visarjan', slug: 'asthi-visarjan' },
  { name: '13-Day Rituals (Terahvi)', slug: 'thirteen-day-rituals' },
  { name: 'Chautha Ceremony', slug: 'chautha-ceremony' },
  { name: 'Shraddha & Pind Daan', slug: 'shraddha-pind-daan' },
  { name: 'Pre-Planning Service', slug: 'pre-planning' },
  { name: 'Grief Counselling', slug: 'grief-counselling' },
]

const quickLinks = [
  { name: 'Rituals Guide', to: '/rituals' },
  { name: 'Our Pandits', to: '/pandits' },
  { name: 'Packages', to: '/packages' },
  { name: 'Cities We Serve', to: '/cities' },
  { name: 'Blog & Resources', to: '/blog' },
  { name: 'About Antyesti', to: '/about' },
  { name: 'Contact Us', to: '/contact' },
  { name: 'Book a Service', to: '/book' },
  { name: 'Pre-Planning', to: '/pre-planning' },
  { name: 'Grief Support', to: '/grief-support' },
]

const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Varanasi', 'Pune']



export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'var(--text-white)' }}>
      {/* Emergency strip */}
      <div style={{ borderBottom: '1px solid rgba(184,151,90,0.2)', padding: '2.5rem 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(245,245,240,0.6)', marginBottom: '0.75rem' }}>
          Need immediate help? We are available around the clock.
        </p>
        <a
          href="tel:+919999999999"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: 500,
            color: 'var(--gold)',
            textDecoration: 'none',
          }}
        >
          +91-99999-99999
        </a>
      </div>

      {/* Main footer grid */}
      <div className="container-main" style={{ padding: '4rem 1.5rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          {/* Column 1: Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src={logoSrc}
                alt="Antyesti — Sacred Farewell Rituals"
                style={{
                  height: '80px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'brightness(1.05)',
                }}
              />
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(245,245,240,0.55)', marginBottom: '1.5rem' }}>
              Conducting the sacred Antim Sanskar with Vedic precision, compassionate care, and unwavering family support — from the first moment to the 13th day and beyond.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="https://wa.me/919999999999" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--sage-light)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontSize: '0.85rem' }}>
                <MessageCircle size={14} /> WhatsApp: +91-99999-99999
              </a>
              <a href="tel:+919999999999" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--sage-light)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontSize: '0.85rem' }}>
                <Phone size={14} /> +91-99999-99999 (24/7)
              </a>
              <a href="mailto:care@antyesti.in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--sage-light)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontSize: '0.85rem' }}>
                <Mail size={14} /> care@antyesti.in
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-white)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Our Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    style={{ fontFamily: 'var(--font-ui)', fontSize: '0.82rem', color: 'rgba(245,245,240,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,245,240,0.55)'}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-white)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    style={{ fontFamily: 'var(--font-ui)', fontSize: '0.82rem', color: 'rgba(245,245,240,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,245,240,0.55)'}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Cities */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-white)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Cities We Serve
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {cities.map((city) => (
                <li key={city}>
                  <Link
                    to={`/cities/${city.toLowerCase()}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', color: 'rgba(245,245,240,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,245,240,0.55)'}
                  >
                    <MapPin size={10} />
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '1rem', fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'rgba(184,151,90,0.6)' }}>
              + 7 more cities
            </p>
          </div>
        </div>
      </div>

      {/* SEO link row */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'rgba(245,245,240,0.25)', lineHeight: 1.8 }}>
          Antim Sanskar in Delhi | Cremation Services in Bangalore | Pandit for Last Rites Mumbai |
          Asthi Visarjan Haridwar | 13-Day Rituals Delhi | Terahvi Ceremony Services | Shraddha Pind Daan Varanasi |
          Funeral Services Chennai | Antyesti Services Kolkata | Hindu Last Rites Hyderabad
        </p>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1rem 1.5rem' }}>
        <div className="container-main" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'rgba(245,245,240,0.3)' }}>
            © 2024 Antyesti Services Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a key={item} href="#" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'rgba(245,245,240,0.3)', textDecoration: 'none' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
