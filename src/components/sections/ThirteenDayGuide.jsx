import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, ArrowRight, Check } from 'lucide-react'
import SectionLabel from '../common/SectionLabel'
import DivaDivider from '../common/DivaDivider'
import rituals from '../../data/rituals.json'

const featuredDays = [1, 3, 10, 13]

export default function ThirteenDayGuide() {
  const [downloaded, setDownloaded] = useState(false)
  const featured = rituals.filter((r) => featuredDays.includes(r.day))

  const handleDownload = () => {
    console.log('User requested 13-Day Guide PDF download')
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 4000)
  }

  return (
    <section style={{ background: 'var(--bg-page)' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 3rem' }}>
          <SectionLabel>The Journey of 13 Days</SectionLabel>
          <h2 className="section-h2" style={{ marginBottom: '1rem' }}>
            Understanding the Complete Antim Yatra
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            Hindu tradition prescribes a structured 13-day mourning and ritual period.
            Each day holds specific ceremonies that ease the soul's journey and provide
            the family with structure and meaning in grief.
          </p>
        </div>

        <DivaDivider />

        {/* Timeline */}
        <div style={{ maxWidth: '720px', margin: '2.5rem auto 0', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {featured.map((ritual, i) => (
            <div
              key={ritual.day}
              style={{
                display: 'flex',
                gap: '2rem',
                position: 'relative',
                paddingBottom: i < featured.length - 1 ? '2.5rem' : '0',
              }}
            >
              {/* Left: Day badge + connector */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--forest)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: 'white',
                      lineHeight: 1,
                    }}
                  >
                    {ritual.day}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.5rem',
                      color: 'rgba(255,255,255,0.6)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Day
                  </span>
                </div>
                {i < featured.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      width: '1px',
                      background: 'linear-gradient(to bottom, var(--gold), rgba(184,151,90,0.2))',
                      marginTop: '8px',
                    }}
                  />
                )}
              </div>

              {/* Right: Ritual content */}
              <div style={{ flex: 1, paddingTop: '0.5rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.2rem',
                  }}
                >
                  {ritual.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sanskrit)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.65rem',
                  }}
                >
                  {ritual.nameDevanagari}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    lineHeight: 1.7,
                    color: 'var(--text-body)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {ritual.meaning}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {ritual.whatHappens.substring(0, 200)}...
                </p>

                {/* Vedic reference callout */}
                <div
                  style={{
                    background: 'var(--bg-gold-tint)',
                    borderLeft: '2px solid var(--gold)',
                    padding: '0.65rem 1rem',
                    borderRadius: '0 3px 3px 0',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.72rem',
                      color: 'var(--text-sage)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Vedic Reference
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontStyle: 'italic',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
                    }}
                  >
                    {ritual.vedicReference.scripture}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: '3rem' }}>
          <button
            onClick={handleDownload}
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            {downloaded ? (
              <>
                <Check size={15} /> Download Initiated — Check Your Device
              </>
            ) : (
              <>
                <Download size={15} /> Download Complete 13-Day Guide (PDF)
              </>
            )}
          </button>
          <Link
            to="/packages"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.88rem',
              fontWeight: 500,
              color: 'var(--forest)',
              textDecoration: 'none',
            }}
          >
            Book Our 13-Day Package <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
