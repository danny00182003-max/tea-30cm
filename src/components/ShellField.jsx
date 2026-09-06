import { useEffect, useMemo, useState } from 'react'

const MOBILE = '(max-width: 900px)'
function rng(seed) {
  let s = seed >>> 0 || 1
  return () => {
    s ^= s << 13
    s ^= s >>> 17
    s ^= s << 5
    return (s >>> 0) / 4294967296
  }
}
function build(seed, compact) {
  const rand = rng(seed * 2654435761 + 20260906)
  const count = compact ? 72 : 156
  // Uneven piles mixed with loose rounds, without fixed rows or equal spacing.
  const piles = Array.from({ length: compact ? 4 : 7 }, () => ({
    x: 9 + rand() * 82,
    y: 76 + rand() * 11,
  }))
  return Array.from({ length: count }, (_, id) => {
    const pile = piles[Math.floor(rand() * piles.length)]
    const clustered = rand() < 0.76
    const rest = clustered ? pile.y + (rand() - 0.5) * 5 : 71 + rand() * 19
    const depth = (rest - 71) / 19
    const direction = rand() < 0.5 ? -1 : 1
    return {
      id,
      left: clustered ? pile.x + (rand() - 0.5) * 5 : 5 + rand() * 90,
      rot: direction * 90 + (rand() - 0.5) * (rand() < 0.7 ? 65 : 150),
      rest,
      scale: 0.44 + depth * 0.2 + rand() * 0.08,
      order: Math.round(rest * 10),
      from: -(280 + rand() * 85),
      drift: (rand() - 0.5) * 26,
      spin: (rand() - 0.5) * 200,
      roll: direction * (8 + rand() * (compact ? 12 : 22)),
      turn: direction * (18 + rand() * 38),
      hop: 4 + rand() * 10,
      delay: rand() * 950,
      duration: 1450 + rand() * 550,
    }
  })
}
export default function ShellField({ burst = 0 }) {
  const [compact, setCompact] = useState(() => window.matchMedia(MOBILE).matches)
  useEffect(() => {
    const query = window.matchMedia(MOBILE)
    const update = () => setCompact(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  const shells = useMemo(() => burst ? build(burst, compact) : [], [burst, compact])
  return (
    <div className="shell-field" aria-hidden="true">
      {shells.map(s => (
        <span
          key={`${burst}-${s.id}`}
          className="shell"
          style={{
            left: `${s.left}%`, top: `${s.rest}%`, zIndex: s.order,
            '--sc': s.scale, '--rot': `${s.rot}deg`,
            '--from': `${s.from}px`, '--drift': `${s.drift}px`, '--spin': `${s.spin}deg`,
            '--delay': `${s.delay}ms`, '--dur': `${s.duration}ms`,
            '--roll': `${s.roll}px`, '--turn': `${s.turn}deg`, '--hop': `${s.hop}px`,
          }}
        >
          <img
            className="shell-image"
            src={`${import.meta.env.BASE_URL}bullet.webp`}
            width="26"
            height="144"
            alt=""
            draggable={false}
          />
        </span>
      ))}
    </div>
  )
}
