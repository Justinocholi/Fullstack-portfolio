import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useSiteData } from '../context/SiteDataContext'
import type {
  Project,
  AudioTrack,
  YouTubeVideo,
  TestimonialItem,
  BuildingItem
} from '../data/types'
import '../styles/admin.css'

type TabType = 'profile' | 'projects' | 'media' | 'testimonials' | 'services' | 'settings'
type MediaSubTab = 'audio' | 'videos' | 'playlists' | 'social' | 'gallery'

export default function Admin() {
  const { isAuthenticated, login, logout, changePassword } = useAuth()
  const {
    siteData,
    updateProfile,
    saveProject,
    deleteProject,
    updateAudioTracks,
    updateYouTubeVideos,
    updateYouTubePlaylists,
    updateSocialPosts,
    updateTestimonials,
    updateBuilding,
    updateExpertise,
    updateDigitalStats,
    updateClients,
    updateGallery,
    resetAllData,
    importData,
    exportData
  } = useSiteData()

  const [activeTab, setActiveTab] = useState<TabType>('profile')
  const [mediaSubTab, setMediaSubTab] = useState<MediaSubTab>('audio')

  // Login form state (if not authenticated)
  const [passcode, setPasscode] = useState('')
  const [loginError, setLoginError] = useState('')

  // Toast notification
  const [toast, setToast] = useState<string | null>(null)
  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  // Profile Form State
  const [profileForm, setProfileForm] = useState(siteData.profile)

  // Project Editing State
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null)
  const [projectForm, setProjectForm] = useState<Partial<Project>>({
    id: '',
    title: '',
    description: '',
    image: '',
    category: 'web',
    technologies: [],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    highlight: false,
    metrics: { performanceScore: 95, loadTime: '1.0s', users: '', extra: '' }
  })
  const [techInput, setTechInput] = useState('')
  const [projectFilter, setProjectFilter] = useState('all')

  // Password change state
  const [oldPw, setOldPw] = useState('')
  const [newPw, setNewPw] = useState('')
  const [pwMsg, setPwMsg] = useState<{ text: string; isError: boolean } | null>(null)

  // JSON Import state
  const [importJsonText, setImportJsonText] = useState('')

  // Handle direct login if unauthenticated
  const handleDirectLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!passcode) {
      setLoginError('Please enter your passcode.')
      return
    }
    const ok = login(passcode)
    if (!ok) {
      setLoginError('Incorrect passcode. Please try again.')
    } else {
      setLoginError('')
      showToast('Logged in successfully!')
    }
  }

  // Save profile
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    updateProfile(profileForm)
    showToast('Profile information saved!')
  }

  // Projects handlers
  const handleStartAddProject = () => {
    const newId = 'project-' + Date.now()
    setProjectForm({
      id: newId,
      title: 'New Project',
      description: 'A brief description of this project.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      category: 'web',
      technologies: ['React', 'TypeScript'],
      liveUrl: '',
      githubUrl: '',
      featured: true,
      highlight: false,
      metrics: { performanceScore: 95, loadTime: '1.0s', users: '', extra: '' }
    })
    setTechInput('React, TypeScript')
    setEditingProjectId(newId)
  }

  const handleEditProject = (proj: Project) => {
    setProjectForm(proj)
    setTechInput(proj.technologies ? proj.technologies.join(', ') : '')
    setEditingProjectId(proj.id)
  }

  const handleSaveProjectForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (!projectForm.title || !projectForm.id) return

    const techs = techInput
      .split(',')
      .map(t => t.trim())
      .filter(Boolean)

    const fullProj: Project = {
      id: projectForm.id,
      title: projectForm.title || '',
      description: projectForm.description || '',
      image: projectForm.image || '',
      category: projectForm.category || 'web',
      technologies: techs,
      liveUrl: projectForm.liveUrl,
      githubUrl: projectForm.githubUrl,
      featured: !!projectForm.featured,
      highlight: !!projectForm.highlight,
      metrics: projectForm.metrics
    }

    saveProject(fullProj)
    setEditingProjectId(null)
    showToast(`Project "${fullProj.title}" saved!`)
  }

  const handleDeleteProject = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteProject(id)
      if (editingProjectId === id) setEditingProjectId(null)
      showToast(`Deleted "${title}"`)
    }
  }

  // Audio track handlers
  const handleAddAudioTrack = () => {
    const newTrack: AudioTrack = {
      title: 'New Track',
      artist: siteData.profile.name,
      url: '/love.mp3',
      duration: 180
    }
    updateAudioTracks([...siteData.media.audioTracks, newTrack])
    showToast('New audio track added!')
  }

  const handleAudioChange = (index: number, field: keyof AudioTrack, val: any) => {
    const updated = [...siteData.media.audioTracks]
    updated[index] = { ...updated[index], [field]: val }
    updateAudioTracks(updated)
  }

  const handleDeleteAudioTrack = (index: number) => {
    const updated = siteData.media.audioTracks.filter((_, i) => i !== index)
    updateAudioTracks(updated)
    showToast('Track removed')
  }

  // YouTube video handlers
  const handleAddVideo = () => {
    const newVid: YouTubeVideo = {
      title: 'New YouTube Video',
      videoId: '5wJcUS1WUCY',
      description: 'Video description'
    }
    updateYouTubeVideos([newVid, ...siteData.media.youtubeVideos])
    showToast('Video added!')
  }

  const handleVideoChange = (index: number, field: keyof YouTubeVideo, val: string) => {
    const updated = [...siteData.media.youtubeVideos]
    updated[index] = { ...updated[index], [field]: val }
    updateYouTubeVideos(updated)
  }

  const handleDeleteVideo = (index: number) => {
    const updated = siteData.media.youtubeVideos.filter((_, i) => i !== index)
    updateYouTubeVideos(updated)
    showToast('Video deleted')
  }

  // Testimonials handlers
  const handleAddTestimonial = () => {
    const newTest: TestimonialItem = {
      id: 'test-' + Date.now(),
      name: 'Client Name',
      role: 'Founder / Client',
      text: 'Great work and exceptional delivery!',
      stars: 5
    }
    updateTestimonials([...siteData.testimonials, newTest])
    showToast('Testimonial added!')
  }

  const handleTestimonialChange = (index: number, field: keyof TestimonialItem, val: any) => {
    const updated = [...siteData.testimonials]
    updated[index] = { ...updated[index], [field]: val }
    updateTestimonials(updated)
  }

  const handleDeleteTestimonial = (index: number) => {
    const updated = siteData.testimonials.filter((_, i) => i !== index)
    updateTestimonials(updated)
    showToast('Testimonial removed')
  }

  // Building (Roadmap) handlers
  const handleAddBuilding = () => {
    const newItem: BuildingItem = {
      id: 'b-' + Date.now(),
      title: 'New Feature / App',
      desc: 'Description of what is being built.',
      status: 'In Progress',
      statusClass: 'in-progress',
      progress: 50
    }
    updateBuilding([...siteData.building, newItem])
    showToast('Building project added!')
  }

  const handleBuildingChange = (index: number, field: keyof BuildingItem, val: any) => {
    const updated = [...siteData.building]
    updated[index] = { ...updated[index], [field]: val }
    if (field === 'status') {
      if (val === 'In Progress') updated[index].statusClass = 'in-progress'
      else if (val === 'Planning') updated[index].statusClass = 'planning'
      else updated[index].statusClass = 'completed'
    }
    updateBuilding(updated)
  }

  const handleDeleteBuilding = (index: number) => {
    const updated = siteData.building.filter((_, i) => i !== index)
    updateBuilding(updated)
    showToast('Removed item')
  }

  // Change password handler
  const handleChangePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const res = changePassword(oldPw, newPw)
    if (res.success) {
      setPwMsg({ text: res.message, isError: false })
      setOldPw('')
      setNewPw('')
      showToast('Password changed successfully!')
    } else {
      setPwMsg({ text: res.message, isError: true })
    }
  }

  // Export JSON file download
  const handleDownloadBackup = () => {
    const dataStr = exportData()
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    showToast('Backup downloaded!')
  }

  // Import JSON handler
  const handleImportJson = (e: React.FormEvent) => {
    e.preventDefault()
    if (!importJsonText.trim()) return
    const res = importData(importJsonText)
    if (res.success) {
      showToast(res.message)
      setImportJsonText('')
    } else {
      alert(res.message)
    }
  }

  // Reset to defaults
  const handleResetToDefaults = () => {
    if (window.confirm('Reset all website content back to default factory settings? Your changes will be reverted.')) {
      resetAllData()
      showToast('Reset to default content!')
      setProfileForm(siteData.profile)
    }
  }

  // 1. If not authenticated, render login gate
  if (!isAuthenticated) {
    return (
      <div className="admin-page-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="admin-modal-card" style={{ maxWidth: 450, margin: '2rem auto' }}>
          <div className="admin-modal-header">
            <div className="admin-modal-icon">
              <i className="fas fa-lock" />
            </div>
            <h2>Admin Login</h2>
            <p>Enter your secret passcode to access and edit the website.</p>
          </div>

          <form onSubmit={handleDirectLogin}>
            <div className="admin-input-group">
              <label htmlFor="admin-page-pass">Passcode</label>
              <input
                id="admin-page-pass"
                type="password"
                placeholder="Enter admin passcode"
                value={passcode}
                onChange={e => setPasscode(e.target.value)}
                autoFocus
              />
            </div>

            {loginError && (
              <div className="admin-modal-error">
                <i className="fas fa-exclamation-circle" /> {loginError}
              </div>
            )}

            <div className="admin-modal-actions" style={{ justifyContent: 'space-between' }}>
              <Link to="/" className="admin-btn secondary">
                <i className="fas fa-arrow-left" /> Back to Site
              </Link>
              <button type="submit" className="admin-btn primary">
                Login <i className="fas fa-sign-in-alt" />
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // 2. Full Admin Dashboard
  const filteredProjects = siteData.projects.filter(p => {
    if (projectFilter === 'all') return true
    if (projectFilter === 'featured') return p.featured
    return p.category === projectFilter
  })

  return (
    <div className="admin-page-wrap">
      {/* Toast Alert */}
      {toast && (
        <div className="admin-toast">
          <i className="fas fa-check-circle" style={{ color: '#10B981' }} />
          <span>{toast}</span>
        </div>
      )}

      {/* Admin Top Header */}
      <header className="admin-header">
        <div className="admin-header-left">
          <h1>
            Website <span className="gradient-text">Admin Panel</span>
          </h1>
          <p>Edit and update all portfolio content, projects, media, and site information live.</p>
        </div>

        <div className="admin-header-actions">
          <span className="admin-badge-saved">
            <i className="fas fa-cloud-check" /> Auto-saved to Local Storage
          </span>

          <Link to="/" className="admin-btn secondary sm">
            <i className="fas fa-eye" /> View Live Site
          </Link>

          <button onClick={logout} className="admin-btn danger sm">
            <i className="fas fa-lock" /> Lock &amp; Logout
          </button>
        </div>
      </header>

      {/* Stats Overview Strip */}
      <div className="admin-stats-strip">
        <div className="admin-stat-card">
          <div className="admin-stat-num">{siteData.projects.length}</div>
          <div className="admin-stat-name">Projects</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">{siteData.media.audioTracks.length}</div>
          <div className="admin-stat-name">Audio Tracks</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">{siteData.media.youtubeVideos.length}</div>
          <div className="admin-stat-name">Videos</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">{siteData.testimonials.length}</div>
          <div className="admin-stat-name">Testimonials</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">{siteData.clients.length}</div>
          <div className="admin-stat-name">Managed Clients</div>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <nav className="admin-tabs" aria-label="Admin Navigation Tabs">
        <button
          className={`admin-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <i className="fas fa-user-edit" /> Profile &amp; Bio
        </button>
        <button
          className={`admin-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <i className="fas fa-laptop-code" /> Projects ({siteData.projects.length})
        </button>
        <button
          className={`admin-tab-btn ${activeTab === 'media' ? 'active' : ''}`}
          onClick={() => setActiveTab('media')}
        >
          <i className="fas fa-music" /> Media &amp; Audio
        </button>
        <button
          className={`admin-tab-btn ${activeTab === 'testimonials' ? 'active' : ''}`}
          onClick={() => setActiveTab('testimonials')}
        >
          <i className="fas fa-comment-dots" /> Testimonials &amp; Roadmap
        </button>
        <button
          className={`admin-tab-btn ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          <i className="fas fa-briefcase" /> Services &amp; Clients
        </button>
        <button
          className={`admin-tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <i className="fas fa-cog" /> Settings &amp; Backup
        </button>
      </nav>

      {/* ================= TAB 1: PROFILE & BIO ================= */}
      {activeTab === 'profile' && (
        <form onSubmit={handleSaveProfile} className="admin-panel-card">
          <div className="admin-panel-title">
            <h2><i className="fas fa-user" /> Personal Details &amp; Hero Content</h2>
            <button type="submit" className="admin-btn primary">
              <i className="fas fa-save" /> Save Profile Changes
            </button>
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={profileForm.name}
                onChange={e => setProfileForm({ ...profileForm, name: e.target.value })}
              />
            </div>

            <div className="admin-form-group">
              <label>Tagline / Title</label>
              <input
                type="text"
                value={profileForm.tagline}
                onChange={e => setProfileForm({ ...profileForm, tagline: e.target.value })}
              />
            </div>

            <div className="admin-form-group">
              <label>Availability Badge</label>
              <input
                type="text"
                value={profileForm.availability}
                onChange={e => setProfileForm({ ...profileForm, availability: e.target.value })}
              />
            </div>

            <div className="admin-form-group">
              <label>Avatar / Image URL</label>
              <input
                type="text"
                value={profileForm.avatarUrl}
                onChange={e => setProfileForm({ ...profileForm, avatarUrl: e.target.value })}
              />
            </div>

            <div className="admin-form-group span-full">
              <label>Hero Description (Introduction)</label>
              <textarea
                value={profileForm.bioShort}
                onChange={e => setProfileForm({ ...profileForm, bioShort: e.target.value })}
                rows={3}
              />
            </div>

            <div className="admin-form-group span-full">
              <label>Who I Am (About Bento Section)</label>
              <textarea
                value={profileForm.whoIAm}
                onChange={e => setProfileForm({ ...profileForm, whoIAm: e.target.value })}
                rows={4}
              />
            </div>

            <div className="admin-form-group">
              <label>Years Experience Stat</label>
              <input
                type="text"
                value={profileForm.stats.experience}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    stats: { ...profileForm.stats, experience: e.target.value }
                  })
                }
              />
            </div>

            <div className="admin-form-group">
              <label>Projects Built Stat</label>
              <input
                type="text"
                value={profileForm.stats.projects}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    stats: { ...profileForm.stats, projects: e.target.value }
                  })
                }
              />
            </div>

            <div className="admin-form-group">
              <label>Happy Clients Stat</label>
              <input
                type="text"
                value={profileForm.stats.clients}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    stats: { ...profileForm.stats, clients: e.target.value }
                  })
                }
              />
            </div>

            <div className="admin-form-group">
              <label>Curiosity Stat Symbol</label>
              <input
                type="text"
                value={profileForm.stats.curiosity}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    stats: { ...profileForm.stats, curiosity: e.target.value }
                  })
                }
              />
            </div>

            <div className="admin-form-group span-full">
              <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem' }}>Contact &amp; Social Links</h3>
            </div>

            <div className="admin-form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={profileForm.contact.email}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    contact: { ...profileForm.contact, email: e.target.value }
                  })
                }
              />
            </div>

            <div className="admin-form-group">
              <label>WhatsApp Number (without +)</label>
              <input
                type="text"
                value={profileForm.contact.whatsapp}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    contact: { ...profileForm.contact, whatsapp: e.target.value }
                  })
                }
              />
            </div>

            <div className="admin-form-group">
              <label>GitHub Profile URL</label>
              <input
                type="text"
                value={profileForm.contact.github}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    contact: { ...profileForm.contact, github: e.target.value }
                  })
                }
              />
            </div>

            <div className="admin-form-group">
              <label>LinkedIn Profile URL</label>
              <input
                type="text"
                value={profileForm.contact.linkedin}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    contact: { ...profileForm.contact, linkedin: e.target.value }
                  })
                }
              />
            </div>

            <div className="admin-form-group">
              <label>Twitter / X URL</label>
              <input
                type="text"
                value={profileForm.contact.twitter}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    contact: { ...profileForm.contact, twitter: e.target.value }
                  })
                }
              />
            </div>

            <div className="admin-form-group">
              <label>Instagram URL</label>
              <input
                type="text"
                value={profileForm.contact.instagram}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    contact: { ...profileForm.contact, instagram: e.target.value }
                  })
                }
              />
            </div>

            <div className="admin-form-group">
              <label>YouTube Channel URL</label>
              <input
                type="text"
                value={profileForm.contact.youtube}
                onChange={e =>
                  setProfileForm({
                    ...profileForm,
                    contact: { ...profileForm.contact, youtube: e.target.value }
                  })
                }
              />
            </div>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" className="admin-btn primary">
              <i className="fas fa-save" /> Save Profile Changes
            </button>
          </div>
        </form>
      )}

      {/* ================= TAB 2: PROJECTS ================= */}
      {activeTab === 'projects' && (
        <div className="admin-panel-card">
          <div className="admin-panel-title">
            <h2><i className="fas fa-project-diagram" /> Manage Portfolio Projects</h2>
            <button onClick={handleStartAddProject} className="admin-btn primary">
              <i className="fas fa-plus" /> Add New Project
            </button>
          </div>

          {/* Edit / Add Modal Form */}
          {editingProjectId && (
            <form
              onSubmit={handleSaveProjectForm}
              style={{
                background: 'var(--bg-tertiary)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid var(--accent-purple)',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-purple)' }}>
                  <i className="fas fa-edit" /> {projectForm.id?.startsWith('project-') ? 'Add Project' : `Edit "${projectForm.title}"`}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingProjectId(null)}
                  className="admin-btn secondary sm"
                >
                  <i className="fas fa-times" /> Close Form
                </button>
              </div>

              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label>Project Title</label>
                  <input
                    type="text"
                    required
                    value={projectForm.title}
                    onChange={e => setProjectForm({ ...projectForm, title: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Category</label>
                  <select
                    value={projectForm.category}
                    onChange={e => setProjectForm({ ...projectForm, category: e.target.value })}
                  >
                    <option value="company">Company</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="ai / music">AI / Music</option>
                    <option value="productivity">Productivity</option>
                    <option value="analytics">Analytics</option>
                    <option value="utility">Utility</option>
                    <option value="news">News</option>
                    <option value="web">Web</option>
                  </select>
                </div>

                <div className="admin-form-group span-full">
                  <label>Description</label>
                  <textarea
                    rows={2}
                    required
                    value={projectForm.description}
                    onChange={e => setProjectForm({ ...projectForm, description: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Cover Image URL</label>
                  <input
                    type="text"
                    value={projectForm.image}
                    onChange={e => setProjectForm({ ...projectForm, image: e.target.value })}
                  />
                  {projectForm.image && (
                    <img
                      src={projectForm.image}
                      alt="Preview"
                      className="admin-img-preview"
                      style={{ marginTop: '0.5rem', width: 120, height: 70 }}
                    />
                  )}
                </div>

                <div className="admin-form-group">
                  <label>Technologies (comma-separated)</label>
                  <input
                    type="text"
                    value={techInput}
                    onChange={e => setTechInput(e.target.value)}
                    placeholder="React, TypeScript, Tailwind"
                  />
                  <span className="hint">e.g. React, TypeScript, Vite, Tailwind CSS</span>
                </div>

                <div className="admin-form-group">
                  <label>Live Demo URL</label>
                  <input
                    type="text"
                    value={projectForm.liveUrl || ''}
                    onChange={e => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                    placeholder="https://..."
                  />
                </div>

                <div className="admin-form-group">
                  <label>GitHub Repository URL</label>
                  <input
                    type="text"
                    value={projectForm.githubUrl || ''}
                    onChange={e => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                    placeholder="https://github.com/..."
                  />
                </div>

                <div className="admin-form-group">
                  <label>Performance Score (%)</label>
                  <input
                    type="number"
                    value={projectForm.metrics?.performanceScore || 95}
                    onChange={e =>
                      setProjectForm({
                        ...projectForm,
                        metrics: { ...projectForm.metrics, performanceScore: Number(e.target.value) }
                      })
                    }
                  />
                </div>

                <div className="admin-form-group">
                  <label>Load Time</label>
                  <input
                    type="text"
                    value={projectForm.metrics?.loadTime || '1.0s'}
                    onChange={e =>
                      setProjectForm({
                        ...projectForm,
                        metrics: { ...projectForm.metrics, loadTime: e.target.value }
                      })
                    }
                    placeholder="0.9s"
                  />
                </div>

                <div className="admin-form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={!!projectForm.featured}
                      onChange={e => setProjectForm({ ...projectForm, featured: e.target.checked })}
                      style={{ width: 'auto' }}
                    />
                    Featured on Home Page
                  </label>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setEditingProjectId(null)}
                  className="admin-btn secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="admin-btn primary">
                  <i className="fas fa-check" /> Save Project
                </button>
              </div>
            </form>
          )}

          {/* Filter Bar */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {['all', 'featured', 'company', 'blockchain', 'ai / music', 'productivity', 'analytics', 'web'].map(cat => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className={`admin-subtab-btn ${projectFilter === cat ? 'active' : ''}`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Project Items List */}
          <div className="admin-items-list">
            {filteredProjects.map(proj => (
              <div key={proj.id} className="admin-item-card">
                <div className="admin-item-header">
                  <div className="admin-item-title">
                    <img src={proj.image} alt={proj.title} className="admin-img-preview" />
                    <div>
                      <div>{proj.title}</div>
                      <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.25rem' }}>
                        <span className="admin-item-badge">{proj.category}</span>
                        {proj.featured && (
                          <span
                            className="admin-item-badge"
                            style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B', borderColor: 'rgba(245, 158, 11, 0.4)' }}
                          >
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="admin-item-actions">
                    <button
                      onClick={() => handleEditProject(proj)}
                      className="admin-btn secondary sm"
                    >
                      <i className="fas fa-pencil-alt" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProject(proj.id, proj.title)}
                      className="admin-btn danger sm"
                    >
                      <i className="fas fa-trash" /> Delete
                    </button>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{proj.description}</p>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {proj.technologies?.map(t => (
                    <span
                      key={t}
                      style={{
                        background: 'var(--bg-tertiary)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: 4,
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 3: MEDIA & AUDIO ================= */}
      {activeTab === 'media' && (
        <div className="admin-panel-card">
          <div className="admin-panel-title">
            <h2><i className="fas fa-play-circle" /> Media, Music &amp; Social Feeds</h2>
          </div>

          <div className="admin-subtabs">
            <button
              className={`admin-subtab-btn ${mediaSubTab === 'audio' ? 'active' : ''}`}
              onClick={() => setMediaSubTab('audio')}
            >
              <i className="fas fa-headphones" /> Audio Tracks ({siteData.media.audioTracks.length})
            </button>
            <button
              className={`admin-subtab-btn ${mediaSubTab === 'videos' ? 'active' : ''}`}
              onClick={() => setMediaSubTab('videos')}
            >
              <i className="fas fa-video" /> YouTube Videos ({siteData.media.youtubeVideos.length})
            </button>
            <button
              className={`admin-subtab-btn ${mediaSubTab === 'playlists' ? 'active' : ''}`}
              onClick={() => setMediaSubTab('playlists')}
            >
              <i className="fas fa-list" /> Playlists ({siteData.media.youtubePlaylists.length})
            </button>
            <button
              className={`admin-subtab-btn ${mediaSubTab === 'social' ? 'active' : ''}`}
              onClick={() => setMediaSubTab('social')}
            >
              <i className="fas fa-share-alt" /> Social Posts ({siteData.media.socialPosts.length})
            </button>
            <button
              className={`admin-subtab-btn ${mediaSubTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setMediaSubTab('gallery')}
            >
              <i className="fas fa-images" /> Gallery ({siteData.gallery.length})
            </button>
          </div>

          {/* Subtab 1: Audio Tracks */}
          {mediaSubTab === 'audio' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)' }}>Manage original music audio files played in the music players.</p>
                <button onClick={handleAddAudioTrack} className="admin-btn primary sm">
                  <i className="fas fa-plus" /> Add Audio Track
                </button>
              </div>

              <div className="admin-items-list">
                {siteData.media.audioTracks.map((track, idx) => (
                  <div key={idx} className="admin-item-card">
                    <div className="admin-form-grid">
                      <div className="admin-form-group">
                        <label>Track Title</label>
                        <input
                          type="text"
                          value={track.title}
                          onChange={e => handleAudioChange(idx, 'title', e.target.value)}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label>Artist</label>
                        <input
                          type="text"
                          value={track.artist}
                          onChange={e => handleAudioChange(idx, 'artist', e.target.value)}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label>Audio File URL (local or CDN)</label>
                        <input
                          type="text"
                          value={track.url}
                          onChange={e => handleAudioChange(idx, 'url', e.target.value)}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label>Duration (seconds)</label>
                        <input
                          type="number"
                          value={track.duration}
                          onChange={e => handleAudioChange(idx, 'duration', Number(e.target.value))}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => handleDeleteAudioTrack(idx)}
                        className="admin-btn danger sm"
                      >
                        <i className="fas fa-trash" /> Remove Track
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtab 2: YouTube Videos */}
          {mediaSubTab === 'videos' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)' }}>Manage YouTube videos embedded across the portfolio.</p>
                <button onClick={handleAddVideo} className="admin-btn primary sm">
                  <i className="fas fa-plus" /> Add YouTube Video
                </button>
              </div>

              <div className="admin-items-list">
                {siteData.media.youtubeVideos.map((vid, idx) => (
                  <div key={idx} className="admin-item-card">
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <img
                        src={`https://img.youtube.com/vi/${vid.videoId}/hqdefault.jpg`}
                        alt={vid.title}
                        className="admin-img-preview"
                        style={{ width: 110, height: 70 }}
                        onError={e => {
                          ;(e.target as HTMLElement).style.display = 'none'
                        }}
                      />
                      <div style={{ flex: 1 }} className="admin-form-grid">
                        <div className="admin-form-group">
                          <label>Video Title</label>
                          <input
                            type="text"
                            value={vid.title}
                            onChange={e => handleVideoChange(idx, 'title', e.target.value)}
                          />
                        </div>
                        <div className="admin-form-group">
                          <label>YouTube Video ID</label>
                          <input
                            type="text"
                            value={vid.videoId}
                            onChange={e => handleVideoChange(idx, 'videoId', e.target.value)}
                            placeholder="e.g. 5wJcUS1WUCY"
                          />
                        </div>
                        <div className="admin-form-group span-full">
                          <label>Description</label>
                          <input
                            type="text"
                            value={vid.description}
                            onChange={e => handleVideoChange(idx, 'description', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => handleDeleteVideo(idx)}
                        className="admin-btn danger sm"
                      >
                        <i className="fas fa-trash" /> Delete Video
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtab 3: YouTube Playlists */}
          {mediaSubTab === 'playlists' && (
            <div>
              <div className="admin-items-list">
                {siteData.media.youtubePlaylists.map((pl, idx) => (
                  <div key={idx} className="admin-item-card">
                    <div className="admin-form-grid">
                      <div className="admin-form-group">
                        <label>Playlist Title</label>
                        <input
                          type="text"
                          value={pl.title}
                          onChange={e => {
                            const updated = [...siteData.media.youtubePlaylists]
                            updated[idx] = { ...updated[idx], title: e.target.value }
                            updateYouTubePlaylists(updated)
                          }}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label>Playlist ID</label>
                        <input
                          type="text"
                          value={pl.playlistId}
                          onChange={e => {
                            const updated = [...siteData.media.youtubePlaylists]
                            updated[idx] = { ...updated[idx], playlistId: e.target.value }
                            updateYouTubePlaylists(updated)
                          }}
                        />
                      </div>
                      <div className="admin-form-group span-full">
                        <label>Description</label>
                        <input
                          type="text"
                          value={pl.description}
                          onChange={e => {
                            const updated = [...siteData.media.youtubePlaylists]
                            updated[idx] = { ...updated[idx], description: e.target.value }
                            updateYouTubePlaylists(updated)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtab 4: Social Posts */}
          {mediaSubTab === 'social' && (
            <div>
              <div className="admin-items-list">
                {siteData.media.socialPosts.map((post, idx) => (
                  <div key={idx} className="admin-item-card">
                    <div className="admin-form-grid">
                      <div className="admin-form-group">
                        <label>Platform</label>
                        <select
                          value={post.platform}
                          onChange={e => {
                            const updated = [...siteData.media.socialPosts]
                            updated[idx] = { ...updated[idx], platform: e.target.value as any }
                            updateSocialPosts(updated)
                          }}
                        >
                          <option value="instagram">Instagram</option>
                          <option value="twitter">Twitter / X</option>
                          <option value="linkedin">LinkedIn</option>
                        </select>
                      </div>
                      <div className="admin-form-group">
                        <label>Post URL</label>
                        <input
                          type="text"
                          value={post.url}
                          onChange={e => {
                            const updated = [...siteData.media.socialPosts]
                            updated[idx] = { ...updated[idx], url: e.target.value }
                            updateSocialPosts(updated)
                          }}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label>Image URL</label>
                        <input
                          type="text"
                          value={post.image}
                          onChange={e => {
                            const updated = [...siteData.media.socialPosts]
                            updated[idx] = { ...updated[idx], image: e.target.value }
                            updateSocialPosts(updated)
                          }}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label>Likes Count</label>
                        <input
                          type="number"
                          value={post.likes}
                          onChange={e => {
                            const updated = [...siteData.media.socialPosts]
                            updated[idx] = { ...updated[idx], likes: Number(e.target.value) }
                            updateSocialPosts(updated)
                          }}
                        />
                      </div>
                      <div className="admin-form-group span-full">
                        <label>Caption</label>
                        <textarea
                          rows={2}
                          value={post.caption}
                          onChange={e => {
                            const updated = [...siteData.media.socialPosts]
                            updated[idx] = { ...updated[idx], caption: e.target.value }
                            updateSocialPosts(updated)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subtab 5: Gallery */}
          {mediaSubTab === 'gallery' && (
            <div>
              <div className="admin-items-list">
                {siteData.gallery.map((item, idx) => (
                  <div key={idx} className="admin-item-card">
                    <div className="admin-form-grid">
                      <div className="admin-form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={e => {
                            const updated = [...siteData.gallery]
                            updated[idx] = { ...updated[idx], title: e.target.value }
                            updateGallery(updated)
                          }}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label>Image URL</label>
                        <input
                          type="text"
                          value={item.img}
                          onChange={e => {
                            const updated = [...siteData.gallery]
                            updated[idx] = { ...updated[idx], img: e.target.value }
                            updateGallery(updated)
                          }}
                        />
                      </div>
                      <div className="admin-form-group span-full">
                        <label>Description</label>
                        <input
                          type="text"
                          value={item.desc}
                          onChange={e => {
                            const updated = [...siteData.gallery]
                            updated[idx] = { ...updated[idx], desc: e.target.value }
                            updateGallery(updated)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 4: TESTIMONIALS & ROADMAP ================= */}
      {activeTab === 'testimonials' && (
        <div className="admin-panel-card">
          <div className="admin-panel-title">
            <h2><i className="fas fa-comments" /> Testimonials</h2>
            <button onClick={handleAddTestimonial} className="admin-btn primary sm">
              <i className="fas fa-plus" /> Add Testimonial
            </button>
          </div>

          <div className="admin-items-list" style={{ marginBottom: '3rem' }}>
            {siteData.testimonials.map((t, idx) => (
              <div key={t.id || idx} className="admin-item-card">
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label>Client Name</label>
                    <input
                      type="text"
                      value={t.name}
                      onChange={e => handleTestimonialChange(idx, 'name', e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Role / Company</label>
                    <input
                      type="text"
                      value={t.role}
                      onChange={e => handleTestimonialChange(idx, 'role', e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group span-full">
                    <label>Review / Quote</label>
                    <textarea
                      rows={2}
                      value={t.text}
                      onChange={e => handleTestimonialChange(idx, 'text', e.target.value)}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => handleDeleteTestimonial(idx)} className="admin-btn danger sm">
                    <i className="fas fa-trash" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-panel-title">
            <h2><i className="fas fa-hammer" /> What I'm Building (Roadmap)</h2>
            <button onClick={handleAddBuilding} className="admin-btn primary sm">
              <i className="fas fa-plus" /> Add In-Progress Project
            </button>
          </div>

          <div className="admin-items-list">
            {siteData.building.map((b, idx) => (
              <div key={b.id || idx} className="admin-item-card">
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      value={b.title}
                      onChange={e => handleBuildingChange(idx, 'title', e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Status</label>
                    <select
                      value={b.status}
                      onChange={e => handleBuildingChange(idx, 'status', e.target.value)}
                    >
                      <option value="In Progress">In Progress</option>
                      <option value="Planning">Planning</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className="admin-form-group">
                    <label>Progress Percentage: {b.progress}%</label>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={b.progress}
                      onChange={e => handleBuildingChange(idx, 'progress', Number(e.target.value))}
                    />
                  </div>
                  <div className="admin-form-group span-full">
                    <label>Description</label>
                    <input
                      type="text"
                      value={b.desc}
                      onChange={e => handleBuildingChange(idx, 'desc', e.target.value)}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => handleDeleteBuilding(idx)} className="admin-btn danger sm">
                    <i className="fas fa-trash" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 5: SERVICES & CLIENTS ================= */}
      {activeTab === 'services' && (
        <div className="admin-panel-card">
          <div className="admin-panel-title">
            <h2><i className="fas fa-users-cog" /> Managed Clients &amp; Brands</h2>
          </div>

          <div className="admin-items-list" style={{ marginBottom: '3rem' }}>
            {siteData.clients.map((c, idx) => (
              <div key={c.id || idx} className="admin-item-card">
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label>Client / Brand Name</label>
                    <input
                      type="text"
                      value={c.name}
                      onChange={e => {
                        const updated = [...siteData.clients]
                        updated[idx] = { ...updated[idx], name: e.target.value }
                        updateClients(updated)
                      }}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Handle</label>
                    <input
                      type="text"
                      value={c.handle}
                      onChange={e => {
                        const updated = [...siteData.clients]
                        updated[idx] = { ...updated[idx], handle: e.target.value }
                        updateClients(updated)
                      }}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Tag / Niche</label>
                    <input
                      type="text"
                      value={c.tag}
                      onChange={e => {
                        const updated = [...siteData.clients]
                        updated[idx] = { ...updated[idx], tag: e.target.value }
                        updateClients(updated)
                      }}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Platform</label>
                    <select
                      value={c.platform}
                      onChange={e => {
                        const updated = [...siteData.clients]
                        updated[idx] = { ...updated[idx], platform: e.target.value as any }
                        updateClients(updated)
                      }}
                    >
                      <option value="instagram">Instagram</option>
                      <option value="twitter">Twitter / X</option>
                      <option value="linkedin">LinkedIn</option>
                    </select>
                  </div>
                  <div className="admin-form-group">
                    <label>Profile URL</label>
                    <input
                      type="text"
                      value={c.url}
                      onChange={e => {
                        const updated = [...siteData.clients]
                        updated[idx] = { ...updated[idx], url: e.target.value }
                        updateClients(updated)
                      }}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Avatar URL</label>
                    <input
                      type="text"
                      value={c.avatar}
                      onChange={e => {
                        const updated = [...siteData.clients]
                        updated[idx] = { ...updated[idx], avatar: e.target.value }
                        updateClients(updated)
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-panel-title">
            <h2><i className="fas fa-chart-line" /> Digital Marketing Metrics</h2>
          </div>

          <div className="admin-form-grid" style={{ marginBottom: '3rem' }}>
            {siteData.digitalStats.map((s, idx) => (
              <div key={idx} className="admin-form-group">
                <label>{s.label}</label>
                <input
                  type="text"
                  value={s.num}
                  onChange={e => {
                    const updated = [...siteData.digitalStats]
                    updated[idx] = { ...updated[idx], num: e.target.value }
                    updateDigitalStats(updated)
                  }}
                />
              </div>
            ))}
          </div>

          <div className="admin-panel-title">
            <h2><i className="fas fa-code-branch" /> Technical Expertise Cards</h2>
          </div>

          <div className="admin-items-list">
            {siteData.expertise.map((exp, idx) => (
              <div key={exp.id || idx} className="admin-item-card">
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      value={exp.title}
                      onChange={e => {
                        const updated = [...siteData.expertise]
                        updated[idx] = { ...updated[idx], title: e.target.value }
                        updateExpertise(updated)
                      }}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>FontAwesome Icon Class</label>
                    <input
                      type="text"
                      value={exp.icon}
                      onChange={e => {
                        const updated = [...siteData.expertise]
                        updated[idx] = { ...updated[idx], icon: e.target.value }
                        updateExpertise(updated)
                      }}
                      placeholder="fa-code"
                    />
                  </div>
                  <div className="admin-form-group span-full">
                    <label>Description</label>
                    <input
                      type="text"
                      value={exp.desc}
                      onChange={e => {
                        const updated = [...siteData.expertise]
                        updated[idx] = { ...updated[idx], desc: e.target.value }
                        updateExpertise(updated)
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 6: SETTINGS & BACKUP ================= */}
      {activeTab === 'settings' && (
        <div className="admin-panel-card">
          <div className="admin-panel-title">
            <h2><i className="fas fa-key" /> Change Admin Passcode</h2>
          </div>

          <form onSubmit={handleChangePasswordSubmit} style={{ maxWidth: 450, marginBottom: '3rem' }}>
            <div className="admin-input-group">
              <label>Current Passcode</label>
              <input
                type="password"
                required
                value={oldPw}
                onChange={e => setOldPw(e.target.value)}
                placeholder="Enter current passcode"
              />
            </div>
            <div className="admin-input-group">
              <label>New Passcode (min 4 characters)</label>
              <input
                type="password"
                required
                value={newPw}
                onChange={e => setNewPw(e.target.value)}
                placeholder="New passcode"
              />
            </div>

            {pwMsg && (
              <div style={{ color: pwMsg.isError ? '#EF4444' : '#10B981', marginBottom: '1rem', fontSize: '0.9rem' }}>
                {pwMsg.text}
              </div>
            )}

            <button type="submit" className="admin-btn primary">
              <i className="fas fa-check" /> Update Passcode
            </button>
          </form>

          <div className="admin-panel-title">
            <h2><i className="fas fa-download" /> Backup &amp; Restore Website Data</h2>
          </div>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Download a full JSON backup of all your edits so you can keep a copy on your computer or transfer it anytime.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button onClick={handleDownloadBackup} className="admin-btn primary">
              <i className="fas fa-file-download" /> Download Backup (.json)
            </button>

            <button onClick={handleResetToDefaults} className="admin-btn danger">
              <i className="fas fa-history" /> Reset to Original Defaults
            </button>
          </div>

          <div className="admin-panel-title">
            <h2><i className="fas fa-file-import" /> Restore From Backup (JSON)</h2>
          </div>

          <form onSubmit={handleImportJson}>
            <div className="admin-form-group span-full" style={{ marginBottom: '1rem' }}>
              <label>Paste JSON Backup Content Below</label>
              <textarea
                rows={5}
                placeholder="Paste JSON content here..."
                value={importJsonText}
                onChange={e => setImportJsonText(e.target.value)}
              />
            </div>
            <button type="submit" className="admin-btn secondary">
              <i className="fas fa-upload" /> Restore Data from JSON
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
