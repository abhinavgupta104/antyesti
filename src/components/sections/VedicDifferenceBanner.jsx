import React from 'react'
import { Check } from 'lucide-react'
import ShlokBlock from '../common/ShlokBlock'

const credPoints = [
  'Trained at recognized Vedic institutions across India',
  'Conduct rituals per Garuda Purana guidance',
  'Explain each step to the family in their language',
  'Deep expertise in regional community traditions',
]

export default function VedicDifferenceBanner() {
  return (
    <section style={{ background: 'var(--forest)', color: 'white', padding: '5rem 0' }}>
      <div className="container-main">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="vedic-grid"
        >
          {/* Left: Text */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--sage-light)',
                marginBottom: '0.75rem',
              }}
            >
              The Vedic Difference
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 500,
                color: 'var(--text-white)',
                lineHeight: 1.3,
                marginBottom: '1.25rem',
              }}
            >
              Everything We Do Is Grounded in the Vedas
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.75)',
                marginBottom: '2rem',
              }}
            >
              Our pandits are trained in Vedic traditions — not just performers of rituals,
              but scholars who understand the meaning behind each step. We cite sources.
              We explain. We guide.
            </p>

            <ShlokBlock
              sanskrit="न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः।"
              translation="The soul is never born nor does it die at any time. It has not come into being, does not come into being, and will not come into being. — Bhagavad Gita 2.20"
              dark={true}
            />
          </div>

          {/* Right: Credential points */}
          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {credPoints.map((point, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(122,158,126,0.3)',
                      border: '1px solid var(--sage)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <Check size={13} color="var(--sage-light)" />
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: 'rgba(245,245,240,0.85)',
                    }}
                  >
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: '2.5rem',
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(184,151,90,0.25)',
                borderRadius: '6px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'rgba(245,245,240,0.6)',
                  lineHeight: 1.7,
                }}
              >
                "Understanding each ritual's meaning transforms grief into sacred action.
                That is our purpose."
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.75rem',
                  color: 'var(--sage)',
                  marginTop: '0.75rem',
                }}
              >
                — Antyesti Pandit Council
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vedic-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .vedic-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
