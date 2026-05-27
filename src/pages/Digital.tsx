import '../styles/digital.css'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Digital() {
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
          {[
            { num: '250%', label: 'Avg. ROI Increase' },
            { num: '500K+', label: 'Leads Generated' },
            { num: '50+', label: 'Campaigns Managed' },
            { num: '95%', label: 'Client Retention' }
          ].map((s, i) => (
            <motion.div key={i} className="page-stat" variants={fadeUp}>
              <div className="stat-number">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Services & Expertise</h2>
        <motion.div className="services-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { icon: '/chart-line-area.svg', title: 'Analytics & Insights', desc: 'Transform raw data into actionable insights.', tags: ['Google Analytics', 'Conversion Tracking', 'KPI Dashboards'] },
            { icon: '/megaphone-1.svg', title: 'Campaign Planning', desc: 'Design and execute multi-channel marketing campaigns.', tags: ['Strategy', 'Multi-Channel', 'A/B Testing'] },
            { icon: '/magnifying-glass-tilted-right.svg', title: 'SEO & SEM', desc: 'Increase visibility and drive qualified traffic.', tags: ['Keyword Research', 'On-Page SEO', 'Google Ads'] },
            { icon: '/mail-incoming.svg', title: 'Email Marketing', desc: 'Build relationships through targeted campaigns.', tags: ['Automation', 'Segmentation', 'Copywriting'] },
            { icon: '/stopwatch.svg', title: 'Conversion Optimization', desc: 'Maximize ROI at every touchpoint.', tags: ['Funnel Analysis', 'Landing Pages', 'CRO'] },
            { icon: '/thunderbolt-filled.svg', title: 'Growth Strategies', desc: 'Develop scalable strategies for sustainable growth.', tags: ['Market Analysis', 'Acquisition', 'Retention'] }
          ].map((s, i) => (
            <motion.div key={i} className="service-card" variants={fadeUp}>
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
