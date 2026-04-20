import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import SectionLabel from '../components/common/SectionLabel'

const steps = [
  { number: '01', title: 'Consultation', desc: 'A 30-minute call with our planning specialist to understand your preferences.' },
  { number: '02', title: 'Documentation', desc: 'We capture everything — service preferences, pandit choice, community traditions, and special wishes.' },
  { number: '03', title: 'Rest Easy', desc: 'Your plan is securely stored and instantly activated when your family needs it.' },
]

export default function PrePlanning() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Pre-planning enquiry:', form)
    setSubmitted(true)
  }

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      <section style={{ background: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div className="container-main" style={{ maxWidth: '700px' }}>
          <SectionLabel light>Pre-Planning</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: 'white', marginBottom: '1rem' }}>
            Plan Ahead. Give Your Family Peace.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,245,240,0.7)', lineHeight: 1.8 }}>
            Pre-arranging your last rites is the most loving thing you can do. It protects your family from making urgent decisions in their most difficult moment.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="preplanning-page-grid">
            <div>
              <SectionLabel>The Process</SectionLabel>
              <h2 className="section-h2" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>How Pre-Planning Works</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {steps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.25rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, color: 'white' }}>{step.number}</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{step.title}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-body)' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '6px', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                  Enquire About Pre-Planning
                </h3>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <Check size={32} color="var(--sage)" style={{ margin: '0 auto 1rem' }} />
                    <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)' }}>Thank you. We will contact you to schedule your consultation.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {[
                      { label: 'Your Name', key: 'name', placeholder: 'Full name' },
                      { label: 'Phone', key: 'phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                      { label: 'Email', key: 'email', type: 'email', placeholder: 'email@example.com' },
                      { label: 'City', key: 'city', placeholder: 'Your city' },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{f.label}</label>
                        <input type={f.type || 'text'} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} required
                          style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--border)', borderRadius: '4px', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-body)', outline: 'none' }} />
                      </div>
                    ))}
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                      Schedule Consultation
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`.preplanning-page-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .preplanning-page-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
