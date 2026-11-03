import { useEffect } from 'react'
import { profile } from '../data/profile'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  pathname?: string
  type?: 'website' | 'article' | 'profile'
  schema?: Record<string, unknown>
}

export function SEO({
  title,
  description = profile.bioShort,
  image = '/work/thriftlink.webp',
  pathname = '/',
  type = 'website',
  schema
}: SEOProps) {
  const fullTitle = title
    ? `${title} — ${profile.name}`
    : `${profile.name} — ${profile.role}`

  const siteUrl = 'https://joshuaocholi.dev'
  const canonicalUrl = `${siteUrl}${pathname}`
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  useEffect(() => {
    // Document Title
    document.title = fullTitle

    // Helper to set or create meta tag
    const setMeta = (nameAttr: string, nameVal: string, content: string) => {
      let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(nameAttr, nameVal)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)

    // Open Graph
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:image', imageUrl)

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    // JSON-LD Structured Data
    const defaultPersonSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: 'Lead Frontend Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Delverse Technologies Limited'
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: profile.education.institution
      },
      url: siteUrl,
      sameAs: [
        profile.contact.github,
        profile.contact.linkedin,
        profile.contact.twitter,
        profile.contact.youtube
      ].filter(Boolean),
      knowsAbout: [
        ...profile.skills.frontend,
        ...profile.skills.backend,
        ...profile.skills.database
      ]
    }

    let scriptEl = document.querySelector('script[data-schema="true"]') as HTMLScriptElement | null
    if (!scriptEl) {
      scriptEl = document.createElement('script')
      scriptEl.type = 'application/ld+json'
      scriptEl.setAttribute('data-schema', 'true')
      document.head.appendChild(scriptEl)
    }
    scriptEl.textContent = JSON.stringify(schema || defaultPersonSchema)
  }, [fullTitle, description, canonicalUrl, imageUrl, type, schema])

  return null
}
