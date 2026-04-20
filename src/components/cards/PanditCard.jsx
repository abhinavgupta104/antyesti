import React from 'react'
import { Link } from 'react-router-dom'

export default function PanditCard({ pandit, index = 0 }) {
  // Initials for avatar placeholder
  const initials = pandit.name
    .split(' ')
    .filter((w) => w.match(/^[A-Z]/))
    .slice(1, 3)
    .map((w) => w[0])
    .join('')

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.borderColor = 'var(--border-gold)'
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: '2.5px solid var(--sage)',
            background: 'var(--bg-section-alt)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: 'var(--forest)',
            }}
          >
            {initials}
          </span>
        </div>
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '0.15rem',
            }}
          >
            {pandit.name}
          </h3>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {pandit.city} · {pandit.available ? (
              <span style={{ color: 'var(--forest-light)' }}>Available</span>
            ) : (
              <span style={{ color: 'var(--text-muted)' }}>Currently Busy</span>
            )}
          </p>
        </div>
      </div>

      {/* Education */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
        }}
      >
        {pandit.education}
      </p>

      {/* Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        <span className="credential-pill">{pandit.traditions[0]}</span>
        <span className="credential-pill">{pandit.experience} Years Exp</span>
        <span className="credential-pill">{pandit.languages[0]}</span>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--forest)',
            }}
          >
            {pandit.ceremoniesPerformed.toLocaleString()}+
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            Ceremonies
          </p>
        </div>
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--forest)',
            }}
          >
            {pandit.experience}
          </p>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            Years
          </p>
        </div>
      </div>

      {/* View Profile */}
      <Link
        to={`/pandits/${pandit.id}`}
        className="btn-secondary"
        style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '0.6rem 1rem' }}
      >
        View Profile
      </Link>
    </div>
  )
}
