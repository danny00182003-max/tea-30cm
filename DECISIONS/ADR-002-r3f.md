# ADR-002：3D 開發層 = React Three Fiber (R3F)
- Status：已定
- Decision：以 R3F（宣告式 React 寫 three.js）為 3D 開發層。
- Reason：~30k★、Poimandres 維護、生態最完整（drei / postprocessing / Rapier）；做 bloom/粒子/掃描光最省手工。R3F 就是 three.js，只是用 React 元件表達，無額外 runtime 負擔。
- Trade-off：綁定 React（見 ADR-003）。
- 註：ADR-005 後，Phase 1 R3F 適用範圍收斂至「互動元件」，氛圍改由影片背景負責。