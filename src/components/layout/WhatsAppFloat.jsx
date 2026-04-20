import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      {showTooltip && (
        <div
          style={{
            background: 'var(--forest)',
            color: 'white',
            padding: '0.5rem 0.9rem',
            borderRadius: '4px',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.78rem',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          Chat with us — 24/7
        </div>
      )}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '52px',
          height: '52px',
          background: 'var(--forest)',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          transition: 'background-color 0.25s ease, transform 0.25s ease',
          boxShadow: '0 4px 16px rgba(26,58,42,0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--forest-mid)'
          e.currentTarget.style.transform = 'translateY(-2px)'
          setShowTooltip(true)
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--forest)'
          e.currentTarget.style.transform = 'translateY(0)'
          setShowTooltip(false)
        }}
        aria-label="Chat on WhatsApp — 24/7 support"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  )
}
