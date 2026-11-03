import { motion } from 'framer-motion'
import { FlaskConical, Radio, Music } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Badge } from '../components/ui/Badge'
import { SectionHeader } from '../components/ui/SectionHeader'
import AudioPlayer from '../components/AudioPlayer'
import YouTubeEmbed from '../components/YouTubeEmbed'
import { mediaContent, gallery } from '../data/media'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SEO } from '../components/SEO'

export default function Lab() {
  return (
    <div className="lab-page" style={{ paddingTop: 'calc(var(--space-16) + 3rem)', paddingBottom: 'var(--space-20)' }}>
      <SEO
        title="Lab & Experiments"
        description="Experiments in Web Audio, creative code, multimedia workflows, and interface prototypes."
        pathname="/lab"
      />
      <Container size="normal">
        {/* Lab Header */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ marginBottom: 'var(--space-12)' }}>
          <motion.div variants={fadeUp}>
            <Badge variant="accent" dot>Engineering &amp; Creative Lab</Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-4xl)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              margin: 'var(--space-3) 0 var(--space-4)',
              lineHeight: 1.15
            }}
          >
            Experiments, Audio Systems &amp; Media
          </motion.h1>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '65ch',
              lineHeight: 1.6
            }}
          >
            A sandbox for creative code explorations, Web Audio prototypes, audiovisual production, and technical experiments outside production product boundaries.
          </motion.p>
        </motion.div>

        {/* Section 1: Audio Engine & Music Prototypes */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <SectionHeader
            label="Audio Engineering"
            title="Web Audio Prototypes &amp; Music Production"
            description="Interactive audio experiments exploring sound design, DSP nodes, and original music production."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-8)',
              alignItems: 'start'
            }}
          >
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-6)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-4)' }}>
                <Music size={18} color="var(--accent)" />
                <h3 style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', margin: 0 }}>
                  Interactive Audio Player
                </h3>
              </div>
              <AudioPlayer tracks={mediaContent.audioTracks} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-6)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-2)' }}>
                  <Radio size={16} color="var(--accent)" />
                  <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>
                    About Audio Engineering
                  </strong>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)', lineHeight: 1.6 }}>
                  Built with native Web Audio API and HTML5 Audio elements with lazy evaluation (<code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>preload="none"</code>) to ensure background music files never degrade critical Lighthouse load metrics.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-6)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-2)' }}>
                  <FlaskConical size={16} color="var(--accent)" />
                  <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>
                    AI Vocal Studio Experiment
                  </strong>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)', lineHeight: 1.6 }}>
                  Explores real-time vocal processing buffers, noise suppression models, and responsive canvas waveform rendering in modern browsers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Video Walkthroughs */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <SectionHeader
            label="Media & Walkthroughs"
            title="Technical Demonstrations &amp; Creative Sessions"
            description="Video highlights covering product architecture, creative walkthroughs, and studio sessions."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-6)'
            }}
          >
            {mediaContent.youtubeVideos.slice(0, 4).map((v, i) => (
              <div key={v.videoId || i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dim)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <YouTubeEmbed videoId={v.videoId} title={v.title} description={v.description} />
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Visual Concept Gallery */}
        <section>
          <SectionHeader
            label="Visual Concepts"
            title="Design Experiments &amp; Creative Direction"
            description="Explorations in typography, visual identity, and concept covers."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)'
            }}
          >
            {gallery.map(item => (
              <div
                key={item.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-dim)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: 'var(--space-4)' }}>
                  <h3 style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  )
}
