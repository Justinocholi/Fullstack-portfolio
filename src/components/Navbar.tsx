import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
      <NavLink to="/" className="logo" onClick={closeMenu}>Joshua Ocholi Eleojo</NavLink>
      <button className="hamburger" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/artist" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Artist</NavLink></li>
        <li><NavLink to="/digital" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Digital</NavLink></li>
        <li><NavLink to="/development" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Development</NavLink></li>
        <li><NavLink to="/social" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Social</NavLink></li>
        <li><NavLink to="/website" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Website</NavLink></li>
        <li><NavLink to="/media" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Media</NavLink></li>
      </ul>
    </nav>
  )
}
