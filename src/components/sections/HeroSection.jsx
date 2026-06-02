import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight, ChevronDown } from 'lucide-react'
import heroVaranasi from '../../assets/divine/hero_varanasi.png'
import heroFire    from '../../assets/divine/hero_fire.png'
import heroTemple  from '../../assets/divine/hero_temple.png'
import lotusDiya   from '../../assets/divine/lotus_diya.png'

const SLIDES = [
  { src: heroVaranasi, position: 'center 40%' },
  { src: heroTemple,   position: 'center 35%' },
  { src: heroFire,     position: 'center 50%' },
  { src: lotusDiya,    position: 'center 45%' },
]

/* ── Crossfading slideshow ── */
function HeroSlideshow() {
  const [curr, setCurr] = useState(0)
  const [next, setNext] = useState(1)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurr(c => (c + 1) % SLIDES.length)
        setNext(n => (n + 1) % SLIDES.length)
        setFading(false)
      }, 1400)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} aria-hidden="true">
      {/* Base image */}
      <img
        src={SLIDES[curr].src}
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: SLIDES[curr].position,
        }}
      />
      {/* Incoming image — fades in */}
      <img
        src={SLIDES[next].src}
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: SLIDES[next].position,
          opacity: fading ? 1 : 0,
          transition: 'opacity 1.4s ease-in-out',
        }}
      />

      {/* ── LIGHT OVERLAY: warm cream washes from left, stays airy on right ── */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: `
            linear-gradient(
              to right,
              rgba(245,240,232,0.97) 0%,
              rgba(245,240,232,0.88) 38%,
              rgba(245,240,232,0.55) 62%,
              rgba(245,240,232,0.15) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(245,240,232,0.6) 0%,
              transparent 20%,
              transparent 75%,
              rgba(245,240,232,0.85) 100%
            )
          `,
        }}
      />

      {/* Subtle warm grain */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

/* ── Slide indicator dots ── */
function SlideDots({ total, current }) {
  return (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          style={{
            display: 'block',
            width:  i === current ? '18px' : '5px',
            height: '4px',
            borderRadius: '2px',
            background: i === current ? 'var(--gold)' : 'rgba(184,137,74,0.3)',
            transition: 'all 0.5s ease',
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  const [loaded,    setLoaded]    = useState(false)
  const [slideIdx,  setSlideIdx]  = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setSlideIdx(i => (i + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  const enter = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}s,
                 transform 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  })

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: 'var(--bg-parchment)',
      }}
    >
      <HeroSlideshow />

      {/* ── MAIN CONTENT ── */}
      <div
        className="container-main"
        style={{
          position: 'relative',
          zIndex: 3,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          paddingTop: '8rem',
          paddingBottom: '6rem',
        }}
      >
        <div style={{ maxWidth: '660px' }}>

          {/* Sanskrit label — dark ink on light */}
          <div style={enter(0.08)}>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.6rem',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--gold-deep)',
                fontWeight: 500,
                marginBottom: '2.25rem',
                opacity: 0.8,
              }}
            >
              आत्मनो मोक्षार्थं &nbsp;·&nbsp; For Liberation of the Soul
            </p>
          </div>

          {/* Headline — dark, large Cormorant */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.2rem, 6.5vw, 6.2rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--text-primary)',
              letterSpacing: '-0.015em',
              marginBottom: '2rem',
              ...enter(0.22),
            }}
          >
            <span style={{ display: 'block' }}>Conducting the</span>
            <span style={{ display: 'block' }}>Sacred Antim</span>
            <span
              style={{
                display: 'inline-block',
                fontStyle: 'italic',
                color: 'var(--forest-mid)',
              }}
            >
              Sanskar
            </span>
          </h1>

          {/* Gold hairline */}
          <div
            style={{
              width: '72px',
              height: '1px',
              background: 'linear-gradient(90deg, var(--gold), transparent)',
              marginBottom: '2rem',
              animation: loaded ? 'lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s both' : 'none',
            }}
          />

          {/* Subtext — dark body */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              lineHeight: 1.9,
              color: 'var(--text-muted)',
              maxWidth: '460px',
              marginBottom: '3rem',
              ...enter(0.42),
            }}
          >
            When a soul departs, your family deserves rituals held with
            complete reverence — every step explained, every tradition honoured.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              ...enter(0.58),
            }}
          >
            <a
              href="tel:+919999999999"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '1rem 2.2rem',
                background: 'var(--forest)',
                color: 'var(--text-white)',
                borderRadius: '3px',
                fontFamily: 'var(--font-ui)',
                fontWeight: 500,
                fontSize: '0.86rem',
                textDecoration: 'none',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                transition: 'all 0.35s ease',
                boxShadow: '0 4px 20px rgba(26,58,42,0.18)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,58,42,0.28)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,58,42,0.18)'
              }}
            >
              <Phone size={15} />
              Call 24/7
            </a>

            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'transparent',
                color: 'var(--forest)',
                border: '1px solid var(--border-gold)',
                borderRadius: '3px',
                fontFamily: 'var(--font-ui)',
                fontWeight: 500,
                fontSize: '0.86rem',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg-gold-tint)'
                e.currentTarget.style.borderColor = 'var(--gold)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'var(--border-gold)'
              }}
            >
              Explore Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          borderTop: '1px solid var(--border)',
          background: 'rgba(245,240,232,0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          padding: '1rem 0',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s ease 1s',
        }}
      >
        <div
          className="container-main"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Slide dots */}
          <SlideDots total={SLIDES.length} current={slideIdx} />

          {/* Center label */}
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              margin: 0,
            }}
          >
            Available around the clock &nbsp;·&nbsp;{' '}
            <span style={{ color: 'var(--gold-deep)' }}>under 5 minutes response</span>
          </p>

          {/* Scroll cue */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              opacity: 0.4,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold-deep)',
              }}
            >
              Scroll
            </span>
            <ChevronDown
              size={13}
              color="var(--gold-deep)"
              style={{ animation: 'float 2.5s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gold hairline */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(184,137,74,0.4), transparent)',
          zIndex: 4,
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .hero-h1-light { font-size: clamp(2.6rem, 9vw, 3.8rem) !important; }
        }
      `}</style>
    </section>
  )
}
