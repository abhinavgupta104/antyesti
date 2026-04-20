import React, { useState } from 'react'
import SectionLabel from '../common/SectionLabel'
import regionalCustoms from '../../data/regional-customs.json'

export default function RegionalCustoms() {
  const [active, setActive] = useState('Bengali')

  const current = regionalCustoms.find((c) => c.community === active)

  return (
    <section style={{ background: 'var(--bg-cream)' }}>
      <div className="container-main">
        <div style={{ maxWidth: '580px', marginBottom: '3rem' }}>
          <SectionLabel>Your Traditions Matter</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1rem' }}>
            We Honor Every Community's Sacred Customs
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            Funeral rituals vary significantly across communities. Our pandits are
            trained in your specific traditions — not a generic ceremony.
          </p>
        </div>

        {/* Tab strip */}
        <div
          style={{
            display: 'flex',
            gap: '0',
            borderBottom: '2px solid var(--border)',
            marginBottom: '2.5rem',
            overflowX: 'auto',
          }}
        >
          {regionalCustoms.map((c) => (
            <button
              key={c.community}
              onClick={() => setActive(c.community)}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: active === c.community ? 'var(--forest)' : 'var(--text-muted)',
                borderBottom: active === c.community ? '2px solid var(--forest)' : '2px solid transparent',
                marginBottom: '-2px',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease',
              }}
            >
              {c.community}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {current && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
            }}
            className="customs-grid"
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--text-body)',
                  marginBottom: '1.5rem',
                }}
              >
                {current.customizationNote}
              </p>

              <div
                style={{
                  background: 'var(--bg-gold-tint)',
                  border: '1px solid rgba(184,151,90,0.3)',
                  borderRadius: '4px',
                  padding: '1.25rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-sage)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Our Pandits Are Fluent In
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--forest)',
                  }}
                >
                  {current.language} · Sanskrit
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.3rem',
                  }}
                >
                  All ceremonies conducted in your mother tongue
                </p>
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}
              >
                Unique {current.community} Rituals We Conduct
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {current.uniqueRituals.map((ritual, i) => (
                  <li
                    key={i}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--gold)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        color: 'var(--text-body)',
                      }}
                    >
                      {ritual}
                    </span>
                  </li>
                ))}
              </ul>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}
              >
                Key Differences We Observe
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {current.keyDifferences.map((diff, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      color: 'var(--text-body)',
                      paddingLeft: '1rem',
                      borderLeft: '2px solid var(--sage-light)',
                    }}
                  >
                    {diff}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .customs-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .customs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
