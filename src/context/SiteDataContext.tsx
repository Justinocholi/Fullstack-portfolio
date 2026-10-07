import React, { createContext, useContext, useState, useEffect } from 'react'
import type {
  SiteData,
  ProfileData,
  Project,
  MediaData,
  AudioTrack,
  YouTubeVideo,
  YouTubePlaylist,
  SocialPost,
  TestimonialItem,
  BuildingItem,
  ExpertiseItem,
  DigitalStatItem,
  DigitalServiceItem,
  ClientItem,
  GalleryItem
} from '../data/types'
import { defaultSiteData } from '../data/defaultSiteData'

const SITE_DATA_STORAGE_KEY = 'portfolio_site_data_v2'

interface SiteDataContextType {
  siteData: SiteData
  updateProfile: (profile: Partial<ProfileData>) => void
  updateProjects: (projects: Project[]) => void
  saveProject: (project: Project) => void
  deleteProject: (id: string) => void
  updateMedia: (media: Partial<MediaData>) => void
  updateAudioTracks: (tracks: AudioTrack[]) => void
  updateYouTubeVideos: (videos: YouTubeVideo[]) => void
  updateYouTubePlaylists: (playlists: YouTubePlaylist[]) => void
  updateSocialPosts: (posts: SocialPost[]) => void
  updateTestimonials: (testimonials: TestimonialItem[]) => void
  updateBuilding: (building: BuildingItem[]) => void
  updateExpertise: (expertise: ExpertiseItem[]) => void
  updateDigitalStats: (stats: DigitalStatItem[]) => void
  updateDigitalServices: (services: DigitalServiceItem[]) => void
  updateClients: (clients: ClientItem[]) => void
  updateGallery: (gallery: GalleryItem[]) => void
  resetAllData: () => void
  importData: (jsonString: string) => { success: boolean; message: string }
  exportData: () => string
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined)

export const SiteDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteData>(() => {
    try {
      const stored = localStorage.getItem(SITE_DATA_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        // Merge with defaults to ensure all fields exist
        return {
          ...defaultSiteData,
          ...parsed,
          profile: { ...defaultSiteData.profile, ...(parsed.profile || {}) },
          media: { ...defaultSiteData.media, ...(parsed.media || {}) }
        }
      }
    } catch (e) {
      console.error('Error loading stored site data', e)
    }
    return defaultSiteData
  })

  // Persist to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(SITE_DATA_STORAGE_KEY, JSON.stringify(siteData))
    } catch (e) {
      console.error('Failed to save site data to localStorage', e)
    }
  }, [siteData])

  const updateProfile = (profileUpdate: Partial<ProfileData>) => {
    setSiteData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        ...profileUpdate,
        stats: {
          ...prev.profile.stats,
          ...(profileUpdate.stats || {})
        },
        contact: {
          ...prev.profile.contact,
          ...(profileUpdate.contact || {})
        }
      }
    }))
  }

  const updateProjects = (projects: Project[]) => {
    setSiteData(prev => ({ ...prev, projects }))
  }

  const saveProject = (project: Project) => {
    setSiteData(prev => {
      const exists = prev.projects.some(p => p.id === project.id)
      if (exists) {
        return {
          ...prev,
          projects: prev.projects.map(p => (p.id === project.id ? project : p))
        }
      } else {
        return {
          ...prev,
          projects: [project, ...prev.projects]
        }
      }
    })
  }

  const deleteProject = (id: string) => {
    setSiteData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }))
  }

  const updateMedia = (mediaUpdate: Partial<MediaData>) => {
    setSiteData(prev => ({
      ...prev,
      media: {
        ...prev.media,
        ...mediaUpdate
      }
    }))
  }

  const updateAudioTracks = (audioTracks: AudioTrack[]) => {
    setSiteData(prev => ({
      ...prev,
      media: { ...prev.media, audioTracks }
    }))
  }

  const updateYouTubeVideos = (youtubeVideos: YouTubeVideo[]) => {
    setSiteData(prev => ({
      ...prev,
      media: { ...prev.media, youtubeVideos }
    }))
  }

  const updateYouTubePlaylists = (youtubePlaylists: YouTubePlaylist[]) => {
    setSiteData(prev => ({
      ...prev,
      media: { ...prev.media, youtubePlaylists }
    }))
  }

  const updateSocialPosts = (socialPosts: SocialPost[]) => {
    setSiteData(prev => ({
      ...prev,
      media: { ...prev.media, socialPosts }
    }))
  }

  const updateTestimonials = (testimonials: TestimonialItem[]) => {
    setSiteData(prev => ({ ...prev, testimonials }))
  }

  const updateBuilding = (building: BuildingItem[]) => {
    setSiteData(prev => ({ ...prev, building }))
  }

  const updateExpertise = (expertise: ExpertiseItem[]) => {
    setSiteData(prev => ({ ...prev, expertise }))
  }

  const updateDigitalStats = (digitalStats: DigitalStatItem[]) => {
    setSiteData(prev => ({ ...prev, digitalStats }))
  }

  const updateDigitalServices = (digitalServices: DigitalServiceItem[]) => {
    setSiteData(prev => ({ ...prev, digitalServices }))
  }

  const updateClients = (clients: ClientItem[]) => {
    setSiteData(prev => ({ ...prev, clients }))
  }

  const updateGallery = (gallery: GalleryItem[]) => {
    setSiteData(prev => ({ ...prev, gallery }))
  }

  const resetAllData = () => {
    setSiteData(defaultSiteData)
    localStorage.removeItem(SITE_DATA_STORAGE_KEY)
  }

  const importData = (jsonString: string): { success: boolean; message: string } => {
    try {
      const parsed = JSON.parse(jsonString)
      if (!parsed.profile || !parsed.projects) {
        return { success: false, message: 'Invalid data format. Missing required fields.' }
      }
      setSiteData({
        ...defaultSiteData,
        ...parsed
      })
      return { success: true, message: 'Website data restored successfully!' }
    } catch (e: any) {
      return { success: false, message: 'Invalid JSON file: ' + (e.message || 'parse error') }
    }
  }

  const exportData = (): string => {
    return JSON.stringify(siteData, null, 2)
  }

  return (
    <SiteDataContext.Provider
      value={{
        siteData,
        updateProfile,
        updateProjects,
        saveProject,
        deleteProject,
        updateMedia,
        updateAudioTracks,
        updateYouTubeVideos,
        updateYouTubePlaylists,
        updateSocialPosts,
        updateTestimonials,
        updateBuilding,
        updateExpertise,
        updateDigitalStats,
        updateDigitalServices,
        updateClients,
        updateGallery,
        resetAllData,
        importData,
        exportData
      }}
    >
      {children}
    </SiteDataContext.Provider>
  )
}

export const useSiteData = () => {
  const context = useContext(SiteDataContext)
  if (!context) {
    throw new Error('useSiteData must be used within a SiteDataProvider')
  }
  return context
}
