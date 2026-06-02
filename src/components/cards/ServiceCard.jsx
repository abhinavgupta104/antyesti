import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

// Icon mapping by service slug
function ServiceIcon({ slug }) {
  const icons = {
    'antim-sanskar': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <path d="M12 2L12 8M12 2L9 5M12 2L15 5" />
        <circle cx="12" cy="12" r="6" />
        <path d="M12 8V16" />
      </svg>
    ),
    'cremation-services': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <path d="M12 3C12 3 9 7 9 11C9 13.2 10.3 15 12 15C13.7 15 15 13.2 15 11C15 7 12 3 12 3Z" />
        <path d="M6 21H18" /><path d="M8 21V17H16V21" />
      </svg>
    ),
    'pandit-for-last-rites': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <circle cx="12" cy="7" r="4" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        <path d="M12 3v4" strokeWidth="1" />
      </svg>
    ),
    'dead-body-transportation': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <rect x="1" y="9" width="22" height="8" rx="2" /><path d="M16 9V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4" />
        <circle cx="7" cy="21" r="2" /><circle cx="17" cy="21" r="2" />
      </svg>
    ),
    'hearse-van': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <path d="M3 9l3-7h12l3 7" /><path d="M1 9h22v8H1z" /><circle cx="7" cy="21" r="2" /><circle cx="17" cy="21" r="2" />
      </svg>
    ),
    'freezer-box': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18" />
      </svg>
    ),
    'asthi-visarjan': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <path d="M2 19C6 19 7 17 12 17C17 17 18 19 22 19" /><path d="M2 15C6 15 7 13 12 13C17 13 18 15 22 15" />
        <path d="M12 3v8" /><path d="M9 5l3-2 3 2" />
      </svg>
    ),
    'thirteen-day-rituals': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    'chautha-ceremony': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    'shraddha-pind-daan': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <path d="M12 22V12" /><path d="M12 12C12 12 8 9 8 5a4 4 0 0 1 8 0c0 4-4 7-4 7Z" />
        <path d="M8 22h8" />
      </svg>
    ),
    'pre-planning': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    'grief-counselling': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  }
  return icons[slug] || icons['antim-sanskar']
}

export default function ServiceCard({ service, index = 0 }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`service-card fade-up${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'var(--bg-section-alt)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.1rem',
        }}
      >
        <ServiceIcon slug={service.slug} />
      </div>

      {/* Title */}
      <h3 className="card-title" style={{ marginBottom: '0.3rem' }}>
        {service.name}
      </h3>

      {/* Sanskrit name */}
      {service.nameDevanagari && (
        <p className="sanskrit-sub" style={{ marginBottom: '0.85rem' }}>
          {service.nameDevanagari}
        </p>
      )}

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.92rem',
          lineHeight: 1.7,
          color: 'var(--text-body)',
          marginBottom: '1.25rem',
          flex: 1,
        }}
      >
        {service.shortDesc}
      </p>

      {/* Duration */}
      {service.duration && (
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
          }}
        >
          Duration: {service.duration}
        </p>
      )}

      {/* Learn More */}
      <Link
        to={`/services/${service.slug}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontFamily: 'var(--font-ui)',
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'var(--forest)',
          textDecoration: 'none',
          transition: 'gap 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.gap = '0.55rem' }}
        onMouseLeave={(e) => { e.currentTarget.style.gap = '0.35rem' }}
      >
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  )
}
