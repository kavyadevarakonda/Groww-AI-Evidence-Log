import React from 'react';
import { SlideHeader } from './SlideHeader';
import { 
  TrendingUp, 
  Users, 
  Coins, 
  Building2, 
  CalendarClock, 
  Smartphone, 
  CreditCard, 
  PauseCircle, 
  ArrowUpRight, 
  AlertCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Flame,
  ArrowRight
} from 'lucide-react';
import { Cute3DAsset, SparkleCluster } from '../CuteAssets';

export const Slide1Scale: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FB] to-[#F0FAF7] p-7 rounded-[26px] relative overflow-hidden shadow-2xl">
      {/* Decorative 3D floating sparkles and gradients matching Spotify PDF */}
      <SparkleCluster className="top-4 right-24" />
      <div className="absolute top-10 right-12 w-88 h-88 bg-gradient-to-br from-emerald-400/15 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <SlideHeader
        title="Groww Wins SIP Setup, But Struggles With Persistence."
        subtitle="Despite market-leading onboarding and 10.5M+ active SIPs, 12-month mutual fund continuation remains a key retention bottleneck."
        badge="Market Context"
        pageNumber={1}
      />

      {/* Top 2 Columns */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Left Column: Groww at Scale */}
        <div className="col-span-6 bg-white/95 rounded-[24px] p-5.5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between backdrop-blur-md hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 flex items-center justify-center text-white shadow-md">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-[19px] font-bold text-slate-900">Groww at Scale</h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200/50 flex items-center justify-center text-blue-700 shadow-xs shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[30px] font-black text-slate-900 tracking-tight tabular-nums">10.5M+</span>
                  <span className="text-[14px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">#1 in India</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <p className="text-[14px] text-slate-600 font-medium">Active Monthly Mutual Fund SIPs (AMFI Industry Leader)</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 border border-purple-200/50 flex items-center justify-center text-purple-700 shadow-xs shrink-0">
                <Coins className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[30px] font-black text-slate-900 tracking-tight tabular-nums">₹2,800+ Cr</span>
                  <span className="text-[14px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">Monthly Volume</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <p className="text-[14px] text-slate-600 font-medium">Direct Mutual Fund Monthly SIP Inflow via NPCI & UPI Autopay</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 border border-emerald-200/50 flex items-center justify-center text-emerald-700 shadow-xs shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[30px] font-black text-slate-900 tracking-tight tabular-nums">12.2M+</span>
                  <span className="text-[14px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">28.4% Share</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <p className="text-[14px] text-slate-600 font-medium">Active Registered Folios & Demat Accounts (#1 Broker in India)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[14px] text-slate-400 mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            Source: AMFI Monthly Folio Reports (2025-2026), Groww Disclosures
          </div>
        </div>

        {/* Right Column: Groww's Existing Retention Engine */}
        <div className="col-span-6 bg-white/95 rounded-[24px] p-5.5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between backdrop-blur-md hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ECFDF5] border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-xs">
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-[19px] font-bold text-slate-900">Groww's Existing Retention Engine</h2>
          </div>

          <div className="grid grid-cols-3 gap-3 my-auto">
            <div className="p-3 rounded-2xl bg-[#F0FDF4] border border-emerald-100/90 flex flex-col items-center text-center justify-center shadow-xs hover:bg-emerald-50 transition-colors">
              <CalendarClock className="w-6 h-6 text-emerald-700 mb-1" />
              <span className="text-[14px] font-bold text-slate-900">Static 30D Mandate</span>
              <span className="text-[14px] text-slate-500 mt-0.5">Fixed calendar debit</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F0FDF4] border border-emerald-100/90 flex flex-col items-center text-center justify-center shadow-xs hover:bg-emerald-50 transition-colors">
              <Smartphone className="w-6 h-6 text-emerald-700 mb-1" />
              <span className="text-[14px] font-bold text-slate-900">UPI Autopay</span>
              <span className="text-[14px] text-slate-500 mt-0.5">1-click authorization</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F0FDF4] border border-emerald-100/90 flex flex-col items-center text-center justify-center shadow-xs hover:bg-emerald-50 transition-colors">
              <CreditCard className="w-6 h-6 text-emerald-700 mb-1" />
              <span className="text-[14px] font-bold text-slate-900">e-NACH Banking</span>
              <span className="text-[14px] text-slate-500 mt-0.5">Automated bank pull</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F0FDF4] border border-emerald-100/90 flex flex-col items-center text-center justify-center shadow-xs hover:bg-emerald-50 transition-colors">
              <PauseCircle className="w-6 h-6 text-emerald-700 mb-1" />
              <span className="text-[14px] font-bold text-slate-900">Generic "Pause SIP"</span>
              <span className="text-[14px] text-slate-500 mt-0.5">Buried under options</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F0FDF4] border border-emerald-100/90 flex flex-col items-center text-center justify-center shadow-xs hover:bg-emerald-50 transition-colors">
              <AlertCircle className="w-6 h-6 text-emerald-700 mb-1" />
              <span className="text-[14px] font-bold text-slate-900">1-Day Return Pill</span>
              <span className="text-[14px] text-slate-500 mt-0.5">Triggers daily red panic</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F0FDF4] border border-emerald-100/90 flex flex-col items-center text-center justify-center shadow-xs hover:bg-emerald-50 transition-colors">
              <TrendingUp className="w-6 h-6 text-emerald-700 mb-1" />
              <span className="text-[14px] font-bold text-slate-900">Raw XIRR Metric</span>
              <span className="text-[14px] text-slate-500 mt-0.5">Premature Wall St metric</span>
            </div>
          </div>

          <div className="p-2.5 rounded-2xl bg-amber-50/90 border border-amber-200/80 mt-2.5 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="text-[14px] font-semibold text-amber-950">12-Month Continuation in Micro-SIP Cohorts (≤₹2,500/mo):</span>
            </div>
            <span className="text-[14px] font-extrabold text-amber-900 font-mono">~34% Active Retention</span>
          </div>
        </div>
      </div>

      {/* Middle Row: Exactly matching Spotify Slide 1's soft pink row */}
      <div className="bg-[#FFF5F5] rounded-[22px] p-3.5 border border-[#FEE2E2] shadow-[0_8px_20px_rgba(15,23,42,0.04)] flex items-center justify-between my-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#FFE4E6] border border-[#FDA4AF] flex items-center justify-center text-[#E11D48] shrink-0">
            <Users className="w-4.5 h-4.5" />
          </div>
          <span className="text-[14.5px] font-bold text-slate-900">
            Yet over 60% of first-time SIP investors stop, pause, or let their investment lapse within 12 months.
          </span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#FECDD3] text-[14px] font-semibold text-slate-800 shadow-xs">
            <div className="w-5 h-5 rounded-full bg-[#FFE4E6] flex items-center justify-center text-[#E11D48]">
              <Clock className="w-3 h-3" />
            </div>
            <span>Salary delay friction</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#FECDD3] text-[14px] font-semibold text-slate-800 shadow-xs">
            <div className="w-5 h-5 rounded-full bg-[#FFE4E6] flex items-center justify-center text-[#E11D48]">
              <Coins className="w-3 h-3" />
            </div>
            <span>Nominal return fatigue</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#FECDD3] text-[14px] font-semibold text-slate-800 shadow-xs">
            <div className="w-5 h-5 rounded-full bg-[#FFE4E6] flex items-center justify-center text-[#E11D48]">
              <Building2 className="w-3 h-3" />
            </div>
            <span>Inflexible bank buffers</span>
          </div>
        </div>
      </div>

      {/* Bottom Banner: The Core Gap matching Spotify Slide 1 with 3D Magnifying Glass clearly positioned */}
      <div className="bg-[#FAF5FF] rounded-[22px] p-4 border border-[#E9D5FF] shadow-md flex items-center justify-between relative overflow-hidden">
        <div className="flex items-center gap-4 flex-1 z-10">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-[18px] font-black text-[#5B21B6]">The Core Gap</span>
          </div>

          <div className="h-7 w-px bg-[#DDD6FE]" />

          <p className="text-[15px] font-bold text-slate-900 leading-snug">
            Groww optimizes for frictionless Day-1 setup — not real-world cashflow volatility in Months 3 to 7.
          </p>
        </div>

        {/* 3D Magnifying Glass placed clearly on the right without overlapping any data text */}
        <div className="flex items-center gap-3 shrink-0 z-10 pl-4">
          <div className="hidden sm:block">
            <Cute3DAsset type="glass" size={46} />
          </div>
          <div className="w-9 h-9 rounded-full bg-white shadow-xs border border-[#DDD6FE] flex items-center justify-center text-[#7C3AED]">
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};
