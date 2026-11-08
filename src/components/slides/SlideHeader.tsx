import React from 'react';
import { Sparkles } from 'lucide-react';
import { Groww3DLogo } from '../CuteAssets';

interface SlideHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  pageNumber: number;
  artifactUrl?: string;
  artifactLabel?: string;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({ 
  title, 
  subtitle, 
  badge, 
  pageNumber
}) => {
  return (
    <div className="flex items-start justify-between mb-4 border-b border-slate-200/60 pb-3">
      <div className="flex items-start gap-4 flex-1">
        {/* Groww 3D Logo with spherical lighting and 3D depth */}
        <div className="pt-0.5 shrink-0">
          <Groww3DLogo size={36} showText={true} />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Smooth background-fade hover effect on title element */}
            <h1 className="text-[28px] lg:text-[30px] font-black tracking-tight text-slate-900 leading-tight title-fade-hover cursor-pointer" title="Hover to inspect key takeaway">
              {title}
            </h1>
            {badge && (
              <span className="text-[14px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300/70 px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                {badge}
              </span>
            )}
          </div>
          <p className="text-[15px] lg:text-[16px] text-slate-600 font-normal mt-1 leading-snug">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Slide Number Badge */}
      <div className="flex items-center gap-2.5 self-center shrink-0 ml-4">
        <div className="text-[14px] font-mono font-bold text-slate-600 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm">
          SLIDE {String(pageNumber).padStart(2, '0')} / 10
        </div>
      </div>
    </div>
  );
};
