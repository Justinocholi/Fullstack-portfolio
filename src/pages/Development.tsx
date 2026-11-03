import '../styles/development.css'
import { motion } from 'framer-motion'
import { Layers } from 'lucide-react'
import { services } from '../data/services'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Development() {
  return (
    <div>
      <section className="page-hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="section-label" variants={fadeUp}>Engineering</motion.p>
          <motion.h1 variants={fadeUp}>Frontend Architecture &amp; <span className="gradient-text">Development</span></motion.h1>
          <motion.p variants={fadeUp}>
            Architecting production web applications with strict TypeScript, modern component systems, and a focus on performance and accessibility.
          </motion.p>
        </motion.div>
      </section>

      <div className="page-container">
        <h2 className="page-section-title">Technical Capabilities</h2>
        <motion.div className="page-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {services.map((item) => (
            <motion.div key={item.id} className="page-card" variants={fadeUp}>
              <div className="card-icon purple"><Layers size={22} /></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="page-tags" style={{ marginTop: '1rem' }}>
                {item.deliverables.map(del => <span key={del}>{del}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Background &amp; Philosophy</h2>
        <div className="page-text-section">
          <p>
            Trained in Cybersecurity Science at the Federal University of Technology, Minna, I approach software engineering with a foundational mindset in resilience, system architecture, and defensive design.
          </p>
          <p>
            Currently serving as Lead Frontend Developer at Delverse Technologies Limited and founder of ThriftLink, I specialize in bridging high-fidelity design with robust, accessible frontend architectures using React, Next.js, and TypeScript.
          </p>
          <p>
            My engineering philosophy centers on clean abstractions, performance budgets, and building digital products that solve real problems with lasting quality.
          </p>
        </div>
      </div>
    </div>
  )
}
