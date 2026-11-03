import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'thriftlink',
    title: 'ThriftLink',
    slug: 'thriftlink',
    category: 'Product',
    role: 'Founder & Lead Engineer',
    year: '2025',
    status: 'Live',
    featured: true,
    highlight: true,
    liveUrl: 'https://www.thriftlink.com.ng',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&q=80',
    description:
      'A platform connecting thrift vendors with people looking to discover and connect with them.',
    summary:
      'A platform connecting thrift vendors with people looking to discover and connect with them.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    challenge:
      'Thrift vendors on social platforms struggle with visibility, fragmented messaging, and unverified customer inquiries.',
    solution:
      'Built a centralized discovery platform tailored for thrift vendors, with clear category browsing and direct connection flows.',
    architecture:
      'Component-driven frontend using React and TypeScript, structured for fast mobile catalog browsing.'
  },
  {
    id: 'delverse-tech',
    title: 'Delverse Technologies',
    slug: 'delverse-tech',
    category: 'Engineering',
    role: 'Lead Frontend Developer',
    year: '2025',
    status: 'Live',
    featured: true,
    highlight: true,
    liveUrl: 'https://www.delversetech.com/',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80',
    description:
      'Official web presence for Delverse Technologies Limited, designed for high-performance presentation of software engineering and digital services.',
    summary:
      'Official web presence for Delverse Technologies Limited, designed for high-performance presentation of software engineering and digital services.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    challenge:
      'Creating a modern, responsive identity interface that conveys engineering rigor and international credibility.',
    solution:
      'Engineered a fast, accessible web interface with clean typography, modular layout components, and optimized asset delivery.'
  },
  {
    id: 'blockchain-voting-platform',
    title: 'Blockchain Voting Platform',
    slug: 'blockchain-voting-platform',
    category: 'Web3 & Security',
    role: 'Software Engineer',
    year: '2024',
    status: 'Live Demo',
    featured: true,
    liveUrl: 'https://blockchain-voting-platform.vercel.app/',
    githubUrl: 'https://github.com/Justinocholi/Blockchain-voting-platform',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
    description:
      'Decentralized voting platform leveraging blockchain architecture for transparent, tamper-proof ballot verification and live tallying.',
    summary:
      'Decentralized voting platform leveraging blockchain architecture for transparent, tamper-proof ballot verification.',
    technologies: ['React', 'TypeScript', 'Smart Contracts', 'Web3'],
    challenge:
      'Ensuring immutable, verifiable voter interaction while keeping the frontend interface intuitive for non-technical participants.',
    solution:
      'Designed an accessible state-driven voting workflow with cryptographic transaction status feedback.'
  },
  {
    id: 'ai-vocal-studio',
    title: 'AI Vocal Studio',
    slug: 'ai-vocal-studio',
    category: 'Audio Engineering',
    role: 'Frontend & Audio Engineer',
    year: '2024',
    status: 'Live Demo',
    featured: true,
    liveUrl: 'https://ai-vocal-studio-kappa.vercel.app/',
    githubUrl: 'https://github.com/Justinocholi/AI-Vocal-Studio',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80',
    description:
      'Browser-based audio processing interface combining Web Audio API with intelligent vocal enhancement controls.',
    summary:
      'Browser-based audio processing interface combining Web Audio API with intelligent vocal enhancement controls.',
    technologies: ['React', 'TypeScript', 'Web Audio API', 'Vercel'],
    challenge:
      'Managing real-time audio buffer nodes and responsive DSP visualization without blocking the UI thread.',
    solution:
      'Structured audio pipeline operations efficiently with Web Audio API nodes and decoupled reactive state updates.'
  },
  {
    id: 'taskflow-nova',
    title: 'TaskFlow Nova',
    slug: 'taskflow-nova',
    category: 'Productivity',
    role: 'Frontend Developer',
    year: '2024',
    status: 'Live Demo',
    featured: false,
    liveUrl: 'https://taskflow-nova.vercel.app/',
    githubUrl: 'https://github.com/justinocholi/taskflow-nova',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80',
    description:
      'Task management application featuring optimistic UI updates, drag-and-drop organization, and clean workspace state management.',
    summary:
      'Task management application featuring optimistic UI updates, drag-and-drop organization, and clean workspace state management.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase']
  },
  {
    id: 'insightly-analytics',
    title: 'Insightly Analytics Nova',
    slug: 'insightly-analytics',
    category: 'Data Visualization',
    role: 'Frontend Developer',
    year: '2024',
    status: 'Live Demo',
    featured: false,
    liveUrl: 'https://insightly-analytics-nova.vercel.app/',
    githubUrl: 'https://github.com/justinocholi/insightly-analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    description:
      'Analytics dashboard with customizable data visualizations, time-range filtering, and responsive metric cards.',
    summary:
      'Analytics dashboard with customizable data visualizations and responsive metric cards.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Recharts']
  },
  {
    id: 'nova-news-app',
    title: 'Nova News App',
    slug: 'nova-news-app',
    category: 'News & Media',
    role: 'Frontend Developer',
    year: '2024',
    status: 'Live Demo',
    featured: false,
    liveUrl: 'https://nova-newsapp-gamma.vercel.app/',
    githubUrl: 'https://github.com/justinocholi/nova-newsapp',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&q=80',
    description:
      'News aggregation application featuring category filtering, offline service worker caching, and an uncluttered reading experience.',
    summary:
      'News aggregation application featuring category filtering and offline service worker caching.',
    technologies: ['React', 'TypeScript', 'Service Workers']
  }
]
