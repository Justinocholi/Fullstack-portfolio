import '../styles/digital.css'
import { motion } from 'framer-motion'
import { useSiteData } from '../context/SiteDataContext'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Digital() {
  const { siteData } = useSiteData()
  const { digitalStats, digitalServices } = siteData

  return (
    <div>
      <section className="page-hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="section-label" variants={fadeUp}>Marketing</motion.p>
          <motion.h1 variants={fadeUp}>Digital <span className="gradient-text">Marketing</span></motion.h1>
          <motion.p variants={fadeUp}>
            Data-driven marketing strategies that drive growth, maximize ROI, and build lasting customer relationships.
          </motion.p>
        </motion.div>
      </section>

      <div className="page-container">
        <motion.div className="page-stats-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {digitalStats.map((s, i) => (
            <motion.div key={i} className="page-stat" variants={fadeUp}>
              <div className="stat-number">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Services &amp; Expertise</h2>
        <motion.div className="services-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {digitalServices.map((s, i) => (
            <motion.div key={s.id || i} className="service-card" variants={fadeUp}>
              <div className="service-icon"><img src={s.icon} alt={s.title} width={32} height={32} /></div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-description">{s.desc}</p>
              <div className="service-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">My Process</h2>
        <motion.div className="process-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { num: '01', title: 'Research & Strategy', desc: 'Deep dive into your market, audience, and competitors to build a data-backed strategy.' },
            { num: '02', title: 'Execute & Optimize', desc: 'Launch campaigns with continuous testing and optimization for maximum performance.' },
            { num: '03', title: 'Analyze & Scale', desc: 'Monitor results, extract insights, and scale what works for sustainable growth.' }
          ].map((p, i) => (
            <motion.div key={i} className="process-card" variants={fadeUp}>
              <div className="process-number">{p.num}</div>
              <div>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-description">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
