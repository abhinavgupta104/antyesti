import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import services from '../data/services.json'

const steps = ['Select Service', 'Location & Time', 'Your Tradition', 'Contact Details', 'Review']

export default function BookService() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    service: '', city: '', address: '', date: '', time: '',
    community: '', instructions: '', name: '', phone: '', email: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    console.log('Service booking submission:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ background: 'var(--bg-page)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'var(--bg-section-alt)', border: '2px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <Check size={30} color="var(--sage)" />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--forest)', marginBottom: '0.75rem' }}>Request Received</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '2rem' }}>
            We will call you within 5 minutes on the number you provided. Our team is ready to support your family.
          </p>
          <Link to="/" className="btn-secondary">Return to Home</Link>
        </div>
      </div>
    )
  }

  const progress = ((step) / (steps.length - 1)) * 100

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      <section style={{ background: 'var(--bg-dark)', padding: '3rem 0 2rem' }}>
        <div className="container-main" style={{ maxWidth: '700px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 500, color: 'white', marginBottom: '2rem' }}>
            Book a Service
          </h1>
          {/* Progress bar */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            {steps.map((s, i) => (
              <div key={s} style={{ flex: 1, height: '3px', background: i <= step ? 'var(--gold)' : 'rgba(255,255,255,0.15)', borderRadius: '2px', transition: 'background 0.3s' }} />
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', color: 'rgba(245,245,240,0.5)' }}>
            Step {step + 1} of {steps.length}: {steps[step]}
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main" style={{ maxWidth: '700px' }}>
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '6px', padding: '2.5rem' }}>
            {step === 0 && (
              <div>
                <h2 className="section-h2" style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Select a Service</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {services.map(s => (
                    <label key={s.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: `1px solid ${form.service === s.slug ? 'var(--forest)' : 'var(--border)'}`, borderRadius: '4px', cursor: 'pointer', background: form.service === s.slug ? 'var(--bg-section-alt)' : 'white' }}>
                      <input type="radio" name="service" value={s.slug} checked={form.service === s.slug} onChange={e => setForm({ ...form, service: e.target.value })} style={{ accentColor: 'var(--forest)' }} />
                      <div>
                        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>{s.name}</p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>{s.shortDesc.substring(0, 80)}...</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 className="section-h2" style={{ fontSize: '1.3rem' }}>Location & Timing</h2>
                {[
                  { label: 'City', key: 'city', placeholder: 'Your city' },
                  { label: 'Address', key: 'address', placeholder: 'Full address' },
                  { label: 'Preferred Date', key: 'date', type: 'date' },
                  { label: 'Preferred Time', key: 'time', type: 'time' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{f.label}</label>
                    <input type={f.type || 'text'} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--border)', borderRadius: '4px', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-body)', outline: 'none' }} />
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 className="section-h2" style={{ fontSize: '1.3rem' }}>Your Tradition</h2>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Community / Tradition</label>
                  <select value={form.community} onChange={e => setForm({ ...form, community: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--border)', borderRadius: '4px', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-body)', outline: 'none' }}>
                    <option value="">Select your community</option>
                    {['Bengali', 'Punjabi', 'Tamil', 'Telugu', 'Marathi', 'Gujarati', 'North Indian (UP/Bihar)', 'Other'].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Special Instructions</label>
                  <textarea rows={4} placeholder="Any specific rituals, traditions, or family preferences..." value={form.instructions} onChange={e => setForm({ ...form, instructions: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--border)', borderRadius: '4px', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-body)', outline: 'none', resize: 'vertical' }} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 className="section-h2" style={{ fontSize: '1.3rem' }}>Your Contact Details</h2>
                {[
                  { label: 'Your Name', key: 'name', placeholder: 'Full name' },
                  { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                  { label: 'Email (optional)', key: 'email', type: 'email', placeholder: 'email@example.com' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{f.label}</label>
                    <input type={f.type || 'text'} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--border)', borderRadius: '4px', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-body)', outline: 'none' }} />
                  </div>
                ))}
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="section-h2" style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Review Your Request</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                  {[
                    ['Service', services.find(s => s.slug === form.service)?.name || form.service],
                    ['City', form.city], ['Date', form.date], ['Community', form.community], ['Name', form.name], ['Phone', form.phone]
                  ].map(([label, value]) => value && (
                    <div key={label} style={{ display: 'flex', gap: '1rem' }}>
                      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--text-muted)', minWidth: '100px' }}>{label}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-body)' }}>{value}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1.25rem' }}>
                  After submitting, we will call you within 5 minutes to confirm.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              {step > 0 ? (
                <button onClick={() => setStep(step - 1)} className="btn-secondary" style={{ padding: '0.65rem 1.5rem' }}>Back</button>
              ) : <span />}
              {step < steps.length - 1 ? (
                <button onClick={() => setStep(step + 1)} className="btn-primary" style={{ padding: '0.65rem 1.5rem' }}>Continue</button>
              ) : (
                <button onClick={handleSubmit} className="btn-primary" style={{ padding: '0.65rem 1.75rem' }}>Request Callback</button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
