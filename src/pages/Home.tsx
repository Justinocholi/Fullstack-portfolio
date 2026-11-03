import '../styles/home.css'
import { motion } from 'framer-motion'
import {
  User,
  GraduationCap,
  Code2,
  Boxes,
  ExternalLink,
  Mail,
  Database,
  Terminal,
  Cpu
} from 'lucide-react'
import Multimedia from '../components/Multimedia'
import Tilt3D from '../components/Tilt3D'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { experience, education } from '../data/experience'
import { now } from '../data/now'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  WhatsappIcon
} from '../components/icons/BrandIcons'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function Home() {
  const featured = projects.filter(p => p.featured)
  const other = projects.filter(p => !p.featured)

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <motion.div className="hero-left" initial="hidden" animate="visible" variants={stagger}>
            <motion.div className="hero-badge" variants={fadeUp}>
              <span className="dot" /> {profile.availability}
            </motion.div>
            <motion.h1 className="hero-name" variants={fadeUp}>
              {profile.name}
            </motion.h1>
            <motion.p className="hero-title" variants={fadeUp}>
              {profile.role}
            </motion.p>
            <motion.p className="hero-desc" variants={fadeUp}>
              {profile.bioShort}
            </motion.p>
            <motion.div className="hero-ctas" variants={fadeUp}>
              <a href="#projects" className="btn-glow primary">View Selected Work</a>
              <a href="#contact" className="btn-glow secondary">Get in Touch</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-image-wrap">
              <div className="hero-glow" />
              <img
                src={profile.avatarUrl || "https://avatars.githubusercontent.com/u/74488931?v=4"}
                alt={profile.name}
                width={320}
                height={320}
                fetchPriority="high"
              />
              <div className="hero-orbit" aria-hidden="true">
                <div className="orbit-dot"><Code2 size={18} /></div>
                <div className="orbit-dot"><Terminal size={18} /></div>
                <div className="orbit-dot"><Cpu size={18} /></div>
                <div className="orbit-dot"><Database size={18} /></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT BENTO ===== */}
      <section className="about-section" id="about">
        <motion.div className="about-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Background</p>
          <h2 className="section-heading">Engineering discipline &amp; product architecture</h2>
        </motion.div>

        <motion.div className="bento-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div className="bento-card span-2" variants={fadeUp}>
            <div className="card-icon purple"><User size={22} /></div>
            <h3>Who I Am</h3>
            <p>{profile.whoIAm}</p>
          </motion.div>

          <motion.div className="bento-card" variants={fadeUp}>
            <div className="card-icon cyan"><GraduationCap size={22} /></div>
            <h3>Education</h3>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
              {profile.education.degree} {profile.education.field}
            </p>
            <p>{profile.education.institution} ({profile.education.year})</p>
          </motion.div>

          <motion.div className="bento-card" variants={fadeUp}>
            <div className="card-icon blue"><Code2 size={22} /></div>
            <h3>Core Engineering</h3>
            <p>React, Next.js, TypeScript, Tailwind CSS, Node.js — architecting responsive, accessible user interfaces with solid engineering foundations.</p>
          </motion.div>

          <motion.div className="bento-card" variants={fadeUp}>
            <div className="card-icon green"><Boxes size={22} /></div>
            <h3>Product Building</h3>
            <p>From conceptualizing ThriftLink to architecting client platforms, I translate complex product requirements into clean, maintainable software systems.</p>
          </motion.div>

          <motion.div className="bento-card" variants={fadeUp}>
            <div className="card-icon purple"><ExternalLink size={22} /></div>
            <h3>Connect</h3>
            <div className="bento-social-links">
              {profile.contact.github && (
                <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>
              )}
              {profile.contact.linkedin && (
                <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
              )}
              {profile.contact.twitter && (
                <a href={profile.contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon size={18} /></a>
              )}
              {profile.contact.instagram && (
                <a href={profile.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
              )}
              {profile.contact.youtube && (
                <a href={profile.contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon size={18} /></a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="stack-section" id="stack">
        <motion.div className="stack-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Technical Stack</p>
          <h2 className="section-heading">Verified technologies &amp; competencies</h2>
        </motion.div>

        <motion.div className="stack-groups" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { label: 'Frontend', items: profile.skills.frontend },
            { label: 'Backend', items: profile.skills.backend },
            { label: 'Database', items: profile.skills.database },
            { label: 'Other', items: profile.skills.other }
          ].map((group, gi) => (
            <motion.div key={group.label} className="stack-group" variants={fadeUp}>
              <h3>{group.label}</h3>
              <div className={`stack-marquee ${gi % 2 === 1 ? 'reverse' : ''}`}>
                <div className="stack-track">
                  {[...group.items, ...group.items].map((item, i) => (
                    <span key={`${item}-${i}`} className="stack-pill">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="projects-section" id="projects">
        <motion.div className="projects-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading">Engineering &amp; Product Portfolio</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Production applications and systems built with rigorous attention to architecture, accessibility, and performance.
          </p>
        </motion.div>

        <div className="projects-list">
          {[...featured, ...other].map((project, idx) => (
            <motion.div
              key={project.id}
              className={`project-row ${idx % 2 === 1 ? 'reverse' : ''} ${project.highlight ? 'highlight-row' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <Tilt3D>
                <div className={`project-preview ${project.highlight ? 'highlight-preview' : ''}`}>
                  <img src={project.image} alt={project.title} loading="lazy" width={600} height={375} />
                  <div className="preview-overlay" />
                </div>
              </Tilt3D>
              <div className="project-info">
                <div className="project-label">{project.category} &bull; {project.year}</div>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack-tags">
                  {project.technologies.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
                      <ExternalLink size={15} style={{ marginRight: 6 }} /> {project.highlight ? 'Visit Platform' : 'Live Site'}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-code">
                      <GithubIcon size={15} style={{ marginRight: 6 }} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== MULTIMEDIA ===== */}
      <Multimedia />

      {/* ===== EXPERIENCE ===== */}
      <section className="experience-section" id="experience">
        <motion.div className="experience-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Career</p>
          <h2 className="section-heading">Professional Experience</h2>
        </motion.div>

        <motion.div className="timeline" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {experience.map((item) => (
            <motion.div key={item.id} className="timeline-item" variants={fadeUp}>
              <div className="tl-date">{item.period}</div>
              <h3>{item.role}</h3>
              <div className="tl-company">{item.company} &bull; {item.location}</div>
              <p>{item.description}</p>
              <div className="project-stack-tags" style={{ marginTop: '0.75rem' }}>
                {item.technologies.map(t => <span key={t}>{t}</span>)}
              </div>
            </motion.div>
          ))}
          {education.map((edu) => (
            <motion.div key={edu.id} className="timeline-item" variants={fadeUp}>
              <div className="tl-date">{edu.year}</div>
              <h3>{edu.degree} in {edu.field}</h3>
              <div className="tl-company">{edu.institution}</div>
              <p>Formal academic training in security fundamentals, network defense, and systems architecture.</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== CURRENT FOCUS / NOW ===== */}
      <section className="building-section" id="now">
        <motion.div className="building-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Currently</p>
          <h2 className="section-heading">What I'm focused on now</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Updated as of {now.updatedAt} &bull; {now.location}</p>
        </motion.div>

        <motion.div className="building-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div className="building-card" variants={fadeUp}>
            <span className="status in-progress">
              <span className="dot" style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor' }} />
              Active Focus
            </span>
            <h3>Current Priorities</h3>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {now.currentFocus.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="building-card" variants={fadeUp}>
            <span className="status completed">
              <span className="dot" style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor' }} />
              Exploration &amp; Research
            </span>
            <h3>Technical Deep Dives</h3>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {now.readingOrExploring.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="contact-section" id="contact">
        <motion.div className="contact-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Get in Touch</p>
          <h2>Let's build reliable, performant software.</h2>
          <p>Open to discussing engineering roles, product consulting, and architecture collaboration.</p>
        </motion.div>

        <motion.div className="contact-actions" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          {profile.contact.email && (
            <a href={`mailto:${profile.contact.email}`} className="contact-btn email">
              <Mail size={18} style={{ marginRight: 6 }} /> Send an Email
            </a>
          )}
          {profile.contact.whatsapp && (
            <a href={`https://wa.me/${profile.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">
              <WhatsappIcon size={18} style={{ marginRight: 6 }} /> WhatsApp
            </a>
          )}
        </motion.div>

        <motion.div className="contact-social" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          {profile.contact.github && (
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>
          )}
          {profile.contact.linkedin && (
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
          )}
          {profile.contact.twitter && (
            <a href={profile.contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon size={18} /></a>
          )}
          {profile.contact.instagram && (
            <a href={profile.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
          )}
          {profile.contact.youtube && (
            <a href={profile.contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon size={18} /></a>
          )}
        </motion.div>
      </section>
    </div>
  )
}
