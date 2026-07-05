// Site-wide 3D ambient background: perspective grid floor + floating glass orbs.
// Pure CSS animations — zero runtime cost, styled in index.css.
export default function Background3D() {
  return (
    <div className="bg-3d" aria-hidden>
      <div className="bg-3d-grid" />
      <div className="bg-3d-orb orb-a" />
      <div className="bg-3d-orb orb-b" />
      <div className="bg-3d-orb orb-c" />
    </div>
  )
}
