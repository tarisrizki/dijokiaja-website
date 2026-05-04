interface LogoProps {
  size?: number
}

export default function Logo({ size = 40 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4F46E5"/>
          <stop offset="100%" stopColor="#7C3AED"/>
        </linearGradient>
        <linearGradient id="logoGrad2" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F97316"/>
          <stop offset="100%" stopColor="#EF4444"/>
        </linearGradient>
      </defs>
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGrad)"/>
      {/* Book shape */}
      <rect x="22" y="28" width="26" height="44" rx="3" fill="white" opacity="0.9"/>
      <rect x="52" y="28" width="26" height="44" rx="3" fill="white" opacity="0.7"/>
      {/* Book spine */}
      <rect x="47" y="26" width="6" height="48" rx="2" fill="url(#logoGrad2)"/>
      {/* Lines on book pages */}
      <rect x="26" y="36" width="16" height="2" rx="1" fill="#4F46E5" opacity="0.4"/>
      <rect x="26" y="42" width="14" height="2" rx="1" fill="#4F46E5" opacity="0.4"/>
      <rect x="26" y="48" width="16" height="2" rx="1" fill="#4F46E5" opacity="0.4"/>
      <rect x="26" y="54" width="12" height="2" rx="1" fill="#4F46E5" opacity="0.4"/>
      {/* Checkmark badge */}
      <circle cx="70" cy="30" r="13" fill="url(#logoGrad2)"/>
      <path d="M64 30l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Graduation cap */}
      <path d="M50 18l14 7-14 7-14-7z" fill="#F97316"/>
      <path d="M36 25v8l14 6 14-6v-8" fill="none" stroke="#F97316" strokeWidth="1.5"/>
      <line x1="64" y1="25" x2="64" y2="32" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
