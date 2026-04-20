import React from 'react'
import { Link } from 'react-router-dom'
import SectionLabel from '../components/common/SectionLabel'
import ShlokBlock from '../components/common/ShlokBlock'
import DivaDivider from '../components/common/DivaDivider'

const values = [
  { title: 'Vedic Authenticity', desc: 'Every ritual grounded in scripture. We cite Garuda Purana, Antyesti Paddhati, and Vedic manuals — not hearsay.' },
  { title: 'Dignity', desc: 'Every action, every word, every arrangement handled with the gravity this moment deserves.' },
  { title: 'Compassion', desc: 'We understand what grief feels like. We have walked with thousands of families through their darkest hours.' },
  { title: 'Transparency', desc: 'No surprise costs. No upselling in grief. What we quote is what you pay. We earn trust, not margins.' },
  { title: 'Promptness', desc: 'We are there in 30 minutes. Because in loss, waiting is its own suffering.' },
  { title: 'Family-First', desc: 'Your family\'s wellbeing guides every decision we make — from which pandit we assign to how we communicate.' },
]

export default function About() {
  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero */}
      <section style={{ background: 'var(--bg-dark)', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container-main" style={{ maxWidth: '700px' }}>
          <p style={{ fontFamily: 'var(--font-sanskrit)', fontSize: '1.4rem', color: 'var(--gold-light)', marginBottom: '1rem' }}>
            आत्मा अमर है — The soul is eternal
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 500,
              color: 'var(--text-white)',
              lineHeight: 1.25,
              marginBottom: '1.5rem',
            }}
          >
            We Walk With Families Through the Sacred Journey of Loss
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,245,240,0.7)', lineHeight: 1.8 }}>
            Antyesti was founded on a simple but urgent truth: India's millions of Hindu families
            deserved Antim Sanskar services that were truly Vedic — not just ceremonial, not just
            logistical, but spiritually grounded and compassionately delivered.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main" style={{ maxWidth: '800px' }}>
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1.5rem' }}>
            Born from a Family's Need. Built for Every Family.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p className="body-text">
              Antyesti began when our founder, navigating the sudden loss of his father in 2019,
              found that the available services were either logistically focused (transport and
              crematorium) or spiritually superficial (a pandit who didn't know which community
              traditions to follow). The 13-day period passed in confusion and grief without
              proper guidance.
            </p>
            <p className="body-text">
              He spent the following year consulting with Vedic scholars, crematorium administrators,
              grief counsellors, and hundreds of families across India. The result was Antyesti —
              a service built to be everything a grieving family needs: Vedically accurate, logistically
              complete, and genuinely compassionate.
            </p>
          </div>

          <DivaDivider />

          <ShlokBlock
            sanskrit="सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
            translation="May all be happy, may all be free from illness — a Vedic prayer of universal wellbeing"
          />
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--bg-section-alt)' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 3rem' }}>
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="section-h2">Our Six Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--gold)',
                  borderRadius: '4px',
                  padding: '1.75rem',
                }}
              >
                <h3 className="card-title" style={{ marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
