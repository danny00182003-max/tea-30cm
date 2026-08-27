import { useEffect, useState } from 'react'

const QUERIES = [
  '(max-width: 900px)',
  '(hover: none), (pointer: coarse)',
  '(prefers-reduced-motion: reduce)',
]

export default function useStaticMode() {
  const [isStatic, setIsStatic] = useState(() =>
    QUERIES.some(q => window.matchMedia(q).matches)
  )

  useEffect(() => {
    const mqls = QUERIES.map(q => window.matchMedia(q))
    const update = () => setIsStatic(mqls.some(m => m.matches))
    mqls.forEach(m => m.addEventListener('change', update))
    return () => mqls.forEach(m => m.removeEventListener('change', update))
  }, [])

  return isStatic
}
