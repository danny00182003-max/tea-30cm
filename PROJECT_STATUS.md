# Tea Project — PROJECT STATUS
> 更新：2026-08-24｜進 session 先讀本檔 + DECISIONS/ + CLAUDE.md


## Current Phase
Phase 1 單頁式 PUBG 戰術風 Landing Page，hero 核心互動已實作，進入視覺驗證與精修。
（Phase 2 後端/OAuth/API 擱置，不做。）


## 技術棧（已定，見 DECISIONS/）
Vite + React 18.3 + R3F 8.18（three npm 裝）｜GSAP+ScrollTrigger+Lenis｜純靜態（hosting 未選）｜影片來源 Higgsfield（原創 tactical，禁 KRAFTON 可辨識資產）


## Completed
- ADR-005 定案：Hero =影片背景 + R3F 元件 + scroll 混合架構
- 舊 vanilla 原型重建為 Vite+React+R3F（舊版備份 _prototype/）；vite dev/build 通過；React18+fiber8 鎖版；設計資產已移植
- Hero 素材入 public/：hero-bg.mp4（迷霧→指揮官,5s,5.3MB）、hero-poster.png、hero-frames/（154 幀,10.9MB）
- Higgsfield 生產流程打通（Image 底圖→首尾幀鎖定→免費草稿模式）
- Hero scroll-scrubbing 已實作（HeroScrub.jsx；pin=hero+ops 300vh；veil 過渡；fallback 三模式 scrub/video/still）


## In Progress
- scrubbing：已實作，待視覺驗證（捲動手感/接縫跳幀/手機 fallback）
- ui-ux-pro-max：評估通過（MIT/純本地/無 postinstall/免費層足夠）；offline 空跑完成，**輸出待覆核**→再 init


## Next
1. 覆核 skill offline 輸出（tactical/FUI 關鍵字）→ 正式 init
2. 視覺驗證 scrubbing → 必要時補幀/調時序
3. 選定靜態 hosting
4. hero-bg.mp4 壓縮上線標準


## Blockers｜無


## Pending Decisions
- hosting 三選一（Cloudflare Pages/Netlify/Vercel）
- scrubbing 154 幀攤 300vh 是否夠順，驗證後定


## Backlog
- ARMORY 槍枝 SVG 剪影美化
- ComfyUI 本地生圖環境（RTX 5060 8GB）
- bundle code-split + 3D lazy load（three 打進主 chunk 980KB）
- 反 AI 味改造：硬邊/破對稱/等寬字/加噪點（隨 skill 導入一起做）