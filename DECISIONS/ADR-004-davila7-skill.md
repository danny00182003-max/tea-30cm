# ADR-004：AI coding skill = davila7 的 3d-web-experience
- Status：已定
- Decision：採 davila7/claude-code-templates 的 3d-web-experience + scroll-experience 兩個 skill 餵 coding agent。
- Reason：~30k★、MIT、持續發布；涵蓋 Three.js/R3F/Spline 選型樹、GLB+Draco、<5MB 資產、GSAP scroll-driven、手機 fallback、及「何時不該用 3D」的煞車。對齊輕量+效能+progressive degradation。
- 安裝：只裝需要的 skill（npx skills add ... --skill 3d-web-experience），不整包裝。
- Caveat：第三方 skill = 注入 agent context，安裝前先讀 SKILL.md。