import '../styles/website.css'
import '../styles/multimedia.css'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const gradients = ['gradient-blue-purple', 'gradient-green-teal', 'gradient-orange-red', 'gradient-cyan-blue']

export default function Website() {
  const novaProjects = projects.filter(p =>
    p.id.includes('nova') || p.id.includes('insightly') || p.id === 'blockchain-voting-platform' || p.id === 'ai-vocal-studio'
  )

  return (
    <div>
      <section className="page-hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="section-label" variants={fadeUp}>Portfolio</motion.p>
          <motion.h1 variants={fadeUp}>Website <span className="gradient-text">Projects</span></motion.h1>
          <motion.p variants={fadeUp}>
            Clean, fast, and responsive websites with sharp visuals, accessible UI, and delightful interactions.
          </motion.p>
        </motion.div>
      </section>

      <div className="page-container">
        <h2 className="page-section-title">Personal Projects</h2>
        <motion.div className="nova-projects-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {novaProjects.map((project, idx) => (
            <motion.div key={project.id} className="nova-project-card" variants={fadeUp}>
              <div className="nova-card-img">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className={`card-gradient ${gradients[idx % gradients.length]}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="card-body">
                {project.metrics && (
                  <div className="card-metrics">
                    {project.metrics.performanceScore && <div className="metric"><div className="metric-value">{project.metrics.performanceScore}</div><div className="metric-label">Performance</div></div>}
                    {project.metrics.loadTime && <div className="metric"><div className="metric-value">{project.metrics.loadTime}</div><div className="metric-label">Load Time</div></div>}
                    {project.metrics.users && <div className="metric"><div className="metric-value">{project.metrics.users}</div><div className="metric-label">Users</div></div>}
                    {project.metrics.extra && <div className="metric"><div className="metric-value">{project.metrics.extra}</div><div className="metric-label">Scale</div></div>}
                  </div>
                )}
                <div className="tags">{project.technologies.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div>
                <div className="card-actions">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live"><i className="fas fa-external-link-alt" /> Live Demo</a>}
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github"><i className="fab fa-github" /> GitHub</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Client Projects</h2>
        <motion.div className="page-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { title: 'Delverse Technologies', desc: 'Official company website — delivering cutting-edge digital solutions and web development services.', img: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80', tags: ['Next.js', 'TypeScript', 'Tailwind'], url: 'https://www.delversetech.com/' },
            { title: 'MECA Platform', desc: 'Community platform prototype with authentication, profiles, and content feeds.', img: '/meca.jpg', tags: ['React', 'CSS', 'SPA'] },
            { title: 'Personal Portfolio', desc: 'Modern portfolio site showcasing development, artistry, and social media work.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', tags: ['React', 'Framer Motion', 'CSS'], url: '/' }
          ].map((p, idx) => (
            <motion.div key={idx} className="page-card" variants={fadeUp} style={{ padding: 0, overflow: 'hidden' }}>
              <img src={p.img} alt={p.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="page-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                {p.url && <div style={{ marginTop: '1rem' }}><a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View <i className="fas fa-arrow-right" /></a></div>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
