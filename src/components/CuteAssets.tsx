import React from 'react';

// Cute 4-point sparkle stars cluster matching Spotify PDF exactly
export const SparkleCluster: React.FC<{ className?: string; color?: string }> = ({ 
  className = "top-4 right-8", 
  color = "text-purple-400" 
}) => (
  <div className={`absolute pointer-events-none select-none flex items-center gap-1.5 ${className}`}>
    <span className={`text-[16px] animate-pulse ${color}`}>✦</span>
    <span className="text-[10px] text-pink-400 -mt-2">✧</span>
    <span className="text-[13px] text-emerald-400 -ml-1 mt-1.5">✦</span>
    {/* Dot matrix grid */}
    <div className="grid grid-cols-4 gap-1 opacity-25 ml-2">
      {[...Array(12)].map((_, i) => (
        <span key={i} className="w-1 h-1 rounded-full bg-slate-500 block" />
      ))}
    </div>
  </div>
);

// Cute 2D Professional Avatars (Vector SVG - High Fidelity, Vibrant, Charming)
export const CuteAvatar: React.FC<{
  type: 'ankit' | 'sneha' | 'rohit' | 'meena' | 'tarun' | 'deepak' | 'sadInvestor';
  size?: number;
  className?: string;
}> = ({ type, size = 48, className = "" }) => {
  const s = size;

  switch (type) {
    case 'ankit': // Junior QA Engineer, 24 (Male, glasses, clean modern haircut, blue/purple hoodie)
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`rounded-full shrink-0 shadow-sm ${className}`}>
          <circle cx="50" cy="50" r="48" fill="#EEF2FF" stroke="#818CF8" strokeWidth="3" />
          {/* Hair back */}
          <path d="M26 44C26 28 36 18 50 18C64 18 74 28 74 44V52H26V44Z" fill="#1E1B4B" />
          {/* Face */}
          <ellipse cx="50" cy="52" rx="22" ry="24" fill="#FCD34D" />
          {/* Hair front */}
          <path d="M28 36C34 26 46 24 54 24C64 24 70 28 72 34C66 32 58 31 50 32C40 33 34 35 28 36Z" fill="#1E1B4B" />
          {/* Eyes & Eyebrows */}
          <ellipse cx="42" cy="48" rx="2.5" ry="3" fill="#1E1B4B" />
          <ellipse cx="58" cy="48" rx="2.5" ry="3" fill="#1E1B4B" />
          <path d="M38 42C41 40 45 41 45 41" stroke="#1E1B4B" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M62 42C59 40 55 41 55 41" stroke="#1E1B4B" strokeWidth="1.8" strokeLinecap="round" />
          {/* Glasses */}
          <rect x="35" y="43" width="14" height="11" rx="3" fill="none" stroke="#4F46E5" strokeWidth="2.2" />
          <rect x="51" y="43" width="14" height="11" rx="3" fill="none" stroke="#4F46E5" strokeWidth="2.2" />
          <line x1="49" y1="48" x2="51" y2="48" stroke="#4F46E5" strokeWidth="2.2" />
          {/* Blush & Smile */}
          <ellipse cx="37" cy="56" rx="3" ry="1.5" fill="#F87171" opacity="0.6" />
          <ellipse cx="63" cy="56" rx="3" ry="1.5" fill="#F87171" opacity="0.6" />
          <path d="M45 58C47 62 53 62 55 58" stroke="#1E1B4B" strokeWidth="2" strokeLinecap="round" />
          {/* Clothes */}
          <path d="M22 96C22 80 34 74 50 74C66 74 78 80 78 96" fill="#4F46E5" />
          <path d="M44 74L50 84L56 74" fill="#E0E7FF" />
        </svg>
      );

    case 'sneha': // Content Ops, 26 (Female, chic top bun, earrings, coral/yellow top)
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`rounded-full shrink-0 shadow-sm ${className}`}>
          <circle cx="50" cy="50" r="48" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="3" />
          {/* Bun */}
          <circle cx="50" cy="18" r="14" fill="#312E81" />
          {/* Hair base */}
          <circle cx="50" cy="46" r="28" fill="#312E81" />
          {/* Face */}
          <ellipse cx="50" cy="52" rx="21" ry="23" fill="#FDE68A" />
          {/* Bangs */}
          <path d="M30 40C36 32 46 32 50 34C54 32 64 32 70 40C64 36 56 36 50 37C44 36 36 36 30 40Z" fill="#312E81" />
          {/* Eyes with lashes */}
          <ellipse cx="42" cy="49" rx="2.5" ry="3" fill="#312E81" />
          <ellipse cx="58" cy="49" rx="2.5" ry="3" fill="#312E81" />
          <path d="M45 47L47 45" stroke="#312E81" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M61 47L63 45" stroke="#312E81" strokeWidth="1.5" strokeLinecap="round" />
          {/* Cheerful Smile & Blush */}
          <ellipse cx="36" cy="56" rx="3.5" ry="2" fill="#FB7185" opacity="0.7" />
          <ellipse cx="64" cy="56" rx="3.5" ry="2" fill="#FB7185" opacity="0.7" />
          <path d="M44 58C47 62 53 62 56 58" stroke="#312E81" strokeWidth="2" strokeLinecap="round" />
          {/* Gold Earrings */}
          <circle cx="28" cy="54" r="2.5" fill="#F59E0B" />
          <circle cx="72" cy="54" r="2.5" fill="#F59E0B" />
          {/* Clothes */}
          <path d="M22 96C22 78 34 72 50 72C66 72 78 78 78 96" fill="#F43F5E" />
          <path d="M42 72C42 80 58 80 58 72" fill="#FDE68A" />
        </svg>
      );

    case 'rohit': // BPO Exec, 23 (Male, undercut hairstyle, dark blue collar, energetic)
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`rounded-full shrink-0 shadow-sm ${className}`}>
          <circle cx="50" cy="50" r="48" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="3" />
          {/* Hair back */}
          <rect x="28" y="24" width="44" height="30" rx="8" fill="#18181B" />
          <path d="M30 26C38 16 62 16 70 26C74 32 74 44 74 44L26 44C26 44 26 32 30 26Z" fill="#18181B" />
          {/* Face */}
          <ellipse cx="50" cy="54" rx="21" ry="23" fill="#FCD34D" />
          {/* Eyes */}
          <ellipse cx="42" cy="50" rx="2.5" ry="3" fill="#18181B" />
          <ellipse cx="58" cy="50" rx="2.5" ry="3" fill="#18181B" />
          {/* Smile */}
          <path d="M45 61C47 64 53 64 55 61" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="37" cy="57" rx="3" ry="1.5" fill="#F87171" opacity="0.5" />
          <ellipse cx="63" cy="57" rx="3" ry="1.5" fill="#F87171" opacity="0.5" />
          {/* Clothes */}
          <path d="M24 96C24 80 34 75 50 75C66 75 76 80 76 96" fill="#0284C7" />
          <path d="M50 75L50 96" stroke="#BAE6FD" strokeWidth="2" />
        </svg>
      );

    case 'meena': // Teacher, 28 (Female, gentle smile, spectacles, teal saree / formal)
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`rounded-full shrink-0 shadow-sm ${className}`}>
          <circle cx="50" cy="50" r="48" fill="#FDF4FF" stroke="#F0ABFC" strokeWidth="3" />
          {/* Hair long */}
          <path d="M24 36C24 20 36 16 50 16C64 16 76 20 76 36C76 56 74 76 74 76H26C26 76 24 56 24 36Z" fill="#3B0764" />
          {/* Face */}
          <ellipse cx="50" cy="50" rx="21" ry="22" fill="#FDE68A" />
          {/* Eyes & Spectacles */}
          <ellipse cx="42" cy="48" rx="2" ry="2.5" fill="#3B0764" />
          <ellipse cx="58" cy="48" rx="2" ry="2.5" fill="#3B0764" />
          <circle cx="42" cy="48" r="6" fill="none" stroke="#9333EA" strokeWidth="2" />
          <circle cx="58" cy="48" r="6" fill="none" stroke="#9333EA" strokeWidth="2" />
          <line x1="48" y1="48" x2="52" y2="48" stroke="#9333EA" strokeWidth="2" />
          {/* Bindi & Warm smile */}
          <circle cx="50" cy="40" r="1.5" fill="#DC2626" />
          <path d="M45 59C47 62 53 62 55 59" stroke="#3B0764" strokeWidth="2" strokeLinecap="round" />
          {/* Clothes */}
          <path d="M22 96C22 78 34 72 50 72C66 72 78 78 78 96" fill="#0D9488" />
          <path d="M36 76L64 96" stroke="#FDE047" strokeWidth="4" />
        </svg>
      );

    case 'tarun': // Freelancer, 25 (Male, artistic beanie, mustache/beard stubble)
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`rounded-full shrink-0 shadow-sm ${className}`}>
          <circle cx="50" cy="50" r="48" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="3" />
          {/* Orange Beanie */}
          <path d="M26 36C26 22 36 14 50 14C64 14 74 22 74 36H26Z" fill="#EA580C" />
          <rect x="23" y="32" width="54" height="8" rx="4" fill="#C2410C" />
          {/* Face */}
          <ellipse cx="50" cy="54" rx="21" ry="23" fill="#FCD34D" />
          {/* Eyes */}
          <ellipse cx="42" cy="50" rx="2.5" ry="3" fill="#1F2937" />
          <ellipse cx="58" cy="50" rx="2.5" ry="3" fill="#1F2937" />
          {/* Mustache / Beard */}
          <path d="M43 59C46 58 54 58 57 59" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
          <path d="M46 63C48 65 52 65 54 63" stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round" />
          {/* Clothes */}
          <path d="M24 96C24 82 34 76 50 76C66 76 76 82 76 96" fill="#475569" />
          <circle cx="50" cy="85" r="3" fill="#F59E0B" />
        </svg>
      );

    case 'deepak': // Pharmacist, 27 (Male, neat parted hair, light blue shirt)
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`rounded-full shrink-0 shadow-sm ${className}`}>
          <circle cx="50" cy="50" r="48" fill="#F0F9FF" stroke="#7DD3FC" strokeWidth="3" />
          {/* Hair */}
          <path d="M28 36C28 22 38 18 50 18C62 18 72 22 72 36V46H28V36Z" fill="#172554" />
          <path d="M28 30C36 24 54 22 70 30" fill="#172554" />
          {/* Face */}
          <ellipse cx="50" cy="54" rx="21" ry="23" fill="#FDE68A" />
          {/* Eyes */}
          <ellipse cx="43" cy="50" rx="2.5" ry="3" fill="#172554" />
          <ellipse cx="57" cy="50" rx="2.5" ry="3" fill="#172554" />
          {/* Smile */}
          <path d="M45 61C48 64 52 64 55 61" stroke="#172554" strokeWidth="2" strokeLinecap="round" />
          {/* Clothes with medical cross badge */}
          <path d="M24 96C24 80 34 75 50 75C66 75 76 80 76 96" fill="#0284C7" />
          <circle cx="62" cy="84" r="5" fill="#FFFFFF" />
          <path d="M62 81V87M59 84H65" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'sadInvestor': // Exactly matching Spotify Slide 8's distressed character looking at phone!
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" fill="none" className={`shrink-0 ${className}`}>
          {/* Purple Headphones */}
          <path d="M30 65C20 40 40 18 60 18C80 18 100 40 90 65" stroke="#7C3AED" strokeWidth="8" strokeLinecap="round" />
          <rect x="22" y="55" width="14" height="24" rx="7" fill="#8B5CF6" />
          <rect x="84" y="55" width="14" height="24" rx="7" fill="#8B5CF6" />
          {/* Hair */}
          <path d="M34 50C34 28 44 22 60 22C76 22 86 28 86 50C86 68 84 80 84 80H36C36 80 34 68 34 50Z" fill="#3730A3" />
          {/* Face */}
          <ellipse cx="60" cy="58" rx="24" ry="26" fill="#FDE68A" />
          {/* Bangs */}
          <path d="M38 40C46 34 54 34 60 36C66 34 74 34 82 40C76 36 68 36 60 37C52 36 44 36 38 40Z" fill="#3730A3" />
          {/* Distressed/Sad Eyes (curved down) */}
          <path d="M46 54C49 51 54 51 55 54" stroke="#312E81" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M65 54C66 51 71 51 74 54" stroke="#312E81" strokeWidth="2.5" strokeLinecap="round" />
          {/* Worry lines / sweat drop */}
          <path d="M78 44C78 44 82 48 80 50C78 52 76 50 78 44Z" fill="#38BDF8" />
          {/* Sad downturned mouth */}
          <path d="M52 69C56 66 64 66 68 69" stroke="#312E81" strokeWidth="2.5" strokeLinecap="round" />
          {/* Body holding red smartphone */}
          <path d="M30 114C30 92 42 86 60 86C78 86 90 92 90 114" fill="#C084FC" />
          {/* Phone with red alert screen */}
          <rect x="48" y="78" width="24" height="36" rx="4" fill="#1E293B" stroke="#CBD5E1" strokeWidth="2" />
          <rect x="51" y="82" width="18" height="24" rx="2" fill="#EF4444" />
          <path d="M57 91L63 97M63 91L57 97" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
};

// Cute 3D Illustrated Floating Assets (Magnifying Glass, Rocket, Downward Trend, Trophy)
export const Cute3DAsset: React.FC<{
  type: 'glass' | 'rocket' | 'chartDown' | 'trophy' | 'target' | 'vault';
  size?: number;
  className?: string;
}> = ({ type, size = 64, className = "" }) => {
  const s = size;

  switch (type) {
    case 'glass': // 3D Magnifying glass with musical note / chart & sparkles matching Spotify PDF Page 1 & Page 8
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`drop-shadow-lg ${className}`}>
          {/* Sparkles */}
          <path d="M20 20L22 14L24 20L30 22L24 24L22 30L20 24L14 22Z" fill="#F472B6" />
          <path d="M84 26L85.5 22L87 26L91 27.5L87 29L85.5 33L84 29L80 27.5Z" fill="#A855F7" />
          {/* Handle */}
          <path d="M62 62L82 82C84 84 84 87 82 89L80 91C78 93 75 93 73 91L53 71" stroke="#6366F1" strokeWidth="10" strokeLinecap="round" />
          {/* Glass Rim */}
          <circle cx="44" cy="44" r="28" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="7" />
          <circle cx="44" cy="44" r="23" fill="url(#glassGrad)" fillOpacity="0.8" />
          {/* Chart line / note inside */}
          <path d="M32 50L40 42L48 46L56 36" stroke="#4338CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="56" cy="36" r="3.5" fill="#10B981" />
          {/* Glass reflection */}
          <path d="M26 34C28 26 36 20 44 20" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <defs>
            <linearGradient id="glassGrad" x1="20" y1="20" x2="68" y2="68" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C7D2FE" />
              <stop offset="1" stopColor="#E0E7FF" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'chartDown': // 3D Red downward trend with 3D bar stairs matching Spotify Slide 8
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`drop-shadow-md ${className}`}>
          {/* 3D Bar 1 */}
          <rect x="20" y="35" width="12" height="45" rx="3" fill="#A5B4FC" />
          <path d="M20 35L24 30H36L32 35Z" fill="#818CF8" />
          {/* 3D Bar 2 */}
          <rect x="38" y="48" width="12" height="32" rx="3" fill="#C4B5FD" />
          <path d="M38 48L42 43H54L50 48Z" fill="#A78BFA" />
          {/* 3D Bar 3 */}
          <rect x="56" y="58" width="12" height="22" rx="3" fill="#DDD6FE" />
          <path d="M56 58L60 53H72L68 58Z" fill="#C4B5FD" />
          {/* Red curved downward arrow */}
          <path d="M18 22C36 22 55 36 78 68" stroke="#EF4444" strokeWidth="7" strokeLinecap="round" />
          <path d="M66 68H79V55" stroke="#EF4444" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'rocket': // Cute 3D purple/emerald rocket matching Spotify Slide 6
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`drop-shadow-lg ${className}`}>
          {/* Smoke clouds */}
          <circle cx="28" cy="80" r="10" fill="#E2E8F0" />
          <circle cx="38" cy="86" r="8" fill="#CBD5E1" />
          <circle cx="22" cy="88" r="6" fill="#CBD5E1" />
          {/* Flame */}
          <path d="M34 66C34 66 38 78 30 84C42 84 46 76 46 66Z" fill="#F59E0B" />
          <path d="M36 68C36 68 38 76 34 80C40 80 42 74 42 68Z" fill="#EF4444" />
          {/* Fins */}
          <path d="M38 52L24 64L34 68Z" fill="#6366F1" />
          <path d="M62 40L76 54L66 58Z" fill="#6366F1" />
          {/* Rocket Body */}
          <path d="M74 26C56 22 40 40 38 64C50 64 74 60 74 26Z" fill="#8B5CF6" />
          {/* Porthole */}
          <circle cx="56" cy="42" r="7" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2.5" />
          <circle cx="56" cy="42" r="4" fill="#00D09C" />
          {/* Tip */}
          <path d="M74 26C70 24 66 23 64 23C66 25 68 28 74 26Z" fill="#00D09C" />
        </svg>
      );

    case 'trophy': // Cute Golden 3D trophy
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`drop-shadow-md ${className}`}>
          {/* Base */}
          <rect x="36" y="76" width="28" height="8" rx="3" fill="#D97706" />
          <rect x="30" y="84" width="40" height="8" rx="3" fill="#92400E" />
          {/* Stem */}
          <path d="M46 58H54V76H46Z" fill="#F59E0B" />
          {/* Handles */}
          <path d="M34 32C24 32 24 46 34 48" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
          <path d="M66 32C76 32 76 46 66 48" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
          {/* Cup */}
          <path d="M32 24H68V42C68 52 60 58 50 58C40 58 32 52 32 42V24Z" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
          {/* Star on Cup */}
          <path d="M50 32L52 37L57 37L53 40L55 45L50 42L45 45L47 40L43 37L48 37Z" fill="#FFFFFF" />
        </svg>
      );

    case 'target': // Cute 3D dartboard target
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`drop-shadow-md ${className}`}>
          <circle cx="50" cy="50" r="38" fill="#FEE2E2" stroke="#EF4444" strokeWidth="4" />
          <circle cx="50" cy="50" r="26" fill="#FFFFFF" stroke="#EF4444" strokeWidth="4" />
          <circle cx="50" cy="50" r="14" fill="#EF4444" />
          <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
        </svg>
      );

    case 'vault':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none" className={`drop-shadow-md ${className}`}>
          <rect x="22" y="22" width="56" height="56" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="4" />
          <circle cx="50" cy="50" r="18" fill="#334155" stroke="#94A3B8" strokeWidth="3" />
          <circle cx="50" cy="50" r="8" fill="#00D09C" />
          <circle cx="30" cy="30" r="3" fill="#64748B" />
          <circle cx="70" cy="30" r="3" fill="#64748B" />
        </svg>
      );
  }
};

// 3D Groww Logo with spherical lighting, specular reflection, and clean 3D typography
export const Groww3DLogo: React.FC<{ size?: number; showText?: boolean; className?: string }> = ({
  size = 36,
  showText = true,
  className = ""
}) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* 3D Sphere Emblem */}
      <div 
        style={{ width: `${size}px`, height: `${size}px` }} 
        className="relative shrink-0 filter drop-shadow-[0_4px_10px_rgba(0,208,156,0.25)] transition-transform hover:scale-105"
      >
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <defs>
            {/* 3D Sphere drop shadow */}
            <filter id="sphereShadow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.22" />
            </filter>

            {/* Blue Gradient (Top-Right) */}
            <radialGradient id="growwBlue3D" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="35%" stopColor="#5367FF" />
              <stop offset="75%" stopColor="#3730A3" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </radialGradient>

            {/* Green Gradient (Bottom-Left) */}
            <radialGradient id="growwGreen3D" cx="35%" cy="55%" r="70%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="40%" stopColor="#00D09C" />
              <stop offset="80%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </radialGradient>

            {/* Specular Gloss Arc */}
            <linearGradient id="growwGloss" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Inner Bevel Light */}
            <linearGradient id="rimLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
            </linearGradient>

            {/* Circle boundary clip */}
            <clipPath id="circleClip">
              <circle cx="50" cy="50" r="46" />
            </clipPath>
          </defs>

          {/* Base 3D Sphere Body */}
          <g filter="url(#sphereShadow)">
            <g clipPath="url(#circleClip)">
              {/* Upper Blue Half (fills full circle as base) */}
              <circle cx="50" cy="50" r="46" fill="url(#growwBlue3D)" />

              {/* Lower Green Region matching official Groww upward wave */}
              <path
                d="M 2 70 C 18 64, 30 52, 44 49 C 52 47, 58 53, 68 49 C 78 45, 86 36, 98 32 L 102 102 L -2 102 Z"
                fill="url(#growwGreen3D)"
              />

              {/* Subtle 3D ridge between the two colors */}
              <path
                d="M 2 70 C 18 64, 30 52, 44 49 C 52 47, 58 53, 68 49 C 78 45, 86 36, 98 32"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeOpacity="0.4"
                fill="none"
              />
            </g>
          </g>

          {/* 3D Specular Highlight Bulb */}
          <ellipse cx="40" cy="22" rx="22" ry="11" fill="url(#growwGloss)" transform="rotate(-18 40 22)" />

          {/* Spherical Rim Ring */}
          <circle cx="50" cy="50" r="46" stroke="url(#rimLight)" strokeWidth="1.5" fill="none" opacity="0.7" />
        </svg>
      </div>

      {/* 3D Wordmark in Groww Green Palette */}
      {showText && (
        <span className="text-[22px] font-black tracking-tight text-[#00D09C] drop-shadow-[0_2px_6px_rgba(0,208,156,0.28)] flex items-center">
          Groww
        </span>
      )}
    </div>
  );
};

// Cute 3D Icon Badge with spherical radial shading, bevel rim light, and specular gloss
export const Cute3DBadge: React.FC<{
  children: React.ReactNode;
  color?: 'purple' | 'emerald' | 'blue' | 'rose' | 'amber';
  size?: number;
  className?: string;
}> = ({ children, color = 'purple', size = 32, className = "" }) => {
  const colorMap = {
    purple: {
      bg: 'bg-gradient-to-br from-indigo-400 via-purple-600 to-indigo-900',
      shadow: 'shadow-[0_8px_16px_rgba(99,102,241,0.3)]',
      border: 'border-purple-300/40',
      text: 'text-white'
    },
    emerald: {
      bg: 'bg-gradient-to-br from-emerald-300 via-[#00D09C] to-emerald-800',
      shadow: 'shadow-[0_8px_16px_rgba(0,208,156,0.3)]',
      border: 'border-emerald-200/40',
      text: 'text-white'
    },
    blue: {
      bg: 'bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-950',
      shadow: 'shadow-[0_8px_16px_rgba(37,99,235,0.3)]',
      border: 'border-blue-200/40',
      text: 'text-white'
    },
    rose: {
      bg: 'bg-gradient-to-br from-pink-400 via-rose-500 to-rose-900',
      shadow: 'shadow-[0_8px_16px_rgba(244,63,94,0.3)]',
      border: 'border-rose-200/40',
      text: 'text-white'
    },
    amber: {
      bg: 'bg-gradient-to-br from-amber-300 via-amber-500 to-amber-800',
      shadow: 'shadow-[0_8px_16px_rgba(245,158,11,0.3)]',
      border: 'border-amber-200/40',
      text: 'text-white'
    }
  };

  const scheme = colorMap[color];

  return (
    <div 
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`relative rounded-2xl ${scheme.bg} ${scheme.shadow} ${scheme.border} border flex items-center justify-center shrink-0 ${scheme.text} transform transition-transform hover:scale-105 select-none ${className}`}
    >
      {/* Specular gloss top ellipse */}
      <span className="absolute top-1 left-1.5 right-1.5 h-1.5 rounded-full bg-white/40 pointer-events-none" />
      {/* Icon content */}
      <div className="relative z-10 flex items-center justify-center drop-shadow-sm">
        {children}
      </div>
    </div>
  );
};

export type Icon3DType =
  | 'smartphone'
  | 'shieldCheck'
  | 'shieldAlert'
  | 'lock'
  | 'checkCircle'
  | 'sparkles'
  | 'alertTriangle'
  | 'scale'
  | 'flame'
  | 'calendar'
  | 'skipRotate'
  | 'bot'
  | 'send'
  | 'book'
  | 'trendDown'
  | 'bronzeMedal'
  | 'silverMedal'
  | 'goldMedal'
  | 'diamondGem'
  | 'platinumCrown'
  | 'chevronRight'
  | 'arrowLeft'
  | 'stopAlert'
  | 'message'
  | 'database'
  | 'search'
  | 'play'
  | 'info'
  | 'fileReport'
  | 'folder'
  | 'brain'
  | 'chevronDown'
  | 'chevronUp';

export const Icon3D: React.FC<{
  type: Icon3DType;
  size?: number;
  className?: string;
}> = ({ type, size = 24, className = '' }) => {
  const s = size;

  switch (type) {
    case 'smartphone':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(16,185,129,0.35)] ${className}`}>
          <defs>
            <linearGradient id="phoneBody3D" x1="12" y1="6" x2="52" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <linearGradient id="phoneScreen3D" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>
          {/* 3D Extrusion Base */}
          <rect x="14" y="8" width="38" height="52" rx="10" fill="#064E3B" />
          {/* Main Body */}
          <rect x="12" y="5" width="38" height="52" rx="10" fill="url(#phoneBody3D)" stroke="#A7F3D0" strokeWidth="1.5" />
          {/* Screen */}
          <rect x="16" y="10" width="30" height="41" rx="6" fill="url(#phoneScreen3D)" />
          {/* 3D Green Chart Wave inside screen */}
          <path d="M20 38L27 31L33 34L42 23" stroke="#00D09C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="42" cy="23" r="3" fill="#34D399" />
          {/* Top Gloss */}
          <path d="M18 12C22 10 32 10 42 12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
          {/* Home bar */}
          <rect x="26" y="47" width="10" height="2" rx="1" fill="#64748B" />
        </svg>
      );

    case 'shieldCheck':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_7px_rgba(16,185,129,0.35)] ${className}`}>
          <defs>
            <linearGradient id="shieldEm3D" x1="12" y1="8" x2="52" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="45%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          {/* 3D Depth Shadow */}
          <path d="M32 9L52 17V33C52 46 43 55 32 59C21 55 12 46 12 33V17L32 9Z" fill="#064E3B" />
          {/* Main 3D Shield */}
          <path d="M32 6L52 14V30C52 43 43 52 32 56C21 52 12 43 12 30V14L32 6Z" fill="url(#shieldEm3D)" stroke="#D1FAE5" strokeWidth="1.5" />
          {/* Specular Highlight */}
          <path d="M32 10L16 16V28C16 30 16.5 32 17 34C21 24 28 16 44 14L32 10Z" fill="#FFFFFF" fillOpacity="0.28" />
          {/* Embossed 3D Checkmark */}
          <path d="M23 31L29 37L42 24" stroke="#064E3B" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
          <path d="M23 29.5L29 35.5L42 22.5" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'shieldAlert':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_7px_rgba(244,63,94,0.4)] ${className}`}>
          <defs>
            <linearGradient id="shieldRose3D" x1="12" y1="8" x2="52" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDA4AF" />
              <stop offset="45%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#9F1239" />
            </linearGradient>
          </defs>
          <path d="M32 9L52 17V33C52 46 43 55 32 59C21 55 12 46 12 33V17L32 9Z" fill="#881337" />
          <path d="M32 6L52 14V30C52 43 43 52 32 56C21 52 12 43 12 30V14L32 6Z" fill="url(#shieldRose3D)" stroke="#FFE4E6" strokeWidth="1.5" />
          <path d="M32 10L16 16V28C21 22 28 15 44 14L32 10Z" fill="#FFFFFF" fillOpacity="0.28" />
          <path d="M32 20V33" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          <circle cx="32" cy="42" r="3" fill="#FFFFFF" />
        </svg>
      );

    case 'lock':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_7px_rgba(99,102,241,0.35)] ${className}`}>
          <defs>
            <linearGradient id="lockBody3D" x1="14" y1="26" x2="50" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="50%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#312E81" />
            </linearGradient>
          </defs>
          {/* 3D Shackle */}
          <path d="M22 28V19C22 13.5 26.5 9 32 9C37.5 9 42 13.5 42 19V28" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
          <path d="M22 28V19C22 13.5 26.5 9 32 9C37.5 9 42 13.5 42 19V28" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
          {/* 3D Base Extrusion */}
          <rect x="14" y="29" width="36" height="28" rx="8" fill="#1E1B4B" />
          {/* Main Lock Body */}
          <rect x="14" y="26" width="36" height="28" rx="8" fill="url(#lockBody3D)" stroke="#C7D2FE" strokeWidth="1.5" />
          {/* Gloss */}
          <rect x="18" y="29" width="28" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.35" />
          {/* Keyhole */}
          <circle cx="32" cy="39" r="4" fill="#FDE047" />
          <path d="M32 42V47" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'checkCircle':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_7px_rgba(147,51,234,0.35)] ${className}`}>
          <defs>
            <radialGradient id="sphereCheck3D" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="55%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#4C1D95" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="34" r="24" fill="#3B0764" />
          <circle cx="32" cy="31" r="24" fill="url(#sphereCheck3D)" stroke="#E9D5FF" strokeWidth="1.5" />
          <ellipse cx="25" cy="19" rx="10" ry="5" fill="#FFFFFF" fillOpacity="0.35" transform="rotate(-15 25 19)" />
          <path d="M22 31.5L28.5 38L42 24.5" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'sparkles':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_7px_rgba(245,158,11,0.4)] ${className}`}>
          <defs>
            <linearGradient id="starGold3D" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
          {/* Main 3D 4-Point Star */}
          <path d="M30 8L36 24L52 30L36 36L30 52L24 36L8 30L24 24L30 8Z" fill="url(#starGold3D)" stroke="#FEF9C3" strokeWidth="1.5" />
          {/* Secondary Emerald 3D Star */}
          <path d="M49 8L51.5 14.5L58 17L51.5 19.5L49 26L46.5 19.5L40 17L46.5 14.5L49 8Z" fill="#00D09C" stroke="#A7F3D0" strokeWidth="1" />
          {/* Tertiary Purple 3D Star */}
          <path d="M16 42L18 47L23 49L18 51L16 56L14 51L9 49L14 47L16 42Z" fill="#A855F7" />
          <circle cx="30" cy="30" r="3.5" fill="#FFFFFF" fillOpacity="0.8" />
        </svg>
      );

    case 'alertTriangle':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_7px_rgba(245,158,11,0.4)] ${className}`}>
          <defs>
            <linearGradient id="triAmber3D" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="55%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
          {/* 3D Base Extrusion */}
          <path d="M35.5 13C33.9 10.2 29.9 10.2 28.3 13L9.3 47C7.7 49.8 9.7 53.5 13 53.5H51C54.3 53.5 56.3 49.8 54.7 47L35.5 13Z" fill="#78350F" />
          {/* Main 3D Triangle */}
          <path d="M35.5 10C33.9 7.2 29.9 7.2 28.3 10L9.3 44C7.7 46.8 9.7 50.5 13 50.5H51C54.3 50.5 56.3 46.8 54.7 44L35.5 10Z" fill="url(#triAmber3D)" stroke="#FEF08A" strokeWidth="1.5" />
          {/* Exclamation */}
          <path d="M32 22V34" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
          <circle cx="32" cy="42" r="3" fill="#1E293B" />
        </svg>
      );

    case 'scale':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_7px_rgba(0,208,156,0.35)] ${className}`}>
          <defs>
            <linearGradient id="scale3D" x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="50%" stopColor="#00D09C" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          <rect x="20" y="50" width="24" height="6" rx="3" fill="url(#scale3D)" />
          <rect x="29" y="14" width="6" height="38" rx="3" fill="url(#scale3D)" />
          <rect x="12" y="18" width="40" height="5" rx="2.5" fill="#FBBF24" />
          <path d="M16 22L10 36H22L16 22Z" fill="#FDE047" stroke="#F59E0B" strokeWidth="1.5" />
          <path d="M48 22L42 36H54L48 22Z" fill="#FDE047" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="32" cy="14" r="5" fill="#F59E0B" stroke="#FEF08A" strokeWidth="1.5" />
        </svg>
      );

    case 'flame':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_9px_rgba(249,115,22,0.5)] ${className}`}>
          <defs>
            <radialGradient id="flameOuter3D" cx="50%" cy="65%" r="65%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="45%" stopColor="#F97316" />
              <stop offset="85%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#9A3412" />
            </radialGradient>
            <radialGradient id="flameInner3D" cx="50%" cy="70%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </radialGradient>
          </defs>
          {/* Outer 3D Volumetric Flame */}
          <path
            d="M34 6C34 6 49 18 49 35C49 47.5 40.5 56 32 56C23.5 56 15 47.5 15 35C15 26 21 18 24 15C24 21 28 23 28 23C26 14 34 6 34 6Z"
            fill="url(#flameOuter3D)"
            stroke="#FED7AA"
            strokeWidth="1.2"
          />
          {/* Inner Glowing Core */}
          <path
            d="M32 26C32 26 40 33 40 42C40 48.5 36.5 53 32 53C27.5 53 24 48.5 24 42C24 36 28 31 32 26Z"
            fill="url(#flameInner3D)"
          />
          {/* Specular Shine */}
          <ellipse cx="26" cy="36" rx="2.5" ry="5" fill="#FFFFFF" fillOpacity="0.6" transform="rotate(-12 26 36)" />
        </svg>
      );

    case 'calendar':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(16,185,129,0.35)] ${className}`}>
          <defs>
            <linearGradient id="calHeader3D" x1="10" y1="12" x2="54" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="calBody3D" x1="10" y1="24" x2="54" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
          </defs>
          {/* 3D Extrusion */}
          <rect x="10" y="16" width="44" height="40" rx="10" fill="#064E3B" />
          {/* Main Card */}
          <rect x="10" y="13" width="44" height="40" rx="10" fill="url(#calBody3D)" stroke="#CBD5E1" strokeWidth="1.2" />
          {/* Top Header */}
          <path d="M10 23C10 17.5 14.5 13 20 13H44C49.5 13 54 17.5 54 23V26H10V23Z" fill="url(#calHeader3D)" />
          {/* Binder Rings */}
          <rect x="20" y="8" width="5" height="10" rx="2.5" fill="#F8FAFC" stroke="#475569" strokeWidth="1.2" />
          <rect x="39" y="8" width="5" height="10" rx="2.5" fill="#F8FAFC" stroke="#475569" strokeWidth="1.2" />
          {/* 3D Date Dots */}
          <rect x="17" y="32" width="7" height="6" rx="2" fill="#94A3B8" />
          <rect x="28.5" y="32" width="7" height="6" rx="2" fill="#00D09C" />
          <rect x="40" y="32" width="7" height="6" rx="2" fill="#94A3B8" />
          <rect x="17" y="41" width="7" height="6" rx="2" fill="#94A3B8" />
          <rect x="28.5" y="41" width="7" height="6" rx="2" fill="#6366F1" />
          <rect x="40" y="41" width="7" height="6" rx="2" fill="#94A3B8" />
        </svg>
      );

    case 'skipRotate':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(99,102,241,0.4)] ${className}`}>
          <defs>
            <radialGradient id="skipSphere3D" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#A5B4FC" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#312E81" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="34" r="24" fill="#1E1B4B" />
          <circle cx="32" cy="31" r="24" fill="url(#skipSphere3D)" stroke="#E0E7FF" strokeWidth="1.5" />
          <ellipse cx="25" cy="18" rx="10" ry="4.5" fill="#FFFFFF" fillOpacity="0.35" transform="rotate(-15 25 18)" />
          {/* 3D Curved Skip Arrow */}
          <path d="M21 26C24 20 31 18 37 20C43 22 46 29 44 36C42 42 35 45 28 43" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M18 18V27H27" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'bot':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(0,208,156,0.4)] ${className}`}>
          <defs>
            <linearGradient id="botBody3D" x1="12" y1="16" x2="52" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="50%" stopColor="#00D09C" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          {/* Antenna */}
          <line x1="32" y1="8" x2="32" y2="17" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />
          <circle cx="32" cy="8" r="4.5" fill="#FDE047" stroke="#FEF08A" strokeWidth="1.5" />
          {/* Side Ears */}
          <rect x="7" y="28" width="6" height="14" rx="3" fill="#059669" />
          <rect x="51" y="28" width="6" height="14" rx="3" fill="#059669" />
          {/* 3D Head Shadow */}
          <rect x="13" y="20" width="38" height="34" rx="12" fill="#064E3B" />
          {/* Main 3D Head */}
          <rect x="13" y="17" width="38" height="34" rx="12" fill="url(#botBody3D)" stroke="#D1FAE5" strokeWidth="1.5" />
          {/* Visor Screen */}
          <rect x="19" y="25" width="26" height="16" rx="6" fill="#0F172A" stroke="#34D399" strokeWidth="1.2" />
          {/* Glowing Cyan Eyes */}
          <circle cx="26" cy="33" r="3" fill="#38BDF8" />
          <circle cx="38" cy="33" r="3" fill="#38BDF8" />
          {/* Smile */}
          <path d="M29 37C30.5 38.5 33.5 38.5 35 37" stroke="#00D09C" strokeWidth="2" strokeLinecap="round" />
          {/* Gloss */}
          <path d="M20 20H44" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.45" />
        </svg>
      );

    case 'send':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_3px_6px_rgba(15,23,42,0.35)] ${className}`}>
          <defs>
            <linearGradient id="sendPlane3D" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#312E81" />
            </linearGradient>
          </defs>
          <path d="M54 10L28 36L36 54L54 10Z" fill="#4338CA" />
          <path d="M54 10L10 28L28 36L54 10Z" fill="url(#sendPlane3D)" stroke="#E0E7FF" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M28 36V48L34 41" fill="#312E81" />
        </svg>
      );

    case 'book':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(0,208,156,0.35)] ${className}`}>
          <defs>
            <linearGradient id="bookCover3D" x1="8" y1="12" x2="56" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="55%" stopColor="#00D09C" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          {/* Book 3D Base */}
          <path d="M10 18C18 15 26 16 32 20C38 16 46 15 54 18V50C46 47 38 48 32 52C26 48 18 47 10 50V18Z" fill="#064E3B" />
          {/* Left & Right 3D Pages */}
          <path d="M10 14C18 11 26 12 32 16C38 12 46 11 54 14V46C46 43 38 44 32 48C26 44 18 43 10 46V14Z" fill="url(#bookCover3D)" stroke="#D1FAE5" strokeWidth="1.5" />
          <line x1="32" y1="16" x2="32" y2="48" stroke="#064E3B" strokeWidth="2.5" />
          {/* Page Lines */}
          <path d="M16 23H26M16 30H26M38 23H48M38 30H48" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          {/* Golden Bookmark Ribbon */}
          <path d="M42 13V26L45 23L48 26V13" fill="#FBBF24" />
        </svg>
      );

    case 'trendDown':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_3px_6px_rgba(244,63,94,0.4)] ${className}`}>
          <defs>
            <linearGradient id="downRose3D" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDA4AF" />
              <stop offset="50%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#9F1239" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="48" height="48" rx="14" fill="url(#downRose3D)" stroke="#FFE4E6" strokeWidth="1.5" />
          <path d="M18 22L28 32L35 25L46 38" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 38H46V28" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'bronzeMedal':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_7px_rgba(217,119,6,0.45)] ${className}`}>
          <defs>
            <radialGradient id="bronze3D" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FDBA74" />
              <stop offset="55%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </radialGradient>
          </defs>
          {/* Ribbon */}
          <path d="M22 6L28 22H36L42 6H22Z" fill="#EF4444" />
          {/* 3D Coin */}
          <circle cx="32" cy="39" r="19" fill="#451A03" />
          <circle cx="32" cy="36" r="19" fill="url(#bronze3D)" stroke="#FED7AA" strokeWidth="1.8" />
          <circle cx="32" cy="36" r="14" stroke="#FEF3C7" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
          {/* Star */}
          <path d="M32 25L34.8 31L41.2 31.8L36.5 36.2L37.8 42.5L32 39.2L26.2 42.5L27.5 36.2L22.8 31.8L29.2 31L32 25Z" fill="#FEF3C7" />
        </svg>
      );

    case 'silverMedal':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_7px_rgba(148,163,184,0.45)] ${className}`}>
          <defs>
            <radialGradient id="silver3D" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="55%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#334155" />
            </radialGradient>
          </defs>
          <path d="M22 6L28 22H36L42 6H22Z" fill="#3B82F6" />
          <circle cx="32" cy="39" r="19" fill="#1E293B" />
          <circle cx="32" cy="36" r="19" fill="url(#silver3D)" stroke="#F8FAFC" strokeWidth="1.8" />
          <path d="M32 25L34.8 31L41.2 31.8L36.5 36.2L37.8 42.5L32 39.2L26.2 42.5L27.5 36.2L22.8 31.8L29.2 31L32 25Z" fill="#FFFFFF" />
        </svg>
      );

    case 'goldMedal':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(234,179,8,0.5)] ${className}`}>
          <defs>
            <radialGradient id="gold3D" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#854D0E" />
            </radialGradient>
          </defs>
          <path d="M22 6L28 22H36L42 6H22Z" fill="#10B981" />
          <circle cx="32" cy="39" r="19" fill="#713F12" />
          <circle cx="32" cy="36" r="19" fill="url(#gold3D)" stroke="#FEF9C3" strokeWidth="1.8" />
          <path d="M32 25L34.8 31L41.2 31.8L36.5 36.2L37.8 42.5L32 39.2L26.2 42.5L27.5 36.2L22.8 31.8L29.2 31L32 25Z" fill="#FFFFFF" />
        </svg>
      );

    case 'diamondGem':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_9px_rgba(56,189,248,0.5)] ${className}`}>
          <defs>
            <linearGradient id="diamond3D" x1="10" y1="12" x2="54" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="45%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <path d="M20 14H44L56 28L32 54L8 28L20 14Z" fill="url(#diamond3D)" stroke="#BAE6FD" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8 28H56M20 14L26 28L32 54M44 14L38 28L32 54M26 28L32 14L38 28" stroke="#E0F2FE" strokeWidth="1.3" strokeOpacity="0.8" />
        </svg>
      );

    case 'platinumCrown':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_9px_rgba(168,85,247,0.5)] ${className}`}>
          <defs>
            <linearGradient id="platCrown3D" x1="10" y1="14" x2="54" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F3E8FF" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#6B21A8" />
            </linearGradient>
          </defs>
          <path d="M10 46L14 22L25 32L32 16L39 32L50 22L54 46H10Z" fill="url(#platCrown3D)" stroke="#F3E8FF" strokeWidth="1.8" strokeLinejoin="round" />
          <rect x="10" y="48" width="44" height="6" rx="3" fill="#7E22CE" stroke="#E9D5FF" strokeWidth="1.2" />
          <circle cx="14" cy="19" r="3" fill="#FDE047" />
          <circle cx="32" cy="13" r="3.5" fill="#00D09C" />
          <circle cx="50" cy="19" r="3" fill="#FDE047" />
        </svg>
      );

    case 'chevronRight':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_2px_4px_rgba(15,23,42,0.3)] ${className}`}>
          <circle cx="32" cy="32" r="24" fill="#1E293B" fillOpacity="0.45" stroke="#94A3B8" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M27 20L39 32L27 44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'arrowLeft':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_2px_4px_rgba(15,23,42,0.3)] ${className}`}>
          <circle cx="32" cy="32" r="24" fill="#1E293B" fillOpacity="0.35" stroke="#94A3B8" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M36 20L24 32L36 44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'stopAlert':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_3px_6px_rgba(244,63,94,0.45)] ${className}`}>
          <defs>
            <linearGradient id="stopOct3D" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDA4AF" />
              <stop offset="50%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#881337" />
            </linearGradient>
          </defs>
          <path d="M22 8H42L56 22V42L42 56H22L8 42V22L22 8Z" fill="url(#stopOct3D)" stroke="#FFE4E6" strokeWidth="2" />
          <rect x="20" y="29" width="24" height="6" rx="3" fill="#FFFFFF" />
        </svg>
      );

    case 'message':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(244,63,94,0.35)] ${className}`}>
          <defs>
            <linearGradient id="msgBubble3D" x1="10" y1="10" x2="54" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDA4AF" />
              <stop offset="50%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#9F1239" />
            </linearGradient>
          </defs>
          <path d="M12 16C12 11.6 15.6 8 20 8H44C48.4 8 52 11.6 52 16V36C52 40.4 48.4 44 44 44H26L14 54V44C12.9 44 12 41.5 12 36V16Z" fill="url(#msgBubble3D)" stroke="#FFE4E6" strokeWidth="1.5" />
          <circle cx="24" cy="26" r="3" fill="#FFFFFF" />
          <circle cx="32" cy="26" r="3" fill="#FFFFFF" />
          <circle cx="40" cy="26" r="3" fill="#FFFFFF" />
        </svg>
      );

    case 'database':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(0,208,156,0.4)] ${className}`}>
          <defs>
            <linearGradient id="dbCyl3D" x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="50%" stopColor="#00D09C" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          {/* Bottom Cylinder */}
          <path d="M14 40V49C14 53.4 22.1 57 32 57C41.9 57 50 53.4 50 49V40" fill="url(#dbCyl3D)" stroke="#D1FAE5" strokeWidth="1.4" />
          {/* Middle Cylinder */}
          <path d="M14 27V38C14 42.4 22.1 46 32 46C41.9 46 50 42.4 50 38V27" fill="url(#dbCyl3D)" stroke="#D1FAE5" strokeWidth="1.4" />
          {/* Top Cylinder */}
          <path d="M14 16V26C14 30.4 22.1 34 32 34C41.9 34 50 30.4 50 26V16" fill="url(#dbCyl3D)" stroke="#D1FAE5" strokeWidth="1.4" />
          <ellipse cx="32" cy="16" rx="18" ry="7" fill="#34D399" stroke="#ECFDF5" strokeWidth="1.5" />
          {/* LED Status Dots */}
          <circle cx="42" cy="28" r="2" fill="#FEF08A" />
          <circle cx="42" cy="40" r="2" fill="#FEF08A" />
          <circle cx="42" cy="51" r="2" fill="#FEF08A" />
        </svg>
      );

    case 'search':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(56,189,248,0.4)] ${className}`}>
          <defs>
            <radialGradient id="lens3D" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="55%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </radialGradient>
          </defs>
          <path d="M39 39L53 53" stroke="#6366F1" strokeWidth="8" strokeLinecap="round" />
          <path d="M39 39L53 53" stroke="#A5B4FC" strokeWidth="3" strokeLinecap="round" />
          <circle cx="28" cy="28" r="18" fill="url(#lens3D)" stroke="#BAE6FD" strokeWidth="3" />
          <path d="M20 20C22 17 26 16 30 17" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'play':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(15,23,42,0.35)] ${className}`}>
          <defs>
            <linearGradient id="play3D" x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="55%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="34" r="24" fill="#064E3B" />
          <circle cx="32" cy="31" r="24" fill="url(#play3D)" stroke="#D1FAE5" strokeWidth="1.5" />
          <path d="M26 20L44 31L26 42V20Z" fill="#FFFFFF" stroke="#ECFDF5" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );

    case 'info':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(99,102,241,0.4)] ${className}`}>
          <defs>
            <radialGradient id="infoSphere3D" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="55%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="34" r="24" fill="#172554" />
          <circle cx="32" cy="31" r="24" fill="url(#infoSphere3D)" stroke="#DBEAFE" strokeWidth="1.5" />
          <circle cx="32" cy="20" r="3" fill="#FFFFFF" />
          <path d="M32 28V42" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    case 'fileReport':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(16,185,129,0.35)] ${className}`}>
          <defs>
            <linearGradient id="docBody3D" x1="14" y1="8" x2="50" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="55%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          <path d="M16 12C16 9.8 17.8 8 20 8H38L50 20V52C50 54.2 48.2 56 46 56H20C17.8 56 16 54.2 16 52V12Z" fill="url(#docBody3D)" stroke="#D1FAE5" strokeWidth="1.5" />
          <path d="M38 8V20H50" fill="#A7F3D0" stroke="#D1FAE5" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M23 28H41M23 36H41M23 44H34" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'folder':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(245,158,11,0.4)] ${className}`}>
          <defs>
            <linearGradient id="folder3D" x1="8" y1="14" x2="56" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
          <path d="M8 18C8 15.2 10.2 13 13 13H26L31 19H51C53.8 19 56 21.2 56 24V48C56 50.8 53.8 53 51 53H13C10.2 53 8 50.8 8 48V18Z" fill="url(#folder3D)" stroke="#FEF08A" strokeWidth="1.5" />
          <rect x="14" y="25" width="36" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.4" />
        </svg>
      );

    case 'brain':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_4px_8px_rgba(0,208,156,0.4)] ${className}`}>
          <defs>
            <radialGradient id="brainCore3D" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="50%" stopColor="#00D09C" />
              <stop offset="100%" stopColor="#065F46" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="32" r="23" fill="url(#brainCore3D)" stroke="#A7F3D0" strokeWidth="1.5" />
          <path d="M22 32H42M32 22V42M24 24L40 40M40 24L24 40" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />
          <circle cx="32" cy="32" r="6" fill="#FEF08A" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="22" cy="32" r="3" fill="#FFFFFF" />
          <circle cx="42" cy="32" r="3" fill="#FFFFFF" />
          <circle cx="32" cy="22" r="3" fill="#FFFFFF" />
          <circle cx="32" cy="42" r="3" fill="#FFFFFF" />
        </svg>
      );

    case 'chevronDown':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_2px_4px_rgba(15,23,42,0.3)] ${className}`}>
          <circle cx="32" cy="32" r="24" fill="#1E293B" fillOpacity="0.45" stroke="#94A3B8" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M20 27L32 39L44 27" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'chevronUp':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" fill="none" className={`shrink-0 drop-shadow-[0_2px_4px_rgba(15,23,42,0.3)] ${className}`}>
          <circle cx="32" cy="32" r="24" fill="#1E293B" fillOpacity="0.45" stroke="#94A3B8" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M20 37L32 25L44 37" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};


