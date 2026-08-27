# ADR-001：3D 引擎 = three.js
- Status：已定
- Decision：以 three.js 作為 3D 引擎（npm install three，不 clone 官方 repo）。
- Context：Landing Page 核心賣點是互動 3D / 戰術視覺。
- Reason：web 3D 事實標準（~114k★、MIT、r185、約每月一版）；視覺天花板由它決定。它是地基不是選項，R3F 等都跑在它上面。
- 官方 repo 僅用於翻 examples/、官方 editor、devtools。
- 未來：衝效能時再評估 WebGPU/TSL。