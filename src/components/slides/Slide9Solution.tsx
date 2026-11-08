import React, { useState } from 'react';
import { SlideHeader } from './SlideHeader';
import { 
  Calendar, 
  RotateCcw, 
  Trophy, 
  Check, 
  ArrowLeft, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Users, 
  TrendingUp, 
  Heart, 
  Video, 
  Laptop, 
  Home, 
  Briefcase, 
  HeartPulse, 
  Gift, 
  Award,
  Zap,
  Repeat,
  CheckCircle2,
  Clock,
  Coins
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Cute3DAsset, SparkleCluster } from '../CuteAssets';

interface Slide9Props {
  onOpenMvp?: () => void;
}

export const Slide9Solution: React.FC<Slide9Props> = ({ onOpenMvp }) => {
  // Mobile Prototype Sub-screen Navigation
  const [phoneScreen, setPhoneScreen] = useState<'main' | 'dates' | 'months' | 'milestone'>('main');
  const [selectedDate, setSelectedDate] = useState<number>(10);
  const [selectedMonth, setSelectedMonth] = useState<string>('March 2026');
  const [isMilestoneUnlocked, setIsMilestoneUnlocked] = useState<boolean>(true);
  const [confirmationNotice, setConfirmationNotice] = useState<string | null>(null);

  const availableDates = [
    { date: 8, label: '8th of month', note: 'Recommended for 7th salary credit' },
    { date: 10, label: '10th of month', note: 'Standard mid-month buffer' },
    { date: 12, label: '12th of month', note: '+7 days flexibility window' },
    { date: 15, label: '15th of month', note: 'Mid-month settlement' }
  ];

  const availableMonths = [
    { month: 'March 2026', tag: 'Current Month (Recommended)', active: true },
    { month: 'April 2026', tag: 'Upcoming Month', active: false },
    { month: 'May 2026', tag: 'Future Cycle', active: false },
    { month: 'June 2026', tag: 'Future Cycle', active: false }
  ];

  const handleConfirmDate = () => {
    setConfirmationNotice(`Debit date shifted to ${selectedDate}th!`);
    setPhoneScreen('main');
    confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
  };

  const handleConfirmMonth = () => {
    setConfirmationNotice(`Skipped ${selectedMonth} only. Auto-resumes next month.`);
    setPhoneScreen('main');
    confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
  };

  const handleTriggerMilestone = () => {
    setPhoneScreen('milestone');
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.5 } });
  };

  return (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FB] to-[#F0FAF7] p-7 rounded-[26px] relative overflow-hidden shadow-2xl">
      <SparkleCluster className="top-4 right-24" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <SlideHeader
        title="Meet Groww Orbit: Continuity by Flexibility, not Lock-in"
        subtitle="Adaptive pacing that syncs with your salary timing, provides 1-tap single-month skips, and rewards compounding streaks."
        badge="Product Solution"
        pageNumber={9}
      />

      {/* Main Section: 3-Column Features (Left) + Center Phone + Key Highlights (Right) */}
      <div className="grid grid-cols-12 gap-5 my-auto items-center">
        {/* Left Column: Core Experience (3 Feature Cards connected by arrows) */}
        <div className="col-span-4 flex flex-col justify-between space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-950 font-bold text-[14px] w-fit">
            <span>Core Experience</span>
          </div>

          {/* Feature 1: Flex Debit */}
          <div className="bg-white/95 rounded-[22px] p-3.5 border border-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-transform bg-fade-hover">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[14px] font-bold flex items-center justify-center">1</span>
              <h4 className="text-[14px] font-bold text-slate-900 leading-tight">Flex Debit / Change Dates ✦</h4>
            </div>
            <p className="text-[14px] text-slate-600 leading-snug">
              Syncs debits with variable salary timing (1st–10th) or personal liquidity cycles.
            </p>
            <div className="mt-2 p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[14px] font-medium text-slate-700">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-indigo-600" /> Nifty 50 Index Fund</span>
              <span className="text-emerald-600 font-bold">10th Selected</span>
            </div>
          </div>

          {/* Feature 2: 1-Tap Skip The Month (With Hub Diagram) */}
          <div className="bg-white/95 rounded-[22px] p-3.5 border border-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-transform bg-fade-hover">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[14px] font-bold flex items-center justify-center">2</span>
              <h4 className="text-[14px] font-bold text-slate-900 leading-tight">1-Tap Skip the Month</h4>
            </div>
            <p className="text-[14px] text-slate-600 leading-snug">
              Safe single-month holiday without killing or refiling the NPCI mandate.
            </p>

            {/* Central Hub with 4 Context Icons */}
            <div className="grid grid-cols-4 gap-1.5 mt-2 text-center">
              <div className="p-1 rounded-lg bg-indigo-50 border border-indigo-100 text-[14px] font-semibold text-indigo-950 flex flex-col items-center">
                <Briefcase className="w-3.5 h-3.5 text-indigo-600 mb-0.5" />
                <span>Salary</span>
              </div>
              <div className="p-1 rounded-lg bg-rose-50 border border-rose-100 text-[14px] font-semibold text-rose-950 flex flex-col items-center">
                <HeartPulse className="w-3.5 h-3.5 text-rose-600 mb-0.5" />
                <span>Medical</span>
              </div>
              <div className="p-1 rounded-lg bg-amber-50 border border-amber-100 text-[14px] font-semibold text-amber-950 flex flex-col items-center">
                <Gift className="w-3.5 h-3.5 text-amber-600 mb-0.5" />
                <span>Festive</span>
              </div>
              <div className="p-1 rounded-lg bg-blue-50 border border-blue-100 text-[14px] font-semibold text-blue-950 flex flex-col items-center">
                <Home className="w-3.5 h-3.5 text-blue-600 mb-0.5" />
                <span>Rent</span>
              </div>
            </div>
          </div>

          {/* Feature 3: Milestone Rewards */}
          <div className="bg-white/95 rounded-[22px] p-3.5 border border-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-transform bg-fade-hover">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[14px] font-bold flex items-center justify-center">3</span>
              <h4 className="text-[14px] font-bold text-slate-900 leading-tight">Milestone Rewards & Streak</h4>
            </div>
            <p className="text-[14px] text-slate-600 leading-snug">
              5th-month milestone reward pop-up badge to reinforce habit discipline over small nominal gains.
            </p>
            <div className="mt-2 p-1.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-[14px] font-bold text-amber-900">
              <span className="flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-600" />
                5-Month Milestone
              </span>
              <span className="text-amber-700 font-mono">Habit Unlocked</span>
            </div>
          </div>
        </div>

        {/* Center Column: Interactive iPhone Mockup matching Spotify PDF exactly */}
        <div className="col-span-4 flex items-center justify-center">
          <div className="w-[280px] bg-slate-950 rounded-[40px] p-3 shadow-2xl border-2 border-slate-800 text-white relative mobile-prototype-viewport">
            {/* Dynamic Island / Notch */}
            <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-8 h-1 bg-slate-700 rounded-full" />
            </div>

            {/* Screen Viewport */}
            <div className="bg-[#0D1520] rounded-[30px] p-3 text-slate-200 text-left min-h-[415px] flex flex-col justify-between border border-slate-800/80 overflow-hidden">
              {/* Screen 1: Main SIP Details */}
              {phoneScreen === 'main' && (
                <div className="space-y-2.5 animate-fadeIn">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                    <span className="text-[14px] font-bold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Groww Orbit
                    </span>

                    {/* Milestone Complete Icon (Enable/Disabled) */}
                    <button
                      onClick={handleTriggerMilestone}
                      className={`px-2 py-0.5 rounded-full text-[14px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                        isMilestoneUnlocked 
                          ? 'bg-amber-400 text-slate-950 shadow-sm hover:bg-amber-300' 
                          : 'bg-slate-800 text-slate-400 opacity-60'
                      }`}
                      title="Click to view 5th Month Reward"
                    >
                      <Trophy className="w-2.5 h-2.5" />
                      <span>5th Mo Done!</span>
                    </button>
                  </div>

                  <div>
                    <h3 className="text-[15px] font-black text-white leading-tight">Same discipline, flexible dates.</h3>
                    <p className="text-[14px] text-slate-400 mt-0.5 leading-snug">
                      Invest when you have the cash. Orbit adapts debits to your payday.
                    </p>
                  </div>

                  {/* Fund Card */}
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="text-[14px] font-bold text-white">Nifty 50 Index Fund</div>
                      <div className="text-[14px] text-slate-400">₹1,500/mo • Due on {selectedDate}th</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-[14px]">
                      ✓
                    </div>
                  </div>

                  {/* Action 1: Flex Debit / Change Dates */}
                  <button
                    onClick={() => setPhoneScreen('dates')}
                    className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[14px] flex items-center justify-between shadow-sm transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      Flex Debit / Change Dates
                    </span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-[14px] text-slate-400 text-center font-medium">
                    Or explore more ways
                  </div>

                  {/* Action 2: 1-Tap Skip the Month */}
                  <button
                    onClick={() => setPhoneScreen('months')}
                    className="w-full py-1.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-[14px] flex items-center justify-between border border-slate-700/80 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <RotateCcw className="w-3.5 h-3.5 text-indigo-400" />
                      1-Tap Skip the Month
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  {/* Action 3: View Milestone */}
                  <button
                    onClick={() => setPhoneScreen('milestone')}
                    className="w-full py-1.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-[14px] flex items-center justify-between border border-slate-700/80 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      Milestone Complete Reward
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  {confirmationNotice && (
                    <div className="p-1.5 rounded-lg bg-emerald-950 border border-emerald-500/60 text-[14px] text-emerald-300 font-medium">
                      ✓ {confirmationNotice}
                    </div>
                  )}
                </div>
              )}

              {/* Screen 2: Dates Selector */}
              {phoneScreen === 'dates' && (
                <div className="space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 pb-1.5 border-b border-slate-800">
                    <button 
                      onClick={() => setPhoneScreen('main')}
                      className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <div>
                      <div className="text-[14px] font-bold text-white">Select Debit Date</div>
                      <div className="text-[14px] text-slate-400">Flex debit window (₹0 penalty)</div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {availableDates.map(item => (
                      <button
                        key={item.date}
                        onClick={() => setSelectedDate(item.date)}
                        className={`w-full p-2 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                          selectedDate === item.date
                            ? 'bg-indigo-600/30 border-indigo-500 text-white'
                            : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div>
                          <div className="text-[14px] font-bold">{item.label}</div>
                          <div className="text-[14px] text-slate-400">{item.note}</div>
                        </div>
                        {selectedDate === item.date && (
                          <div className="w-4 h-4 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[14px]">
                            ✓
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleConfirmDate}
                    className="w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[14px] cursor-pointer mt-1"
                  >
                    Confirm Date Shift to {selectedDate}th
                  </button>
                </div>
              )}

              {/* Screen 3: Month Selector */}
              {phoneScreen === 'months' && (
                <div className="space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 pb-1.5 border-b border-slate-800">
                    <button 
                      onClick={() => setPhoneScreen('main')}
                      className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <div>
                      <div className="text-[14px] font-bold text-white">1-Tap Skip the Month</div>
                      <div className="text-[14px] text-slate-400">Select only 1 month to skip</div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {availableMonths.map(item => (
                      <button
                        key={item.month}
                        onClick={() => setSelectedMonth(item.month)}
                        className={`w-full p-2 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                          selectedMonth === item.month
                            ? 'bg-indigo-600/30 border-indigo-500 text-white'
                            : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div>
                          <div className="text-[14px] font-bold">{item.month}</div>
                          <div className="text-[14px] text-slate-400">{item.tag}</div>
                        </div>
                        {selectedMonth === item.month && (
                          <div className="w-4 h-4 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[14px]">
                            ✓
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleConfirmMonth}
                    className="w-full py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-[14px] cursor-pointer mt-1"
                  >
                    Confirm Skip for {selectedMonth}
                  </button>
                </div>
              )}

              {/* Screen 4: Milestone Reward Screen */}
              {phoneScreen === 'milestone' && (
                <div className="space-y-2.5 animate-fadeIn text-center py-2">
                  <Cute3DAsset type="trophy" size={48} className="mx-auto" />
                  <div>
                    <h3 className="text-[14px] font-black text-amber-400">5th-Month Milestone Complete!</h3>
                    <p className="text-[14px] text-slate-300 mt-0.5 leading-snug">
                      Reward Unlocked • ₹7,500 Saved • Zero Bounce Penalties.
                    </p>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-left text-[14px] space-y-1">
                    <div className="text-emerald-400 font-bold">✓ Habit Streak Protected (5/12 Months)</div>
                    <div className="text-slate-300">Top 34% of disciplined first-time wealth builders.</div>
                  </div>

                  <button
                    onClick={() => setPhoneScreen('main')}
                    className="w-full py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-[14px] cursor-pointer"
                  >
                    Back to SIP Details
                  </button>
                </div>
              )}

              {/* Bottom Phone Bar */}
              <div className="pt-2 border-t border-slate-800 text-center">
                <span className="text-[14px] text-slate-500 font-mono">
                  NPCI Guidelines • Guaranteed Single Debit
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Highlights (5 Circular Icons + Quote) matching Spotify Slide 9 */}
        <div className="col-span-4 bg-white/95 rounded-[24px] p-4.5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-950 font-bold text-[14px] mb-3">
              <span>Key Highlights</span>
            </div>

            <div className="space-y-2.5 text-[14px] text-slate-700">
              {/* Highlight 1 */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900 leading-tight">Flex Debit (Core)</h4>
                  <p className="text-[14px] text-slate-500">Sync debits with actual salary credit and personal cycles.</p>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <RotateCcw className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900 leading-tight">1-Tap Skip the Month</h4>
                  <p className="text-[14px] text-slate-500">Freeze single month with zero bank penalty or mandate kill.</p>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900 leading-tight">Milestone Rewards</h4>
                  <p className="text-[14px] text-slate-500">5th-month streak milestone badge activates to reward discipline.</p>
                </div>
              </div>

              {/* Highlight 4 */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900 leading-tight">Balance Safeguard</h4>
                  <p className="text-[14px] text-slate-500">Pre-debit balance check prevents ₹590 ECS return charges.</p>
                </div>
              </div>

              {/* Highlight 5 */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900 leading-tight">Streak Protection</h4>
                  <p className="text-[14px] text-slate-500">Retains investment habit without guilt or punitive drops.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100 mt-2.5">
            <span className="text-[18px] text-purple-600 font-serif font-black leading-none block mb-0.5">“</span>
            <p className="text-[14px] italic text-purple-950 font-bold leading-snug">
              Consistency, not rigidity. Invest when you have the cash, without fear of penalties.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Dark Purple Banner: Why Groww Orbit? + 4 Value Props + 3D Rocket */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-purple-500/20 border border-purple-400/30 text-white font-extrabold text-[14px] shrink-0">
            Why Groww Orbit?
          </div>

          <div className="grid grid-cols-4 gap-3 text-left">
            <div>
              <div className="text-[14px] font-extrabold text-purple-300 uppercase">Solves root cause</div>
              <p className="text-[14px] text-slate-200 mt-0.5 font-medium leading-tight">
                Syncs with salary timing & personal life events (rent, medical, festival)
              </p>
            </div>

            <div>
              <div className="text-[14px] font-extrabold text-emerald-300 uppercase">Increases retention</div>
              <p className="text-[14px] text-slate-200 mt-0.5 font-medium leading-tight">
                +18.4% 12-month habit continuation lift
              </p>
            </div>

            <div>
              <div className="text-[14px] font-extrabold text-blue-300 uppercase">Drives business impact</div>
              <p className="text-[14px] text-slate-200 mt-0.5 font-medium leading-tight">
                Protects compounding AUM & eliminates CAC churn
              </p>
            </div>

            <div>
              <div className="text-[14px] font-extrabold text-pink-300 uppercase">Feels reassuring</div>
              <p className="text-[14px] text-slate-200 mt-0.5 font-medium leading-tight">
                Replaces penalty fear with confident wealth building
              </p>
            </div>
          </div>
        </div>

        <div className="shrink-0 pl-3 hidden md:block">
          <Cute3DAsset type="rocket" size={40} />
        </div>
      </div>

      {/* Bottom Links Bar: Groww Orbit App (Left) + Demo Video (Right) */}
      <div className="flex items-center justify-between pt-1 px-2 text-[14px] text-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
            <Laptop className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-slate-900">Groww Orbit:</span>
          {onOpenMvp ? (
            <button
              onClick={onOpenMvp}
              className="text-emerald-700 hover:text-emerald-900 underline font-mono text-[14px] font-semibold cursor-pointer"
            >
              https://groww-orbit.preview.app (Click to Test MVP) ↗
            </button>
          ) : (
            <a 
              href="https://groww-orbit.preview.app"
              target="_blank" 
              rel="noreferrer"
              className="text-emerald-700 hover:text-emerald-900 underline font-mono text-[14px]"
            >
              https://groww-orbit.preview.app ↗
            </a>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
            <Video className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-slate-900">Demo Video:</span>
          <a 
            href="https://drive.google.com/drive/folders/17ILnWf9KcG-DlCeDNdqptIYSp2wL1tNB?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="text-indigo-600 hover:text-indigo-800 underline font-mono text-[14px] truncate max-w-md"
          >
            https://drive.google.com/drive/folders/17ILnWf9KcG-DlCeDNdqptIYSp2wL1tNB?usp=sharing ↗
          </a>
        </div>
      </div>
    </div>
  );
};
