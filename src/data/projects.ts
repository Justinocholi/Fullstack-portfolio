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
  metrics?: {
    performanceScore?: number
    loadTime?: string
    users?: string
    extra?: string
  }
}

export const projects: Project[] = [
  {
    id: 'delverse-tech',
    title: 'Delverse Technologies',
    description: 'Official company website for Delverse Technologies — delivering cutting-edge digital solutions, web development, and creative services to clients worldwide.',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80',
    liveUrl: 'https://www.delversetech.com/',
    featured: true,
    highlight: true,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'company',
    metrics: {
      performanceScore: 98,
      loadTime: '0.9s'
    }
  },
  {
    id: 'blockchain-voting-platform',
    title: 'Blockchain Voting Platform',
    description: 'Decentralized voting platform leveraging blockchain technology for transparent, tamper-proof elections with real-time result tracking and voter verification.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    liveUrl: 'https://blockchain-voting-platform.vercel.app/',
    githubUrl: 'https://github.com/Justinocholi/Blockchain-voting-platform',
    featured: true,
    technologies: ['React', 'TypeScript', 'Blockchain', 'Smart Contracts', 'Web3'],
    category: 'blockchain',
    metrics: {
      performanceScore: 95,
      loadTime: '1.0s',
      extra: 'Tamper-proof'
    }
  },
  {
    id: 'ai-vocal-studio',
    title: 'AI Vocal Studio',
    description: 'AI-powered vocal production studio for recording, enhancing, and transforming vocals with intelligent audio processing — blending my music and engineering worlds.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    liveUrl: 'https://ai-vocal-studio-kappa.vercel.app/',
    githubUrl: 'https://github.com/Justinocholi/AI-Vocal-Studio',
    featured: true,
    technologies: ['React', 'TypeScript', 'AI', 'Web Audio API', 'Vercel'],
    category: 'ai / music',
    metrics: {
      performanceScore: 94,
      loadTime: '1.1s',
      extra: 'AI-powered'
    }
  },
  {
    id: 'taskflow-nova',
    title: 'TaskFlow Nova',
    description: 'Modern task management app with drag-and-drop interface, real-time collaboration, and AI-powered task suggestions.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    liveUrl: 'https://taskflow-nova.vercel.app/',
    githubUrl: 'https://github.com/justinocholi/taskflow-nova',
    featured: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    category: 'productivity',
    metrics: {
      performanceScore: 95,
      loadTime: '1.2s',
      users: '500+'
    }
  },
  {
    id: 'insightly-analytics',
    title: 'Insightly Analytics Nova',
    description: 'Comprehensive analytics platform with real-time data visualization, predictive analytics, and customizable dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    liveUrl: 'https://insightly-analytics-nova.vercel.app/',
    githubUrl: 'https://github.com/justinocholi/insightly-analytics',
    featured: true,
    technologies: ['React', 'TypeScript', 'D3.js', 'Recharts', 'PostgreSQL'],
    category: 'analytics',
    metrics: {
      performanceScore: 93,
      loadTime: '1.5s',
      extra: '10M+ data points'
    }
  },
  {
    id: 'weather-app-nova',
    title: 'Weather App Nova',
    description: 'Beautiful weather forecast app with real-time updates, multi-location support, and smooth animations.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    liveUrl: 'https://weather-app-nova-puce.vercel.app/',
    githubUrl: 'https://github.com/justinocholi/weather-app-nova',
    featured: false,
    technologies: ['React', 'TypeScript', 'Framer Motion', 'OpenWeatherMap API'],
    category: 'utility',
    metrics: {
      performanceScore: 96,
      loadTime: '0.8s'
    }
  },
  {
    id: 'nova-news-app',
    title: 'Nova News App',
    description: 'News aggregation app with smart categorization, personalized feed, and offline reading from 50+ sources.',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80',
    liveUrl: 'https://nova-newsapp-gamma.vercel.app/',
    githubUrl: 'https://github.com/justinocholi/nova-newsapp',
    featured: false,
    technologies: ['React', 'TypeScript', 'NewsAPI', 'Service Workers'],
    category: 'news',
    metrics: {
      performanceScore: 94,
      loadTime: '1.1s',
      extra: '50+ sources'
    }
  },
  {
    id: 'meca-platform',
    title: 'MECA Platform',
    description: 'Community platform prototype with authentication, profiles, and content feeds built with component-driven architecture.',
    image: '/meca.jpg',
    featured: false,
    technologies: ['React', 'CSS', 'SPA'],
    category: 'web'
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'Modern portfolio site showcasing development, artistry, and social media work with responsive design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    liveUrl: '/',
    featured: false,
    technologies: ['React', 'Router', 'Framer Motion'],
    category: 'web'
  }
]
