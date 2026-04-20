import React from 'react'

export default function SectionLabel({ children, light = false }) {
  return (
    <p className="section-label" style={{ color: light ? 'rgba(168, 197, 172, 0.8)' : 'var(--text-sage)', marginBottom: '0.75rem' }}>
      {children}
    </p>
  )
}
