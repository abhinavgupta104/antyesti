import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, BookOpen, Heart } from 'lucide-react'

const benefits = [
  { icon: Shield, text: 'Remove the burden of urgent decisions from your grieving family' },
  { icon: BookOpen, text: 'Document ritual preferences, pandit choice, and community traditions' },
  { icon: Heart, text: 'Give your loved ones the gift of peace — before they need it most' },
]

export default function PrePlanningSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #0A1A12 0%, var(--forest) 50%, #0D1F17 100%)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Gold orb decoration */}
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,152,74,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="container-main">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="preplanning-grid"
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                marginBottom: '0.75rem',
              }}
            >
              Pre-Planning
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 500,
                color: 'var(--text-white)',
                lineHeight: 1.3,
                marginBottom: '1.25rem',
              }}
            >
              Plan Ahead. Give Your Family Peace.
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
              Pre-arrange the last rites for yourself or an elderly loved one. Document
              wishes, select rituals, choose a pandit — everything organized before the
              moment arrives. An act of profound love.
            </p>

            <Link to="/pre-planning" className="btn-secondary-white">
              Enquire About Pre-Planning
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {benefits.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '6px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(122,158,126,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="var(--sage)" />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'rgba(245,245,240,0.75)',
                    paddingTop: '0.2rem',
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .preplanning-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .preplanning-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
