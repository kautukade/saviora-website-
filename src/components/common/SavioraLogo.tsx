import React from 'react';

interface SavioraLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'auto';
  subtext?: string;
}

export const SavioraLogo: React.FC<SavioraLogoProps> = ({
  className = '',
  size = 40,
  showText = false,
  variant = 'auto',
  subtext,
}) => {
  const numericSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 40;
  // Authentic Saviora Health aspect ratio 128x103 (103 / 128 ≈ 0.8047)
  const height = Math.max(16, Math.round(numericSize * (103 / 128)));

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* 100% Authentic Saviora Health Official Logo Mark (Ultra HD Retina) */}
      <img
        src="/logo.png"
        srcSet="/logo.png 1x, /logo-hd.png 2x, /logo-ultra-hd.png 3x"
        alt="Saviora Health Logo"
        width={numericSize}
        height={height}
        className="shrink-0 object-contain transition-transform duration-200 group-hover:scale-105"
        style={{
          width: `${numericSize}px`,
          height: `${height}px`,
          aspectRatio: '128 / 103',
        }}
        loading="eager"
        decoding="async"
      />

      {/* Optional Typography Lockup */}
      {showText && (
        <div>
          <div className="flex items-center">
            <span
              className={`text-xl font-extrabold tracking-tight ${
                variant === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Saviora<span className="text-blue-600">Health</span>
            </span>
          </div>
          {subtext && (
            <p
              className={`text-[10px] font-semibold tracking-wider uppercase ${
                variant === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {subtext}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

