import '../styles/social.css'
import '../styles/multimedia.css'
import { motion } from 'framer-motion'
import { Target, Users, TrendingUp, MessageSquare } from 'lucide-react'
import YouTubeEmbed from '../components/YouTubeEmbed'
import { mediaContent } from '../data/media'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Social() {
  return (
    <div>
      <section className="page-hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="section-label" variants={fadeUp}>Brand &amp; Distribution</motion.p>
          <motion.h1 variants={fadeUp}>Social &amp; <span className="gradient-text">Media Presence</span></motion.h1>
          <motion.p variants={fadeUp}>
            Digital distribution, developer advocacy, and multimedia storytelling across modern platforms.
          </motion.p>
        </motion.div>
      </section>

      <div className="page-container">
        <h2 className="page-section-title">Strategic Areas</h2>
        <motion.div className="page-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { icon: <Target size={22} />, color: 'purple', title: 'Content & Positioning', desc: 'Crafting clear, consistent engineering and creative narratives.', tags: ['Positioning', 'Technical Writing', 'Developer Storytelling'] },
            { icon: <Users size={22} />, color: 'blue', title: 'Community & Ecosystem', desc: 'Engaging developer communities and early adopters for tech products.', tags: ['Feedback Loops', 'Audience Growth', 'Ecosystem'] },
            { icon: <TrendingUp size={22} />, color: 'cyan', title: 'Distribution Strategy', desc: 'Leveraging organic discovery and modern media channels.', tags: ['Organic Reach', 'Multi-Channel', 'Audience Engagement'] },
            { icon: <MessageSquare size={22} />, color: 'green', title: 'Creative Production', desc: 'High-craft audiovisual content and product demos.', tags: ['Audio Production', 'Video Highlights', 'Product Demos'] }
          ].map((item, idx) => (
            <motion.div key={idx} className="page-card" variants={fadeUp}>
              <div className={`card-icon ${item.color}`}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="page-tags">{item.tags.map(t => <span key={t}>{t}</span>)}</div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Media &amp; Video Highlights</h2>
        <motion.div className="yt-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {mediaContent.youtubeVideos.slice(0, 6).map((v, i) => (
            <motion.div key={v.videoId || i} variants={fadeUp}>
              <YouTubeEmbed videoId={v.videoId} title={v.title || `Content Highlight ${i + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
