interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export function LogoIcon({ className, width = 32, height = 32 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#09040D" />
      <path d="M18 4L10 17H16L14 28L22 15H16L18 4Z" fill="white" />
    </svg>
  );
}

export function FooterLogoIcon({ className, width = 40, height = 40 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32L20 8L32 32" stroke="#09040D" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 24H27" stroke="#09040D" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function LinkedInIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="currentColor" />
      <path d="M7 9h2v9H7V9zm1-3a1 1 0 110 2 1 1 0 010-2zm4 3h1.9v1.2h.03c.26-.5.9-1.2 1.87-1.2 2 0 2.3 1.3 2.3 3v5h-2v-4.4c0-.8-.02-1.9-1.15-1.9-1.16 0-1.35.9-1.35 1.84V18H12V9z" fill="white" />
    </svg>
  );
}

export function DiscordIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.053a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
    </svg>
  );
}

export function InstagramIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function FlameIcon({ className, width = 28, height = 28, color = '#09040d' }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

export function CompassIcon({ className, width = 28, height = 28, color = '#09040d' }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

export function ClockIcon({ className, width = 28, height = 28, color = '#09040d' }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function PrismIcon({ className, width = 28, height = 28, color = '#09040d' }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 19h20L12 2z" />
      <path d="M12 2v17" />
      <path d="M2 19l10-6" />
      <path d="M22 19L12 13" />
    </svg>
  );
}
