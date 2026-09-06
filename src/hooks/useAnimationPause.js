import { useEffect } from 'react'

/**
 * 分頁隱藏或區塊離開可視範圍時暫停 CSS 動畫，不改 GSAP 的 transform。
 */
export default function useAnimationPause() {
  useEffect(() => {
    const body = document.body
    // GSAP 會在 Hero 外加入 pin-spacer，不能只找 main 的直接子元素。
    const scenes = [...document.querySelectorAll('main section.scene, main section.panel')]
    const apply = () => {
      body.classList.toggle('anim-paused', document.visibilityState === 'hidden')
    }
    apply()
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(entries => {
        entries.forEach(({ target, isIntersecting }) => {
          target.classList.toggle('scene-paused', !isIntersecting)
        })
      })
      : null
    scenes.forEach(scene => observer?.observe(scene))
    document.addEventListener('visibilitychange', apply)
    return () => {
      observer?.disconnect()
      scenes.forEach(scene => scene.classList.remove('scene-paused'))
      document.removeEventListener('visibilitychange', apply)
      body.classList.remove('anim-paused')
    }
  }, [])
}
