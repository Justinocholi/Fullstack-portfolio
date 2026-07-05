import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)
  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <header className="nav-shell">
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">JO</span>
          <span className="logo-text">Joshua Ocholi Eleojo</span>
        </NavLink>
        <ul className="nav-links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/artist" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Artist</NavLink></li>
          <li><NavLink to="/digital" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Digital</NavLink></li>
          <li><NavLink to="/development" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Development</NavLink></li>
          <li><NavLink to="/social" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Social</NavLink></li>
          <li><NavLink to="/website" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Website</NavLink></li>
          <li><NavLink to="/media" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Media</NavLink></li>
        </ul>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
          </button>
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
