import React, { useState } from 'react'
import SectionLabel from '../components/common/SectionLabel'
import ServiceCard from '../components/cards/ServiceCard'
import services from '../data/services.json'

export default function Services() {
  return (
    <div>
      <section style={{ background: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div className="container-main">
          <SectionLabel light>All Services</SectionLabel>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              color: 'var(--text-white)',
              marginBottom: '1rem',
              maxWidth: '600px',
            }}
          >
            Complete Antim Sanskar Services
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,245,240,0.7)', maxWidth: '580px', lineHeight: 1.8 }}>
            Twelve services, all rooted in Vedic scripture, all delivered with qualified pandits
            and complete family support. Available 24/7.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
