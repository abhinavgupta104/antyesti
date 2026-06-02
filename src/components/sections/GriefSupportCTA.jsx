import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function GriefSupportCTA() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, var(--forest) 0%, #0F2819 60%, #1A3A2A 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 0',
      }}
    >
      {/* Sacred geometry bg */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(196,152,74,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative mandala circles */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        style={{
          position: 'absolute',
          right: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '500px',
          opacity: 0.04,
          pointerEvents: 'none',
          animation: 'slowRotate 120s linear infinite',
        }}
        fill="none"
      >
        <circle cx="200" cy="200" r="190" stroke="#D4B07A" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" stroke="#D4B07A" strokeWidth="1" />
        <circle cx="200" cy="200" r="110" stroke="#D4B07A" strokeWidth="1" />
        <polygon points="200,20 368,110 368,290 200,380 32,290 32,110" stroke="#D4B07A" strokeWidth="1" fill="none" />
        {[0, 60, 120, 180, 240, 300].map(deg => (
          <line
            key={deg}
            x1="200" y1="200"
            x2={200 + 190 * Math.cos((deg * Math.PI) / 180)}
            y2={200 + 190 * Math.sin((deg * Math.PI) / 180)}
            stroke="#D4B07A" strokeWidth="0.5"
          />
        ))}
      </svg>

      {/* Left decorative element */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 400"
        style={{
          position: 'absolute',
          left: '-60px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '200px',
          height: '400px',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
        fill="none"
      >
        <path d="M100 0 L100 400" stroke="#D4B07A" strokeWidth="1" />
        {[50, 100, 150, 200, 250, 300, 350].map((y, i) => (
          <circle key={i} cx="100" cy={y} r="6" stroke="#D4B07A" strokeWidth="1" />
        ))}
      </svg>

      <div
        className="container-main"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '760px',
        }}
      >
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Sanskrit verse at top */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sanskrit)',
                fontSize: '1.1rem',
                color: 'rgba(212,176,122,0.6)',
                marginBottom: '0.3rem',
              }}
            >
              शोक मत करो — आत्मा अमर है
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '0.85rem',
                color: 'rgba(245,245,240,0.35)',
              }}
            >
              Do not grieve — the soul is eternal
            </p>
          </div>

          {/* Gold divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(196,152,74,0.5), transparent)',
              marginBottom: '2.5rem',
            }}
          />

          {/* Main content */}
          <div style={{ textAlign: 'center' }}>
            {/* Lotus icon */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(196,152,74,0.1)',
                border: '1px solid rgba(196,152,74,0.25)',
                marginBottom: '1.75rem',
                fontSize: '1.8rem',
                animation: 'pulse-glow 4s ease-in-out infinite',
              }}
            >
              🌸
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 500,
                color: 'var(--text-white)',
                marginBottom: '1.25rem',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
              }}
            >
              Grief Is a Journey.<br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #C4984A, #E8CFA0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                You Don't Have to Walk It Alone.
              </span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.85,
                color: 'rgba(245,245,240,0.65)',
                marginBottom: '2.75rem',
                maxWidth: '560px',
                margin: '0 auto 2.75rem',
              }}
            >
              We offer connections to certified grief counsellors who understand the Hindu
              perspective on loss and mourning. The rituals help. Conversation helps too.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link
                to="/grief-support"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.95rem 2.25rem',
                  background: 'linear-gradient(135deg, #C4984A, #D4B07A)',
                  color: '#0D1F17',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(196,152,74,0.3)',
                  letterSpacing: '0.03em',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(196,152,74,0.45)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(196,152,74,0.3)'
                }}
              >
                Talk to a Counsellor
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/grief-support"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.9rem',
                  color: 'rgba(245,245,240,0.55)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(245,245,240,0.2)',
                  paddingBottom: '1px',
                  transition: 'color 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'rgba(245,245,240,0.85)'
                  e.currentTarget.style.borderColor = 'rgba(245,245,240,0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(245,245,240,0.55)'
                  e.currentTarget.style.borderColor = 'rgba(245,245,240,0.2)'
                }}
              >
                Learn About Grief Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
