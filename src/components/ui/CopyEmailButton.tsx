import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CopyEmailButtonProps {
  email: string
  className?: string
}

export function CopyEmailButton({ email, className = '' }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      // Fallback
      const input = document.createElement('input')
      input.value = email
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`copy-email-btn ${className}`}
      aria-label={`Copy email address ${email}`}
      title="Click to copy email address"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.45rem 0.85rem',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--bg-subtle)',
        border: '1px solid var(--border-default)',
        color: copied ? 'var(--accent)' : 'var(--text-secondary)',
        fontSize: 'var(--text-xs)',
        fontFamily: 'var(--font-mono)',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)'
      }}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span>{copied ? 'Copied to clipboard' : email}</span>
    </button>
  )
}
