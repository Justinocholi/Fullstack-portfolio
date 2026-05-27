import { useState } from 'react'

interface YouTubeEmbedProps {
  videoId: string
  title: string
  description?: string
}

export default function YouTubeEmbed({ videoId, title, description }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="yt-card">
      <div className="yt-container">
        {!isPlaying && (
          <button className="yt-overlay" onClick={() => setIsPlaying(true)}>
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              className="yt-thumbnail"
            />
            <div className="yt-play-btn">
              <i className="fas fa-play" />
            </div>
          </button>
        )}
        {isPlaying && (
          <iframe
            className="yt-iframe"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
      <div className="yt-info">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}
