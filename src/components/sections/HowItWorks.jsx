import React from 'react'
import SectionLabel from '../common/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'You Call or WhatsApp Us',
    subtitle: 'Available 24 hours, every day',
    description: 'Call or WhatsApp at any hour. Our team answers immediately and begins coordination before we arrive.',
  },
  {
    number: '02',
    title: 'We Reach You in 30 Minutes',
    subtitle: 'Anywhere in the city',
    description: 'Our nearest pandit and support team are dispatched immediately. Average arrival time: 28 minutes.',
  },
  {
    number: '03',
    title: 'Pandit Conducts Antim Sanskar',
    subtitle: 'Proper Vedic rituals',
    description: 'Our qualified Vedic pandit leads the family through every step of the Antim Sanskar — explained in your language.',
  },
  {
    number: '04',
    title: 'Complete Post-Cremation Care',
    subtitle: 'Every logistics detail handled',
    description: 'Transport, crematorium booking, asthi collection, and documentation — we manage it all so your family can grieve.',
  },
  {
    number: '05',
    title: '13-Day Ritual Guidance',
    subtitle: 'We stay with you through it all',
    description: 'From the fourth-day Chautha to the thirteenth-day Terahvi, your dedicated pandit guides every ritual.',
  },
]

export default function HowItWorks() {
  return (
    <section style={{ background: 'var(--bg-section-alt)' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
          <SectionLabel>The Process</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1rem' }}>
            From First Call to Final Rites — We Handle Everything
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            So your family can focus on mourning, memory, and one another.
          </p>
        </div>

        {/* Desktop: Horizontal steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0',
            position: 'relative',
          }}
          className="steps-grid"
        >
          {/* Connector line */}
          <div
            className="desktop-connector"
            style={{
              position: 'absolute',
              top: '28px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--gold), var(--gold), transparent)',
              zIndex: 0,
              borderStyle: 'dashed',
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 1.25rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Number circle */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--forest)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 2,
                  border: '3px solid var(--bg-section-alt)',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'white',
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.3rem',
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.72rem',
                  color: 'var(--text-sage)',
                  marginBottom: '0.65rem',
                  letterSpacing: '0.02em',
                }}
              >
                {step.subtitle}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  lineHeight: 1.65,
                  color: 'var(--text-muted)',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .steps-grid {
          grid-template-columns: repeat(5, 1fr) !important;
        }
        .desktop-connector {
          display: block;
        }
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          .desktop-connector {
            display: none !important;
          }
        }
        @media (max-width: 500px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
