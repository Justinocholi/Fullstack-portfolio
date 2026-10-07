import '../styles/social.css'
import '../styles/multimedia.css'
import MusicCard from '../components/MusicCard'
import YouTubeEmbed from '../components/YouTubeEmbed'
import { motion } from 'framer-motion'
import { useSiteData } from '../context/SiteDataContext'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Artist() {
  const { siteData } = useSiteData()
  const { media, gallery, profile } = siteData

  return (
    <div>
      <section className="page-hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="section-label" variants={fadeUp}>Artist</motion.p>
          <motion.h1 variants={fadeUp}>Music &amp; <span className="gradient-text">Artistry</span></motion.h1>
          <motion.p variants={fadeUp}>
            Afrobeats, trap, EDM, and alternative — blending emotion and originality to craft music that moves.
          </motion.p>
        </motion.div>
      </section>

      <div className="page-container">
        <h2 className="page-section-title">Featured Tracks</h2>
        <motion.div className="music-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {media.audioTracks.map((track, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <MusicCard src={track.url} title={track.title} />
            </motion.div>
          ))}
        </motion.div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2rem 0 4rem', flexWrap: 'wrap' }}>
          {profile.contact.youtube && (
            <a href={profile.contact.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <i className="fab fa-youtube" /> YouTube
            </a>
          )}
          {profile.contact.twitter && (
            <a href={profile.contact.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <i className="fab fa-x-twitter" /> Latest on X
            </a>
          )}
          {profile.contact.email && (
            <a href={`mailto:${profile.contact.email}`} className="btn btn-secondary">
              Collaborate <i className="fas fa-envelope" />
            </a>
          )}
        </div>

        <h2 className="page-section-title">Videos</h2>
        <motion.div className="yt-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {media.youtubeVideos.slice(0, 6).map((vid, i) => (
            <motion.div key={vid.videoId || i} variants={fadeUp}>
              <YouTubeEmbed videoId={vid.videoId} title={vid.title || `Video ${i + 1}`} />
            </motion.div>
          ))}
        </motion.div>

        <h2 className="page-section-title">Visual Gallery</h2>
        <motion.div className="gallery-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {gallery.map((item, idx) => (
            <motion.div key={item.id || idx} className="gallery-card" variants={fadeUp}>
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
