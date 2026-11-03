import { useState } from 'react'
import YouTubeEmbed from './YouTubeEmbed'
import AudioPlayer from './AudioPlayer'
import SocialPostGrid from './SocialPostGrid'
import { mediaContent } from '../data/media'
import '../styles/multimedia.css'

export default function Multimedia() {
  const [activeTab, setActiveTab] = useState<'videos' | 'playlists' | 'music' | 'social'>('videos')

  return (
    <section className="multimedia-section" id="multimedia">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="section-label">Media</p>
        <h2 className="section-title section-heading">Multimedia &amp; Social</h2>
        <p className="section-subtitle section-desc" style={{ margin: '0 auto' }}>Tutorials, music, and social presence. Follow along for insights into web development and tech trends.</p>
      </div>

      <div className="mm-tabs">
        {(['videos', 'playlists', 'music', 'social'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mm-tab ${activeTab === tab ? 'active' : ''}`}
          >
            <i className={`fas ${tab === 'videos' ? 'fa-video' : tab === 'playlists' ? 'fa-list' : tab === 'music' ? 'fa-music' : 'fa-share-alt'}`} />
            {' '}{tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mm-content">
        {activeTab === 'videos' && (
          <div className="mm-videos-grid">
            {mediaContent.youtubeVideos.map((video, idx) => (
              <YouTubeEmbed
                key={idx}
                videoId={video.videoId}
                title={video.title}
                description={video.description}
              />
            ))}
          </div>
        )}

        {activeTab === 'playlists' && (
          <div className="mm-videos-grid">
            {mediaContent.youtubePlaylists.map((pl, idx) => (
              <div key={idx} className="yt-card">
                <div className="yt-container">
                  <iframe
                    className="yt-iframe"
                    src={`https://www.youtube-nocookie.com/embed/videoseries?list=${pl.playlistId}`}
                    title={pl.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="yt-info">
                  <h3>{pl.title}</h3>
                  <p>{pl.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'music' && (
          <div className="mm-music-container">
            <AudioPlayer tracks={mediaContent.audioTracks} />
          </div>
        )}

        {activeTab === 'social' && (
          <SocialPostGrid posts={mediaContent.socialPosts} />
        )}
      </div>
    </section>
  )
}
