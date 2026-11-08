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

      {/* 3D Wordmark */}
      {showText && (
        <span className="text-[22px] font-black tracking-tight text-slate-900 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center">
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

