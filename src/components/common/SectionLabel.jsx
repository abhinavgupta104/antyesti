import React from 'react'

export default function SectionLabel({ children, light = false, center = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: center ? 'center' : 'flex-start', marginBottom: '0.85rem' }}>
      <span style={{ flex: center ? 'none' : 1, maxWidth: center ? '40px' : '40px', height: '1px', background: light ? 'rgba(196,152,74,0.4)' : 'linear-gradient(90deg, transparent, var(--gold))' }} />
      <p
        className="section-label"
        style={{ color: light ? 'rgba(212,176,122,0.85)' : 'var(--gold)', margin: 0, whiteSpace: 'nowrap' }}
      >
        {children}
      </p>
      <span style={{ flex: center ? 'none' : 0, width: center ? '40px' : '0', height: '1px', background: center ? (light ? 'rgba(196,152,74,0.4)' : 'linear-gradient(90deg, var(--gold), transparent)') : 'none' }} />
    </div>
  )
}
