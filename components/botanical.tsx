export function Botanical({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 520"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="bloom" x1="120" y1="40" x2="380" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F9A8D4" />
          <stop offset="0.55" stopColor="#EC4899" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="leaf" x1="60" y1="120" x2="430" y2="470" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#EC4899" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      <circle cx="240" cy="250" r="168" fill="#FFFFFF" opacity="0.55" />
      <circle cx="240" cy="250" r="168" stroke="#FBCFE8" strokeWidth="1.5" />

      <path
        d="M240 452c-58-30-104-84-104-150 0-52 30-98 76-124"
        stroke="url(#leaf)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M212 300c-30-6-52-30-58-62 34 4 60 28 66 60M228 240c22-14 34-40 32-72-30 12-48 40-48 72"
        stroke="url(#leaf)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M176 372c-34 2-64-16-78-46 36-6 70 8 86 38M300 314c32 8 52 34 54 68-34-4-58-30-62-64"
        stroke="url(#leaf)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <g>
        <path
          d="M240 168c26-40 74-58 118-44-10 44-42 78-86 84"
          stroke="url(#bloom)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M244 172c-4-46-34-84-78-98-6 46 14 90 54 112"
          stroke="url(#bloom)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M236 176c-30-14-66-10-92 14 26 26 66 32 96 16"
          stroke="url(#bloom)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="242" cy="176" r="18" fill="url(#bloom)" opacity="0.9" />
        <circle cx="242" cy="176" r="7" fill="#FFF7FB" />
      </g>

      <circle cx="120" cy="120" r="5" fill="#EC4899" opacity="0.8" />
      <circle cx="372" cy="150" r="4" fill="#8B5CF6" opacity="0.8" />
      <circle cx="96" cy="300" r="4" fill="#F9A8D4" />
      <circle cx="392" cy="344" r="6" fill="#EC4899" opacity="0.35" />
    </svg>
  );
}
