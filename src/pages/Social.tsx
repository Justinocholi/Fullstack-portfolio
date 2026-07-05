import '../styles/social.css'
import '../styles/multimedia.css'
import { motion } from 'framer-motion'
import YouTubeEmbed from '../components/YouTubeEmbed'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Social() {
  return (
    <div>
      <section className="page-hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="section-label" variants={fadeUp}>Social</motion.p>
          <motion.h1 variants={fadeUp}>Social Media <span className="gradient-text">Management</span></motion.h1>
          <motion.p variants={fadeUp}>
            Amplifying brands through strategic content, authentic engagement, and data-driven growth.
          </motion.p>
        </motion.div>
      </section>

      <div className="page-container">
        <h2 className="page-section-title">What I Offer</h2>
        <motion.div className="page-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { icon: 'fa-bullseye', color: 'purple', title: 'Content Strategy', desc: 'Data-driven content plans that resonate and drive engagement.', tags: ['Content Calendar', 'Audience Research', 'Trend Analysis'] },
            { icon: 'fa-users', color: 'blue', title: 'Community Management', desc: 'Build and nurture engaged communities that become brand advocates.', tags: ['Active Engagement', 'Response Management', 'Growth'] },
            { icon: 'fa-chart-line', color: 'cyan', title: 'Growth & Analytics', desc: 'Use insights and metrics to optimize performance and reach.', tags: ['Performance Tracking', 'A/B Testing', 'ROI Analysis'] },
            { icon: 'fa-comment-dots', color: 'green', title: 'Brand Messaging', desc: 'Craft consistent, compelling brand voices across platforms.', tags: ['Voice Development', 'Copywriting', 'Storytelling'] }
          ].map((item, idx) => (
            <motion.div key={idx} className="page-card" variants={fadeUp}>
              <div className={`card-icon ${item.color}`}><i className={`fas ${item.icon}`} /></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="page-tags">{item.tags.map(t => <span key={t}>{t}</span>)}</div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Platform Expertise</h2>
        <motion.div className="expertise-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { title: 'Instagram', metric: '50K+ Reach' },
            { title: 'Twitter/X', metric: '30K+ Impressions' },
            { title: 'LinkedIn', metric: '20K+ Connections' },
            { title: 'TikTok', metric: '100K+ Views' },
            { title: 'YouTube', metric: '25K+ Subscribers' },
            { title: 'Facebook', metric: '40K+ Engagement' }
          ].map((p, i) => (
            <motion.div key={i} className="expertise-card" variants={fadeUp}>
              <div className="expertise-title">{p.title}</div>
              <div className="expertise-metric">{p.metric}</div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Clients I Manage</h2>
        <motion.div className="client-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { name: 'Haha Hyenas NFT', handle: '@hahahyenasnft', tag: 'NFT community', platform: 'twitter', url: 'https://x.com/hahahyenasnft', avatar: 'https://unavatar.io/twitter/hahahyenasnft' },
            { name: 'The Six Lovitoz', handle: '@thesix_lovitoz', tag: 'Music collective', platform: 'instagram', url: 'https://www.instagram.com/thesix_lovitoz', avatar: 'https://unavatar.io/instagram/thesix_lovitoz' },
            { name: 'Vagz Perfumes', handle: '@vagzperfumes', tag: 'Beauty & Lifestyle', platform: 'instagram', url: 'https://www.instagram.com/vagzperfumes', avatar: 'https://unavatar.io/instagram/vagzperfumes' },
            { name: 'Campus Digest MX', handle: '@campusdigestmx', tag: 'Education & News', platform: 'instagram', url: 'https://www.instagram.com/campusdigestmx', avatar: 'https://unavatar.io/instagram/campusdigestmx' },
            { name: 'Bad Boi Abaga', handle: '@bad.boiabaga.10', tag: 'Music & Entertainment', platform: 'instagram', url: 'https://www.instagram.com/bad.boiabaga.10', avatar: 'https://unavatar.io/instagram/bad.boiabaga.10' },
            { name: 'Munchild Abaga', handle: '@munchildabaga', tag: 'Content Creator', platform: 'twitter', url: 'https://x.com/munchildabaga', avatar: 'https://unavatar.io/twitter/munchildabaga' }
          ].map((c, i) => (
            <motion.div key={i} className="client-card" variants={fadeUp}>
              <div className={`client-header gradient-${c.platform}`} />
              <div className="client-body">
                <img className="client-avatar" src={c.avatar} alt={`${c.name} profile`} loading="lazy" />
                <div className="client-name">{c.name}</div>
                <div className="client-handle">{c.handle}</div>
                <div className="client-tag">{c.tag}</div>
                <div className="client-actions">
                  <a className="btn-light" target="_blank" rel="noopener noreferrer" href={c.url}>View Profile</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Content Highlights</h2>
        <motion.div className="yt-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { id: 'zrghgUfe3Z4', title: 'Content Highlight' },
            { id: 'vqTBeaTpsf0', title: 'Content Highlight' },
            { id: 'uu6ZmviGT0I', title: 'Content Highlight' },
            { id: 'mLDWucJDIf8', title: 'Content Highlight' },
            { id: 'JV31CITw4Mk', title: 'Content Highlight' }
          ].map((v, i) => (
            <motion.div key={v.id} variants={fadeUp}>
              <YouTubeEmbed videoId={v.id} title={`${v.title} ${i + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
