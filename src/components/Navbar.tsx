import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { profile } from '../data/profile'
import { ThemeToggle } from './ui/ThemeToggle'
import '../styles/navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className="nav-shell">
      <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">JO</span>
          <span className="logo-text">{profile.name}</span>
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Overview
            </NavLink>
          </li>
          <li>
            <a href="/#projects" onClick={closeMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="/#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <NavLink to="/lab" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Lab
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              CV
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <button className="hamburger" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
