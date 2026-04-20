import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, BookOpen, Clock, AlertCircle, Lightbulb, Phone } from 'lucide-react'
import SectionLabel from '../components/common/SectionLabel'
import ShlokBlock from '../components/common/ShlokBlock'
import rituals from '../data/rituals.json'

const phaseNames = {
  1: 'Phase I — The First Days',
  2: 'Phase II — The Middle Days',
  3: 'Phase III — Completion & Integration',
}
const phaseColors = {
  1: 'var(--forest)',
  2: 'var(--sage)',
  3: 'var(--gold)',
}
const importanceBadge = {
  critical: { label: 'Critical', bg: 'rgba(139,0,0,0.08)', color: '#8B0000', border: 'rgba(139,0,0,0.2)' },
  high: { label: 'Important', bg: 'rgba(26,58,42,0.08)', color: 'var(--forest)', border: 'rgba(26,58,42,0.2)' },
  medium: { label: 'Daily Rite', bg: 'rgba(122,158,126,0.1)', color: 'var(--sage)', border: 'rgba(122,158,126,0.25)' },
}

function RitualCard({ ritual, index }) {
  const [expanded, setExpanded] = useState(false)
  const badge = importanceBadge[ritual.importance]

  return (
    <div
      id={`day-${ritual.day}`}
      style={{
        background: 'white',
        border: '1px solid var(--border)',
        borderLeft: `4px solid ${phaseColors[ritual.phaseNumber]}`,
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'box-shadow 0.25s ease',
        boxShadow: expanded ? 'var(--shadow-hover)' : 'var(--shadow-card)',
      }}
    >
      {/* Card header — always visible */}
      <div style={{ padding: '1.5rem 1.75rem' }}>
        {/* Top row: Day badge + importance + duration */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Day circle */}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: phaseColors[ritual.phaseNumber],
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500, color: 'white', lineHeight: 1 }}>
                {ritual.day}
              </span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.45rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                day
              </span>
            </div>

            {/* Name block */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.15rem', lineHeight: 1.2 }}>
                {ritual.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-sanskrit)', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                {ritual.nameDevanagari}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{
              padding: '0.2rem 0.6rem',
              background: badge.bg,
              color: badge.color,
              border: `1px solid ${badge.border}`,
              borderRadius: '3px',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              {badge.label}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              <Clock size={11} /> {ritual.duration}
            </span>
            {ritual.panditRequired && (
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', color: 'var(--text-sage)', background: 'rgba(122,158,126,0.08)', border: '1px solid rgba(122,158,126,0.2)', borderRadius: '3px', padding: '0.2rem 0.5rem' }}>
                Pandit required
              </span>
            )}
          </div>
        </div>

        {/* Phase label */}
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-sage)', marginBottom: '0.75rem' }}>
          {ritual.phase}
        </p>

        {/* Meaning — always visible */}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-body)', marginBottom: '0.75rem' }}>
          {ritual.meaning}
        </p>

        {/* Vedic Reference bar */}
        <div style={{
          background: 'var(--bg-gold-tint)',
          borderLeft: '2px solid var(--gold)',
          padding: '0.6rem 0.9rem',
          borderRadius: '0 3px 3px 0',
          marginBottom: '1rem',
        }}>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-sage)', marginBottom: '0.2rem' }}>
            Vedic Reference
          </p>
          <p style={{ fontFamily: 'var(--font-sanskrit)', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: '0.25rem' }}>
            {ritual.vedicReference.shlok}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {ritual.vedicReference.shlokTranslation} — <span style={{ fontWeight: 500 }}>{ritual.vedicReference.scripture}</span>
          </p>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '0.45rem 0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.8rem',
            fontWeight: 500,
            color: 'var(--forest)',
            transition: 'background 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-section-alt)'; e.currentTarget.style.borderColor = 'var(--border-gold)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'var(--border)' }}
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? 'Show Less' : 'Show Full Details — Mantras, Procedure & Common Mistakes'}
        </button>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div style={{ borderTop: '1px solid var(--border)', padding: '1.75rem', background: 'var(--bg-page)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="ritual-detail-grid">
            {/* Left column */}
            <div>
              {/* What Happens */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  <BookOpen size={14} color="var(--forest)" /> What Happens — Full Procedure
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-body)' }}>
                  {ritual.whatHappens}
                </p>
              </div>

              {/* Why It Matters */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  <Lightbulb size={14} color="var(--gold)" /> Theological Significance
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-body)' }}>
                  {ritual.whyItMatters}
                </p>
              </div>
            </div>

            {/* Right column */}
            <div>
              {/* Key Mantras */}
              {ritual.keyMantras && ritual.keyMantras.length > 0 && (
                <div style={{ marginBottom: '1.75rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    Key Mantras Chanted
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {ritual.keyMantras.map((mantra, i) => {
                      const parts = mantra.split(' — ')
                      return (
                        <div key={i} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '4px', padding: '0.7rem 0.9rem' }}>
                          <p style={{ fontFamily: 'var(--font-sanskrit)', fontSize: '0.95rem', color: 'var(--forest)', marginBottom: parts[1] ? '0.2rem' : 0 }}>
                            {parts[0]}
                          </p>
                          {parts[1] && (
                            <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                              {parts[1]}
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Common Mistakes */}
              {ritual.commonMistakes && (
                <div style={{
                  background: 'rgba(139,0,0,0.04)',
                  border: '1px solid rgba(139,0,0,0.12)',
                  borderLeft: '3px solid rgba(139,0,0,0.3)',
                  borderRadius: '0 4px 4px 0',
                  padding: '1rem',
                }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, color: '#8B0000', marginBottom: '0.6rem' }}>
                    <AlertCircle size={13} /> Common Mistakes to Avoid
                  </h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.7, color: '#5a2020' }}>
                    {ritual.commonMistakes}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <style>{`.ritual-detail-grid { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .ritual-detail-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

// Group rituals by phase
function groupByPhase(rituals) {
  return rituals.reduce((acc, r) => {
    const p = r.phaseNumber
    if (!acc[p]) acc[p] = []
    acc[p].push(r)
    return acc
  }, {})
}

export default function RitualsGuide() {
  const [activeDay, setActiveDay] = useState(null)
  const phases = groupByPhase(rituals)

  const scrollToDay = (day) => {
    const el = document.getElementById(`day-${day}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Add small offset for sticky nav
      setTimeout(() => window.scrollBy(0, -120), 400)
    }
    setActiveDay(day)
  }

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      {/* Hero */}
      <section style={{ background: 'var(--bg-dark)', padding: '5rem 0 4rem' }}>
        <div className="container-main" style={{ maxWidth: '800px' }}>
          <SectionLabel light>Vedic Rituals Guide</SectionLabel>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              color: 'var(--text-white)',
              marginBottom: '1.25rem',
              lineHeight: 1.25,
            }}
          >
            The Complete Antim Yatra —<br />
            <span style={{ color: 'var(--gold-light)' }}>All 13 Days Explained</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,245,240,0.75)', lineHeight: 1.8, marginBottom: '2rem' }}>
            The Antyesti (last rites) of Hinduism is one of the most detailed mortuary systems in human history.
            Each of the 13 days has a specific ceremony, a Vedic scriptural basis, a theological purpose, and
            precise procedure. This guide explains all of it — so your family can understand, not just observe.
          </p>

          <ShlokBlock
            sanskrit="यस्य स्मृत्या च नामोक्त्या तपोयज्ञक्रियादिषु। न्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम्॥"
            translation="By whose remembrance and name, all acts of austerity and sacrifice become complete — I bow to that eternal one. — Vishnu Purana"
            dark={true}
          />
        </div>
      </section>

      {/* Sticky day navigator */}
      <div style={{
        position: 'sticky',
        top: '0',
        zIndex: 40,
        background: 'white',
        borderBottom: '1px solid var(--border)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        overflowX: 'auto',
      }}>
        <div className="container-main" style={{ padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0', minWidth: 'max-content' }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', paddingRight: '1rem', borderRight: '1px solid var(--border)', marginRight: '0.5rem', whiteSpace: 'nowrap' }}>
              Jump to Day
            </span>
            {rituals.map(r => (
              <button
                key={r.day}
                onClick={() => scrollToDay(r.day)}
                style={{
                  padding: '0.7rem 0.6rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: `2px solid ${activeDay === r.day ? phaseColors[r.phaseNumber] : 'transparent'}`,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.78rem',
                  fontWeight: activeDay === r.day ? 700 : 400,
                  color: activeDay === r.day ? 'var(--text-primary)' : 'var(--text-muted)',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)' }}
                onMouseLeave={e => { if (activeDay !== r.day) e.currentTarget.style.color = 'var(--text-muted)' }}
              >
                Day {r.day}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Phase overview strip */}
      <div style={{ background: 'var(--bg-section-alt)', borderBottom: '1px solid var(--border)', padding: '1.5rem 0' }}>
        <div className="container-main">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[1, 2, 3].map(phase => (
              <div key={phase} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: phaseColors[phase] }} />
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', color: 'var(--text-body)' }}>
                  {phaseNames[phase]}
                  <span style={{ color: 'var(--text-muted)', marginLeft: '0.3rem' }}>
                    (Day {phases[phase]?.[0]?.day}–{phases[phase]?.[phases[phase].length - 1]?.day})
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main ritual cards — grouped by phase */}
      <section style={{ background: 'var(--bg-page)' }}>
        <div className="container-main">
          {[1, 2, 3].map(phase => (
            <div key={phase} style={{ marginBottom: '3rem' }}>
              {/* Phase heading */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: `2px solid ${phaseColors[phase]}`,
              }}>
                <div style={{ width: '4px', height: '2rem', background: phaseColors[phase], borderRadius: '2px' }} />
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {phaseNames[phase]}
                </h2>
              </div>

              {/* Ritual cards for this phase */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {(phases[phase] || []).map((ritual, i) => (
                  <RitualCard key={ritual.day} ritual={ritual} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--bg-dark)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container-main" style={{ maxWidth: '620px' }}>
          <p style={{ fontFamily: 'var(--font-sanskrit)', fontSize: '1.3rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>
            कर्म ही धर्म है
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(245,245,240,0.5)', marginBottom: '2rem' }}>
            Right action in the right moment — that is dharma
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 500, color: 'white', marginBottom: '1rem' }}>
            Let Our Pandits Guide Your Family Through Every Step
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(245,245,240,0.7)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Knowing is one thing — performing correctly is another. Our qualified Vedic pandits handle
            every ceremony with precision, explaining each step to your family in your language.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:+919999999999" className="btn-hero-primary">
              <Phone size={15} /> Call Us — Available 24/7
            </a>
            <Link to="/packages" className="btn-secondary-white">
              See Our Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
