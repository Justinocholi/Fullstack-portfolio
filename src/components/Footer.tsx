import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <span className="footer-logo">{profile.name}</span>
        <p className="footer-tagline">{profile.tagline}</p>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/website">Projects</Link>
          <Link to="/artist">Artist</Link>
          <Link to="/digital">Digital</Link>
          <Link to="/development">Development</Link>
          <Link to="/social">Social</Link>
          <Link to="/media">Media</Link>
        </nav>

        <div className="footer-social" aria-label="Social media links">
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
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
