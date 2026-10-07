export interface ProjectMetrics {
  performanceScore?: number
  loadTime?: string
  users?: string
  extra?: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  highlight?: boolean
  technologies: string[]
  category: string
  metrics?: ProjectMetrics
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

export interface ProfileData {
  name: string
  tagline: string
  availability: string
  bioShort: string
  whoIAm: string
  avatarUrl: string
  stats: {
    experience: string
    projects: string
    clients: string
    curiosity: string
  }
  journey: string[]
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

export interface TestimonialItem {
  id: string
  text: string
  name: string
  role: string
  stars?: number
}

export interface BuildingItem {
  id: string
  title: string
  desc: string
  status: string
  statusClass: 'in-progress' | 'planning' | 'completed'
  progress: number
}

export interface ExpertiseItem {
  id: string
  icon: string
  color: string
  title: string
  desc: string
  tags: string[]
}

export interface DigitalStatItem {
  num: string
  label: string
}

export interface DigitalServiceItem {
  id: string
  icon: string
  title: string
  desc: string
  tags: string[]
}

export interface ClientItem {
  id: string
  name: string
  handle: string
  tag: string
  platform: 'instagram' | 'twitter' | 'linkedin'
  url: string
  avatar: string
}

export interface GalleryItem {
  id: string
  title: string
  desc: string
  img: string
}

export interface SiteData {
  profile: ProfileData
  projects: Project[]
  media: MediaData
  testimonials: TestimonialItem[]
  building: BuildingItem[]
  expertise: ExpertiseItem[]
  digitalStats: DigitalStatItem[]
  digitalServices: DigitalServiceItem[]
  clients: ClientItem[]
  gallery: GalleryItem[]
}
