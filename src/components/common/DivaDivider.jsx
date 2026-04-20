import React from 'react'

// Sacred diya flame SVG — geometric, minimal
function DiyaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3 C12 3, 10 6, 12 9 C14 6, 12 3, 12 3Z" fill="var(--gold)" opacity="0.8" />
      <path d="M12 9 C9 9, 7 11, 7 13 C7 15.5, 9 17, 12 17 C15 17, 17 15.5, 17 13 C17 11, 15 9, 12 9Z" fill="var(--gold)" opacity="0.5" />
      <ellipse cx="12" cy="19" rx="5" ry="2" fill="var(--gold)" opacity="0.3" />
    </svg>
  )
}

export default function DivaDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem auto', maxWidth: '280px' }}>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      <DiyaIcon />
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}
