import { STOPS } from '../data/content.js'

export default function DotNav() {
  return (
    <nav id="dotnav" aria-label="基地巡覽">
      {STOPS.map(s => (
        <a key={s.id} href={`#${s.id}`} aria-label={s.label}>
          <span>{s.label}</span>
        </a>
      ))}
    </nav>
  )
}
