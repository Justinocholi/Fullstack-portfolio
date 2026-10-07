import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (password: string) => boolean
  logout: () => void
  changePassword: (oldPw: string, newPw: string) => { success: boolean; message: string }
  isAuthModalOpen: boolean
  openAuthModal: () => void
  closeAuthModal: () => void
}

const AUTH_STORAGE_KEY = 'portfolio_admin_auth'
const PASS_STORAGE_KEY = 'portfolio_admin_pass'
const DEFAULT_PASS = 'admin123'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
  })

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  // Initialize password if not set
  useEffect(() => {
    if (!localStorage.getItem(PASS_STORAGE_KEY)) {
      localStorage.setItem(PASS_STORAGE_KEY, DEFAULT_PASS)
    }
  }, [])

  // Listen to keyboard shortcut Ctrl+Shift+A or Cmd+Shift+A to trigger secret access
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault()
        setIsAuthModalOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const login = (password: string): boolean => {
    const currentPass = localStorage.getItem(PASS_STORAGE_KEY) || DEFAULT_PASS
    if (password === currentPass) {
      setIsAuthenticated(true)
      localStorage.setItem(AUTH_STORAGE_KEY, 'true')
      setIsAuthModalOpen(false)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem(AUTH_STORAGE_KEY)
  }

  const changePassword = (oldPw: string, newPw: string): { success: boolean; message: string } => {
    const currentPass = localStorage.getItem(PASS_STORAGE_KEY) || DEFAULT_PASS
    if (oldPw !== currentPass) {
      return { success: false, message: 'Current password does not match.' }
    }
    if (!newPw || newPw.trim().length < 4) {
      return { success: false, message: 'New password must be at least 4 characters.' }
    }
    localStorage.setItem(PASS_STORAGE_KEY, newPw.trim())
    return { success: true, message: 'Password updated successfully!' }
  }

  const openAuthModal = () => setIsAuthModalOpen(true)
  const closeAuthModal = () => setIsAuthModalOpen(false)

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        changePassword,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
