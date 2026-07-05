import '../styles/social.css'
import '../styles/multimedia.css'
import MusicCard from '../components/MusicCard'
import YouTubeEmbed from '../components/YouTubeEmbed'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Artist() {
  return (
    <div>
      <section className="page-hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="section-label" variants={fadeUp}>Artist</motion.p>
          <motion.h1 variants={fadeUp}>Music & <span className="gradient-text">Artistry</span></motion.h1>
          <motion.p variants={fadeUp}>
            Afrobeats, trap, EDM, and alternative — blending emotion and originality to craft music that moves.
          </motion.p>
        </motion.div>
      </section>

      <div className="page-container">
        <h2 className="page-section-title">Featured Tracks</h2>
        <motion.div className="music-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}><MusicCard src="/love.mp3" title="Love" /></motion.div>
          <motion.div variants={fadeUp}><MusicCard src="/Don't Know How I Got Here.mp3" title="Don't Know How I Got Here" /></motion.div>
          <motion.div variants={fadeUp}><MusicCard src="/Fell in Love Again (1).mp3" title="Fell in Love Again" /></motion.div>
        </motion.div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2rem 0 4rem', flexWrap: 'wrap' }}>
          <a href="https://www.youtube.com/@MunchildAbaga" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><i className="fab fa-youtube" /> YouTube</a>
          <a href="https://x.com/MunchildAbaga/status/1989216843224215960?s=20" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><i className="fab fa-x-twitter" /> Latest on X</a>
          <a href="mailto:justinocholi001@gmail.com" className="btn btn-secondary">Collaborate <i className="fas fa-envelope" /></a>
        </div>

        <h2 className="page-section-title">Videos</h2>
        <motion.div className="yt-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {['zrghgUfe3Z4', 'vqTBeaTpsf0', 'uu6ZmviGT0I', 'mLDWucJDIf8', 'JV31CITw4Mk'].map((id, i) => (
            <motion.div key={id} variants={fadeUp}>
              <YouTubeEmbed videoId={id} title={`Video ${i + 1}`} />
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Visual Gallery</h2>
        <motion.div className="gallery-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[
            { title: "I'll Be Fine", desc: 'A cover concept reflecting resilience.', img: "/I'll be fine (1).png" },
            { title: 'Do You', desc: 'Playful aesthetic with vibrant tones.', img: '/do you (2).png' },
            { title: 'Farmbarn', desc: 'Moments from the Farmbarn build.', img: '/cows.jpg' }
          ].map((item, idx) => (
            <motion.div key={idx} className="gallery-card" variants={fadeUp}>
              <img src={item.img} alt={item.title} />
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
