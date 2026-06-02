import React, { useEffect, useRef, useState } from 'react'
import SectionLabel from '../common/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'You Call or WhatsApp Us',
    subtitle: 'Available 24 hours, every day',
    description: 'Call or WhatsApp at any hour. Our team answers immediately and begins coordination before we arrive.',
    icon: '📞',
    color: 'rgba(196,152,74,0.2)',
  },
  {
    number: '02',
    title: 'We Reach You in 30 Minutes',
    subtitle: 'Anywhere in the city',
    description: 'Our nearest pandit and support team are dispatched immediately. Average arrival time: 28 minutes.',
    icon: '🏃',
    color: 'rgba(26,58,42,0.15)',
  },
  {
    number: '03',
    title: 'Pandit Conducts Antim Sanskar',
    subtitle: 'Proper Vedic rituals',
    description: 'Our qualified Vedic pandit leads the family through every step of the Antim Sanskar — explained in your language.',
    icon: '🪔',
    color: 'rgba(196,152,74,0.2)',
  },
  {
    number: '04',
    title: 'Complete Post-Cremation Care',
    subtitle: 'Every logistics detail handled',
    description: 'Transport, crematorium booking, asthi collection, and documentation — we manage it all so your family can grieve.',
    icon: '🕊️',
    color: 'rgba(26,58,42,0.15)',
  },
  {
    number: '05',
    title: '13-Day Ritual Guidance',
    subtitle: 'We stay with you through it all',
    description: 'From the fourth-day Chautha to the thirteenth-day Terahvi, your dedicated pandit guides every ritual.',
    icon: '📿',
    color: 'rgba(196,152,74,0.2)',
  },
]

function StepCard({ step, index, visible }) {
  const isEven = index % 2 === 0

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '2.5rem',
        flexDirection: isEven ? 'row' : 'row-reverse',
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateX(0)'
          : isEven ? 'translateX(-30px)' : 'translateX(30px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
      }}
      className="step-card-row"
    >
      {/* Step Number Circle */}
      <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--forest-mid), var(--forest))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 0 4px rgba(26,58,42,0.12), 0 0 0 8px rgba(26,58,42,0.06)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'white',
            }}
          >
            {step.number}
          </span>
        </div>
      </div>

      {/* Card */}
      <div
        style={{
          flex: 1,
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '2rem 2.25rem',
          boxShadow: 'var(--shadow-soft)',
          transition: 'all 0.35s ease',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-3px)'
          e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
          e.currentTarget.style.borderColor = 'rgba(196,152,74,0.4)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
          e.currentTarget.style.borderColor = 'var(--border)'
        }}
      >
        {/* Accent top line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, var(--gold), var(--gold-light), transparent)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
          <div
            style={{
              fontSize: '2rem',
              lineHeight: 1,
              padding: '0.5rem',
              background: step.color,
              borderRadius: '8px',
              flexShrink: 0,
            }}
          >
            {step.icon}
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.2rem',
                lineHeight: 1.3,
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.75rem',
                color: 'var(--gold)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '0.75rem',
              }}
            >
              {step.subtitle}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
              }}
            >
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--bg-page)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle bg decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-200px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,152,74,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-main">
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 4.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <SectionLabel>The Process</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1rem', marginTop: '0.75rem' }}>
            From First Call to Final Rites —<br />We Handle Everything
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            So your family can focus on mourning, memory, and one another.
          </p>
        </div>

        {/* Timeline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            position: 'relative',
            maxWidth: '780px',
            margin: '0 auto',
          }}
        >
          {/* Vertical gold line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '31px',
              top: '64px',
              bottom: '64px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--gold), rgba(196,152,74,0.1))',
              zIndex: 1,
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.5s ease 0.3s',
            }}
          />

          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .step-card-row {
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}
