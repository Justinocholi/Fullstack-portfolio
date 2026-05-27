import '../styles/development.css'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Development() {
  return (
    <div>
      <section className="page-hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="section-label" variants={fadeUp}>Development</motion.p>
          <motion.h1 variants={fadeUp}>Full-Stack <span className="gradient-text">Development</span></motion.h1>
          <motion.p variants={fadeUp}>
            Crafting web applications with clean code, modern technologies, and a focus on user experience.
          </motion.p>
        </motion.div>
      </section>

      <div className="page-container">
        <h2 className="page-section-title">Technical Expertise</h2>
        <motion.div className="page-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { icon: 'fa-code', color: 'purple', title: 'Frontend Development', desc: 'Building responsive, modern web applications with React, Next.js, and Vite.', tags: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS'] },
            { icon: 'fa-server', color: 'blue', title: 'Backend Development', desc: 'Creating robust server-side solutions and RESTful APIs.', tags: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase'] },
            { icon: 'fa-mobile-alt', color: 'cyan', title: 'Responsive Design', desc: 'Crafting seamless experiences across devices and screen sizes.', tags: ['Mobile First', 'PWAs', 'Cross-Browser'] },
            { icon: 'fa-cloud', color: 'green', title: 'Cloud & DevOps', desc: 'Deploying and maintaining scalable applications.', tags: ['AWS', 'Vercel', 'Docker', 'CI/CD'] },
            { icon: 'fa-pencil-ruler', color: 'orange', title: 'UI/UX Design', desc: 'Designing intuitive and beautiful user interfaces.', tags: ['Figma', 'Adobe XD', 'Prototyping'] },
            { icon: 'fa-tachometer-alt', color: 'purple', title: 'Performance', desc: 'Optimizing applications for speed and efficiency.', tags: ['Lighthouse', 'Core Web Vitals', 'SEO'] }
          ].map((item, idx) => (
            <motion.div key={idx} className="page-card" variants={fadeUp}>
              <div className={`card-icon ${item.color}`}><i className={`fas ${item.icon}`} /></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="page-tags">{item.tags.map(t => <span key={t}>{t}</span>)}</div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">My Journey</h2>
        <div className="page-text-section">
          <p>My journey into development started with a foundation in cybersecurity, where I learned to think critically about systems, security, and architecture.</p>
          <p>Transitioning into full-stack development, I've honed my skills across the entire stack — from designing beautiful, responsive frontends to architecting scalable backend systems.</p>
          <p>Whether it's building a complex dashboard, a sleek landing page, or a full-featured web application, I approach every project with attention to detail and a commitment to quality.</p>
        </div>
      </div>
    </div>
  )
}
