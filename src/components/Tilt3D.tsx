import { useRef, type ReactNode, type CSSProperties } from 'react'

interface Tilt3DProps {
  children: ReactNode
  className?: string
  max?: number // max tilt in degrees
}

// Mouse-tracking 3D tilt card with a moving glare highlight
export default function Tilt3D({ children, className = '', max = 10 }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`)
    el.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`)
    el.style.setProperty('--gx', `${px * 100}%`)
    el.style.setProperty('--gy', `${py * 100}%`)
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`tilt-3d ${className}`}
      style={{ '--rx': '0deg', '--ry': '0deg' } as CSSProperties}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="tilt-3d-inner">{children}</div>
      <div className="tilt-3d-glare" aria-hidden />
    </div>
  )
}
