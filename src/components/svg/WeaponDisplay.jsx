/** AUG silhouette redrawn from the user's side-view reference, muzzle facing left. */
export default function WeaponDisplay() {
  return (
    <div className="weapon-display" aria-hidden="true">
      <span className="weapon-caption">AUG <i>03 / ARMORY</i></span>
      <svg className="weapon-blueprint" viewBox="0 0 600 220" fill="none">
        <path className="weapon-datum" d="M30 205H570M80 201v8m55-8v8m55-8v8m55-8v8m55-8v8m55-8v8m55-8v8m55-8v8m55-8v8" />
        <g className="weapon-rifle">
          <g transform="translate(5 -88) scale(1.9)" strokeLinejoin="round" strokeLinecap="round">
            <path className="aug-metal" d="m34 82 79 2v5l-79-3zM34 81h13v6H34zM107 82h10v9h-10z" />
            <path className="aug-highlight" d="m49 83 55 2M38 82v4m5-4v4" />
            <path className="aug-stock" d="m110 92 10 2-5 9-2 22-10-1 3-20z" />
            <path className="aug-detail" d="m109 102-3 19m4 0 2-16" />
            <path className="aug-magazine" d="m198 101 21 7-11 40-17-6 6-23z" />
            <path className="aug-mag-grid" d="m201 107-8 32m13-30-9 32m14-30-10 32m14-31-10 32m-8-33 17 5m-18 0 17 5m-18 0 16 5m-17 0 16 5m-17 0 16 5m-17 0 16 5" />
            <path className="aug-stock" fillRule="evenodd" d="M115 87 132 82l26 1 20-1 77 2 15 2 6 5-2 43-6 1-20-3q-3-12-19-20l-18-7-25-5q-16-3-16 8l10 18q4 7-3 7l-12-2q-8-1-14-12l-14-20-13-2-10-3Zm29 14 11 1 12 23 9 3-9 1q-7 0-12-9Z" />
            <path className="aug-stock-shade" d="m182 93 84 1 3 34-17-1q-6-13-24-21l-19-7-23-4z" />
            <path className="aug-highlight" d="m132 85 29 1 21-1 74 2 15 3M117 91l18-2 29 2m16-2 84 3" />
            <path className="aug-metal" d="m270 92 5 1-2 39-4 1zM116 81l10-1 9-6 21 3 6 5-4 5-43 1z" />
            <path className="aug-detail" d="m157 99 3 6-3 4m105-9h5v7h-3v-8M245 121l-3-3" />
            <path className="aug-metal" d="m127 78 9-9 4 1-6 9zm26 4 9-10 7-1-10 12zM137 64l56 2v6l-56-3zM134 63h5v8h-5zm57 2h4v8h-4z" />
            <path className="aug-highlight" d="m141 66 48 2M139 72l17 1" />
            <path className="weapon-bolt" d="m119 83 12-1v3l-12 1zm-3-2h5v5h-5z" />
          </g>
          <path className="weapon-sightline" d="M49 73h165" />
          <g className="weapon-reticle">
            <circle cx="43" cy="73" r="15" />
            <path d="M43 51v9m0 26v9M21 73h9m26 0h9" />
            <circle cx="43" cy="73" r="1.5" fill="currentColor" stroke="none" />
          </g>
        </g>
        <path className="weapon-datum" d="M31 33V20h28m482 0h28v13M31 167v13h15m508 0h15v-13" />
      </svg>
      <span className="weapon-caption weapon-caption--bottom"><i>30 CM // NIGHT OPS</i><span className="weapon-ready">準星就位</span></span>
    </div>
  )
}
