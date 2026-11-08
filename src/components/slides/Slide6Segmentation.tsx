import React from 'react';
import { SlideHeader } from './SlideHeader';
import { 
  Users, 
  Clock, 
  Star, 
  Target, 
  User, 
  Home, 
  Briefcase, 
  HeartPulse, 
  Gift, 
  CheckCircle2, 
  Lightbulb, 
  Calendar, 
  ChevronDown,
  Coins,
  ShieldAlert,
  Flame,
  Check,
  Building,
  TrendingDown,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { CuteAvatar, Cute3DAsset, SparkleCluster } from '../CuteAssets';

export const Slide6Segmentation: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FB] to-[#F0FAF7] p-7 rounded-[26px] relative overflow-hidden shadow-2xl">
      <SparkleCluster className="top-4 right-24" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <SlideHeader
        title="Habit Breaks Most for First-Time Salaried Starters"
        subtitle="Behavioral segmentation isolates the fragile cohort where paycheck timing variance triggers involuntary account abandonment."
        badge="Target Persona & JTBD"
        pageNumber={6}
      />

      {/* 3 Columns matching Spotify Slide 6 */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Column 1: Behavioral Segmentation Funnel */}
        <div className="col-span-3 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <h3 className="text-[16px] font-bold text-slate-900 mb-3">1. Behavioral Segmentation Funnel</h3>
            
            <div className="space-y-2">
              <div className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100/70 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-bold text-slate-800">All Groww MF Users</span>
              </div>

              <div className="flex justify-center text-indigo-400">
                <ChevronDown className="w-4 h-4" />
              </div>

              <div className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100/70 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-bold text-slate-800">Active Monthly SIP Savers</span>
              </div>

              <div className="flex justify-center text-indigo-400">
                <ChevronDown className="w-4 h-4" />
              </div>

              <div className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100/70 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-bold text-slate-800">3–6 Months Into Compounding</span>
              </div>

              <div className="flex justify-center text-indigo-400">
                <ChevronDown className="w-4 h-4" />
              </div>

              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-950 text-white flex items-center gap-3 shadow-md">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-[14px] font-black text-amber-200">First-Time Salaried Starters</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-[14px] text-slate-600 font-medium flex items-center gap-2 mt-2">
            <Target className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>Behavioral segmentation is more predictive than demographic segmentation.</span>
          </div>
        </div>

        {/* Column 2: Selected User Segment */}
        <div className="col-span-5 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <h3 className="text-[16px] font-bold text-slate-900 mb-2">2. Selected User Segment</h3>

            <div className="grid grid-cols-12 gap-3 mb-3">
              <div className="col-span-8">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-[14px] font-bold text-indigo-950">Primary User Segment</span>
                </div>
                <p className="text-[14px] text-slate-600 font-semibold mb-1">Early-Career Starters who:</p>
                <div className="space-y-1 text-[14px] text-slate-600">
                  <p className="flex items-center gap-2"><Coins className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> earn ₹25,000–₹55,000 monthly</p>
                  <p className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> face variable payroll dates (1st–10th)</p>
                  <p className="flex items-center gap-2"><TrendingDown className="w-3.5 h-3.5 text-purple-500 shrink-0" /> save ₹1,000–₹3,000 per month</p>
                  <p className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" /> check portfolio weekly on app</p>
                  <p className="flex items-center gap-2"><ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0" /> have tight end-of-month cash buffers</p>
                  <p className="flex items-center gap-2"><Flame className="w-3.5 h-3.5 text-rose-500 shrink-0" /> fear bank bounce penalties</p>
                </div>
              </div>

              {/* 4 Context Icons */}
              <div className="col-span-4 bg-slate-50/80 p-2.5 rounded-2xl border border-slate-100 flex flex-col justify-between">
                <span className="text-[14px] font-bold text-slate-400 uppercase tracking-wide">Common Contexts:</span>
                <div className="space-y-2 mt-1">
                  <div className="flex items-center gap-2 text-[14px] text-slate-700 font-medium">
                    <Home className="w-3.5 h-3.5 text-blue-600" />
                    <span>Rent / EMIs</span>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] text-slate-700 font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-purple-600" />
                    <span>Salary Delay</span>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] text-slate-700 font-medium">
                    <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
                    <span>Emergency Bills</span>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] text-slate-700 font-medium">
                    <Gift className="w-3.5 h-3.5 text-amber-600" />
                    <span>Festive Season</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Evidence from User Research (4 Stats) */}
            <div className="border-t border-slate-100 pt-2.5">
              <span className="text-[14px] font-bold text-slate-400 uppercase tracking-wide block mb-1.5 text-center">
                Evidence from User Research
              </span>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[16px] font-black text-indigo-600 font-mono">58%</div>
                  <span className="text-[14px] text-slate-600 font-medium leading-tight block mt-0.5">feel debit clash</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[16px] font-black text-indigo-600 font-mono">45.2%</div>
                  <span className="text-[14px] text-slate-600 font-medium leading-tight block mt-0.5">bank fee shock</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[16px] font-black text-indigo-600 font-mono">43.5%</div>
                  <span className="text-[14px] text-slate-600 font-medium leading-tight block mt-0.5">manual pause</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[16px] font-black text-indigo-600 font-mono">30.6%</div>
                  <span className="text-[14px] text-slate-600 font-medium leading-tight block mt-0.5">amnesia drop</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-[14px] text-indigo-950 font-medium flex items-center gap-2 mt-2">
            <Lightbulb className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>These users have high investment intent, but fragile bank liquidity margins.</span>
          </div>
        </div>

        {/* Column 3: Representative Persona */}
        <div className="col-span-4 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <h3 className="text-[16px] font-bold text-slate-900 mb-2">3. Representative Persona</h3>

            {/* Persona Header */}
            <div className="flex items-center gap-3.5 mb-2.5">
              <CuteAvatar type="ankit" size={54} className="border-2 border-indigo-400 shadow-sm" />
              <div>
                <h4 className="text-[17px] font-black text-slate-900 leading-tight">Ankit</h4>
                <div className="text-[14px] text-slate-600 font-medium mt-0.5 space-y-0.5">
                  <p className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-indigo-500" /> 24 years old</p>
                  <p className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-indigo-500" /> Junior QA Engineer</p>
                  <p className="flex items-center gap-1.5"><Coins className="w-3.5 h-3.5 text-emerald-500" /> ₹1,500/mo SIP • Groww Active</p>
                  <p className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-indigo-500" /> ₹34,000 Take-home salary</p>
                </div>
              </div>
            </div>

            {/* Uses Groww During (4 Icons) */}
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 mb-2.5 text-center">
              <span className="text-[14px] font-bold text-slate-400 uppercase tracking-wide block mb-1">Uses Groww during</span>
              <div className="grid grid-cols-4 gap-1 text-[14px] text-slate-600 font-semibold">
                <div>Salary Day</div>
                <div>Nifty Dip</div>
                <div>Tax Season</div>
                <div>Month End</div>
              </div>
            </div>

            {/* Frustrations vs Goal (2 Columns with cute icons) */}
            <div className="grid grid-cols-2 gap-2 text-[14px]">
              <div className="p-2.5 rounded-xl bg-rose-50/80 border border-rose-100">
                <span className="font-bold text-rose-800 block mb-1">Frustrations</span>
                <div className="space-y-1 text-rose-950 font-medium">
                  <p className="flex items-center gap-1.5"><Flame className="w-3 h-3 text-rose-500 shrink-0" /> Salary on 7th, SIP on 5th</p>
                  <p className="flex items-center gap-1.5"><ShieldAlert className="w-3 h-3 text-rose-500 shrink-0" /> ₹590 ECS return penalty</p>
                  <p className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-rose-500 shrink-0" /> 30-day mandate freeze</p>
                  <p className="flex items-center gap-1.5"><AlertCircle className="w-3 h-3 text-rose-500 shrink-0" /> Felt judged as failing</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-100">
                <span className="font-bold text-emerald-800 block mb-1">Goal</span>
                <p className="text-emerald-950 font-medium leading-snug flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Invest ₹1,500 every single month safely without bank penalty fear or losing compounding streak.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-[14px] text-slate-400 text-right mt-1 font-medium">
            Persona validated across primary survey & user interviews.
          </div>
        </div>
      </div>

      {/* Bottom Dark Purple JTBD Banner with Rocket */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
            <Target className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-[14px] font-black uppercase tracking-wider text-purple-300">JTBD</div>
            <p className="text-[14px] text-yellow-300 italic font-semibold leading-snug">
              “I don’t want to stop my SIP. I just want my investments to flex with my actual salary date.”
            </p>
            <p className="text-[14px] text-slate-200 mt-0.5 font-medium leading-snug">
              <strong>Job To Be Done:</strong> Help early-career investors build an unbroken 12-month compounding habit by seamlessly adapting debit timing to their real-world liquidity.
            </p>
          </div>
        </div>

        <div className="shrink-0 pl-4 hidden md:block">
          <Cute3DAsset type="rocket" size={44} />
        </div>
      </div>
    </div>
  );
};
