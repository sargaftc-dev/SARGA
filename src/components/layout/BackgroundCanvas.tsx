import './background-canvas.css'

export function BackgroundCanvas() {
  return (
    <div className="background-canvas" aria-hidden="true">
      <span className="orb orb--one" />
      <span className="orb orb--two" />
      <span className="orb orb--three" />
      <span className="grid" />
    </div>
  )
}
