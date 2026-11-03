import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon
} from './icons/BrandIcons'
import { CopyEmailButton } from './ui/CopyEmailButton'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <span className="footer-logo">{profile.name}</span>
        <p className="footer-tagline">{profile.role}</p>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Overview</Link>
          <a href="/#projects">Selected Work</a>
          <a href="/#experience">Experience</a>
          <Link to="/lab">Lab &amp; Media</Link>
          <Link to="/cv">Curriculum Vitae</Link>
          <a href="/#contact">Contact</a>
        </nav>

        <div style={{ margin: 'var(--space-4) 0' }}>
          <CopyEmailButton email={profile.contact.email} />
        </div>

        <div className="footer-social" aria-label="Social media links">
          {profile.contact.github && (
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
          )}
          {profile.contact.linkedin && (
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          )}
          {profile.contact.twitter && (
            <a href={profile.contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon size={18} />
            </a>
          )}
          {profile.contact.instagram && (
            <a href={profile.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
          )}
          {profile.contact.youtube && (
            <a href={profile.contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YoutubeIcon size={18} />
            </a>
          )}
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {profile.name}. Abuja, Nigeria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
