import React from 'react'
import { ChevronDown } from 'lucide-react'
import SectionLabel from '../common/SectionLabel'
import faq from '../../data/faq.json'
import { useState } from 'react'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.4,
          }}
        >
          {item.question}
        </span>
        <ChevronDown
          size={18}
          color="var(--sage)"
          style={{
            flexShrink: 0,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.25s ease',
          }}
        />
      </button>

      <div
        style={{
          maxHeight: isOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.97rem',
            lineHeight: 1.8,
            color: 'var(--text-body)',
            paddingBottom: '1.25rem',
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(null)

  return (
    <section style={{ background: 'var(--bg-section-alt)' }}>
      <div className="container-main">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            alignItems: 'flex-start',
          }}
          className="faq-grid"
        >
          <div style={{ position: 'sticky', top: '7rem' }}>
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="section-h2" style={{ marginBottom: '1rem' }}>
              Answers for Difficult Moments
            </h2>
            <p className="body-text" style={{ color: 'var(--text-muted)' }}>
              We know you may have questions. Here are answers to the ones families
              ask us most often.
            </p>
          </div>

          <div>
            {faq.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .faq-grid {
          grid-template-columns: 1fr 2fr;
        }
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
