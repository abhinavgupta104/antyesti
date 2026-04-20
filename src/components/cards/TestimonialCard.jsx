import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        padding: '2.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        transition: 'box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-hover)' }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
    >
      {/* Large quote mark */}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '4rem',
          lineHeight: 0.8,
          color: 'var(--gold)',
          opacity: 0.6,
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        "
      </span>

      {/* Review text */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '0.97rem',
          lineHeight: 1.8,
          color: 'var(--text-body)',
          flex: 1,
        }}
      >
        {testimonial.review}
      </p>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
        ))}
      </div>

      {/* Name and details */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
          {testimonial.name}
        </p>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          {testimonial.service} · {testimonial.city}
        </p>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem', opacity: 0.7 }}>
          via {testimonial.platform}
        </p>
      </div>
    </div>
  )
}
