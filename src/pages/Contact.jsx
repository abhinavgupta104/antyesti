import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submission:', form)
    setSubmitted(true)
  }

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      <section style={{ background: 'var(--bg-dark)', padding: '4rem 0' }}>
        <div className="container-main">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, color: 'var(--text-white)', marginBottom: '0.5rem' }}>
            Contact Us
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}>
            If this is an emergency, please call directly. We answer 24/7.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }} className="contact-grid">
            {/* Form */}
            <div>
              <h2 className="section-h2" style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Send a Message</h2>
              {submitted ? (
                <div style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--gold)', borderRadius: '6px', padding: '2rem', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--forest)', marginBottom: '0.5rem' }}>Message Received</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-body)' }}>We will call you within 5 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Full name' },
                    { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                    { label: 'City', key: 'city', type: 'text', placeholder: 'Your city' },
                    { label: 'Service Needed', key: 'service', type: 'text', placeholder: 'e.g., Antim Sanskar, Asthi Visarjan...' },
                  ].map(field => (
                    <div key={field.key}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key]}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        required
                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--border)', borderRadius: '4px', fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-body)', background: 'white', outline: 'none' }}
                        onFocus={e => e.currentTarget.style.borderColor = 'var(--sage)'}
                        onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us how we can help your family..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--border)', borderRadius: '4px', fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-body)', background: 'white', outline: 'none', resize: 'vertical' }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--sage)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div>
              <div style={{ background: 'var(--bg-gold-tint)', border: '1px solid rgba(184,151,90,0.25)', borderRadius: '6px', padding: '2rem', marginBottom: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-sage)', marginBottom: '0.5rem' }}>24/7 Emergency Line</p>
                <a href="tel:+919999999999" style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 500, color: 'var(--forest)', textDecoration: 'none', display: 'block', marginBottom: '0.25rem' }}>
                  +91-99999-99999
                </a>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Answer within 1 minute · 24 hours · 365 days</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: MessageCircle, label: 'WhatsApp', value: '+91-99999-99999', href: 'https://wa.me/919999999999' },
                  { icon: Mail, label: 'Email', value: 'care@antyesti.in', href: 'mailto:care@antyesti.in' },
                  { icon: Clock, label: 'Hours', value: '24/7 — 365 days a year', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Icon size={18} color="var(--sage)" />
                    <div>
                      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
                      {href ? (
                        <a href={href} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--forest)', textDecoration: 'none' }}>{value}</a>
                      ) : (
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-body)' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`.contact-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
