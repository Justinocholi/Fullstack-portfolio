import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminBottomBar() {
  const { isAuthenticated, logout } = useAuth()
  const location = useLocation()
  const [minimized, setMinimized] = useState(false)

  // Only visible to the authenticated admin
  if (!isAuthenticated) return null

  // If already on /admin page, don't obstruct the admin view with the full floating bar,
  // or render a compact status
  const isOnAdmin = location.pathname === '/admin'

  return (
    <aside className={`admin-floating-bar ${minimized ? 'minimized' : ''}`} aria-label="Admin quick toolbar">
      {minimized ? (
        <button
          className="admin-bar-restore"
          onClick={() => setMinimized(false)}
          title="Restore Admin Bar"
          aria-label="Expand admin toolbar"
        >
          <span className="admin-status-dot pulse" />
          <i className="fas fa-user-shield" />
          <span className="admin-restore-text">Admin</span>
        </button>
      ) : (
        <div className="admin-bar-content">
          <div className="admin-bar-status">
            <span className="admin-status-dot pulse" />
            <span className="admin-bar-label">
              <strong>Admin Mode</strong> Active
            </span>
          </div>

          <div className="admin-bar-actions">
            {!isOnAdmin ? (
              <Link to="/admin" className="admin-bar-btn primary">
                <i className="fas fa-sliders-h" /> Admin Dashboard
              </Link>
            ) : (
              <Link to="/" className="admin-bar-btn secondary">
                <i className="fas fa-eye" /> View Live Site
              </Link>
            )}

            <button
              onClick={logout}
              className="admin-bar-btn danger"
              title="End admin session"
            >
              <i className="fas fa-lock" /> Lock &amp; Logout
            </button>

            <button
              onClick={() => setMinimized(true)}
              className="admin-bar-minimize"
              title="Minimize toolbar"
              aria-label="Minimize admin toolbar"
            >
              <i className="fas fa-chevron-down" />
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}
