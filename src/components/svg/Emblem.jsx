export default function Emblem({ className }) {
  return (
    <svg className={className} viewBox="0 0 240 300" aria-hidden="true" focusable="false">
      <polygon points="120,8 204,46 224,98 212,234 120,290 28,234 16,98 36,46" fill="#0c0d10" stroke="#e01b2c" strokeWidth="7" />
      <polygon points="120,26 192,59 208,101 198,226 120,271 42,226 32,101 48,59" fill="none" stroke="#6f0d17" strokeWidth="2" />
      <path d="M62 100 C78 58 162 58 178 100" stroke="#14161a" strokeWidth="11" fill="none" strokeLinecap="round" />
      <path d="M86 40 L94 14 L108 27 L120 6 L132 27 L146 14 L154 40 Z" fill="#e01b2c" stroke="#050505" strokeWidth="3" />
      <rect x="84" y="38" width="72" height="9" rx="2" fill="#7c101d" stroke="#050505" strokeWidth="2" />
      <path d="M120 52 C76 60 60 102 56 152 L54 206 L82 230 L158 230 L186 206 L184 152 C180 102 164 60 120 52 Z" fill="#eceadf" stroke="#0a0a0a" strokeWidth="3" />
      <ellipse cx="120" cy="150" rx="42" ry="54" fill="#0b0c0e" />
      <path d="M97 144 l21 -8 l2 11 l-21 8 z" fill="#e8e6dc" />
      <path d="M143 144 l-21 -8 l-2 11 l21 8 z" fill="#e8e6dc" />
      <ellipse cx="120" cy="176" rx="7" ry="9" fill="#17191d" />
      <rect x="48" y="112" width="26" height="46" rx="11" fill="#14161a" stroke="#000" strokeWidth="2" />
      <rect x="166" y="112" width="26" height="46" rx="11" fill="#14161a" stroke="#000" strokeWidth="2" />
      <path d="M30 232 L12 254 L30 276 Z" fill="#8f111d" stroke="#0a0a0a" strokeWidth="2" />
      <path d="M210 232 L228 254 L210 276 Z" fill="#8f111d" stroke="#0a0a0a" strokeWidth="2" />
      <rect x="30" y="232" width="180" height="44" rx="3" fill="#e01b2c" stroke="#0a0a0a" strokeWidth="3" />
      <text x="120" y="264" textAnchor="middle" fontFamily="Anton,'Noto Sans TC',sans-serif" fontSize="30" letterSpacing="3" fill="#ffffff">30 CM</text>
    </svg>
  )
}
