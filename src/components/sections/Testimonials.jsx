import React, { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import testimonials from '../../data/testimonials.json'
import SectionLabel from '../common/SectionLabel'

function TestimonialCard({ testimonial, dark = false }) {
  return (
    <div
      style={{
        width: '340px',
        flexShrink: 0,
        background: dark ? 'rgba(255,255,255,0.04)' : 'var(--bg-card)',
        backdropFilter: dark ? 'blur(12px)' : 'none',
        border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border)',
        borderRadius: '12px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = dark
          ? '0 12px 40px rgba(196,152,74,0.15)'
          : 'var(--shadow-hover)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Accent corner */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60px',
          height: '60px',
          background: 'linear-gradient(225deg, rgba(196,152,74,0.15), transparent)',
          borderRadius: '0 12px 0 0',
        }}
      />

      {/* Quote */}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '3.5rem',
          lineHeight: 0.8,
          color: 'var(--gold)',
          opacity: 0.5,
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        "
      </span>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star key={i} size={13} fill="var(--gold)" color="var(--gold)" />
        ))}
      </div>

      {/* Review text */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '0.93rem',
          lineHeight: 1.75,
          color: dark ? 'rgba(245,245,240,0.75)' : 'var(--text-body)',
          flex: 1,
        }}
      >
        {testimonial.review}
      </p>

      {/* Name */}
      <div
        style={{
          borderTop: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border)',
          paddingTop: '0.9rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: dark ? 'var(--text-white)' : 'var(--text-primary)',
            marginBottom: '0.15rem',
          }}
        >
          {testimonial.name}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.76rem',
            color: dark ? 'rgba(196,152,74,0.7)' : 'var(--text-sage)',
          }}
        >
          {testimonial.service} · {testimonial.city}
        </p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Duplicate for seamless loop
  const doubled = [...testimonials, ...testimonials]

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #0D1F17 0%, #0A1A12 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* BG radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(26,58,42,0.5) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {/* Header */}
        <div
          className="container-main"
          style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '3.5rem' }}
        >
          <SectionLabel style={{ color: 'var(--gold)' }}>Families We've Served</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: 700,
              color: 'var(--text-white)',
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              margin: '0.75rem 0 1rem',
            }}
          >
            Words from Families We've Walked With
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,245,240,0.55)',
            }}
          >
            Every loss is profound. Here is what some of the families we've supported have shared.
          </p>
        </div>

        {/* Marquee track 1 */}
        <div style={{ overflow: 'hidden', paddingBottom: '1.5rem' }}>
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              animation: 'marquee 50s linear infinite',
              width: 'max-content',
              paddingLeft: '1.5rem',
            }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={`a-${i}`} testimonial={t} dark />
            ))}
          </div>
        </div>

        {/* Marquee track 2 — reverse */}
        <div style={{ overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              animation: 'marquee 60s linear infinite reverse',
              width: 'max-content',
              paddingLeft: '1.5rem',
            }}
          >
            {[...doubled].reverse().map((t, i) => (
              <TestimonialCard key={`b-${i}`} testimonial={t} dark />
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #0D1F17 0%, transparent 10%, transparent 90%, #0D1F17 100%)',
            pointerEvents: 'none',
            zIndex: 2,
            top: '25%',
          }}
        />
      </div>
    </section>
  )
}
