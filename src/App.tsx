import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Background3D from './components/Background3D'
import Footer from './components/Footer'

// Route-level code-splitting for performance
const Home = lazy(() => import('./pages/Home'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const Lab = lazy(() => import('./pages/Lab'))
const CV = lazy(() => import('./pages/CV'))

// Minimal, accessible fallback during route transitions
function PageFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)'
      }}
    >
      <span className="dot" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', marginRight: 10 }} />
      Loading...
    </div>
  )
}

function App() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Background3D />
      <Navbar />

      <main id="main-content">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            {/* Primary Modern Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/cv" element={<CV />} />

            {/* Legacy Route Redirects */}
            <Route path="/website" element={<Navigate to="/" replace />} />
            <Route path="/artist" element={<Navigate to="/lab" replace />} />
            <Route path="/digital" element={<Navigate to="/" replace />} />
            <Route path="/development" element={<Navigate to="/" replace />} />
            <Route path="/social" element={<Navigate to="/" replace />} />
            <Route path="/media" element={<Navigate to="/lab" replace />} />
            <Route path="/admin" element={<Navigate to="/" replace />} />

            {/* 404 Wildcard Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default App
