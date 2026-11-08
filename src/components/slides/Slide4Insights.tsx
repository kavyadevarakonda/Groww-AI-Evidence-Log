import React from 'react';
import { SlideHeader } from './SlideHeader';
import { 
  Users, 
  Compass, 
  TrendingDown, 
  Sliders, 
  AlertTriangle, 
  FileText, 
  ArrowLeftRight, 
  Lightbulb, 
  Home, 
  HeartPulse, 
  Gift, 
  Briefcase, 
  Receipt,
  Heart,
  Asterisk,
  Target,
  Activity,
  Calendar,
  AlertCircle,
  ShieldAlert,
  Flame,
  Clock,
  Share2,
  Video,
  MessageCircle,
  UserCheck,
  CheckCircle2
} from 'lucide-react';
import { SparkleCluster } from '../CuteAssets';

export const Slide4Insights: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FB] to-[#F0FAF7] p-7 rounded-[26px] relative overflow-hidden shadow-2xl">
      <SparkleCluster className="top-4 right-24" />
      <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <SlideHeader
        title="Key Insights from AI-Powered Review Analysis"
        subtitle="Analysis of 3,420 reviews across 6 data sources revealed 4 major retention gaps."
        badge="Corpus Evidence"
        pageNumber={4}
      />

      {/* Top Row: 3 Vertical Cards (Every single line has an attractive icon) */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Card 1: Salary-Debit Clash */}
        <div className="col-span-4 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-700 text-white text-[14px] font-bold flex items-center justify-center">1</span>
                <h3 className="text-[16px] font-bold text-slate-900 leading-tight">Salary-Debit Clash Drives Silent Churn</h3>
              </div>
            </div>

            <p className="text-[14px] text-slate-700 font-medium mb-1.5">Users repeatedly said debits bounce due to:</p>
            <div className="space-y-1.5 text-[14px] text-slate-600 mb-3">
              <p className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Salary credited on 7th, SIP on 5th</p>
              <p className="flex items-center gap-2"><AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Bank charges of ₹295–₹590 (e-NACH bounce)</p>
              <p className="flex items-center gap-2"><Flame className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Negative bank balance panic & fee shock</p>
              <p className="flex items-center gap-2"><ShieldAlert className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Involuntary mandate failure and distress</p>
            </div>

            <div className="border-t border-slate-100 pt-2.5">
              <div className="flex items-center gap-1.5 text-[14px] font-bold text-emerald-800 mb-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Evidence</span>
              </div>
              <div className="space-y-1 text-[14px] text-slate-600">
                <p className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" /> 33% of drop-off discussions cite salary clash</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" /> Users feel penalized for normal cashflow delays</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" /> Users feel "stuck in a loop" with rigid banking</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 mt-2.5">
            <div className="flex items-start gap-2">
              <span className="text-[20px] text-emerald-600 font-serif font-black leading-none shrink-0">“</span>
              <p className="text-[14px] italic text-emerald-950 font-medium leading-relaxed">
                "HDFC deducted ₹590 ECS return charge on my ₹500 SIP. Deleted Groww app immediately."
              </p>
            </div>
            <p className="text-[14px] text-slate-500 mt-1 font-semibold pl-4">Instead of helping investors adapt during tight cash months.</p>
          </div>
        </div>

        {/* Card 2: Reassurance Happens Outside */}
        <div className="col-span-4 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-700 text-white text-[14px] font-bold flex items-center justify-center">2</span>
                <h3 className="text-[16px] font-bold text-slate-900 leading-tight">Reassurance Happens Outside Groww</h3>
              </div>
            </div>

            <p className="text-[14px] text-slate-700 font-medium mb-1.5">Users reported seeking guidance through:</p>
            <div className="space-y-1.5 text-[14px] text-slate-600 mb-3">
              <p className="flex items-center gap-2"><Share2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> Reddit IndiaInvestments & FinTech threads</p>
              <p className="flex items-center gap-2"><Video className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> YouTube finfluencer channels & comments</p>
              <p className="flex items-center gap-2"><MessageCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> WhatsApp peer groups & family elders</p>
              <p className="flex items-center gap-2"><UserCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> Friends & office colleagues</p>
            </div>

            <div className="border-t border-slate-100 pt-2.5">
              <div className="flex items-center gap-2 text-[14px] font-bold text-indigo-900 mb-1">
                <ArrowLeftRight className="w-4 h-4 text-indigo-600" />
                <span>Then they return to Groww to pause or stop.</span>
              </div>
              <p className="text-[14px] text-slate-500 font-medium pl-6">That means:</p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100 mt-2.5 flex items-start gap-2.5">
            <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[14px] font-bold text-indigo-950 block">PM Insight</span>
              <p className="text-[14px] text-indigo-900 font-medium leading-snug">
                Groww dominates transactional order flow, but not emotional reassurance during market dips.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Mandate Lockout Destroys Trust */}
        <div className="col-span-4 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-sm shrink-0">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-[14px] font-bold flex items-center justify-center">3</span>
                <h3 className="text-[16px] font-bold text-slate-900 leading-tight">Mandate Lockout Destroys Trust</h3>
              </div>
            </div>

            <p className="text-[14px] text-slate-700 font-medium mb-1.5">Users reported:</p>
            <div className="space-y-1.5 text-[14px] text-slate-600 mb-3">
              <p className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-rose-500 shrink-0" /> NPCI 30-day mandate freeze during manual pause</p>
              <p className="flex items-center gap-2"><AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Fear of double debit if they unpause</p>
              <p className="flex items-center gap-2"><Sliders className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Inability to skip just 1 single month cleanly</p>
              <p className="flex items-center gap-2"><ShieldAlert className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Inconvenient cancellation flow feels restrictive</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 mt-2.5">
            <span className="text-[14px] font-bold text-rose-800 block mb-1">Quote</span>
            <div className="flex items-start gap-2">
              <span className="text-[22px] text-rose-500 font-serif font-black leading-none shrink-0">“</span>
              <p className="text-[14px] italic text-rose-950 font-bold leading-relaxed">
                "One unexpected bank bounce ruins the entire investing habit."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: 2 Cards (Left 60% with 5 Contexts, Right 40% with Core Problem Balance) */}
      <div className="grid grid-cols-12 gap-5 mt-2.5">
        {/* Left Card: 4 Habit Breaks When Cash Flow Fluctuates */}
        <div className="col-span-7 bg-white/95 rounded-[22px] p-5 border border-slate-100 shadow-md flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <Sliders className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-700 text-white text-[14px] font-bold flex items-center justify-center">4</span>
                <h3 className="text-[16px] font-bold text-slate-900">
                  Habit Breaks When Cash Flow Fluctuates <span className="text-amber-500">⭐️</span>
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 my-1.5 items-center">
              <div className="col-span-6 text-[14px] text-slate-600 leading-snug">
                <p>Investors don't want rigid mandatory debits. They want investing matching current cash reality.</p>
              </div>

              {/* 5 Context Icons */}
              <div className="col-span-6 bg-slate-50/80 p-2.5 rounded-2xl border border-slate-100">
                <span className="text-[14px] font-bold text-slate-400 block mb-1.5 uppercase tracking-wide">Examples:</span>
                <div className="grid grid-cols-5 gap-1.5 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs">
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="text-[14px] font-semibold text-slate-600 mt-1">Rent</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shadow-xs">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <span className="text-[14px] font-semibold text-slate-600 mt-1">Medical</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs">
                      <Gift className="w-4 h-4" />
                    </div>
                    <span className="text-[14px] font-semibold text-slate-600 mt-1">Festive</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="text-[14px] font-semibold text-slate-600 mt-1">Appraisal</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <span className="text-[14px] font-semibold text-slate-600 mt-1">Tax</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[14px] text-slate-600 font-medium">
              <strong>Problem:</strong> Rigid SIP schedules assume fixed, predictable liquidity every single 30 days.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-[14px] font-bold text-blue-950 flex items-center gap-2 mt-2">
            <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Groww understands KYC & order flow, but not real-world cashflow liquidity.</span>
          </div>
        </div>

        {/* Right Card: Core Problem Balance */}
        <div className="col-span-5 bg-white/95 rounded-[22px] p-5 border border-slate-100 shadow-md flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className="text-[16px] font-bold text-slate-900">Core Problem</h3>
            </div>

            <p className="text-[14px] text-slate-600 leading-snug">
              Users do not struggle because mutual funds lack returns. They struggle because Groww cannot reliably balance:
            </p>

            <div className="grid grid-cols-4 gap-2 my-2.5 text-center">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-bold text-slate-700 mt-1">Liquidity</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs">
                  <Asterisk className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-bold text-slate-700 mt-1">Discipline</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center shadow-xs">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-bold text-slate-700 mt-1">Intent</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-bold text-slate-700 mt-1">Continuity</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-purple-50/80 border border-purple-100 text-[14px] font-bold text-purple-950 flex items-center justify-between">
            <span className="text-purple-600 font-serif text-[18px]">“</span>
            <span className="text-center px-1">
              Groww cannot balance rigid bank mandates with real-time paycheck volatility and drawdown anxiety.
            </span>
            <span className="text-purple-600 font-serif text-[18px]">”</span>
          </div>
        </div>
      </div>
    </div>
  );
};
