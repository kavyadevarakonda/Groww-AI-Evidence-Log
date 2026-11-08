import React from 'react';
import { SlideHeader } from './SlideHeader';
import { 
  BarChart3, 
  Zap, 
  Clock, 
  Users, 
  User, 
  Building2, 
  CreditCard, 
  ShieldCheck, 
  Calendar, 
  Target, 
  CheckCircle2, 
  MessageSquare, 
  Star,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { Cute3DAsset, SparkleCluster } from '../CuteAssets';

export const Slide2Opportunity: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FB] to-[#F0FAF7] p-7 rounded-[26px] relative overflow-hidden shadow-2xl">
      <SparkleCluster className="top-5 right-8" />
      <div className="absolute top-6 right-10 w-96 h-96 bg-gradient-to-br from-emerald-300/15 to-teal-300/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating 3D Target */}
      <div className="absolute top-4 right-28 pointer-events-none hidden sm:block">
        <Cute3DAsset type="target" size={48} />
      </div>

      {/* Header with Title Hover Fade */}
      <SlideHeader
        title="Continuity Is Groww’s Biggest Growth & LTV Opportunity"
        subtitle="Despite frictionless onboarding, Groww lags in 12-month habit retention compared to salary-linked channels."
        badge="Strategic Opportunity"
        pageNumber={2}
        artifactUrl="https://www.amfiindia.com/research-information/other-data/folio-data"
        artifactLabel="Folio Retention Data ↗"
      />

      {/* Top Section: Comparison Table (Left) + Side-by-side Optimizations (Right) */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Left Card: Mutual Fund Platform Comparison */}
        <div className="col-span-6 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-sm">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h2 className="text-[18px] font-bold text-slate-900">Mutual Fund Platform Comparison</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-indigo-100/70 bg-white">
            <table className="w-full text-left border-collapse text-[14px]">
              <thead>
                <tr className="bg-indigo-50/70 border-b border-indigo-100 text-indigo-950 font-bold">
                  <th className="py-2.5 px-3.5">Platform</th>
                  <th className="py-2.5 px-3.5">Core Strength</th>
                  <th className="py-2.5 px-3.5">12-Mo Retention</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="bg-emerald-50/40 font-semibold">
                  <td className="py-2.5 px-3.5 flex items-center gap-2 text-emerald-950 font-extrabold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D09C]" />
                    Groww
                  </td>
                  <td className="py-2.5 px-3.5 text-slate-700">Frictionless UI, 1-tap KYC & UPI setup</td>
                  <td className="py-2.5 px-3.5 font-bold text-rose-600">~34% (Micro-SIP Churn)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    Zerodha Coin
                  </td>
                  <td className="py-2.5 px-3.5 text-slate-600">Demat-linked mutual funds, active traders</td>
                  <td className="py-2.5 px-3.5 font-semibold text-slate-700">42% (High-intent)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                    Bank Apps (HDFC/SBI)
                  </td>
                  <td className="py-2.5 px-3.5 text-slate-600">Direct salary deduction, auto-cushion</td>
                  <td className="py-2.5 px-3.5 font-bold text-emerald-700">62% (Payroll Synced)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3.5 font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    Angel One
                  </td>
                  <td className="py-2.5 px-3.5 text-slate-600">Assisted broker push, RM follow-ups</td>
                  <td className="py-2.5 px-3.5 font-semibold text-slate-700">39% (Assisted)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[14px] text-slate-400 mt-2 font-medium">
            Data synthesized from AMFI retail folio reports & 3,420 multi-channel user reviews.
          </p>
        </div>

        {/* Right Card: Groww vs Bank Apps (Side-by-side in one card matching Spotify PDF) */}
        <div className="col-span-6 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] grid grid-cols-2 gap-4 hover:-translate-y-0.5 transition-transform bg-fade-hover">
          {/* Sub-col 1: Groww optimizes for speed */}
          <div className="flex flex-col justify-between border-r border-slate-100 pr-3">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-sm shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 leading-tight">
                  Groww optimizes for speed.
                </h3>
              </div>

              <div className="space-y-2.5 text-[14px] text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Instant paperless KYC</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>2-tap UPI mandate setup</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Frictionless Day-1 start</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-purple-50/80 border border-purple-100 text-[14px] font-semibold text-purple-950 mt-3 flex items-start gap-2">
              <Star className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span>Drives massive signups, but leaves early cohorts exposed to cashflow bumps.</span>
            </div>
          </div>

          {/* Sub-col 2: Bank apps optimize for salary sync */}
          <div className="flex flex-col justify-between pl-1">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-sm shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 leading-tight">
                  Bank apps optimize for salary sync.
                </h3>
              </div>

              <div className="space-y-2.5 text-[14px] text-slate-600">
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Direct internal salary standing debit</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Debits trigger on payroll credit</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Zero 3rd-party NACH return fines</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Overdraft cushion on salary acct</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-rose-50/80 border border-rose-100 text-[14px] font-semibold text-rose-950 mt-3">
              Clunky UI, but 62% retention because debits seamlessly follow the paycheck without friction.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: 3 Cards (Problem, Opportunity, Evidence) matching Spotify PDF Page 2 */}
      <div className="grid grid-cols-12 gap-5 mt-2.5">
        {/* Bottom Left: Groww's Problem */}
        <div className="col-span-4 bg-white/95 rounded-[22px] p-5 border border-slate-100 shadow-md flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-sm">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-rose-600 leading-none">Groww’s Core Dilemma</h3>
                <p className="text-[14px] text-slate-600 mt-0.5">It’s not lack of investor intent.</p>
              </div>
            </div>

            {/* Pink Box */}
            <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-100 space-y-1.5 text-[14px] text-rose-950 font-medium my-2">
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Groww optimizes for speed of setup.</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Banks optimize for salary synchronization.</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-[14px] text-slate-700">
            <span className="text-[16px] text-rose-500 font-serif font-black mr-1">“</span>
            Groww says: <strong className="text-rose-600">"Your SIP was due on the 5th."</strong><br />
            Banks say: <strong className="text-slate-900">"₹590 return penalty applied."</strong>
            <p className="text-[14px] text-slate-500 font-semibold mt-1">That explains early churn spikes.</p>
          </div>
        </div>

        {/* Bottom Middle: Business Opportunity */}
        <div className="col-span-4 bg-white/95 rounded-[22px] p-5 border border-slate-100 shadow-md flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-emerald-700 leading-none">Business Opportunity</h3>
                <p className="text-[14px] text-slate-600 mt-0.5">Why this matters for Groww Growth</p>
              </div>
            </div>

            <p className="text-[14px] text-slate-700 font-medium mb-1.5">Poor retention leads to:</p>
            <div className="space-y-1.5 text-[14px] text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>66% drop-off within 12 months</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>High CAC re-acquisition burn (₹800–₹1,200)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Fallback to bank deposits & gold</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Shifting to bank SIP apps soon out of fear</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[14px] font-bold text-emerald-950 flex items-center gap-2 mt-3">
            <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Flexible pacing lifts 12-mo retention by +18.4% and protects compounding.</span>
          </div>
        </div>

        {/* Bottom Right: Evidence from User Feedback */}
        <div className="col-span-4 bg-white/95 rounded-[22px] p-5 border border-slate-100 shadow-md flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-sm">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-purple-700 leading-none">Evidence from User Feedback</h3>
                <p className="text-[14px] text-slate-600 mt-0.5">Common complaints across 3,420 reviews:</p>
              </div>
            </div>

            <div className="space-y-2 mt-2">
              <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-[14px] text-slate-800 flex items-start gap-2">
                <span className="text-[20px] text-purple-600 font-serif font-black leading-none shrink-0">“</span>
                <span>“HDFC charged ₹590 ECS return charge on my ₹1,000 SIP. Uninstalled Groww immediately.”</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-[14px] text-slate-800 flex items-start gap-2">
                <span className="text-[20px] text-purple-600 font-serif font-black leading-none shrink-0">“</span>
                <span>“Salary credited on 7th, SIP failed on 5th. Shifting to bank SIP apps soon.”</span>
              </div>
            </div>
          </div>

          <p className="text-[14px] text-slate-400 mt-2 font-medium">
            Consistent across 3,420 Play Store, Reddit & TradingQ&A public posts.
          </p>
        </div>
      </div>
    </div>
  );
};
