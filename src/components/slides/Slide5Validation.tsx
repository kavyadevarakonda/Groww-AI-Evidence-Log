import React from 'react';
import { SlideHeader } from './SlideHeader';
import { 
  BarChart2, 
  Users, 
  Mic, 
  Headphones, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Lightbulb,
  TrendingUp,
  MessageSquare,
  AlertCircle,
  Calendar,
  Clock,
  ShieldAlert
} from 'lucide-react';
import { CuteAvatar, SparkleCluster } from '../CuteAssets';

export const Slide5Validation: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FB] to-[#F0FAF7] p-7 rounded-[26px] relative overflow-hidden shadow-2xl">
      <SparkleCluster className="top-4 right-24" />
      <div className="absolute top-12 left-20 w-88 h-88 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <SlideHeader
        title="User Research Validated Our AI Findings"
        subtitle="Survey and interviews confirmed that Groww’s drop-off problem is driven by liquidity mismatch—not lack of capital."
        badge="Primary Validation"
        pageNumber={5}
      />

      {/* 3 Columns matching Spotify Slide 5 */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Column 1: Quantitative Validation (Google Form Link removed as requested) */}
        <div className="col-span-4 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                  <BarChart2 className="w-4 h-4" />
                </div>
                <h3 className="text-[17px] font-bold text-slate-900">Quantitative Validation</h3>
              </div>
            </div>

            <div className="text-center mb-3">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScXgrowwSIPcontinuitySurvey/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-900 font-bold text-[14px] mt-1 transition-colors cursor-pointer shadow-xs group"
                title="Open 62 Survey Responses & Raw Data (Public Access)"
              >
                <Users className="w-3.5 h-3.5 text-indigo-600 group-hover:scale-110 transition-transform" />
                <span>62 Survey Responses (Survey Form ↗)</span>
              </a>
            </div>

            {/* 4 Percentage Ring Stats */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-3 border-indigo-600 border-t-indigo-200 flex items-center justify-center font-mono font-bold text-indigo-900 text-[14px] shrink-0 bg-indigo-50/40">
                  58%
                </div>
                <p className="text-[14px] text-slate-700 leading-tight font-medium">
                  said <strong className="text-indigo-950">SIP debited before salary arrived</strong> at least once
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-3 border-indigo-600 border-r-indigo-200 flex items-center justify-center font-mono font-bold text-indigo-900 text-[14px] shrink-0 bg-indigo-50/40">
                  45.2%
                </div>
                <p className="text-[14px] text-slate-700 leading-tight font-medium">
                  said <strong className="text-indigo-950">bank bounce penalties</strong> caused extreme hesitation
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-3 border-indigo-600 border-b-indigo-200 flex items-center justify-center font-mono font-bold text-indigo-900 text-[14px] shrink-0 bg-indigo-50/40">
                  43.5%
                </div>
                <p className="text-[14px] text-slate-700 leading-tight font-medium">
                  manually <strong className="text-indigo-950">stopped or paused SIP</strong> to avoid bank fines
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-3 border-indigo-600 border-l-indigo-200 flex items-center justify-center font-mono font-bold text-indigo-900 text-[14px] shrink-0 bg-indigo-50/40">
                  30.6%
                </div>
                <p className="text-[14px] text-slate-700 leading-tight font-medium">
                  remained <strong className="text-indigo-950">permanently dormant</strong> due to pause amnesia
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-[14px] text-indigo-950 font-medium flex items-center gap-2.5 mt-3">
            <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>Drop-off dissatisfaction is common even among disciplined retail savers.</span>
          </div>
        </div>

        {/* Column 2: Qualitative Interviews */}
        <div className="col-span-4 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-sm">
                <Mic className="w-4 h-4" />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900">Qualitative Interviews</h3>
            </div>

            <div className="text-center mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-900 font-bold text-[14px]">
                <Mic className="w-3.5 h-3.5 text-purple-600" />
                <span>6 Semi-Structured Interviews</span>
              </div>
            </div>

            <span className="text-[14px] font-bold text-slate-400 uppercase tracking-wide block mb-2">Interviewed:</span>
            <div className="grid grid-cols-3 gap-2 text-center mb-3">
              <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                <Headphones className="w-5 h-5 text-purple-600 mb-1" />
                <span className="text-[14px] font-bold text-slate-800 leading-tight">First-Time SIP Starters</span>
                <span className="text-[14px] text-purple-600 font-bold mt-0.5">(3)</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                <Search className="w-5 h-5 text-purple-600 mb-1" />
                <span className="text-[14px] font-bold text-slate-800 leading-tight">Mid-Career Salaried</span>
                <span className="text-[14px] text-purple-600 font-bold mt-0.5">(2)</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                <Sparkles className="w-5 h-5 text-purple-600 mb-1" />
                <span className="text-[14px] font-bold text-slate-800 leading-tight">Gig / Variable Income</span>
                <span className="text-[14px] text-purple-600 font-bold mt-0.5">(1)</span>
              </div>
            </div>

            <span className="text-[14px] font-bold text-slate-400 uppercase tracking-wide block mb-1.5">Common Behaviors Identified:</span>
            <div className="space-y-1.5 text-[14px] text-slate-700">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Panic check bank balance on the 4th of month</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Pause SIP when expecting emergency/festive expense</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Search YouTube / Reddit when market turns red</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Want flexibility matching the current month's liquidity</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 text-[14px] text-purple-950 font-semibold mt-2">
            Behavior confirms investors are disciplined, but trapped in rigid debit dates.
          </div>
        </div>

        {/* Column 3: Representative User Quotes (With cute avatars!) */}
        <div className="col-span-4 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-sm">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h3 className="text-[17px] font-bold text-slate-900">Representative User Quotes</h3>
          </div>

          <div className="space-y-2.5 my-auto">
            {/* Quote 1: Sneha */}
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <CuteAvatar type="sneha" size={38} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-[14px] text-slate-800 font-medium leading-snug">
                  “I don’t want to cancel my investment. <strong className="text-indigo-900">I just need debits to happen after my salary credits on the 7th.</strong>”
                </p>
                <span className="text-[14px] font-bold text-slate-500 mt-0.5 block">— Interviewee #2 (24, QA, Bengaluru)</span>
              </div>
            </div>

            {/* Quote 2: Ankit */}
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <CuteAvatar type="ankit" size={38} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-[14px] text-slate-800 font-medium leading-snug">
                  “Groww sends an alert on 3rd, but company HR pays on 8th. <strong className="text-rose-900">I got hit with ₹590 ECS return fee.</strong>”
                </p>
                <span className="text-[14px] font-bold text-slate-500 mt-0.5 block">— Interviewee #4 (26, Designer, Pune)</span>
              </div>
            </div>

            {/* Quote 3: Meena */}
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <CuteAvatar type="meena" size={38} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-[14px] text-slate-800 font-medium leading-snug">
                  “When Nifty dropped, I felt anxious. <strong className="text-purple-900">Groww showed red alerts instead of long-term perspective.</strong>”
                </p>
                <span className="text-[14px] font-bold text-slate-500 mt-0.5 block">— Interviewee #5 (28, Teacher, Bhopal)</span>
              </div>
            </div>
          </div>

          <p className="text-[14px] text-slate-400 font-medium mt-1">
            Transcribed from 45-minute audio user research recordings.
          </p>
        </div>
      </div>

      {/* Bottom Dark Purple Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-[14px] font-extrabold uppercase tracking-wider text-purple-300">Key Validation</div>
            <p className="text-[14px] text-slate-100 mt-0.5 font-medium leading-snug">
              AI analysis and primary research revealed the same pattern:{' '}
              <span className="text-yellow-300 font-bold">Users aren’t quitting because they dislike compounding—</span>{' '}
              they’re dropping off because rigid bank mandates fail to adapt to real-world paycheck timing and drawdowns.
            </p>
          </div>
        </div>

        <div className="shrink-0 pl-4 hidden md:flex items-center gap-2">
          <TrendingUp className="w-8 h-8 text-emerald-400" />
        </div>
      </div>
    </div>
  );
};
