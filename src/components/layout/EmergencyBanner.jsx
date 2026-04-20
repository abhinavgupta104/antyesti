import React from 'react'
import { Phone, MessageCircle } from 'lucide-react'

export default function EmergencyBanner() {
  return (
    <div
      style={{
        background: 'var(--forest)',
        color: 'white',
        padding: '0.5rem 1.5rem',
        textAlign: 'center',
        zIndex: 200,
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.78rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: 'rgba(245,245,240,0.9)',
          }}
        >
          24/7 Emergency Support — We are here for your family
        </span>
        <a
          href="tel:+919999999999"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'white',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.82rem',
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          <Phone size={13} />
          Call Now: +91-99999-99999
        </a>
        <span
          style={{
            width: '1px',
            height: '14px',
            background: 'rgba(184,151,90,0.5)',
            display: 'inline-block',
          }}
        />
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--gold-light)',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.82rem',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          <MessageCircle size={13} />
          WhatsApp Available
        </a>
      </div>
    </div>
  )
}
