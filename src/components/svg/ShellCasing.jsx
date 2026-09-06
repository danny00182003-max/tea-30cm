/**
 * 7.62 完整彈藥（側視，彈頭朝上）— 依參考圖重畫。
 *
 * 參考圖的形狀特徵，由上而下：
 *   1. 尖錐彈頭（copper，比殼身紅一階）
 *   2. 彈頭與殼身交界的頸部收縮 + 肩部斜切
 *   3. 直筒黃銅殼身，帶一道明顯縱向高光與兩側暗邊
 *   4. 底部退刀槽（凹進去的暗環）
 *   5. 底火座（圓形，略帶色差）
 *
 * 圓柱體積感靠 5 段式橫向漸層做（暗→中→亮→中→暗），
 * 而不是單色塊，這是「看起來像金屬」的主因。
 * viewBox 20x64，實際擺放由外層 transform 旋轉縮放。
 */
import { useId } from 'react'

export default function ShellCasing({ className, variant = 0 }) {
  const t = [
    { tipHi: '#e6a86a', tipMid: '#c07f42', tipLo: '#7d4f26',
      hi: '#bdab7d', mid: '#8d774c', lo: '#50452e', rim: '#3e3525' },
    { tipHi: '#dda063', tipMid: '#b5763c', tipLo: '#734620',
      hi: '#aa9b72', mid: '#7f6d49', lo: '#48402d', rim: '#393223' },
    { tipHi: '#efb87a', tipMid: '#cb8b4a', tipLo: '#8a5729',
      hi: '#c5b385', mid: '#958154', lo: '#574b33', rim: '#423927' },
  ][variant % 3]

  const g = useId().replaceAll(':', '')
  return (
    <svg className={className} viewBox="0 0 20 64" fill="none" aria-hidden="true">
      <defs>
        {/* 殼身：5 段漸層做圓柱受光 */}
        <linearGradient id={`${g}-case`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={t.lo} />
          <stop offset="0.2" stopColor={t.mid} />
          <stop offset="0.42" stopColor={t.hi} />
          <stop offset="0.66" stopColor={t.mid} />
          <stop offset="1" stopColor={t.lo} />
        </linearGradient>
        {/* 彈頭：同樣 5 段，但整體偏紅 */}
        <linearGradient id={`${g}-tip`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={t.tipLo} />
          <stop offset="0.22" stopColor={t.tipMid} />
          <stop offset="0.44" stopColor={t.tipHi} />
          <stop offset="0.68" stopColor={t.tipMid} />
          <stop offset="1" stopColor={t.tipLo} />
        </linearGradient>
      </defs>

      {/* 彈頭：尖錐 + 弧肩，底部接到頸部 */}
      <path d="M10 1c2.6 3.4 4.6 8.4 5.2 13.2l.6 5.3H4.2l.6-5.3C5.4 9.4 7.4 4.4 10 1z"
            fill={`url(#${g}-tip)`} />
      {/* 彈頭高光 */}
      <path d="M8.6 5c-.9 2.4-1.5 5.6-1.8 8.6l-.3 4.4" stroke={t.tipHi} strokeWidth="1.1" opacity="0.5" strokeLinecap="round" />

      {/* 頸部：彈頭坐入殼口的一小段，稍暗 */}
      <path d="M4.2 19.5h11.6v2.6H4.2z" fill={t.rim} opacity="0.85" />

      {/* 肩部斜切：殼身上緣收窄 */}
      <path d="M3 25.5 4.2 22h11.6L17 25.5z" fill={`url(#${g}-case)`} />

      {/* 殼身主體 */}
      <path d="M3 25.5h14v29.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill={`url(#${g}-case)`} />
      {/* 縱向高光帶 */}
      <rect x="7.6" y="26" width="1.9" height="30" fill={t.hi} opacity="0.6" />
      {/* 右側暗邊，加強圓柱感 */}
      <rect x="14.4" y="26" width="1.5" height="30" fill={t.lo} opacity="0.5" />

      {/* 底部退刀槽 */}
      <path d="M3 54.5h14" stroke={t.rim} strokeWidth="1.8" opacity="0.9" />
      {/* 底緣 */}
      <path d="M3.4 57.5h13.2v3.2a1.6 1.6 0 0 1-1.6 1.6H5a1.6 1.6 0 0 1-1.6-1.6z" fill={t.mid} />
      {/* 底火 */}
      <ellipse cx="10" cy="60.4" rx="3.4" ry="1.5" fill={t.rim} />
      <ellipse cx="10" cy="60.2" rx="2" ry="0.8" fill={t.hi} opacity="0.45" />
    </svg>
  )
}
