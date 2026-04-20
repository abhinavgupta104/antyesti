import React from 'react'
import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'

export default function PackageCard({ pkg }) {
  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: pkg.recommended ? '2px solid var(--forest)' : '1px solid var(--border)',
        borderRadius: '6px',
        padding: '2.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        position: 'relative',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Badge */}
      {pkg.tag && (
        <div
          style={{
            position: 'absolute',
            top: pkg.recommended ? '-1px' : '0',
            right: '1.5rem',
            background: pkg.recommended ? 'var(--forest)' : 'var(--bg-section-alt)',
            color: pkg.recommended ? 'white' : 'var(--text-sage)',
            padding: '0.3rem 0.85rem',
            borderRadius: '0 0 4px 4px',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}
        >
          {pkg.tag}
        </div>
      )}

      {/* Header */}
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.8rem',
            fontWeight: 500,
            color: 'var(--forest)',
            marginBottom: '0.2rem',
          }}
        >
          {pkg.name}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-sanskrit)',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            marginBottom: '0.75rem',
          }}
        >
          {pkg.nameDevanagari}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
          }}
        >
          {pkg.sanskritMeaning}
        </p>
      </div>

      {/* Price */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0' }}>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 500,
            color: 'var(--forest)',
          }}
        >
          {pkg.price}
        </p>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          All-inclusive · No hidden charges
        </p>
      </div>

      {/* Inclusions */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1 }}>
        {pkg.inclusions.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
            <Check size={14} color="var(--sage)" style={{ marginTop: '4px', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to="/contact"
        className={pkg.recommended ? 'btn-primary' : 'btn-secondary'}
        style={{ textAlign: 'center', justifyContent: 'center' }}
      >
        Get Pricing
      </Link>
    </div>
  )
}
