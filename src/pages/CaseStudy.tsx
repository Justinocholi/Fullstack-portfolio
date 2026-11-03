import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/projects'
import { GithubIcon } from '../components/icons/BrandIcons'
import { Container } from '../components/ui/Container'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SEO } from '../components/SEO'

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const projectIndex = projects.findIndex(p => p.slug === slug || p.id === slug)

  if (projectIndex === -1) {
    return <Navigate to="/" replace />
  }

  const project = projects[projectIndex]
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <article className="case-study-page" style={{ paddingTop: 'calc(var(--space-16) + 3rem)', paddingBottom: 'var(--space-20)' }}>
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
        pathname={`/work/${project.slug}`}
        type="article"
      />
      <Container size="normal">
        {/* Back Link */}
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-sm)',
            fontFamily: 'var(--font-mono)',
            marginBottom: 'var(--space-8)'
          }}
        >
          <ArrowLeft size={16} /> Back to Overview
        </Link>

        {/* Hero / Header */}
        <motion.header initial="hidden" animate="visible" variants={staggerContainer} style={{ marginBottom: 'var(--space-12)' }}>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
            <Badge variant="accent" dot>{project.status || 'Verified Project'}</Badge>
            <Badge variant="outline">{project.category}</Badge>
            {project.year && <Badge variant="default">{project.year}</Badge>}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-4xl)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: 'var(--space-4)',
              lineHeight: 1.15
            }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              maxWidth: '55ch',
              lineHeight: 1.6,
              marginBottom: 'var(--space-8)'
            }}
          >
            {project.description}
          </motion.p>

          {/* Action Links & Meta Grid */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              alignItems: 'center',
              borderTop: '1px solid var(--border-dim)',
              borderBottom: '1px solid var(--border-dim)',
              paddingTop: 'var(--space-6)',
              paddingBottom: 'var(--space-6)'
            }}
          >
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" icon={<ExternalLink size={16} />} iconPosition="right">
                  Visit Live Product
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" icon={<GithubIcon size={16} />} iconPosition="left">
                  Inspect Source Code
                </Button>
              </a>
            )}
            {project.role && (
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)' }}>
                <ShieldCheck size={16} color="var(--accent)" />
                Role: <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{project.role}</span>
              </div>
            )}
          </motion.div>
        </motion.header>

        {/* Featured Image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-dim)',
              marginBottom: 'var(--space-16)',
              background: 'var(--bg-card)'
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              width={1440}
              height={900}
              style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
            />
          </motion.div>
        )}

        {/* Narrative & Architecture Breakdown */}
        <Container size="reading" style={{ padding: 0 }}>
          <div className="case-study-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            {/* Tech Stack */}
            <section>
              <h2 style={{ fontSize: 'var(--text-lg)', color: 'var(--text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-mono)' }}>
                TECHNOLOGY STACK
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </section>

            {/* Context & Challenge */}
            {project.challenge && (
              <section>
                <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
                  Problem &amp; Context
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', lineHeight: 1.75 }}>
                  {project.challenge}
                </p>
              </section>
            )}

            {/* Architecture & Solution */}
            {project.solution && (
              <section>
                <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
                  Architecture &amp; Engineering Solution
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: 'var(--space-4)' }}>
                  {project.solution}
                </p>
                {project.architecture && (
                  <div
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-default)',
                      borderLeft: '4px solid var(--accent)',
                      borderRadius: 'var(--radius-sm)',
                      padding: 'var(--space-4) var(--space-6)',
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--text-sm)',
                      lineHeight: 1.6
                    }}
                  >
                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>Implementation Note:</strong>
                    {project.architecture}
                  </div>
                )}
              </section>
            )}

            {/* Key Outcomes */}
            <section>
              <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
                Key Engineering Highlights
              </h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', paddingLeft: '0' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={18} color="var(--accent)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span>Production-ready component architecture structured with strict TypeScript types and modular separation of concerns.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={18} color="var(--accent)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span>Responsive viewport adaptation across mobile, tablet, and desktop breakpoints without layout shifts.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={18} color="var(--accent)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span>Accessible keyboard navigation and semantic HTML compliance aligned with WCAG AA standards.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Previous / Next Case Study Navigation */}
          <nav
            aria-label="Case study navigation"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid var(--border-dim)',
              marginTop: 'var(--space-16)',
              paddingTop: 'var(--space-8)'
            }}
          >
            {prevProject ? (
              <Link
                to={`/work/${prevProject.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-sm)'
                }}
              >
                <ArrowLeft size={16} /> Previous: <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{prevProject.title}</span>
              </Link>
            ) : <span />}

            {nextProject ? (
              <Link
                to={`/work/${nextProject.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-sm)'
                }}
              >
                Next: <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{nextProject.title}</span> <ArrowRight size={16} />
              </Link>
            ) : <span />}
          </nav>
        </Container>
      </Container>
    </article>
  )
}
