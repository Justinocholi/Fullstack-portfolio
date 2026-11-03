export interface Project {
  id: string
  title: string
  slug: string
  description: string
  summary?: string
  image?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  highlight?: boolean
  technologies: string[]
  category: string
  role?: string
  year?: string
  challenge?: string
  solution?: string
  architecture?: string
  status?: string
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  technologies: string[]
  current?: boolean
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  field: string
  year: string
  location?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface ProfileData {
  name: string
  role: string
  tagline: string
  location: string
  availability: string
  bioShort: string
  whoIAm: string
  avatarUrl: string
  skills: {
    frontend: string[]
    backend: string[]
    database: string[]
    other: string[]
  }
  education: EducationItem
  contact: {
    email: string
    whatsapp: string
    github: string
    linkedin: string
    twitter: string
    instagram: string
    youtube: string
  }
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  deliverables: string[]
}

export interface NowData {
  updatedAt: string
  currentFocus: string[]
  readingOrExploring: string[]
  location: string
  status: string
}

export interface NavItem {
  label: string
  path: string
}

export interface AudioTrack {
  title: string
  artist: string
  url: string
  duration: number
}

export interface YouTubeVideo {
  title: string
  videoId: string
  description: string
}

export interface YouTubePlaylist {
  title: string
  playlistId: string
  videoId: string
  description: string
}

export interface SocialPost {
  platform: 'instagram' | 'linkedin' | 'twitter'
  postId: string
  caption: string
  image: string
  likes: number
  comments: number
  url: string
}

export interface MediaData {
  youtubeVideos: YouTubeVideo[]
  youtubePlaylists: YouTubePlaylist[]
  audioTracks: AudioTrack[]
  socialPosts: SocialPost[]
}
