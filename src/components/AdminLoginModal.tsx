import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminLoginModal() {
  const { isAuthModalOpen, closeAuthModal, login, isAuthenticated } = useAuth()
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthModalOpen) {
      setPassword('')
      setError('')
      setSuccess(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isAuthModalOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAuthModalOpen) {
        closeAuthModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isAuthModalOpen, closeAuthModal])

  if (!isAuthModalOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!password) {
      setError('Please enter your admin passcode.')
      return
    }

    const ok = login(password)
    if (ok) {
      setSuccess(true)
      setError('')
      setTimeout(() => {
        closeAuthModal()
        navigate('/admin')
      }, 500)
    } else {
      setError('Incorrect passcode. Please try again.')
    }
  }

  return (
    <div className="admin-modal-backdrop" onClick={closeAuthModal}>
      <div
        className="admin-modal-card"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-labelledby="admin-modal-title"
      >
        <button
          className="admin-modal-close"
          onClick={closeAuthModal}
          aria-label="Close admin login"
        >
          <i className="fas fa-times" />
        </button>

        <div className="admin-modal-header">
          <div className="admin-modal-icon">
            <i className="fas fa-user-shield" />
          </div>
          <h2 id="admin-modal-title">Admin Access</h2>
          <p>
            {isAuthenticated
              ? 'You are currently authenticated as Admin.'
              : 'Enter your passcode to manage and edit portfolio content.'}
          </p>
        </div>

        {isAuthenticated ? (
          <div className="admin-modal-already">
            <p className="admin-modal-active-badge">
              <i className="fas fa-check-circle" /> Active Session
            </p>
            <div className="admin-modal-actions">
              <button
                type="button"
                className="btn-glow primary"
                onClick={() => {
                  closeAuthModal()
                  navigate('/admin')
                }}
              >
                Go to Admin Dashboard
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="admin-modal-form">
            <div className="admin-input-group">
              <label htmlFor="admin-passcode">Passcode</label>
              <div className="admin-password-wrap">
                <input
                  id="admin-passcode"
                  ref={inputRef}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter admin passcode"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                    if (error) setError('')
                  }}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="admin-pass-toggle"
                  onClick={() => setShowPassword(p => !p)}
                  aria-label={showPassword ? 'Hide passcode' : 'Show passcode'}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                </button>
              </div>
            </div>

            {error && <div className="admin-modal-error"><i className="fas fa-exclamation-circle" /> {error}</div>}
            {success && <div className="admin-modal-success"><i className="fas fa-check" /> Access granted! Redirecting...</div>}

            <div className="admin-modal-actions">
              <button type="button" className="btn-glow secondary" onClick={closeAuthModal}>
                Cancel
              </button>
              <button type="submit" className="btn-glow primary">
                Unlock Dashboard <i className="fas fa-arrow-right" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
