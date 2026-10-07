import type { SiteData } from './types'
import { projects } from './projects'
import { mediaContent } from './media'

export const defaultSiteData: SiteData = {
  profile: {
    name: 'Joshua Ocholi',
    tagline: 'Frontend Engineer & Creative Developer',
    availability: 'Available for freelance',
    bioShort: 'Building modern digital experiences with performance, motion, and scalable UI systems. From code to creativity — I bring ideas to life across multiple dimensions.',
    whoIAm: 'Started in cybersecurity, transitioned to full-stack development. I build scalable web applications, produce genre-blending music, and drive digital growth through creative strategy. Based in Nigeria, working with clients worldwide.',
    avatarUrl: 'https://avatars.githubusercontent.com/u/74488931?v=4',
    stats: {
      experience: '3+',
      projects: '20+',
      clients: '10+',
      curiosity: '∞'
    },
    journey: [
      'My journey into development started with a foundation in cybersecurity, where I learned to think critically about systems, security, and architecture.',
      'Transitioning into full-stack development, I\'ve honed my skills across the entire stack — from designing beautiful, responsive frontends to architecting scalable backend systems.',
      'Whether it\'s building a complex dashboard, a sleek landing page, or a full-featured web application, I approach every project with attention to detail and a commitment to quality.'
    ],
    contact: {
      email: 'justinocholi001@gmail.com',
      whatsapp: '2348182740612',
      github: 'https://github.com/Justinocholi',
      linkedin: 'https://www.linkedin.com/in/joshua-ocholi2k7/',
      twitter: 'https://x.com/MunchildAbaga',
      instagram: 'https://www.instagram.com/bad.boiabaga.10/',
      youtube: 'https://www.youtube.com/@MunchildAbaga'
    }
  },
  projects: [...projects],
  media: {
    youtubeVideos: [...mediaContent.youtubeVideos],
    youtubePlaylists: [...mediaContent.youtubePlaylists],
    audioTracks: [...mediaContent.audioTracks],
    socialPosts: [...mediaContent.socialPosts]
  },
  testimonials: [
    {
      id: 'test-1',
      text: "Joshua's full-stack expertise transformed our vision into a stunning, functional web application. His attention to detail and creative problem-solving exceeded all expectations.",
      name: 'Tomiwa',
      role: 'Startup Founder',
      stars: 5
    },
    {
      id: 'test-2',
      text: "Working with Joshua on our collaborative track was incredible. His unique sound blends genres seamlessly, and his production quality is absolutely top-tier.",
      name: 'BerryVibez',
      role: 'Artist',
      stars: 5
    },
    {
      id: 'test-3',
      text: "Joshua's digital marketing strategies helped us triple our engagement in just three months. His understanding of both the creative and analytical sides is remarkable.",
      name: 'Blessing',
      role: 'Marketing Director',
      stars: 5
    }
  ],
  building: [
    {
      id: 'b-0',
      title: 'ThriftLink',
      desc: 'A platform where verified WhatsApp vendors can gain traction, build trust, and connect with buyers seamlessly.',
      status: 'In Progress',
      statusClass: 'in-progress',
      progress: 65
    },
    {
      id: 'b-1',
      title: 'AI-Powered News Platform',
      desc: 'Aggregating and personalizing news with AI categorization and offline reading.',
      status: 'In Progress',
      statusClass: 'in-progress',
      progress: 75
    },
    {
      id: 'b-2',
      title: 'Music Visuals System',
      desc: 'Real-time audio visualizations and interactive music experiences for web.',
      status: 'Planning',
      statusClass: 'planning',
      progress: 30
    },
    {
      id: 'b-3',
      title: 'Frontend Component Library',
      desc: 'Reusable, accessible UI components built with React and TypeScript.',
      status: 'In Progress',
      statusClass: 'in-progress',
      progress: 55
    }
  ],
  expertise: [
    {
      id: 'exp-1',
      icon: 'fa-code',
      color: 'purple',
      title: 'Frontend Development',
      desc: 'Building responsive, modern web applications with React, Next.js, and Vite.',
      tags: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 'exp-2',
      icon: 'fa-server',
      color: 'blue',
      title: 'Backend Development',
      desc: 'Creating robust server-side solutions and RESTful APIs.',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase']
    },
    {
      id: 'exp-3',
      icon: 'fa-mobile-alt',
      color: 'cyan',
      title: 'Responsive Design',
      desc: 'Crafting seamless experiences across devices and screen sizes.',
      tags: ['Mobile First', 'PWAs', 'Cross-Browser']
    },
    {
      id: 'exp-4',
      icon: 'fa-cloud',
      color: 'green',
      title: 'Cloud & DevOps',
      desc: 'Deploying and maintaining scalable applications.',
      tags: ['AWS', 'Vercel', 'Docker', 'CI/CD']
    },
    {
      id: 'exp-5',
      icon: 'fa-pencil-ruler',
      color: 'orange',
      title: 'UI/UX Design',
      desc: 'Designing intuitive and beautiful user interfaces.',
      tags: ['Figma', 'Adobe XD', 'Prototyping']
    },
    {
      id: 'exp-6',
      icon: 'fa-tachometer-alt',
      color: 'purple',
      title: 'Performance',
      desc: 'Optimizing applications for speed and efficiency.',
      tags: ['Lighthouse', 'Core Web Vitals', 'SEO']
    }
  ],
  digitalStats: [
    { num: '250%', label: 'Avg. ROI Increase' },
    { num: '500K+', label: 'Leads Generated' },
    { num: '50+', label: 'Campaigns Managed' },
    { num: '95%', label: 'Client Retention' }
  ],
  digitalServices: [
    {
      id: 'ds-1',
      icon: '/chart-line-area.svg',
      title: 'Analytics & Insights',
      desc: 'Transform raw data into actionable insights.',
      tags: ['Google Analytics', 'Conversion Tracking', 'KPI Dashboards']
    },
    {
      id: 'ds-2',
      icon: '/megaphone-1.svg',
      title: 'Campaign Planning',
      desc: 'Design and execute multi-channel marketing campaigns.',
      tags: ['Strategy', 'Multi-Channel', 'A/B Testing']
    },
    {
      id: 'ds-3',
      icon: '/magnifying-glass-tilted-right.svg',
      title: 'SEO & SEM',
      desc: 'Increase visibility and drive qualified traffic.',
      tags: ['Keyword Research', 'On-Page SEO', 'Google Ads']
    },
    {
      id: 'ds-4',
      icon: '/mail-incoming.svg',
      title: 'Email Marketing',
      desc: 'Build relationships through targeted campaigns.',
      tags: ['Automation', 'Segmentation', 'Copywriting']
    },
    {
      id: 'ds-5',
      icon: '/stopwatch.svg',
      title: 'Conversion Optimization',
      desc: 'Maximize ROI at every touchpoint.',
      tags: ['Funnel Analysis', 'Landing Pages', 'CRO']
    },
    {
      id: 'ds-6',
      icon: '/thunderbolt-filled.svg',
      title: 'Growth Strategies',
      desc: 'Develop scalable strategies for sustainable growth.',
      tags: ['Market Analysis', 'Acquisition', 'Retention']
    }
  ],
  clients: [
    {
      id: 'c-1',
      name: 'Haha Hyenas NFT',
      handle: '@hahahyenasnft',
      tag: 'NFT community',
      platform: 'twitter',
      url: 'https://x.com/hahahyenasnft',
      avatar: 'https://unavatar.io/twitter/hahahyenasnft'
    },
    {
      id: 'c-2',
      name: 'The Six Lovitoz',
      handle: '@thesix_lovitoz',
      tag: 'Music collective',
      platform: 'instagram',
      url: 'https://www.instagram.com/thesix_lovitoz',
      avatar: 'https://unavatar.io/instagram/thesix_lovitoz'
    },
    {
      id: 'c-3',
      name: 'Vagz Perfumes',
      handle: '@vagzperfumes',
      tag: 'Beauty & Lifestyle',
      platform: 'instagram',
      url: 'https://www.instagram.com/vagzperfumes',
      avatar: 'https://unavatar.io/instagram/vagzperfumes'
    },
    {
      id: 'c-4',
      name: 'Campus Digest MX',
      handle: '@campusdigestmx',
      tag: 'Education & News',
      platform: 'instagram',
      url: 'https://www.instagram.com/campusdigestmx',
      avatar: 'https://unavatar.io/instagram/campusdigestmx'
    },
    {
      id: 'c-5',
      name: 'Bad Boi Abaga',
      handle: '@bad.boiabaga.10',
      tag: 'Music & Entertainment',
      platform: 'instagram',
      url: 'https://www.instagram.com/bad.boiabaga.10',
      avatar: 'https://unavatar.io/instagram/bad.boiabaga.10'
    },
    {
      id: 'c-6',
      name: 'Munchild Abaga',
      handle: '@munchildabaga',
      tag: 'Content Creator',
      platform: 'twitter',
      url: 'https://x.com/munchildabaga',
      avatar: 'https://unavatar.io/twitter/munchildabaga'
    }
  ],
  gallery: [
    {
      id: 'g-1',
      title: "I'll Be Fine",
      desc: 'A cover concept reflecting resilience.',
      img: "/I'll be fine (1).png"
    },
    {
      id: 'g-2',
      title: 'Do You',
      desc: 'Playful aesthetic with vibrant tones.',
      img: '/do you (2).png'
    },
    {
      id: 'g-3',
      title: 'Farmbarn',
      desc: 'Moments from the Farmbarn build.',
      img: '/cows.jpg'
    }
  ]
}
