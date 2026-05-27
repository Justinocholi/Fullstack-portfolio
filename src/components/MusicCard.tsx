import { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  title: string
}

export default function MusicCard({ src, title }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoaded = () => setDuration(audio.duration || 0)
    const onTimeUpdate = () => setCurrent(audio.currentTime || 0)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener('loadedmetadata', onLoaded)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (e) {
        console.warn('Play failed', e)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    const pct = Number(e.target.value)
    audio.currentTime = (pct / 100) * audio.duration
  }

  const fmt = (t: number) => {
    if (!t || isNaN(t)) return '0:00'
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  const progress = duration ? Math.min(100, Math.max(0, (current / duration) * 100)) : 0

  return (
    <div className="music-card">
      <audio ref={audioRef} className="audio-player" src={src} />
      <div className="play-btn" onClick={togglePlay}>
        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} play-icon`} />
      </div>
      <div className="music-info">
        <strong>{title}</strong>
        <div className="music-time">
          <span className="current-time">{fmt(current)}</span> / <span className="duration">{fmt(duration)}</span>
        </div>
        <input type="range" className="seek-bar" value={progress} min={0} max={100} onChange={onSeek} />
      </div>
    </div>
  )
}
