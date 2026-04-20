import React from 'react'

// Sacred geometry — subtle geometric SVG watermark
export default function SacredGeoBg({ children, style = {} }) {
  return (
    <div style={{ position: 'relative', ...style }}>
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          maxWidth: '600px',
          opacity: 0.03,
          pointerEvents: 'none',
          zIndex: 0,
        }}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Geometric sacred pattern — concentric polygons */}
        <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" />
        <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1" />
        <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1" />
        <polygon points="200,30 362,115 362,285 200,370 38,285 38,115" stroke="white" strokeWidth="1" fill="none" />
        <polygon points="200,70 330,140 330,260 200,330 70,260 70,140" stroke="white" strokeWidth="1" fill="none" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="white" strokeWidth="0.5" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="white" strokeWidth="0.5" />
        <line x1="56" y1="56" x2="344" y2="344" stroke="white" strokeWidth="0.5" />
        <line x1="344" y1="56" x2="56" y2="344" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="30" stroke="white" strokeWidth="1" fill="none" />
      </svg>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
