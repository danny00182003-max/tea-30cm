import { useEffect, useState } from 'react'

const NARROW = '(max-width: 900px)'
const COARSE = '(hover: none), (pointer: coarse)'
const REDUCED = '(prefers-reduced-motion: reduce)'

export default function useHeroMode() {
  const [mode, setMode] = useState('scrub')

  useEffect(() => {
    const narrow = window.matchMedia(NARROW)
    const coarse = window.matchMedia(COARSE)
    const reduced = window.matchMedia(REDUCED)
    const update = () => {
      if (reduced.matches) setMode('still')
      else if (narrow.matches || coarse.matches) setMode('video')
      else setMode('scrub')
    }
    update()
    ;[narrow, coarse, reduced].forEach(m => m.addEventListener('change', update))
    return () => [narrow, coarse, reduced].forEach(m => m.removeEventListener('change', update))
  }, [])

  return mode
}
