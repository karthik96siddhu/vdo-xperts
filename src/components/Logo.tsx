import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  variant?: 'badge' | 'mark' | 'full' | 'horizontal';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'badge',
  showText = true,
}) => {
  // Dimension mapping
  const dimension = typeof size === 'number' ? size : {
    sm: 36,
    md: 48,
    lg: 64,
    xl: 96,
    '2xl': 128,
  }[size];

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <svg
          width={dimension}
          height={dimension}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-full max-h-full drop-shadow-md"
        >
          <defs>
            <linearGradient id="vdoRedGradientMark" x1="50" y1="50" x2="450" y2="450" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF1E56" />
              <stop offset="50%" stopColor="#E5094C" />
              <stop offset="100%" stopColor="#C40038" />
            </linearGradient>
            <filter id="vdoDropShadowMark" x1="-10%" y1="-10%" width="130%" height="130%">
              <feDropShadow dx="3" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.35" />
            </filter>
            <filter id="vdoRibbonShadow" x1="-20%" y1="-20%" width="140%" height="140%">
              <feDropShadow dx="6" dy="10" stdDeviation="8" floodColor="#7A0022" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Red Circle Background */}
          <circle cx="250" cy="250" r="230" fill="url(#vdoRedGradientMark)" />
          
          {/* Subtle Inner Glow Highlight */}
          <circle cx="250" cy="250" r="228" stroke="rgba(255,255,255,0.15)" strokeWidth="3" fill="none" />

          {/* VDO Custom Vector Paths */}
          <g filter="url(#vdoDropShadowMark)">
            {/* V arm & bottom curve connected to D-O loops */}
            <path
              d="M 98 185 C 93 172 104 160 118 160 C 126 160 133 165 137 172 L 175 255 C 182 270 200 288 225 288 C 265 288 290 250 290 220 C 290 190 265 160 225 160 C 195 160 175 180 165 205 L 148 245 C 138 270 120 288 95 288 C 70 288 55 270 55 245 C 55 220 70 195 98 185 Z"
              fill="none"
            />

            {/* Complete Pristine Handcrafted VDO Typography Symbol */}
            {/* The V Stem */}
            <path
              d="M 102 170 C 94 170 88 178 92 188 L 152 300 C 160 315 178 322 195 315 C 205 310 215 300 220 290 L 262 205 C 275 180 298 165 328 165 C 372 165 408 201 408 245 C 408 289 372 325 328 325 C 298 325 272 308 260 282 L 245 250"
              stroke="#FFFFFF"
              strokeWidth="42"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* D & O Intertwined Ribbon Layer with Overlap Shadow */}
            <path
              d="M 205 310 C 220 322 242 328 265 325 C 295 320 318 300 328 275 L 340 245 C 348 225 365 210 388 210 C 410 210 425 225 425 245 C 425 265 410 280 388 280 C 372 280 360 272 352 260"
              stroke="#FFFFFF"
              strokeWidth="42"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#vdoRibbonShadow)"
            />
          </g>

          {/* "XPERTS" Wordmark underneath */}
          <text
            x="250"
            y="392"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Montserrat', 'Manrope', 'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            fontSize="48"
            letterSpacing="9"
          >
            XPERTS
          </text>
        </svg>
      </div>
    );
  }

  // Full Horizontal Brand Logo (Badge + Typography)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
        {/* Crisp Brand Badge */}
        <div className="relative shrink-0 flex items-center justify-center">
          <svg
            width={dimension}
            height={dimension}
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <defs>
              <linearGradient id="vdoRedGradientH" x1="50" y1="50" x2="450" y2="450" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF1E56" />
                <stop offset="50%" stopColor="#E5094C" />
                <stop offset="100%" stopColor="#C40038" />
              </linearGradient>
              <filter id="vdoDropShadowH" x1="-10%" y1="-10%" width="130%" height="130%">
                <feDropShadow dx="3" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.4" />
              </filter>
            </defs>

            <circle cx="250" cy="250" r="230" fill="url(#vdoRedGradientH)" />
            <circle cx="250" cy="250" r="228" stroke="rgba(255,255,255,0.18)" strokeWidth="3" fill="none" />

            {/* Custom Monogram Loop */}
            <g filter="url(#vdoDropShadowH)">
              <path
                d="M 98 175 C 90 175 84 184 89 194 L 152 305 C 162 322 184 328 202 318 C 214 311 224 300 230 288 L 272 198 C 285 172 312 155 342 155 C 388 155 425 192 425 238 C 425 284 388 321 342 321 C 310 321 282 302 270 274 L 252 238"
                stroke="#FFFFFF"
                strokeWidth="44"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M 215 315 C 235 328 260 332 285 325 C 315 317 338 295 348 268 L 358 240 C 365 220 382 205 402 205 C 424 205 438 220 438 240 C 438 260 424 275 402 275"
                stroke="#FFFFFF"
                strokeWidth="44"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>

            <text
              x="250"
              y="396"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="'Montserrat', 'Manrope', sans-serif"
              fontWeight="800"
              fontSize="50"
              letterSpacing="10"
            >
              XPERTS
            </text>
          </svg>
        </div>

        {/* Text Wordmark Beside Badge if requested */}
        {showText && (
          <div className="flex flex-col">
            <div className="flex items-center gap-1 leading-none">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#FFFFFF]">
                VDO
              </span>
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-[#FF2A6D]">
                XPERTS
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-[0.22em] text-[#A1A1AA] uppercase mt-0.5">
              POST-PRODUCTION
            </span>
          </div>
        )}
      </div>
    );
  }

  // Default Badge Variant (Full Circular Emblem as in uploaded image)
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-full drop-shadow-xl hover:scale-[1.02] transition-transform duration-300"
      >
        <defs>
          {/* Crimson Radiant Gradient */}
          <radialGradient id="vdoRedRadial" cx="35%" cy="30%" r="70%" fx="30%" fy="25%">
            <stop offset="0%" stopColor="#FF2A6D" />
            <stop offset="45%" stopColor="#E5094C" />
            <stop offset="85%" stopColor="#B80034" />
            <stop offset="100%" stopColor="#96002A" />
          </radialGradient>

          {/* Deep Drop Shadow for White Ribbon */}
          <filter id="vdoEmblemShadow" x="-15%" y="-15%" width="135%" height="135%">
            <feDropShadow dx="2" dy="8" stdDeviation="7" floodColor="#000000" floodOpacity="0.45" />
          </filter>

          <filter id="vdoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Outer Red Glow */}
        <circle cx="250" cy="250" r="235" fill="#E5094C" opacity="0.15" filter="url(#vdoGlow)" />

        {/* The Solid Crimson Badge */}
        <circle cx="250" cy="250" r="230" fill="url(#vdoRedRadial)" />
        
        {/* Subtle Rim Highlight */}
        <circle cx="250" cy="250" r="228" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="none" />

        {/* The White Interlocking "VDO" Symbol */}
        <g filter="url(#vdoEmblemShadow)">
          {/* Main Continuous Ribbon Loop */}
          <path
            d="M 96 172 C 86 172 80 182 86 193 L 152 308 C 163 326 186 332 205 321 C 218 314 228 302 235 288 L 278 198 C 291 172 318 155 348 155 C 395 155 432 192 432 238 C 432 284 395 321 348 321 C 315 321 286 301 274 272 L 255 234"
            stroke="#FFFFFF"
            strokeWidth="46"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* 3D Overlapping "D/O" Loop with Optical Drop Shadow */}
          <path
            d="M 215 315 C 236 330 262 335 288 327 C 320 318 344 294 354 266 L 364 238 C 372 216 390 200 412 200 C 435 200 448 216 448 238 C 448 260 432 276 408 276"
            stroke="#FFFFFF"
            strokeWidth="46"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* "XPERTS" Wordmark in Bold Geometric Caps */}
        <text
          x="250"
          y="396"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="'Montserrat', 'Manrope', 'Helvetica Neue', sans-serif"
          fontWeight="900"
          fontSize="52"
          letterSpacing="11"
        >
          XPERTS
        </text>
      </svg>
    </div>
  );
};
