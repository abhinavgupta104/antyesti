import React, { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 2200) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          function step(now) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function StatItem({ value, suffix, label, icon, isFirst }) {
  const { count, ref } = useCountUp(value, 2400)

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2.5rem',
        borderLeft: isFirst ? 'none' : '1px solid rgba(196,152,74,0.2)',
        position: 'relative',
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: '1.4rem',
          marginBottom: '0.6rem',
          filter: 'drop-shadow(0 0 8px rgba(212,176,122,0.4))',
        }}
      >
        {icon}
      </div>

      {/* Number */}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.6rem',
          fontWeight: 600,
          lineHeight: 1,
          background: 'linear-gradient(135deg, #C4984A 0%, #E8CFA0 50%, #C4984A 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmer 5s linear infinite',
        }}
      >
        {count.toLocaleString()}{suffix}
      </span>

      {/* Label */}
      <span
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.72rem',
          color: 'rgba(245,245,240,0.45)',
          marginTop: '0.5rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}
      >
        {label}
      </span>
    </div>
  )
}

const stats = [
  { value: 5000, suffix: '+', label: 'Families Served', icon: '🙏' },
  { value: 15, suffix: '+', label: 'Cities Covered', icon: '🏙️' },
  { value: 200, suffix: '+', label: 'Vedic Pandits', icon: '📿' },
  { value: 5, suffix: ' min', label: 'Avg. Response', icon: '⚡' },
]

export default function TrustStrip() {
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
    <div
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, #0A1A12 0%, #0D1F17 100%)',
        borderTop: '1px solid rgba(196,152,74,0.15)',
        borderBottom: '1px solid rgba(196,152,74,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow behind numbers */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(196,152,74,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-main">
        <div
          style={{
            padding: '2.75rem 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            gap: '0',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} isFirst={i === 0} />
          ))}

          {/* Rating — special */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0 2.5rem',
              borderLeft: '1px solid rgba(196,152,74,0.2)',
            }}
          >
            <div style={{ fontSize: '1.4rem', marginBottom: '0.6rem', filter: 'drop-shadow(0 0 8px rgba(212,176,122,0.4))' }}>
              ⭐
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.6rem',
                fontWeight: 600,
                lineHeight: 1,
                background: 'linear-gradient(135deg, #C4984A 0%, #E8CFA0 50%, #C4984A 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 5s linear infinite',
              }}
            >
              4.9
            </span>
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.72rem',
                color: 'rgba(245,245,240,0.45)',
                marginTop: '0.5rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Avg. Rating
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .trust-strip-inner {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  )
}
