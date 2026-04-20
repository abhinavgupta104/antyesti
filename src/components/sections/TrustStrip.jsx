import React from 'react'
import { useCountUp } from '../../hooks/useCountUp'

function StatItem({ value, suffix, label, isFirst }) {
  const { count, ref } = useCountUp(value, 2500)

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        borderLeft: isFirst ? 'none' : '1px solid var(--gold)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.2rem',
          fontWeight: 500,
          color: 'var(--forest)',
          lineHeight: 1.1,
        }}
      >
        {count.toLocaleString()}{suffix}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          marginTop: '0.35rem',
          letterSpacing: '0.02em',
        }}
      >
        {label}
      </span>
    </div>
  )
}

const stats = [
  { value: 5000, suffix: '+', label: 'Families Served' },
  { value: 15, suffix: '+', label: 'Cities Covered' },
  { value: 200, suffix: '+', label: 'Qualified Pandits' },
  { value: 5, suffix: '', label: 'Average Response (Min)' },
]

export default function TrustStrip() {
  return (
    <div style={{ background: 'var(--bg-gold-tint)', borderTop: '1px solid rgba(184,151,90,0.2)', borderBottom: '1px solid rgba(184,151,90,0.2)' }}>
      <div className="container-main" style={{ padding: '2.25rem 1.5rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0',
          }}
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} isFirst={i === 0} />
          ))}

          {/* 4.9 star rating — special */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0 2rem',
              borderLeft: '1px solid var(--gold)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.2rem',
                fontWeight: 500,
                color: 'var(--forest)',
                lineHeight: 1.1,
              }}
            >
              4.9★
            </span>
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginTop: '0.35rem',
              }}
            >
              Average Rating
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
