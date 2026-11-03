import type { ExperienceItem, EducationItem } from './types'

export const experience: ExperienceItem[] = [
  {
    id: 'delverse-technologies',
    company: 'Delverse Technologies Limited',
    role: 'Lead Frontend Developer',
    period: 'September 2025 – Present',
    location: 'Abuja, Nigeria',
    description:
      'Leading frontend engineering initiatives across client and internal products. Establishing architecture patterns with React, Next.js, and TypeScript, improving build performance, and ensuring responsive, accessible user interfaces.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    current: true
  },
  {
    id: 'thriftlink',
    company: 'ThriftLink',
    role: 'Founder & Lead Engineer',
    period: '2025 – Present',
    location: 'Abuja, Nigeria',
    description:
      'Designing and developing a platform connecting thrift vendors with discovery-driven buyers. Overseeing end-to-end product architecture, responsive UI components, and vendor interaction flows.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    current: true
  }
]

export const education: EducationItem[] = [
  {
    id: 'fut-minna',
    institution: 'Federal University of Technology, Minna',
    degree: 'B.Tech',
    field: 'Cybersecurity Science',
    year: '2025',
    location: 'Minna, Nigeria'
  }
]
