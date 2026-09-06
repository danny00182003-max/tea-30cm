const TOPBAR_H = 56

/**
 * 站內錨點跳轉。
 *
 * #hero 需要特別處理：scrub 模式下 ScrollTrigger 會把 #hero pin 住
 * （end: '+=300%'），pin 結束後 GSAP 把它停在 pin-spacer 底部，也就是
 * #ops 的開頭。原生錨點依元素當下的文件位置解析，因此 href="#hero"
 * 會跳到 OPS 而不是首屏。首屏一律直接回捲到文件頂端。
 *
 * 其餘區塊：有 Lenis 時交給 Lenis（原生跳轉會與慣性捲動打架），
 * 沒有 Lenis 就放行給瀏覽器原生錨點（.scene / .panel 已設 scroll-margin-top）。
 */
export default function scrollToSection(e, href) {
  if (!href || !href.startsWith('#')) return
  const lenis = window.__lenis
  const id = href.slice(1)

  if (id === 'hero') {
    e.preventDefault()
    if (lenis) lenis.scrollTo(0)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  if (!lenis) return
  const target = document.getElementById(id)
  if (!target) return
  e.preventDefault()
  lenis.scrollTo(target, { offset: -TOPBAR_H })
}
