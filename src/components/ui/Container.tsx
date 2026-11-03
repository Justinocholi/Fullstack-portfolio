import React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'normal' | 'reading' | 'wide'
  className?: string
}

export function Container({
  children,
  size = 'normal',
  className = '',
  style,
  ...props
}: ContainerProps) {
  const maxWidth =
    size === 'reading' ? 'var(--container-reading)' : size === 'wide' ? '1400px' : 'var(--container-max)'

  return (
    <div
      className={`ui-container ${className}`}
      style={{
        width: '100%',
        maxWidth,
        margin: '0 auto',
        paddingLeft: 'var(--space-6)',
        paddingRight: 'var(--space-6)',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
}
