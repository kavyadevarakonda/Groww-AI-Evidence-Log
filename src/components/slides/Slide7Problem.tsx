import React from 'react';
import { SlideHeader } from './SlideHeader';
import { 
  User, 
  Settings, 
  Lightbulb, 
  RotateCw, 
  AlertCircle, 
  Frown, 
  Clock, 
  ExternalLink, 
  FileText, 
  TrendingDown, 
  Check, 
  X, 
  Puzzle, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { SparkleCluster } from '../CuteAssets';

export const Slide7Problem: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FB] to-[#F0FAF7] p-7 rounded-[26px] relative overflow-hidden shadow-2xl">
      <SparkleCluster className="top-5 right-8" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <SlideHeader
        title="Defining the Core Problem"
        subtitle="The issue isn't market volatility. It's a lack of adaptability to retail investors' real-world cashflow liquidity."
        badge="Systemic Bottleneck"
        pageNumber={7}
        artifactUrl="https://www.npci.org.in/what-we-do/nach/circulars"
        artifactLabel="e-NACH Rulebook ↗"
      />

      {/* 3 Columns with Dark Purple Top Headers (Matching Spotify Slide 7 exactly) */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Column 1: User Pain Points */}
        <div className="col-span-4 bg-white/95 rounded-[24px] border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between overflow-hidden hover:-translate-y-0.5 transition-transform bg-fade-hover">
          {/* Dark Purple Top Header */}
          <div className="bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white py-2.5 px-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-purple-300" />
            </div>
            <h3 className="text-[14px] font-bold tracking-wide">User Pain Points</h3>
          </div>

          <div className="p-4 space-y-2.5 my-auto">
            {/* Point 1 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
                <RotateCw className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-slate-900 leading-tight">Salary Timing Disconnect</h4>
                <p className="text-[14px] text-slate-500 mt-0.5 leading-snug">Debits hit on the 5th, but payroll lands on 7th or 8th.</p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0 mt-0.5">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-slate-900 leading-tight">Disproportionate Bank Penalties</h4>
                <p className="text-[14px] text-slate-500 mt-0.5 leading-snug">₹295–₹590 return fee feels like a penalty for saving money.</p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                <Frown className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-slate-900 leading-tight">Mandate Lockout & Friction</h4>
                <p className="text-[14px] text-slate-500 mt-0.5 leading-snug">Manual pause locks mandate for 30 days under NPCI rules.</p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-slate-900 leading-tight">Pause Amnesia</h4>
                <p className="text-[14px] text-slate-500 mt-0.5 leading-snug">After pausing, 78% forget to resume investing permanently.</p>
              </div>
            </div>

            {/* Point 5 (Prompt specific: Shifting to other SIP apps soon) */}
            <div className="flex items-start gap-3 p-2 rounded-xl bg-rose-50/80 border border-rose-100">
              <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <ExternalLink className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-rose-950 leading-tight">Shifting to Other SIP Apps Soon</h4>
                <p className="text-[14px] text-rose-900 mt-0.5 leading-snug font-medium">
                  Frustrated users migrate to bank SIP apps soon out of penalty fear.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Root Cause: Why Existing Mandates Fail */}
        <div className="col-span-5 bg-white/95 rounded-[24px] border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between overflow-hidden hover:-translate-y-0.5 transition-transform bg-fade-hover">
          {/* Dark Purple Top Header */}
          <div className="bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white py-2.5 px-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Settings className="w-3.5 h-3.5 text-purple-300" />
            </div>
            <h3 className="text-[14px] font-bold tracking-wide">Root Cause: Why Existing Mandates Fail</h3>
          </div>

          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <span className="text-[14px] font-bold text-slate-400 uppercase tracking-wide block mb-2">
                Today's SIP Infrastructure Optimizes For:
              </span>

              {/* Vertical Flow of 4 Boxes with Down Arrows and Side Red Box */}
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7 space-y-1.5">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-[14px] font-semibold text-slate-800 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Rigid Fixed Calendar Dates</span>
                  </div>
                  <div className="flex justify-center text-slate-300"><ChevronDown className="w-3.5 h-3.5" /></div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-[14px] font-semibold text-slate-800 flex items-center gap-2">
                    <RotateCw className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Automated Batch NACH Trigger</span>
                  </div>
                  <div className="flex justify-center text-slate-300"><ChevronDown className="w-3.5 h-3.5" /></div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-[14px] font-semibold text-slate-800 flex items-center gap-2">
                    <TrendingDown className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Blind Execution Without Balance Check</span>
                  </div>
                  <div className="flex justify-center text-slate-300"><ChevronDown className="w-3.5 h-3.5" /></div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-[14px] font-semibold text-slate-800 flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Static Mandate Modification Cycle</span>
                  </div>
                </div>

                {/* Red Side Box */}
                <div className="col-span-5 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-center">
                  <div className="w-7 h-7 rounded-full bg-rose-600 text-white font-bold text-[14px] flex items-center justify-center mx-auto mb-1">
                    ✕
                  </div>
                  <p className="text-[14px] text-rose-950 font-bold leading-tight">
                    This punishes normal paycheck variance and turns temporary dips into churn.
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal Chain: What Users Actually Need */}
            <div className="border-t border-slate-100 pt-3 mt-3">
              <span className="text-[14px] font-bold text-emerald-800 uppercase tracking-wide block mb-2">
                What Users Actually Need:
              </span>
              <div className="grid grid-cols-5 gap-1.5 text-center">
                <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[14px] font-bold text-emerald-950 block">Salary Date</span>
                  <span className="text-[14px] text-emerald-700">When cash lands</span>
                </div>
                <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[14px] font-bold text-emerald-950 block">Date Flex</span>
                  <span className="text-[14px] text-emerald-700">3–10 day buffer</span>
                </div>
                <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[14px] font-bold text-emerald-950 block">1-Tap Skip</span>
                  <span className="text-[14px] text-emerald-700">Safe 1-mo skip</span>
                </div>
                <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[14px] font-bold text-emerald-950 block">Zero Fees</span>
                  <span className="text-[14px] text-emerald-700">No bank penalty</span>
                </div>
                <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[14px] font-bold text-emerald-950 block">Streak Goal</span>
                  <span className="text-[14px] text-emerald-700">Reward habit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Key Insight */}
        <div className="col-span-3 bg-white/95 rounded-[24px] border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between overflow-hidden hover:-translate-y-0.5 transition-transform bg-fade-hover">
          {/* Dark Purple Top Header */}
          <div className="bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white py-2.5 px-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Lightbulb className="w-3.5 h-3.5 text-purple-300" />
            </div>
            <h3 className="text-[14px] font-bold tracking-wide">Key Insight</h3>
          </div>

          <div className="p-4 space-y-3 my-auto">
            {/* Quote Box */}
            <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100">
              <span className="text-[20px] text-indigo-600 font-serif font-black leading-none shrink-0 block mb-1">“</span>
              <p className="text-[14px] font-semibold text-indigo-950 leading-snug">
                Groww assumes disciplined investing requires rigid debits. But real financial discipline requires resilience during cash crunches.
              </p>
            </div>

            <div className="text-center text-[14px] font-bold text-slate-400 uppercase tracking-wider">
              Therefore...
            </div>

            {/* Red Box */}
            <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-100 text-[14px] space-y-1">
              <span className="font-bold text-rose-800 block">Traditional SIP mandates optimize for:</span>
              <p className="text-rose-950 font-medium">✕ Fixed calendar dates</p>
              <p className="text-rose-950 font-medium">✕ Instant bank penalty triggers</p>
              <p className="text-rose-950 font-medium">✕ Mandatory 30-day freeze</p>
            </div>

            {/* Green Box */}
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-[14px] space-y-1">
              <span className="font-bold text-emerald-800 block">But users expect investing based on:</span>
              <p className="text-emerald-950 font-medium">✓ Real-time salary sync</p>
              <p className="text-emerald-950 font-medium">✓ 1-tap single month skip</p>
              <p className="text-emerald-950 font-medium">✓ Habit & streak continuity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dark Purple Banner with Audio Waveform */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
            <Puzzle className="w-5 h-5 text-purple-300" />
          </div>
          <div>
            <div className="text-[14px] font-black uppercase tracking-wider text-purple-300">Core Problem:</div>
            <p className="text-[14px] text-slate-100 mt-0.5 font-medium leading-snug">
              Early-career investors drop off not because they lack long-term intent, but because rigid banking mandates turn short-term paycheck delays into expensive penalties, broken habits, and shifting to other SIP apps.
            </p>
          </div>
        </div>

        {/* Audio Waveform Effect */}
        <div className="hidden lg:flex items-center gap-1 shrink-0 pl-4">
          {[12, 24, 16, 32, 20, 28, 14, 22, 10, 18].map((h, i) => (
            <div 
              key={i} 
              className="w-1 bg-purple-400/60 rounded-full" 
              style={{ height: `${h}px` }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};
