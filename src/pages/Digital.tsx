import '../styles/digital.css'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const digitalServices = [
  {
    id: 'ds-1',
    icon: '/chart-line-area.svg',
    title: 'Product Analytics & Measurement',
    desc: 'Setting up structured product telemetry, conversion funnels, and event-driven analytics.',
    tags: ['Conversion Tracking', 'Telemetry', 'User Journeys']
  },
  {
    id: 'ds-2',
    icon: '/magnifying-glass-tilted-right.svg',
    title: 'Technical SEO & Performance',
    desc: 'Optimizing site architecture, metadata, schema markup, and Core Web Vitals for organic discoverability.',
    tags: ['On-Page SEO', 'Schema Markup', 'Core Web Vitals']
  },
  {
    id: 'ds-3',
    icon: '/stopwatch.svg',
    title: 'Conversion Optimization',
    desc: 'Auditing user experience friction points, checkout flows, and landing page performance.',
    tags: ['Funnel Analysis', 'Landing Pages', 'UX Audits']
  },
  {
    id: 'ds-4',
    icon: '/thunderbolt-filled.svg',
    title: 'Growth Strategy & Execution',
    desc: 'Developing scalable digital strategies for tech products, indie projects, and verified startups.',
    tags: ['Product Launch', 'Positioning', 'Distribution']
  }
]

export default function Digital() {
  return (
    <div>
      <section className="page-hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="section-label" variants={fadeUp}>Consulting</motion.p>
          <motion.h1 variants={fadeUp}>Digital Strategy &amp; <span className="gradient-text">Growth</span></motion.h1>
          <motion.p variants={fadeUp}>
            Data-backed product marketing, technical SEO, and conversion optimization to support software products and digital ventures.
          </motion.p>
        </motion.div>
      </section>

      <div className="page-container">
        <h2 className="page-section-title">Capabilities &amp; Services</h2>
        <motion.div className="services-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {digitalServices.map((s) => (
            <motion.div key={s.id} className="service-card" variants={fadeUp}>
              <div className="service-icon"><img src={s.icon} alt={s.title} width={32} height={32} /></div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-description">{s.desc}</p>
              <div className="service-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Methodology</h2>
        <motion.div className="process-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { num: '01', title: 'Audit & Analysis', desc: 'Comprehensive review of current performance metrics, site architecture, and user drop-off points.' },
            { num: '02', title: 'Implementation & Optimization', desc: 'Deploying targeted improvements across technical SEO, UX copy, and page load speed.' },
            { num: '03', title: 'Verification & Iteration', desc: 'Measuring verified outcomes and iterating based on empirical user engagement.' }
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
