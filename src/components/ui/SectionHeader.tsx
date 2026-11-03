import React from 'react'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  action?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  action,
  align = 'left',
  className = ''
}: SectionHeaderProps) {
  return (
    <div
      className={`section-header-wrap ${className}`}
      style={{
        textAlign: align,
        marginBottom: 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start'
      }}
    >
      {label && (
        <span
          className="section-label-tag"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            fontWeight: 600,
            marginBottom: 'var(--space-2)'
          }}
        >
          {label}
        </span>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: align === 'center' ? 'center' : 'space-between',
          alignItems: 'baseline',
          width: '100%',
          flexWrap: 'wrap',
          gap: 'var(--space-4)'
        }}
      >
        <h2
          style={{
            fontSize: 'var(--text-3xl)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            margin: 0
          }}
        >
          {title}
        </h2>
        {action && <div className="section-header-action">{action}</div>}
      </div>
      {description && (
        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--text-secondary)',
            marginTop: 'var(--space-2)',
            maxWidth: '65ch',
            lineHeight: 1.6
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
