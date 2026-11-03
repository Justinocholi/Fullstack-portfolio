import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'subtle' | 'interactive'
  className?: string
}

export function Card({
  children,
  variant = 'default',
  className = '',
  style,
  ...props
}: CardProps) {
  return (
    <div
      className={`ui-card card-${variant} ${className}`}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-dim)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-6)',
        transition: 'all var(--transition-normal)',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
}
