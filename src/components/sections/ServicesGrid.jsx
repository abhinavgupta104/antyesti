import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../common/SectionLabel'
import ServiceCard from '../cards/ServiceCard'
import DivaDivider from '../common/DivaDivider'
import services from '../../data/services.json'

export default function ServicesGrid() {
  const featured = services.slice(0, 6)

  return (
    <section style={{ background: 'var(--bg-page)' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1rem' }}>
            Complete Antim Sanskar Services
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            Every service conducted as per Vedic tradition, with documented rituals
            and qualified pandits who explain each step to your family.
          </p>
        </div>

        <DivaDivider />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginTop: '2.5rem',
          }}
          className="stagger-children"
        >
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            to="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: 'var(--forest)',
              textDecoration: 'none',
              borderBottom: '1.5px solid var(--gold)',
              paddingBottom: '2px',
            }}
          >
            View All 12 Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
