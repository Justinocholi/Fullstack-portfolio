import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSiteData } from '../context/SiteDataContext'
import { useAuth } from '../context/AuthContext'

export default function Footer() {
  const { siteData } = useSiteData()
  const { profile } = siteData
  const { isAuthenticated, openAuthModal } = useAuth()
  const navigate = useNavigate()

  const clickCountRef = useRef(0)
  const clickTimerRef = useRef<number | null>(null)

  const handleAdminTrigger = () => {
    if (isAuthenticated) {
      navigate('/admin')
    } else {
      openAuthModal()
    }
  }

  // Triple-click on copyright also opens admin
  const handleCopyrightClick = () => {
    clickCountRef.current += 1
    if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current)

    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0
      handleAdminTrigger()
    } else {
      clickTimerRef.current = window.setTimeout(() => {
        clickCountRef.current = 0
      }, 1200)
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <span className="footer-logo">{profile.name}</span>
        <p className="footer-tagline">{profile.tagline}</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/website">Projects</Link>
          <Link to="/artist">Artist</Link>
          <Link to="/digital">Digital</Link>
          <Link to="/development">Development</Link>
          <Link to="/social">Social</Link>
          <Link to="/media">Media</Link>
        </div>

        <div className="footer-social">
          {profile.contact.github && (
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
          )}
          {profile.contact.linkedin && (
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
          )}
          {profile.contact.twitter && (
            <a href={profile.contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </a>
          )}
          {profile.contact.instagram && (
            <a href={profile.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
          )}
          {profile.contact.youtube && (
            <a href={profile.contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube" />
            </a>
          )}
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy" onClick={handleCopyrightClick}>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          {/* Discreet admin portal trigger button at the bottom */}
          <button
            className={`footer-admin-trigger ${isAuthenticated ? 'active' : ''}`}
            onClick={handleAdminTrigger}
            title={isAuthenticated ? 'Admin Dashboard' : undefined}
            aria-label={isAuthenticated ? 'Admin Dashboard' : undefined}
          >
            <i className={`fas ${isAuthenticated ? 'fa-lock-open' : 'fa-shield-alt'}`} />
          </button>
        </div>
      </div>
    </footer>
  )
}
