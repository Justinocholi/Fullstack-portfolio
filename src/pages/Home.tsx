import '../styles/home.css'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import Multimedia from '../components/Multimedia'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function Home() {
  const featured = projects.filter(p => p.featured)
  const other = projects.filter(p => !p.featured && p.liveUrl)

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <motion.div className="hero-left" initial="hidden" animate="visible" variants={stagger}>
            <motion.div className="hero-badge" variants={fadeUp}>
              <span className="dot" /> Available for freelance
            </motion.div>
            <motion.h1 className="hero-name" variants={fadeUp}>
              Joshua <span className="gradient-text">Ocholi</span>
            </motion.h1>
            <motion.p className="hero-title" variants={fadeUp}>
              Frontend Engineer &amp; Creative Developer
            </motion.p>
            <motion.p className="hero-desc" variants={fadeUp}>
              Building modern digital experiences with performance, motion, and scalable UI systems.
              From code to creativity — I bring ideas to life across multiple dimensions.
            </motion.p>
            <motion.div className="hero-ctas" variants={fadeUp}>
              <a href="#projects" className="btn-glow primary">View Projects</a>
              <a href="#contact" className="btn-glow secondary">Book a Call</a>
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
              <img src="/bottom.jpg" alt="Joshua Ocholi" />
              <div className="hero-orbit">
                <div className="orbit-dot"><i className="fab fa-react" /></div>
                <div className="orbit-dot"><i className="fab fa-js" /></div>
                <div className="orbit-dot"><i className="fab fa-node" /></div>
                <div className="orbit-dot"><i className="fab fa-figma" /></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT BENTO ===== */}
      <section className="about-section" id="about">
        <motion.div className="about-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">About Me</p>
          <h2 className="section-heading">A journey through code,<br />creativity &amp; digital innovation</h2>
        </motion.div>

        <motion.div className="bento-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div className="bento-card span-2" variants={fadeUp}>
            <div className="card-icon purple"><i className="fas fa-user" /></div>
            <h3>Who I Am</h3>
            <p>
              Started in cybersecurity, transitioned to full-stack development. I build scalable web applications,
              produce genre-blending music, and drive digital growth through creative strategy. Based in Nigeria,
              working with clients worldwide.
            </p>
          </motion.div>

          <motion.div className="bento-card" variants={fadeUp}>
            <div className="card-icon cyan"><i className="fas fa-chart-bar" /></div>
            <h3>By the Numbers</h3>
            <div className="bento-stats">
              <div className="stat-item"><div className="stat-number">3+</div><div className="stat-label">Years Experience</div></div>
              <div className="stat-item"><div className="stat-number">20+</div><div className="stat-label">Projects Built</div></div>
              <div className="stat-item"><div className="stat-number">10+</div><div className="stat-label">Happy Clients</div></div>
              <div className="stat-item"><div className="stat-number">∞</div><div className="stat-label">Curiosity</div></div>
            </div>
          </motion.div>

          <motion.div className="bento-card" variants={fadeUp}>
            <div className="card-icon blue"><i className="fas fa-code" /></div>
            <h3>Development</h3>
            <p>React, Next.js, TypeScript, Node.js — building performant frontends and robust backends with modern tooling.</p>
          </motion.div>

          <motion.div className="bento-card" variants={fadeUp}>
            <div className="card-icon green"><i className="fas fa-music" /></div>
            <h3>Music &amp; Art</h3>
            <p>Afrobeats, trap, EDM, and alternative — producing original sound that blends emotion with experimental production.</p>
          </motion.div>

          <motion.div className="bento-card" variants={fadeUp}>
            <div className="card-icon purple"><i className="fas fa-link" /></div>
            <h3>Connect</h3>
            <div className="bento-social-links">
              <a href="https://github.com/Justinocholi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
              <a href="https://www.linkedin.com/in/joshua-ocholi2k7/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
              <a href="https://x.com/MunchildAbaga" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a>
              <a href="https://www.instagram.com/bad.boiabaga.10/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
              <a href="https://www.youtube.com/@MunchildAbaga" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="stack-section" id="stack">
        <motion.div className="stack-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Tech Stack</p>
          <h2 className="section-heading">Tools I work with</h2>
        </motion.div>

        <motion.div className="stack-groups" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue', 'Vite'] },
            { label: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Supabase', 'REST APIs'] },
            { label: 'Creative', items: ['Figma', 'CapCut', 'Music Production', 'Visual Design', 'Blender'] },
            { label: 'DevOps & Tools', items: ['Git', 'Vercel', 'Docker', 'AWS', 'CI/CD', 'Linux'] },
            { label: 'AI & Security', items: ['Python', 'AI Automation', 'Threat Intelligence', 'Cybersecurity'] }
          ].map(group => (
            <motion.div key={group.label} className="stack-group" variants={fadeUp}>
              <h3>{group.label}</h3>
              <div className="stack-pills">
                {group.items.map(item => (
                  <span key={item} className="stack-pill">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="projects-section" id="projects">
        <motion.div className="projects-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Projects</p>
          <h2 className="section-heading">Featured Work</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Each project is crafted with performance, clean code, and user experience in mind.
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
              <div className={`project-preview ${project.highlight ? 'highlight-preview' : ''}`}>
                <img src={project.image} alt={project.title} />
                <div className="preview-overlay" />
              </div>
              <div className="project-info">
                {project.highlight && (
                  <span className="company-badge"><i className="fas fa-building" /> My Company</span>
                )}
                <div className="project-label">{project.category}</div>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack-tags">
                  {project.technologies.slice(0, 5).map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={project.highlight ? 'btn-demo highlight-btn' : 'btn-demo'}>
                      <i className="fas fa-external-link-alt" /> {project.highlight ? 'Visit Website' : 'Live Demo'}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-code">
                      <i className="fab fa-github" /> Code
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
          <p className="section-label">Experience</p>
          <h2 className="section-heading">Where I've worked</h2>
        </motion.div>

        <motion.div className="timeline" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { date: '2024 — Present', role: 'Full-Stack Developer', company: 'Freelance / Remote', desc: 'Building web applications for startups and businesses. React, Next.js, Node.js, TypeScript. End-to-end development from design to deployment.' },
            { date: '2024', role: 'Frontend Developer', company: 'Figorr', desc: 'Developed responsive UI components and interactive dashboards. Collaborated with design and backend teams on product features.' },
            { date: '2023 — 2024', role: 'Social Media Manager', company: 'Campus Digest / Multiple Clients', desc: 'Managed social media presence for 8+ brands. Content strategy, community management, analytics, and growth campaigns.' },
            { date: '2023', role: 'Digital Marketing Specialist', company: 'Freelance', desc: 'SEO optimization, email campaigns, paid ads management. Helped clients increase engagement by 250%+.' }
          ].map((item, idx) => (
            <motion.div key={idx} className="timeline-item" variants={fadeUp}>
              <div className="tl-date">{item.date}</div>
              <h3>{item.role}</h3>
              <div className="tl-company">{item.company}</div>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== BUILDING NOW ===== */}
      <section className="building-section">
        <motion.div className="building-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Currently</p>
          <h2 className="section-heading">What I'm building now</h2>
        </motion.div>

        <motion.div className="building-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { title: 'ThriftLink', desc: 'A platform where verified WhatsApp vendors can gain traction, build trust, and connect with buyers seamlessly.', status: 'In Progress', statusClass: 'in-progress', progress: 65 },
            { title: 'AI-Powered News Platform', desc: 'Aggregating and personalizing news with AI categorization and offline reading.', status: 'In Progress', statusClass: 'in-progress', progress: 75 },
            { title: 'Music Visuals System', desc: 'Real-time audio visualizations and interactive music experiences for web.', status: 'Planning', statusClass: 'planning', progress: 30 },
            { title: 'Frontend Component Library', desc: 'Reusable, accessible UI components built with React and TypeScript.', status: 'In Progress', statusClass: 'in-progress', progress: 55 }
          ].map((item, idx) => (
            <motion.div key={idx} className="building-card" variants={fadeUp}>
              <span className={`status ${item.statusClass}`}>
                <span className="dot" style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor' }} />
                {item.status}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="progress-bar">
                <div className="fill" style={{ width: `${item.progress}%` }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <motion.div className="testimonials-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Testimonials</p>
          <h2 className="section-heading">What people say</h2>
        </motion.div>

        <motion.div className="testimonials-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { text: "Joshua's full-stack expertise transformed our vision into a stunning, functional web application. His attention to detail and creative problem-solving exceeded all expectations.", name: 'Tomiwa', role: 'Startup Founder' },
            { text: "Working with Joshua on our collaborative track was incredible. His unique sound blends genres seamlessly, and his production quality is absolutely top-tier.", name: 'BerryVibez', role: 'Artist' },
            { text: "Joshua's digital marketing strategies helped us triple our engagement in just three months. His understanding of both the creative and analytical sides is remarkable.", name: 'Blessing', role: 'Marketing Director' }
          ].map((t, idx) => (
            <motion.div key={idx} className="testimonial-card" variants={fadeUp}>
              <div className="quote">"</div>
              <div className="stars">
                <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" />
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="contact-section" id="contact">
        <motion.div className="contact-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="section-label">Get in touch</p>
          <h2>Have a project idea or opportunity?<br />Let's build something <span className="gradient-text">exceptional</span>.</h2>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        </motion.div>

        <motion.div className="contact-actions" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <a href="mailto:justinocholi001@gmail.com" className="contact-btn email">
            <i className="fas fa-envelope" /> Send an Email
          </a>
          <a href="https://wa.me/2348182740612" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">
            <i className="fab fa-whatsapp" /> WhatsApp
          </a>
        </motion.div>

        <motion.div className="contact-social" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <a href="https://github.com/Justinocholi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
          <a href="https://www.linkedin.com/in/joshua-ocholi2k7/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
          <a href="https://x.com/MunchildAbaga" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a>
          <a href="https://www.instagram.com/bad.boiabaga.10/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
          <a href="https://www.youtube.com/@MunchildAbaga" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <div className="footer-content">
          <span className="footer-logo">Joshua Ocholi</span>
          <p className="footer-tagline">Frontend Engineer & Creative Developer</p>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/website">Projects</a>
            <a href="/media">Media</a>
            <a href="/development">Development</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com/Justinocholi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
            <a href="https://www.linkedin.com/in/joshua-ocholi2k7/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
            <a href="https://x.com/MunchildAbaga" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a>
            <a href="https://www.instagram.com/bad.boiabaga.10/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
            <a href="https://www.youtube.com/@MunchildAbaga" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Joshua Ocholi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
