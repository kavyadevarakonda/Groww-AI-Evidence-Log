import React from 'react';
import { SlideHeader } from './SlideHeader';
import { 
  AlertTriangle, 
  User, 
  Flame, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  XCircle, 
  AlertOctagon, 
  ExternalLink,
  Sparkles,
  ShieldAlert,
  Coins,
  Clock,
  TrendingDown,
  Lock,
  Check,
  X
} from 'lucide-react';
import { CuteAvatar, Cute3DAsset, SparkleCluster } from '../CuteAssets';

export const Slide8Comparison: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FB] to-[#F0FAF7] p-7 rounded-[26px] relative overflow-hidden shadow-2xl">
      <SparkleCluster className="top-4 right-24" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <SlideHeader
        title="Groww Onboards Users Easily, But Fails at 12-Month Retention"
        subtitle="Addressing user friction, business risk, and establishing strict non-advisory boundaries for our retention companion."
        badge="Strategic Framing"
        pageNumber={8}
      />

      {/* Top Problem Statement Banner matching Spotify Slide 8 */}
      <div className="bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] my-auto hover:-translate-y-0.5 transition-transform relative bg-fade-hover">
        <div className="flex items-center justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900">Problem Statement</h3>
            </div>

            <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
              Early-career investors struggle to maintain an active 12-month compounding habit because traditional SIP infrastructure prioritizes:
            </p>

            {/* 3 Purple Pills */}
            <div className="flex items-center gap-3 my-2.5 flex-wrap">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold text-[14px]">
                <User className="w-4 h-4 text-indigo-600" />
                <span>Fixed Calendar Dates</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold text-[14px]">
                <Flame className="w-4 h-4 text-indigo-600" />
                <span>Rigid Mandate Execution</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold text-[14px]">
                <Users className="w-4 h-4 text-indigo-600" />
                <span>Return Penalty Triggers</span>
              </div>
            </div>

            <p className="text-[14px] text-slate-600 font-medium">
              instead of <strong className="text-indigo-950">real-world paycheck timing and cashflow flexibility.</strong>
            </p>
          </div>

          {/* 3D Magnifying Glass Asset on Right */}
          <div className="hidden lg:block shrink-0 pr-4">
            <Cute3DAsset type="glass" size={68} />
          </div>
        </div>
      </div>

      {/* Middle 2 Cards: User Impact (Left) & Business Impact (Right) */}
      <div className="grid grid-cols-12 gap-5 my-2.5">
        {/* User Impact */}
        <div className="col-span-6 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                <User className="w-4 h-4" />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900">User Impact</h3>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-8">
                <p className="text-[14px] text-slate-700 font-medium mb-1">Users experience:</p>
                <div className="space-y-1.5 text-[14px] text-slate-600 font-normal">
                  <p className="flex items-center gap-2"><ShieldAlert className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Bank bounce fee shocks (₹295–₹590 per failure)</p>
                  <p className="flex items-center gap-2"><TrendingDown className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Broken streaks & feelings of financial failure</p>
                  <p className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-rose-500 shrink-0" /> 30-day mandate freeze during manual pause</p>
                  <p className="flex items-center gap-2 text-rose-600 font-semibold"><ExternalLink className="w-3.5 h-3.5 text-rose-600 shrink-0" /> Shifting to other SIP apps soon out of fear</p>
                </div>
              </div>

              {/* Distressed Cute Avatar Asset on Right */}
              <div className="col-span-4 flex justify-center">
                <CuteAvatar type="sadInvestor" size={62} />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-2 mt-3">
            <span className="text-[20px] text-indigo-600 font-serif font-black leading-none shrink-0">“</span>
            <p className="text-[14px] italic text-indigo-950 font-semibold leading-snug">
              “I love the idea of investing ₹1,500 monthly. Why can't Groww help me avoid bank fines when my salary is 3 days late?”
            </p>
          </div>
        </div>

        {/* Business Impact */}
        <div className="col-span-6 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900">Business Impact</h3>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-8">
                <p className="text-[14px] text-slate-700 font-medium mb-1">This leads to:</p>
                <div className="space-y-1.5 text-[14px] text-slate-600 font-normal">
                  <p className="flex items-center gap-2"><TrendingDown className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> 66% drop-off before completing 12 installments</p>
                  <p className="flex items-center gap-2"><Flame className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> Severe CAC loss (₹800–₹1,200 per acquired user)</p>
                  <p className="flex items-center gap-2"><Coins className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> Stagnant AUM growth from early cohorts</p>
                  <p className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> Advice seeking happening outside Groww</p>
                </div>
              </div>

              {/* 3D Falling Stair Chart Asset on Right */}
              <div className="col-span-4 flex justify-center">
                <Cute3DAsset type="chartDown" size={54} />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-[14px] text-rose-950 font-bold flex items-center gap-2.5 mt-3">
            <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 text-[14px] font-black">
              !
            </div>
            <span>Business Risk: Groww becomes a leaky acquisition funnel, not an enduring wealth compounding home.</span>
          </div>
        </div>
      </div>

      {/* Bottom Dark Purple Split Banner: Goals & Non-Goals matching Spotify Slide 8 */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white grid grid-cols-2 gap-6 shadow-xl">
        {/* Left: Goals */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[14px] font-bold text-white block mb-1">Goals</span>
            <div className="space-y-1 text-[14px] text-slate-200">
              <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Lift 12-Month SIP Retention from 34% to 52%+</p>
              <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Eliminate 100% of accidental bank bounce penalties</p>
              <p className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Enable 1-tap adaptive flexibility (dates & 1-month skip)</p>
            </div>
          </div>
        </div>

        {/* Right: Non-Goals */}
        <div className="flex items-start gap-3 border-l border-white/10 pl-6">
          <div className="w-9 h-9 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-400 shrink-0">
            <XCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[14px] font-bold text-white block mb-1">Non-Goals</span>
            <div className="space-y-1 text-[14px] text-slate-200">
              <p className="flex items-center gap-2"><X className="w-3.5 h-3.5 text-rose-400 shrink-0" /> No fund recommendations or stock advisory (SEBI RIA non-advice)</p>
              <p className="flex items-center gap-2"><X className="w-3.5 h-3.5 text-rose-400 shrink-0" /> Do not replace NPCI UPI Autopay / e-NACH infrastructure</p>
              <p className="flex items-center gap-2"><X className="w-3.5 h-3.5 text-rose-400 shrink-0" /> No speculative return guarantees or FOMO pressure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
