# ADR-003：前端框架 = React + Vite（不採 Vue）
- Status：已定
- Decision：Vite + React + R3F。
- 誠實結論：單看「輕量部署」與「3D 好看」，React/Vue 平手（bundle 由 three.js+資產主導；3D 天花板由 three.js+shader+postprocessing 決定）。
- 真正勝出三點：1) AI 產碼可靠度（R3F 訓練資料多、有現成 skill，出錯率低）2) 效果生態（drei+postprocessing 遠勝 Vue 端）3) 兩人皆近新手，既然都要學就學支援更好的。
- 從 Vue3 轉 React 主要新學：JSX、hooks（useState/useEffect ↔ ref/watch；useFrame ↔ render loop）。可邊做邊學。
- 退路：若要「零新學習最快出單頁」，Vue3+TresJS 撐得住，但本次推 React。