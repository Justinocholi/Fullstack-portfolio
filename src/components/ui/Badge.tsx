import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'status' | 'outline'
  dot?: boolean
  className?: string
}

export function Badge({
  children,
  variant = 'default',
  dot = false,
  className = '',
  style,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`ui-badge badge-${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.25rem 0.65rem',
        fontSize: 'var(--text-xs)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        borderRadius: 'var(--radius-full)',
        whiteSpace: 'nowrap',
        ...style
      }}
      {...props}
    >
      {dot && (
        <span
          className="badge-dot"
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'currentColor'
          }}
        />
      )}
      {children}
    </span>
  )
}
