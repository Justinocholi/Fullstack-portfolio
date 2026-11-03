import type { ServiceItem } from './types'

export const services: ServiceItem[] = [
  {
    id: 'frontend-architecture',
    title: 'Frontend Engineering & Architecture',
    description:
      'Designing and building scalable, maintainable client-side web applications using React, Next.js, and TypeScript with strict type safety.',
    deliverables: [
      'Production-ready single-page and server-rendered web applications',
      'Clean state management and robust client-side routing',
      'Integration with REST and GraphQL backend services'
    ]
  },
  {
    id: 'product-prototyping',
    title: 'Product Prototyping & MVP Builds',
    description:
      'Transforming product concepts into tangible, functional software products ready for real users and stakeholder validation.',
    deliverables: [
      'Rapid interactive product prototypes',
      'Full-stack MVP development for early-stage products',
      'Responsive, mobile-first implementations'
    ]
  },
  {
    id: 'design-systems',
    title: 'Design Systems & UI Engineering',
    description:
      'Translating design tokens into reusable, accessible component libraries that empower consistent product experiences.',
    deliverables: [
      'Accessible, token-driven component architecture',
      'Themeable systems (dark/light mode)',
      'Documentation and developer handoff guidelines'
    ]
  },
  {
    id: 'performance-accessibility',
    title: 'Performance & Accessibility Auditing',
    description:
      'Auditing and improving Core Web Vitals, asset optimization, layout shifts, and WCAG AA accessibility compliance.',
    deliverables: [
      'Lighthouse and Core Web Vitals optimization',
      'Semantic HTML and keyboard navigation compliance',
      'Bundle size reduction and lazy loading strategies'
    ]
  }
]
