import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  asChild?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  style,
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: { padding: '0.4rem 0.8rem', fontSize: 'var(--text-xs)' },
    md: { padding: '0.65rem 1.25rem', fontSize: 'var(--text-sm)' },
    lg: { padding: '0.85rem 1.75rem', fontSize: 'var(--text-base)' }
  }[size]

  return (
    <button
      className={`btn-ui btn-${variant} btn-${size} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        fontWeight: 500,
        borderRadius: 'var(--radius-sm)',
        transition: 'all var(--transition-fast)',
        cursor: 'pointer',
        textDecoration: 'none',
        border: '1px solid transparent',
        ...sizeStyles,
        ...style
      }}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </button>
  )
}
