import { Printer, ArrowLeft, Mail, MapPin, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { experience, education } from '../data/experience'
import { projects } from '../data/projects'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons'
import { SEO } from '../components/SEO'

export default function CV() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="cv-page" style={{ paddingTop: 'calc(var(--space-16) + 2rem)', paddingBottom: 'var(--space-20)' }}>
      <SEO
        title="Curriculum Vitae"
        description="Curriculum Vitae of Joshua Ocholi — Lead Frontend Engineer | Product Builder."
        pathname="/cv"
      />
      <Container size="reading">
        {/* Actions bar (hidden in print) */}
        <div
          className="cv-actions no-print"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-8)'
          }}
        >
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <Button variant="primary" size="sm" onClick={handlePrint} icon={<Printer size={15} />}>
            Print / Save as PDF
          </Button>
        </div>

        {/* Structured CV Document */}
        <div
          className="cv-document"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-dim)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-10)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-8)'
          }}
        >
          {/* Header */}
          <header style={{ borderBottom: '1px solid var(--border-dim)', paddingBottom: 'var(--space-6)' }}>
            <h1
              style={{
                fontSize: 'var(--text-3xl)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '0.25rem'
              }}
            >
              {profile.name}
            </h1>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--accent)',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
                marginBottom: 'var(--space-4)'
              }}
            >
              {profile.role}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-4)',
                fontSize: 'var(--text-xs)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} /> {profile.location}
              </span>
              <a href={`mailto:${profile.contact.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={14} /> {profile.contact.email}
              </a>
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <GithubIcon size={14} /> github.com/Justinocholi
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <LinkedinIcon size={14} /> linkedin.com/in/joshua-ocholi2k7
              </a>
            </div>
          </header>

          {/* Executive Summary */}
          <section>
            <h2 style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 'var(--space-2)' }}>
              Summary
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
              {profile.bioShort}
            </p>
          </section>

          {/* Core Technical Stack */}
          <section>
            <h2 style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 'var(--space-3)' }}>
              Core Technical Competencies
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
              <div>
                <strong style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Frontend</strong>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  {profile.skills.frontend.join(' • ')}
                </p>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Backend &amp; DB</strong>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  {[...profile.skills.backend, ...profile.skills.database].join(' • ')}
                </p>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Engineering Practices</strong>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  Component Architecture • Web Performance • WCAG AA • REST APIs
                </p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>
              Professional Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {experience.map(exp => (
                <div key={exp.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', margin: 0 }}>
                      {exp.role} &bull; <span style={{ color: 'var(--accent)' }}>{exp.company}</span>
                    </h3>
                    <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      {exp.period}
                    </span>
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    {exp.location}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    {exp.description}
                  </p>
                  <p style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    Technologies: {exp.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Software Products */}
          <section>
            <h2 style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>
              Selected Products &amp; Software Projects
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {projects.slice(0, 4).map(p => (
                <div key={p.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>
                      {p.title}
                    </strong>
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Globe size={12} /> {p.liveUrl.replace('https://', '')}
                      </a>
                    )}
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.5 }}>
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 'var(--space-3)' }}>
              Education
            </h2>
            {education.map(edu => (
              <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <div>
                  <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>
                    {edu.degree} in {edu.field}
                  </strong>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                    {edu.institution} &bull; {edu.location}
                  </div>
                </div>
                <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  Graduated {edu.year}
                </span>
              </div>
            ))}
          </section>
        </div>
      </Container>

      {/* Print CSS Styles */}
      <style>{`
        @media print {
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          .no-print, header, footer, .nav-shell, #bg-3d {
            display: none !important;
          }
          .cv-page {
            padding: 0 !important;
          }
          .cv-document {
            border: none !important;
            padding: 0 !important;
            background: #ffffff !important;
            box-shadow: none !important;
          }
          h1, h2, h3, strong, p, span, a {
            color: #000000 !important;
          }
        }
      `}</style>
    </div>
  )
}
