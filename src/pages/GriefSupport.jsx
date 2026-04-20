import React from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import SectionLabel from '../components/common/SectionLabel'
import ShlokBlock from '../components/common/ShlokBlock'

export default function GriefSupport() {
  return (
    <div style={{ background: 'var(--bg-page)' }}>
      <section style={{ background: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div className="container-main" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: 'white', marginBottom: '1.25rem' }}>
            Grief Is a Journey. You Don't Have to Walk It Alone.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,245,240,0.7)', lineHeight: 1.8 }}>
            Hindu tradition gives us structured rituals for a reason — they hold the grief, give it form, give it meaning. But sometimes we need more.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main" style={{ maxWidth: '780px' }}>
          <SectionLabel>Understanding Grief</SectionLabel>
          <h2 className="section-h2" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Grief Through the Vedic Lens</h2>
          <p className="body-text" style={{ marginBottom: '1.25rem' }}>
            The Bhagavad Gita speaks directly to grief. When Arjuna is overwhelmed with sorrow at the battlefield of Kurukshetra, Krishna does not dismiss his grief — He speaks to it. He offers wisdom. He gives context. That is what the Hindu philosophy of death can do for a grieving family.
          </p>
          <ShlokBlock
            sanskrit="शोचन् मृतं किं करिष्यसि"
            translation="What will be gained by grieving for one who has already departed? The soul endures — Mahabharata Shanti Parva"
          />
          <p className="body-text" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            Our network of certified grief counsellors understands both the Vedic spiritual context of death and modern evidence-based grief therapy. They speak your language — literally and culturally.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }} className="grief-grid">
            {['Individual Counselling', 'Family Group Sessions', 'Hindu Philosophy of Death', 'Grief Journaling Resources', 'Community Support Groups', 'Child Grief Support'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'var(--bg-section-alt)', borderRadius: '4px', border: '1px solid var(--border)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--sage)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-body)' }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--bg-gold-tint)', border: '1px solid rgba(184,151,90,0.25)', borderRadius: '6px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '0.5rem' }}>Talk to Someone Today</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-body)', marginBottom: '1.5rem' }}>Our team can connect you with a counsellor in your language, usually within 24 hours.</p>
            <a href="tel:+919999999999" className="btn-primary">
              <Phone size={15} /> Call Us to Connect
            </a>
          </div>
        </div>
      </section>

      <style>{`.grief-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 600px) { .grief-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
