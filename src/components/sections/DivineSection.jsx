import React, { useEffect, useRef, useState } from 'react'
import omMandala from '../../assets/divine/om_mandala.png'
import gangaDiya from '../../assets/divine/ganga_diya.png'
import panditRitual from '../../assets/divine/pandit_ritual.png'
import vishnuDivine from '../../assets/divine/vishnu_divine.png'

const divineImages = [
  {
    src: gangaDiya,
    title: 'Ganga Aarti',
    subtitle: 'Prayers offered to the sacred river',
    caption: 'गंगा माँ',
    span: 2,
  },
  {
    src: panditRitual,
    title: 'Vedic Rituals',
    subtitle: 'Every step guided by scripture',
    caption: 'अंत्येष्टि',
    span: 1,
  },
  {
    src: omMandala,
    title: 'Om — The Sacred Sound',
    subtitle: 'The eternal vibration of the universe',
    caption: 'ॐ',
    span: 1,
  },
  {
    src: vishnuDivine,
    title: 'Divine Presence',
    subtitle: 'The soul returns to the universal spirit',
    caption: 'परमात्मा',
    span: 2,
  },
]

function DivineCard({ image, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        gridColumn: `span ${image.span}`,
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: image.span === 2 ? '16/9' : '4/5',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={image.src}
        alt={image.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          display: 'block',
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(0deg, rgba(10,26,18,0.92) 0%, rgba(10,26,18,0.3) 60%, transparent 100%)'
            : 'linear-gradient(0deg, rgba(10,26,18,0.85) 0%, rgba(10,26,18,0.15) 55%, transparent 100%)',
          transition: 'background 0.5s ease',
        }}
      />

      {/* Sanskrit char floating top right */}
      <div
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          fontFamily: 'var(--font-sanskrit)',
          fontSize: '1.8rem',
          color: 'rgba(212,176,122,0.65)',
          lineHeight: 1,
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.4s ease',
        }}
      >
        {image.caption}
      </div>

      {/* Gold border on hover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '16px',
          border: hovered ? '1px solid rgba(196,152,74,0.5)' : '1px solid rgba(255,255,255,0.06)',
          transition: 'border-color 0.4s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Text */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1.5rem',
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          transition: 'transform 0.4s ease',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 600,
            marginBottom: '0.3rem',
            opacity: hovered ? 1 : 0.8,
            transition: 'opacity 0.3s ease',
          }}
        >
          {image.subtitle}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: image.span === 2 ? '1.5rem' : '1.15rem',
            fontWeight: 500,
            color: 'white',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
          }}
        >
          {image.title}
        </h3>
      </div>
    </div>
  )
}

export default function DivineSection() {
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

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #091410 0%, #0D1F17 100%)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background shimmer */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(196,152,74,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '620px',
            margin: '0 auto 3.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Om symbol */}
          <div
            style={{
              fontFamily: 'var(--font-sanskrit)',
              fontSize: '2.5rem',
              color: 'rgba(212,176,122,0.6)',
              marginBottom: '0.75rem',
              lineHeight: 1,
              filter: 'drop-shadow(0 0 20px rgba(196,152,74,0.3))',
            }}
          >
            ॐ
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <span style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, transparent, rgba(196,152,74,0.5))' }} />
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, margin: 0 }}>
              Sacred Tradition
            </p>
            <span style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, rgba(196,152,74,0.5), transparent)' }} />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: 500,
              color: 'var(--text-white)',
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            Rooted in Five Thousand<br />Years of Vedic Wisdom
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.85,
              color: 'rgba(245,245,240,0.55)',
            }}
          >
            Every ritual we conduct carries the weight of tradition and the warmth
            of devotion — connecting the departing soul to the divine.
          </p>
        </div>

        {/* Image grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '1rem',
          }}
          className="divine-grid"
        >
          {divineImages.map((image, i) => (
            <DivineCard key={i} image={image} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom Sanskrit verse */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.5s',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sanskrit)',
              fontSize: '1rem',
              color: 'rgba(212,176,122,0.5)',
              marginBottom: '0.35rem',
            }}
          >
            सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '0.82rem',
              color: 'rgba(245,245,240,0.3)',
            }}
          >
            May all be happy. May all be free from illness.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .divine-grid {
            grid-template-columns: 1fr !important;
          }
          .divine-grid > * {
            grid-column: span 1 !important;
            aspect-ratio: 16/9 !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .divine-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
