import { useRef, useState, useEffect } from 'react'

interface AudioTrack {
  title: string
  artist: string
  url: string
  duration: number
  cover?: string
}

interface AudioPlayerProps {
  tracks: AudioTrack[]
}

export default function AudioPlayer({ tracks }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const track = tracks[currentTrack]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      if (currentTrack < tracks.length - 1) {
        setCurrentTrack(currentTrack + 1)
      } else {
        setIsPlaying(false)
      }
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentTrack, tracks.length])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [isPlaying, currentTrack])

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    setCurrentTime(time)
    if (audioRef.current) {
      audioRef.current.currentTime = time
    }
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = parseInt(e.target.value) / 100
    }
  }

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="ap-container">
      {track.cover && (
        <img src={track.cover} alt={track.title} className="ap-cover" />
      )}

      <div className="ap-track-info">
        <h3>{track.title}</h3>
        <p>{track.artist}</p>
      </div>

      <div className="ap-progress">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="ap-seek"
        />
        <div className="ap-times">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="ap-controls">
        <button
          onClick={() => currentTrack > 0 && setCurrentTrack(currentTrack - 1)}
          disabled={currentTrack === 0}
          className="ap-btn"
        >
          <i className="fas fa-step-backward" />
        </button>
        <button onClick={() => setIsPlaying(!isPlaying)} className="ap-btn ap-play">
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} />
        </button>
        <button
          onClick={() => currentTrack < tracks.length - 1 && setCurrentTrack(currentTrack + 1)}
          disabled={currentTrack === tracks.length - 1}
          className="ap-btn"
        >
          <i className="fas fa-step-forward" />
        </button>
      </div>

      <div className="ap-volume">
        <i className="fas fa-volume-up" />
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="70"
          onChange={handleVolume}
          className="ap-volume-slider"
        />
      </div>

      <audio ref={audioRef} src={track.url} />

      {tracks.length > 1 && (
        <div className="ap-playlist">
          <p className="ap-playlist-label">PLAYLIST</p>
          {tracks.map((t, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentTrack(idx); setIsPlaying(true) }}
              className={`ap-playlist-item ${idx === currentTrack ? 'active' : ''}`}
            >
              <span className="ap-playlist-title">{t.title}</span>
              <span className="ap-playlist-artist">{t.artist}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
