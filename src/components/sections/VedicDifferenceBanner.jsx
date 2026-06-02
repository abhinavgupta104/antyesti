import React, { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import ShlokBlock from '../common/ShlokBlock'
import gangaDiya from '../../assets/divine/ganga_diya.png'
import panditRitual from '../../assets/divine/pandit_ritual.png'

const credPoints = [
  'Trained at recognized Vedic institutions across India',
  'Conduct rituals per Garuda Purana guidance',
  'Explain each step to the family in their language',
  'Deep expertise in regional community traditions',
]

export default function VedicDifferenceBanner() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(160deg, #0A1A12 0%, #0D2018 50%, #101A0F 100%)',
        color: 'white',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 60% 50% at 20% 50%, rgba(26,58,42,0.5) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 90% 30%, rgba(196,152,74,0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Ganga diya image — far left bg */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '28%',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <img
          src={gangaDiya}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.12,
            mixBlendMode: 'luminosity',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, #0A1A12)' }} />
      </div>

      {/* Pandit ritual image — far right bg */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '22%',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <img
          src={panditRitual}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.1,
            mixBlendMode: 'luminosity',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent, #0A1A12)' }} />
      </div>

      {/* Decorative vertical line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent, rgba(196,152,74,0.12), transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
          className="vedic-grid"
        >
          {/* Left */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.68rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              The Vedic Difference
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 500,
                color: 'var(--text-white)',
                lineHeight: 1.25,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Everything We Do Is<br />Grounded in the Vedas
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.85,
                color: 'rgba(245,245,240,0.65)',
                marginBottom: '2rem',
              }}
            >
              Our pandits are trained in Vedic traditions — not just performers of rituals,
              but scholars who understand the meaning behind each step. We cite sources.
              We explain. We guide.
            </p>

            <ShlokBlock
              sanskrit="न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः।"
              translation="The soul is never born nor does it die at any time. — Bhagavad Gita 2.20"
              dark={true}
            />
          </div>

          {/* Right */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {credPoints.map((point, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '8px',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(196,152,74,0.07)'
                    e.currentTarget.style.borderColor = 'rgba(196,152,74,0.2)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(196,152,74,0.15)',
                      border: '1px solid rgba(196,152,74,0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    <Check size={13} color="var(--gold-light)" />
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.97rem',
                      lineHeight: 1.6,
                      color: 'rgba(245,245,240,0.8)',
                    }}
                  >
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            {/* Quote box */}
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem 1.75rem',
                background: 'rgba(196,152,74,0.07)',
                border: '1px solid rgba(196,152,74,0.2)',
                borderRadius: '8px',
                borderLeft: '3px solid var(--gold)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'rgba(245,245,240,0.65)',
                  lineHeight: 1.75,
                }}
              >
                "Understanding each ritual's meaning transforms grief into sacred action.
                That is our purpose."
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.72rem',
                  color: 'var(--gold)',
                  marginTop: '0.75rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                — Antyesti Pandit Council
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .vedic-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
