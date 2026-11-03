import '../styles/website.css'
import '../styles/multimedia.css'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/icons/BrandIcons'
import { projects } from '../data/projects'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const gradients = ['gradient-blue-purple', 'gradient-green-teal', 'gradient-orange-red', 'gradient-cyan-blue']

export default function Website() {
  return (
    <div>
      <section className="page-hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="section-label" variants={fadeUp}>Portfolio</motion.p>
          <motion.h1 variants={fadeUp}>Engineering <span className="gradient-text">Projects</span></motion.h1>
          <motion.p variants={fadeUp}>
            Production applications, products, and software interfaces built with React, TypeScript, and modern engineering standards.
          </motion.p>
        </motion.div>
      </section>

      <div className="page-container">
        <h2 className="page-section-title">Selected Projects</h2>
        <motion.div className="nova-projects-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {projects.map((project, idx) => (
            <motion.div key={project.id} className="nova-project-card" variants={fadeUp}>
              <div className="nova-card-img">
                <img src={project.image} alt={project.title} loading="lazy" width={400} height={250} />
              </div>
              <div className={`card-gradient ${gradients[idx % gradients.length]}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="card-body">
                <div className="tags">{project.technologies.slice(0, 5).map(tech => <span key={tech}>{tech}</span>)}</div>
                <div className="card-actions">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
                      <ExternalLink size={14} style={{ marginRight: 6 }} /> {project.highlight ? 'Visit Platform' : 'Live Demo'}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                      <GithubIcon size={14} style={{ marginRight: 6 }} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
