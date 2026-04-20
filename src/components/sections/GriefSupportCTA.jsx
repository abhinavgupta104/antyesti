import React from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export default function GriefSupportCTA() {
  return (
    <section style={{ background: 'var(--bg-gold-tint)', padding: '5rem 0', textAlign: 'center' }}>
      <div className="container-main" style={{ maxWidth: '660px' }}>
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(184,151,90,0.15)',
            border: '1px solid rgba(184,151,90,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <Heart size={24} color="var(--gold)" />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 500,
            color: 'var(--forest)',
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          Grief Is a Journey. You Don't Have to Walk It Alone.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text-body)',
            marginBottom: '2.5rem',
          }}
        >
          We offer connections to certified grief counsellors who understand the Hindu
          perspective on loss and mourning. The rituals help. Conversation helps too.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <Link to="/grief-support" className="btn-secondary">
            Talk to a Counsellor
          </Link>
          <Link
            to="/grief-support"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.88rem',
              color: 'var(--text-sage)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--sage)',
              paddingBottom: '1px',
            }}
          >
            Learn About Grief Support
          </Link>
        </div>
      </div>
    </section>
  )
}
