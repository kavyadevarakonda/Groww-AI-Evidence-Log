import React from 'react';
import { SlideHeader } from './SlideHeader';
import { 
  Target, 
  BarChart3, 
  ShieldCheck, 
  Star, 
  Calendar, 
  Heart, 
  RotateCcw, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUp, 
  ArrowDown, 
  ArrowRight, 
  Smile, 
  AlertCircle, 
  Clock, 
  ChevronRight, 
  Rocket, 
  Users, 
  BrainCircuit, 
  Flag, 
  FilePlus,
  Sparkles,
  Coins,
  ShieldAlert,
  Flame,
  Radio,
  Share2
} from 'lucide-react';
import { SparkleCluster } from '../CuteAssets';

export const Slide10Roadmap: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FB] to-[#F0FAF7] p-7 rounded-[26px] relative overflow-hidden shadow-2xl">
      <SparkleCluster className="top-4 right-24" />
      <div className="absolute top-6 right-16 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <SlideHeader
        title="Measuring Success & Future Roadmap"
        subtitle="Tracking real retention impact and scaling adaptive wealth habits across retail India."
        badge="Execution & Metrics"
        pageNumber={10}
      />

      {/* Top Row: 3 Columns with Dark Purple Headers (Matching Spotify Slide 10) */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Column 1: North Star Metric */}
        <div className="col-span-4 bg-white/95 rounded-[24px] border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between overflow-hidden hover:-translate-y-0.5 transition-transform bg-fade-hover">
          {/* Dark Purple Header */}
          <div className="bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white py-2.5 px-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Target className="w-3.5 h-3.5 text-purple-300" />
            </div>
            <h3 className="text-[14px] font-bold tracking-wide">NORTH STAR METRIC</h3>
          </div>

          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-[15px] font-black text-slate-900 leading-tight">12-Month Habit Retention (H12)</h4>
                  <p className="text-[14px] text-slate-500 leading-snug">
                    Measures whether first-time SIP investors complete 12 consecutive installments without punitive churn.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-2.5">
                <span className="text-[14px] font-bold text-slate-400 uppercase tracking-wide block mb-2">
                  H12 COMPONENTS
                </span>

                <div className="space-y-2 text-[14px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Calendar className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span className="font-bold text-indigo-900">40%</span>
                      <span>On-Time Salary Debits</span>
                    </div>
                    <span className="text-[14px] text-slate-400 font-medium">Payroll window</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Heart className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span className="font-bold text-indigo-900">30%</span>
                      <span>Safe Resumptions Post-Skip</span>
                    </div>
                    <span className="text-[14px] text-slate-400 font-medium">Auto-resumes N+1</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-700">
                      <RotateCcw className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span className="font-bold text-indigo-900">20%</span>
                      <span>Zero Bounce Incidents</span>
                    </div>
                    <span className="text-[14px] text-slate-400 font-medium">₹0 bank fees</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Star className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span className="font-bold text-indigo-900">10%</span>
                      <span>Milestone Celebrations</span>
                    </div>
                    <span className="text-[14px] text-slate-400 font-medium">Habit pride</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-[14px] text-indigo-950 font-medium flex items-center gap-2 mt-3">
              <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>H12 gives a holistic view of compounding habit health, not just vanity signups.</span>
            </div>
          </div>
        </div>

        {/* Column 2: Success Metrics */}
        <div className="col-span-4 bg-white/95 rounded-[24px] border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between overflow-hidden hover:-translate-y-0.5 transition-transform bg-fade-hover">
          {/* Dark Purple Header */}
          <div className="bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white py-2.5 px-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <BarChart3 className="w-3.5 h-3.5 text-purple-300" />
            </div>
            <h3 className="text-[14px] font-bold tracking-wide">SUCCESS METRICS</h3>
          </div>

          <div className="p-4 flex flex-col justify-between h-full">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <h5 className="text-[14px] font-bold text-slate-900 leading-tight">12-Mo Habit Retention (H12)</h5>
                    <span className="text-[14px] text-slate-500">Overall compounding continuity</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[14px] font-mono font-black text-emerald-600 flex items-center gap-0.5 justify-end">
                    <ArrowUp className="w-3.5 h-3.5" /> +18%
                  </span>
                  <span className="text-[14px] text-slate-400 font-medium">(vs baseline 34%)</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <h5 className="text-[14px] font-bold text-slate-900 leading-tight">Mandate Bounce Rate</h5>
                    <span className="text-[14px] text-slate-500">Failed debits & return fees</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[14px] font-mono font-black text-emerald-600 flex items-center gap-0.5 justify-end">
                    <ArrowDown className="w-3.5 h-3.5" /> &lt; 1.2%
                  </span>
                  <span className="text-[14px] text-slate-400 font-medium">(from 8.2%)</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <FilePlus className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <h5 className="text-[14px] font-bold text-slate-900 leading-tight">Post-Skip Resumption Rate</h5>
                    <span className="text-[14px] text-slate-500">Resumes in Month N+1</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[14px] font-mono font-black text-emerald-600 flex items-center gap-0.5 justify-end">
                    <ArrowUp className="w-3.5 h-3.5" /> 78%+
                  </span>
                  <span className="text-[14px] text-slate-400 font-medium">(vs 18% pause)</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <h5 className="text-[14px] font-bold text-slate-900 leading-tight">Feature Adoption Rate</h5>
                    <span className="text-[14px] text-slate-500">% eligible users trying Orbit</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[14px] font-mono font-black text-indigo-600">42%+</span>
                  <span className="text-[14px] text-slate-400 font-medium">(in 90 days)</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <h5 className="text-[14px] font-bold text-slate-900 leading-tight">3-Year Compounding AUM</h5>
                    <span className="text-[14px] text-slate-500">Lifetime wealth retention</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[14px] font-mono font-black text-emerald-600 flex items-center gap-0.5 justify-end">
                    <ArrowUp className="w-3.5 h-3.5" /> +24%
                  </span>
                  <span className="text-[14px] text-slate-400 font-medium">(per cohort)</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-[14px] text-emerald-950 font-medium flex items-center gap-2 mt-3">
              <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>These metrics help us measure meaningful financial impact, not just vanity usage.</span>
            </div>
          </div>
        </div>

        {/* Column 3: Guardrail Metrics */}
        <div className="col-span-4 bg-white/95 rounded-[24px] border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between overflow-hidden hover:-translate-y-0.5 transition-transform bg-fade-hover">
          {/* Dark Purple Header */}
          <div className="bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white py-2.5 px-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
            </div>
            <h3 className="text-[14px] font-bold tracking-wide">GUARDRAIL METRICS</h3>
          </div>

          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <p className="text-[14px] text-slate-600 font-medium mb-2.5">
                Ensuring we improve flexibility without hurting disciplined compounding or SEBI compliance.
              </p>

              <div className="space-y-2 text-[14px]">
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block leading-tight">Total Installment Drop Rate</span>
                      <span className="text-[14px] text-slate-500">Should decrease</span>
                    </div>
                  </div>
                  <ArrowDown className="w-4 h-4 text-emerald-600 font-bold" />
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block leading-tight">Consecutive Months Paused</span>
                      <span className="text-[14px] text-slate-500">Cap at max 1 month / quarter</span>
                    </div>
                  </div>
                  <span className="text-[14px] font-mono font-bold text-slate-600">↔</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block leading-tight">Active Mandate Lifespan</span>
                      <span className="text-[14px] text-slate-500">Should increase</span>
                    </div>
                  </div>
                  <ArrowUp className="w-4 h-4 text-emerald-600 font-bold" />
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block leading-tight">Bank Bounce Complaints</span>
                      <span className="text-[14px] text-slate-500">Should drop to near zero</span>
                    </div>
                  </div>
                  <ArrowDown className="w-4 h-4 text-emerald-600 font-bold" />
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Smile className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block leading-tight">User CSAT Score</span>
                      <span className="text-[14px] text-slate-500">Should increase</span>
                    </div>
                  </div>
                  <ArrowUp className="w-4 h-4 text-emerald-600 font-bold" />
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 text-[14px] text-purple-950 font-medium flex items-center gap-2 mt-3">
              <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
              <span>We grow responsibly while strictly maintaining SEBI non-advice discipline.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Future Roadmap (Horizontal 3-Phase Track matching Spotify Slide 10) */}
      <div className="bg-white/95 rounded-[22px] p-3.5 border border-slate-100 shadow-md my-2">
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Left: Banner */}
          <div className="col-span-3 p-3 rounded-2xl bg-gradient-to-br from-[#180B38] to-[#24124D] text-white flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Rocket className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h4 className="text-[14px] font-black uppercase text-purple-200">FUTURE ROADMAP</h4>
              <p className="text-[14px] text-slate-300 mt-0.5 leading-tight">
                Continuously evolving to make disciplined wealth creation personal & lifelong.
              </p>
            </div>
          </div>

          {/* Phase 1 */}
          <div className="col-span-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[14px] font-bold text-slate-900">PHASE 1 (MVP)</span>
              <span className="text-[14px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Live</span>
            </div>
            <div className="text-[14px] text-slate-600 space-y-1 font-medium">
              <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Flex Debit Date Selection</p>
              <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> 1-Tap Skip the Month</p>
              <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> 5th-Month Milestone Reward</p>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="col-span-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[14px] font-bold text-slate-900">PHASE 2</span>
              <span className="text-[14px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">Q3 2026</span>
            </div>
            <div className="text-[14px] text-slate-600 space-y-1 font-medium">
              <p className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Smart Paycheck Radar</p>
              <p className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Micro-Topup Buffer Booster</p>
              <p className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Drawdown Reassurance Shield</p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="col-span-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[14px] font-bold text-slate-900">PHASE 3</span>
              <span className="text-[14px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">2027 Vision</span>
            </div>
            <div className="text-[14px] text-slate-600 space-y-1 font-medium">
              <p className="flex items-center gap-1.5"><Flag className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Multi-Goal Portfolio Orbit</p>
              <p className="flex items-center gap-1.5"><Flag className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Employer Direct Salary Connect</p>
              <p className="flex items-center gap-1.5"><Flag className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Vernacular Audio SIP Assistant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dark Purple Banner */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
            <Star className="w-4 h-4 text-yellow-300 fill-current" />
          </div>
          <div>
            <p className="text-[14px] text-slate-200 font-medium leading-snug">
              Success is when every retail Indian investor compounds their wealth without fear of bank penalties or broken streaks.{' '}
              Groww Orbit turns <span className="text-yellow-300 font-bold">fragile intent</span> into{' '}
              <span className="text-emerald-300 font-bold">unbroken habit</span> and habit into lifelong wealth.
            </p>
          </div>
        </div>

        {/* Waveform Effect */}
        <div className="hidden lg:flex items-center gap-1 shrink-0 pl-4">
          {[10, 20, 14, 28, 16, 24, 12, 18].map((h, i) => (
            <div 
              key={i} 
              className="w-1 bg-purple-400/50 rounded-full" 
              style={{ height: `${h}px` }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};
