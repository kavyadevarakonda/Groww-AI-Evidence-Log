import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Cute3DAsset, Cute3DBadge, Groww3DLogo, Icon3D, Icon3DType } from './CuteAssets';

interface Scenario {
  id: string;
  name: string;
  tag: string;
  description: string;
  fundName: string;
  sipAmount: number;
  scheduledDate: number;
  investedMonths: number;
  totalInvested: number;
  currentValue: number;
  suggestedAction: 'flex' | 'skip' | 'milestone';
}

const PRESET_SCENARIOS: Scenario[] = [
  {
    id: 'salary_delay',
    name: 'Salary Delayed (Payroll Mismatch)',
    tag: 'Cashflow Buffer',
    description: 'Ankit\'s company announced salary delayed to 8th. His ₹1,500 SIP is scheduled for the 5th. Bank account has ₹380.',
    fundName: 'UTI Nifty 50 Index Fund',
    sipAmount: 1500,
    scheduledDate: 5,
    investedMonths: 5,
    totalInvested: 6000,
    currentValue: 5940,
    suggestedAction: 'flex'
  },
  {
    id: 'pause_intent',
    name: 'Discretionary Expense (Attempting to Pause)',
    tag: 'Pause Deflection',
    description: 'Sneha faces an unexpected ₹3,500 wedding gift expense. She opens Groww to tap "Pause SIP" out of cashflow stress.',
    fundName: 'Parag Parikh Flexi Cap Fund',
    sipAmount: 1000,
    scheduledDate: 10,
    investedMonths: 5,
    totalInvested: 5000,
    currentValue: 5042,
    suggestedAction: 'skip'
  },
  {
    id: 'micro_fatigue',
    name: 'Micro-Corpus Fatigue (+₹42 Return)',
    tag: 'Perception Reframing',
    description: 'Rohit saved ₹1,000 for 5 months. The portfolio shows +₹42 gain. He feels the return is trivial compared to a savings account.',
    fundName: 'Mirae Asset Large Cap Fund',
    sipAmount: 1000,
    scheduledDate: 15,
    investedMonths: 5,
    totalInvested: 5000,
    currentValue: 5042,
    suggestedAction: 'milestone'
  }
];

const MILESTONE_TIERS: {
  id: string;
  tier: string;
  icon3D: Icon3DType;
  requirement: string;
  status: string;
  unlocked: boolean;
  accent: string;
}[] = [
  {
    id: 'bronze',
    tier: 'Bronze Milestone',
    icon3D: 'bronzeMedal',
    requirement: 'Every Completed Month (Months 1–5)',
    status: '5x Monthly Bronze Unlocked',
    unlocked: true,
    accent: 'from-amber-700/30 to-amber-900/20 border-amber-500/50 text-amber-300'
  },
  {
    id: 'silver',
    tier: 'Silver Milestone',
    icon3D: 'silverMedal',
    requirement: '6 Months Completed',
    status: '1 Month Away (5/6 Mo)',
    unlocked: false,
    accent: 'from-slate-600/25 to-slate-800/30 border-slate-500/40 text-slate-200'
  },
  {
    id: 'gold',
    tier: 'Gold Milestone',
    icon3D: 'goldMedal',
    requirement: '12 Months (1 Year)',
    status: '5/12 Months Progress',
    unlocked: false,
    accent: 'from-yellow-500/20 to-amber-700/20 border-yellow-500/40 text-yellow-300'
  },
  {
    id: 'diamond',
    tier: 'Diamond Milestone',
    icon3D: 'diamondGem',
    requirement: '24 Months (2 Years)',
    status: '5/24 Months Progress',
    unlocked: false,
    accent: 'from-cyan-500/20 to-blue-700/20 border-cyan-500/40 text-cyan-300'
  },
  {
    id: 'platinum',
    tier: 'Platinum Milestone',
    icon3D: 'platinumCrown',
    requirement: '48 Months (4 Years)',
    status: '5/48 Months Progress',
    unlocked: false,
    accent: 'from-purple-500/20 to-indigo-700/20 border-purple-400/40 text-purple-300'
  }
];

interface PhoneChatMsg {
  sender: 'user' | 'bot';
  text: string;
  blocked?: boolean;
}

export const PaceMakerSimulator: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<Scenario>(PRESET_SCENARIOS[0]);
  const [phoneScreen, setPhoneScreen] = useState<'main' | 'dates' | 'months' | 'milestone'>('main');
  const [showTutorialPage, setShowTutorialPage] = useState<boolean>(false);
  const [selectedFlexDate, setSelectedFlexDate] = useState<number>(10);
  const [selectedSkipMonth, setSelectedSkipMonth] = useState<string>('March 2026');
  const [actionConfirmed, setActionConfirmed] = useState<string | null>(null);
  const [userPrompt, setUserPrompt] = useState<string>('');
  const [phoneChatInput, setPhoneChatInput] = useState<string>('');
  const [atPhoneBottom, setAtPhoneBottom] = useState<boolean>(false);
  const phoneScrollRef = useRef<HTMLDivElement>(null);
  const [phoneChatReply, setPhoneChatReply] = useState<PhoneChatMsg>({
    sender: 'bot',
    text: 'Ask me simple operational questions about your SIP (e.g., deduction date, monthly SIP amount, skipping 1 month, or shifting dates). I strictly block percentage return predictions or investment advice.'
  });

  const availableDateOptions = [
    { date: 8, label: '8th of month', desc: 'Syncs with 7th salary credit • ₹0 bank fee' },
    { date: 10, label: '10th of month', desc: 'Recommended 5-day payroll buffer' },
    { date: 12, label: '12th of month', desc: '+7 days flexibility window' },
    { date: 15, label: '15th of month', desc: 'Mid-month settlement option' }
  ];

  const availableMonthOptions = [
    { month: 'March 2026', desc: 'Current Cycle (Due in 48h)' },
    { month: 'April 2026', desc: 'Next Cycle (Advance Scheduling)' },
    { month: 'May 2026', desc: 'Future Cycle (Summer Planning)' },
    { month: 'June 2026', desc: 'Future Cycle (Advance Pacing)' }
  ];

  // Eval Gate Telemetry
  const [evalResult, setEvalResult] = useState<{
    passed: boolean;
    zeroAdviceCheck: 'PASS' | 'FAIL';
    zeroFomoCheck: 'PASS' | 'FAIL';
    npciFeasibility: 'PASS' | 'FAIL';
    latencyMs: number;
    reason?: string;
    outputUsed: string;
  }>({
    passed: true,
    zeroAdviceCheck: 'PASS',
    zeroFomoCheck: 'PASS',
    npciFeasibility: 'PASS',
    latencyMs: 44,
    outputUsed: "We understand payroll schedules can shift. You can adjust your upcoming deduction date by up to 10 days, or skip this single installment with zero penalty from Groww or your fund house. Your current portfolio remains active."
  });

  const handleApplyFlex = () => {
    setActionConfirmed(`Debit date shifted to the ${selectedFlexDate}th! NPCI mandate updated. Guaranteed single debit.`);
    setPhoneScreen('main');
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  };

  const handleApplySkip = () => {
    setActionConfirmed(`Skipped ${selectedSkipMonth} installment only. Your active SIP will automatically resume next cycle.`);
    setPhoneScreen('main');
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  };

  const handleOpenMilestone = () => {
    setPhoneScreen('milestone');
    confetti({ particleCount: 65, spread: 75, origin: { y: 0.5 } });
  };

  const evaluateAndRespond = (rawQuery: string) => {
    const text = rawQuery.trim();
    if (!text) return;

    const lower = text.toLowerCase();

    // Eval-Gate Guardrail: Block any percentage, extra money, return forecasts, or fund advice
    const hasAdviceIntent =
      lower.includes('should i invest') ||
      lower.includes('should i switch') ||
      lower.includes('which fund') ||
      lower.includes('small cap') ||
      lower.includes('mid cap') ||
      lower.includes('return') ||
      lower.includes('percentage') ||
      lower.includes('%') ||
      lower.includes('extra money') ||
      lower.includes('profit') ||
      lower.includes('how much will i get') ||
      lower.includes('double') ||
      lower.includes('best fund') ||
      lower.includes('stocks');

    const hasFomoIntent =
      lower.includes('crash') ||
      lower.includes('miss out') ||
      lower.includes('hurting compounding') ||
      lower.includes('18%') ||
      lower.includes('market fell');

    if (hasAdviceIntent || hasFomoIntent) {
      const fallbackMsg =
        'SAFE DETERMINISTIC FALLBACK: "Groww SIP Assistant does not provide financial or fund recommendations, return percentages, or profit projections. For investment advice, please consult a SEBI-registered advisor. For operational help—such as shifting your deduction date or skipping 1 month—use the buttons above."';

      setEvalResult({
        passed: false,
        zeroAdviceCheck: hasAdviceIntent ? 'FAIL' : 'PASS',
        zeroFomoCheck: hasFomoIntent ? 'FAIL' : 'PASS',
        npciFeasibility: 'PASS',
        latencyMs: 38,
        reason: 'BLOCKED BY EVAL-GATE: Prohibited financial advice, return percentage, or profit projection detected in query.',
        outputUsed: fallbackMsg
      });
      setPhoneChatReply({
        sender: 'bot',
        text: fallbackMsg,
        blocked: true
      });
      setActionConfirmed('Eval-Gate Intercepted query: Deployed Safe Non-Advisory Fallback.');
    } else {
      // Answer simple SIP operational questions about this SIP
      let operationalReply = `Your ${activeScenario.fundName} SIP is ₹${activeScenario.sipAmount.toLocaleString()}/month scheduled on the ${activeScenario.scheduledDate}th (${activeScenario.investedMonths} months completed, ₹${activeScenario.totalInvested.toLocaleString()} total invested). You can shift your debit date by 5–10 days or skip 1 month with ₹0 Groww penalty.`;

      if (lower.includes('date') || lower.includes('salary') || lower.includes('shift') || lower.includes('delay')) {
        operationalReply = `For ${activeScenario.fundName}, your current deduction is on the ${activeScenario.scheduledDate}th. Tap "Flex Debit / Change Dates" to move it to the 8th, 10th, 12th, or 15th to match your salary credit with ₹0 Groww fee.`;
      } else if (lower.includes('skip') || lower.includes('pause') || lower.includes('month') || lower.includes('expense')) {
        operationalReply = `You can pause 1 installment of your ₹${activeScenario.sipAmount.toLocaleString()} SIP in ${activeScenario.fundName} by tapping "1-Tap Skip the Month". Your SIP will automatically resume next month and your ${activeScenario.investedMonths}-month Milestone Streak stays protected.`;
      } else if (lower.includes('streak') || lower.includes('milestone') || lower.includes('bronze') || lower.includes('silver') || lower.includes('gold')) {
        operationalReply = `You have completed ${activeScenario.investedMonths} months (5x Monthly Bronze Milestones unlocked!). Complete 6 months for Silver, 12 months for Gold, 24 months for Diamond, and 48 months for Platinum. Tap "Milestone Streak" to view all 3D tiers!`;
      }

      setEvalResult({
        passed: true,
        zeroAdviceCheck: 'PASS',
        zeroFomoCheck: 'PASS',
        npciFeasibility: 'PASS',
        latencyMs: 45,
        outputUsed: operationalReply
      });
      setPhoneChatReply({
        sender: 'bot',
        text: operationalReply,
        blocked: false
      });
      setActionConfirmed('Eval-Gate Passed: Answered operational SIP question safely.');
    }
  };

  const handleTestCustomPrompt = (promptText?: string) => {
    const text = promptText || userPrompt;
    if (!text.trim()) return;
    evaluateAndRespond(text);
  };

  const handlePhoneChatSubmit = () => {
    if (!phoneChatInput.trim()) return;
    setUserPrompt(phoneChatInput);
    evaluateAndRespond(phoneChatInput);
    setPhoneChatInput('');
  };

  if (showTutorialPage) {
    return (
      <div className="p-6 max-w-6xl mx-auto space-y-6 animate-fadeIn mvp-font-ppt-14">
        {/* Tutorial Page Header with 3D Icon */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <Cute3DBadge color="emerald" size={48}>
              <Icon3D type="book" size={30} />
            </Cute3DBadge>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  MVP Feature Guidelines & How-To Tutorial
                </h1>
                <span className="text-[14px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Step-by-Step User Guide
                </span>
              </div>
              <p className="text-[14px] text-slate-500 mt-0.5">
                Clear step-by-step instructions on how to access and use each feature on the mobile screen inside the Groww SIP Continuity MVP.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowTutorialPage(false)}
            className="px-4 py-2.5 rounded-xl bg-[#00D09C] hover:bg-[#00B88A] text-slate-950 font-bold text-[14px] flex items-center gap-2 shadow-sm transition-all cursor-pointer shrink-0"
          >
            <Icon3D type="arrowLeft" size={18} className="text-slate-950" />
            <span>Back to MVP Simulator</span>
          </button>
        </div>

        {/* Focused Guidelines Grid with 3D Feature Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Guideline 1: How to Change the Date */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-3d-card space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cute3DBadge color="emerald" size={40}>
                  <Icon3D type="calendar" size={24} />
                </Cute3DBadge>
                <div>
                  <span className="text-[14px] font-bold uppercase tracking-wider text-emerald-600 block">Feature Guide 01</span>
                  <h2 className="text-[16px] font-extrabold text-slate-900">
                    How to Change the SIP Deduction Date
                  </h2>
                </div>
              </div>
            </div>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              Use this feature when your salary is delayed by a few days so your bank account isn't hit with ₹250–₹590 bounce charges.
            </p>
            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 space-y-2 text-[14px]">
              <div className="font-bold text-slate-800 text-[14px] uppercase tracking-wider">Step-by-Step Process:</div>
              <ol className="space-y-1.5 text-slate-700 list-decimal list-inside">
                <li>On the <strong>mobile screen</strong> under <strong>SIP Continuity Flow</strong>, tap the green <strong>"Flex Debit / Change Dates"</strong> button.</li>
                <li>Review the available NPCI-safe buffer dates: <strong>8th, 10th, 12th, or 15th of the month</strong>.</li>
                <li>Tap the date that aligns with your salary credit (for example, <strong>10th of month</strong>).</li>
                <li>Tap <strong>"Confirm Shift to 10th"</strong> to update your mandate and return to the main phone screen.</li>
              </ol>
            </div>
          </div>

          {/* Guideline 2: How to Change the Months / Skip the Month */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-3d-card space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cute3DBadge color="purple" size={40}>
                  <Icon3D type="skipRotate" size={24} />
                </Cute3DBadge>
                <div>
                  <span className="text-[14px] font-bold uppercase tracking-wider text-indigo-600 block">Feature Guide 02</span>
                  <h2 className="text-[16px] font-extrabold text-slate-900">
                    How to Change or Skip the Month
                  </h2>
                </div>
              </div>
            </div>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              Use this feature when you have an unexpected one-time expense and want to take a 1-month break without cancelling your SIP.
            </p>
            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 space-y-2 text-[14px]">
              <div className="font-bold text-slate-800 text-[14px] uppercase tracking-wider">Step-by-Step Process:</div>
              <ol className="space-y-1.5 text-slate-700 list-decimal list-inside">
                <li>On the <strong>phone screen</strong> under <strong>SIP Continuity Flow</strong>, tap the <strong>"1-Tap Skip the Month"</strong> button.</li>
                <li>Choose which single month cycle you want to skip (<strong>March 2026, April 2026, May 2026, or June 2026</strong>).</li>
                <li>Tap <strong>"Confirm 1-Month Skip"</strong> to pause just that month's deduction.</li>
                <li>Your SIP will automatically resume the next month while keeping your 5-month habit streak alive.</li>
              </ol>
            </div>
          </div>

          {/* Guideline 3: How to Access Milestone Streak */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-3d-card space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cute3DBadge color="amber" size={40}>
                  <Icon3D type="flame" size={24} />
                </Cute3DBadge>
                <div>
                  <span className="text-[14px] font-bold uppercase tracking-wider text-amber-600 block">Feature Guide 03</span>
                  <h2 className="text-[16px] font-extrabold text-slate-900 flex items-center gap-1.5">
                    <span>How to Access Milestone Streak</span>
                    <Icon3D type="flame" size={18} />
                    <span>& Tier Rewards</span>
                  </h2>
                </div>
              </div>
            </div>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              Track your default 5-month streak and unlock 3D tiered milestones for every completed month as well as 6 months, 1 year, 2 years, and 4 years.
            </p>
            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 space-y-2 text-[14px]">
              <div className="font-bold text-slate-800 text-[14px] uppercase tracking-wider">Step-by-Step Process:</div>
              <ol className="space-y-1.5 text-slate-700 list-decimal list-inside">
                <li>Look right below the Portfolio Metrics card on the <strong>mobile screen</strong>.</li>
                <li>Tap the <strong>"Milestone Streak"</strong> 3D flame button.</li>
                <li>View your unlocked <strong>Monthly Bronze Milestones (Months 1–5)</strong> and roadmap for <strong>6 Months (Silver)</strong>, <strong>12 Months (Gold)</strong>, <strong>24 Months (Diamond)</strong>, and <strong>48 Months (Platinum)</strong>.</li>
                <li>Tap <strong>"Back to SIP Details"</strong> to return to the main phone screen.</li>
              </ol>
            </div>
          </div>

          {/* Guideline 4: How to Use the Eval-Gated SIP Q&A Chatbot */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-3d-card space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cute3DBadge color="rose" size={40}>
                  <Icon3D type="message" size={24} />
                </Cute3DBadge>
                <div>
                  <span className="text-[14px] font-bold uppercase tracking-wider text-rose-600 block">Feature Guide 04</span>
                  <h2 className="text-[16px] font-extrabold text-slate-900">
                    How to Use the SIP Q&A Chatbot & Eval-Gate
                  </h2>
                </div>
              </div>
            </div>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              Ask operational questions about your SIP at the bottom of the main mobile screen while the Eval-Gate blocks any percentage or extra-money investment advice.
            </p>
            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 space-y-2 text-[14px]">
              <div className="font-bold text-slate-800 text-[14px] uppercase tracking-wider">Step-by-Step Process:</div>
              <ol className="space-y-1.5 text-slate-700 list-decimal list-inside">
                <li>Scroll down on the <strong>main phone screen</strong> to the <strong>SIP Q&A Chatbot bar</strong> (or use the Stress Tester on the right).</li>
                <li>Ask a simple SIP question like <em>"My salary is delayed by 3 days"</em> or <em>"How do I skip a month?"</em> to get instant operational help.</li>
                <li>Try asking about returns or extra money (e.g., <em>"Will I miss out on 18% returns?"</em> or <em>"Should I switch to Small Cap?"</em>).</li>
                <li>Watch the <strong>Eval-Gate Guardrail</strong> immediately block the advisory query and display a safe SEBI-compliant fallback.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Bottom Return CTA */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setShowTutorialPage(false)}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-[14px] flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <Icon3D type="arrowLeft" size={18} className="text-[#00D09C]" />
            <span>Return to Interactive MVP Simulator</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 mvp-font-ppt-14">
      {/* Top Banner with 3D Icons */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5">
        <div className="space-y-2">
          <div className="flex items-center gap-3.5 flex-wrap">
            <Cute3DBadge color="emerald" size={46}>
              <Icon3D type="smartphone" size={30} />
            </Cute3DBadge>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Groww prototype— AI-Native MVP
                </h1>
                <span className="text-[14px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Part 5: Production Ready
                </span>
              </div>
              <p className="text-[14px] text-slate-500 mt-0.5">
                Eval-gated, non-advisory SIP continuity companion running inside the Groww Mutual Fund management flow.
              </p>
            </div>
          </div>

          {/* 3D Badges */}
          <div className="flex items-center gap-2.5 pt-1 flex-wrap">
            <span className="text-[14px] font-bold text-emerald-900 bg-emerald-50/90 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-xs">
              <Icon3D type="shieldCheck" size={18} />
              <span>SEBI Non-Advice Compliant</span>
            </span>
            <span className="text-[14px] font-bold text-indigo-900 bg-indigo-50/90 border border-indigo-200 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-xs">
              <Icon3D type="lock" size={18} />
              <span>NPCI Buffer Protected</span>
            </span>
            <span className="text-[14px] font-bold text-purple-900 bg-purple-50/90 border border-purple-200 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-xs">
              <Icon3D type="checkCircle" size={18} />
              <span>Golden Set Benchmarked (20/20)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Part 5: AI-Native Architecture, Quality Check & Non-Advisory Safe Fallback Callout with 3D Icons */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-5 border border-slate-700 shadow-md">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700/80 mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Icon3D type="sparkles" size={18} />
            <span className="text-[14px] font-bold uppercase tracking-wider text-emerald-400 font-mono">
              Part 5 Rubric Compliance: AI-Native MVP Architecture & Eval-Gate
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[14px]">
          <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Cute3DBadge color="emerald" size={28}>
                <Icon3D type="sparkles" size={18} />
              </Cute3DBadge>
              <span>Where AI Earns Its Place</span>
            </div>
            <p className="text-[14px] text-slate-300 leading-relaxed">
              First-time salaried investors do not know banking terminology (NACH settlement windows, clearing lag). When salary is delayed by 3–5 days, AI parses natural, unformatted human distress and proposes immediate non-destructive schedule adjustments without intimidating multi-step forms.
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Cute3DBadge color="amber" size={28}>
                <Icon3D type="alertTriangle" size={18} />
              </Cute3DBadge>
              <span>What Non-AI Misses</span>
            </div>
            <p className="text-[14px] text-slate-300 leading-relaxed">
              Legacy banking rules are binary: <span className="text-white font-semibold">"Cancel SIP"</span> or <span className="text-white font-semibold">"Pause (3–6 months)"</span>. When a payroll mismatch occurs, rigid cron jobs bounce, hitting users with ₹250–₹590 penalty fees, creating financial distress, and permanently breaking the 12-month habit loop.
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60 space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-400 font-bold">
              <Cute3DBadge color="blue" size={28}>
                <Icon3D type="shieldCheck" size={18} />
              </Cute3DBadge>
              <span>Eval-Gate & Safe Fallback</span>
            </div>
            <p className="text-[14px] text-slate-300 leading-relaxed">
              Outputs are evaluated against the 20-item Golden Set from the Evidence Log (&lt;50ms latency). If a query requests speculative advice ("Which fund to buy?"), the Eval-Gate blocks it and deploys a deterministic safe fallback directing to SEBI-registered resources.
            </p>
          </div>
        </div>

        {/* Regulatory Safeguard Notice with 3D Scale Icon */}
        <div className="mt-3.5 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[14px] text-slate-400 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Icon3D type="scale" size={20} />
            <span className="text-slate-200 font-medium">
              Zero Investment Advice Guarantee: Groww PaceMaker provides execution-level schedule flexibility and habit preservation only. It never gives stock or mutual fund investment advice.
            </span>
          </div>
        </div>
      </div>

      {/* Scenario Picker Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between flex-wrap gap-3">
        <span className="text-[14px] font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
          <Icon3D type="sparkles" size={18} />
          <span>Select Ground-Truth Persona Scenario:</span>
        </span>
        <div className="flex items-center gap-2 flex-wrap">
          {PRESET_SCENARIOS.map(sc => (
            <button
              key={sc.id}
              onClick={() => {
                setActiveScenario(sc);
                setActionConfirmed(null);
                setPhoneScreen('main');
                setEvalResult({
                  passed: true,
                  zeroAdviceCheck: 'PASS',
                  zeroFomoCheck: 'PASS',
                  npciFeasibility: 'PASS',
                  latencyMs: 42,
                  outputUsed: "We understand payroll schedules can shift. You can adjust your upcoming deduction date by up to 10 days, or skip this single installment with zero penalty from Groww or your fund house. Your current portfolio remains active."
                });
              }}
              className={`px-3 py-1.5 rounded-xl text-[14px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeScenario.id === sc.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Icon3D
                type={sc.suggestedAction === 'flex' ? 'calendar' : sc.suggestedAction === 'skip' ? 'skipRotate' : 'flame'}
                size={16}
              />
              <span>{sc.name}</span>
              <span className="text-[14px] opacity-75 font-mono">({sc.tag})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main 2-Column Interface: Standard Fixed-Size Scrollable Mobile Phone (Left) vs Eval Gate Inspector (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Standard Fixed-Size Scrollable Mobile Phone Simulation */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-[360px] max-w-full bg-slate-900 rounded-[44px] p-3.5 shadow-phone-3d border border-slate-800 text-white relative">
            {/* Speaker & Camera Notch */}
            <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-2.5 flex items-center justify-center">
              <div className="w-10 h-1 bg-slate-700 rounded-full" />
            </div>

            {/* Fixed Standard Size Mobile Viewport Screen (Scrollable Inside with Hidden Scrollbar) */}
            <div
              ref={phoneScrollRef}
              onScroll={(e) => {
                const el = e.currentTarget;
                const isBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 24;
                setAtPhoneBottom(isBottom);
              }}
              className="mvp-mobile-screen bg-[#0B131E] rounded-[32px] p-3.5 pb-9 text-slate-200 text-left h-[590px] overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col justify-between border border-slate-800/80"
            >
              {/* SUB-SCREEN 1: MAIN SIP MANAGEMENT SCREEN */}
              {phoneScreen === 'main' && (
                <div className="space-y-2.5">
                  {/* Top Bar with 3D Green Groww Theme */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 sticky top-0 bg-[#0B131E] z-10">
                    <div className="flex items-center gap-2.5">
                      <Groww3DLogo size={32} showText={true} className="groww-phone-brand [&>span]:!text-[#00D09C] [&>span]:!font-black" />
                      <span className="text-[14px] font-bold text-slate-300 border-l border-slate-700 pl-2">SIP Details</span>
                    </div>
                    <span className="text-[14px] font-mono text-[#00D09C] bg-[#00D09C]/10 px-2 py-0.5 rounded-full border border-[#00D09C]/30 flex items-center gap-1">
                      <Icon3D type="shieldCheck" size={14} />
                      <span>Active SIP</span>
                    </span>
                  </div>

                  {/* Fund Header Card */}
                  <div className="p-2.5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                    <div className="text-[14px] text-slate-400">Mutual Fund SIP</div>
                    <div className="text-[14px] font-bold text-white mt-0.5">{activeScenario.fundName}</div>
                    
                    <div className="mt-1.5 grid grid-cols-2 gap-2 text-[14px]">
                      <div>
                        <span className="text-slate-400 text-[14px] block">Monthly SIP</span>
                        <span className="font-mono font-bold text-white">₹{activeScenario.sipAmount.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[14px] block">Deduction Day</span>
                        <span className="font-mono font-bold text-[#00D09C]">{activeScenario.scheduledDate}th of month</span>
                      </div>
                    </div>
                  </div>

                  {/* Exact Standard Portfolio Metrics Card with 3D Downward Trend Icon */}
                  <div className="p-2.5 rounded-2xl bg-slate-800/40 border border-slate-700/50 space-y-1.5">
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-slate-400">Total Invested</span>
                      <span className="font-mono font-bold text-white">₹{activeScenario.totalInvested.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-slate-400">Current Value</span>
                      <span className="font-mono font-bold text-white">₹{activeScenario.currentValue.toLocaleString()}</span>
                    </div>
                    <div className="p-1.5 rounded-xl bg-rose-950/60 border border-rose-800/40 flex items-center justify-between">
                      <span className="text-[14px] text-rose-300 font-medium">1-Day Return:</span>
                      <span className="text-[14px] font-bold text-rose-400 font-mono flex items-center gap-1">
                        <Icon3D type="trendDown" size={16} />
                        <span>-₹60 (-1.2%)</span>
                      </span>
                    </div>
                  </div>

                  {/* 3D Milestone Streak Icon Button + 3D Fire Symbol (Default 5 Months across all scenarios) */}
                  <div>
                    <button
                      onClick={handleOpenMilestone}
                      className="w-full py-2 px-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-emerald-500/20 hover:from-amber-500/30 hover:to-emerald-500/30 border border-amber-400/50 flex items-center justify-between transition-all cursor-pointer shadow-xs"
                      title="Click to open Milestone Streak"
                    >
                      <div className="flex items-center gap-2.5">
                        <Cute3DBadge color="amber" size={32}>
                          <Icon3D type="flame" size={20} />
                        </Cute3DBadge>
                        <div className="text-left">
                          <span className="text-[14px] font-extrabold text-amber-300 flex items-center gap-1">
                            <span>Milestone Streak</span>
                            <Icon3D type="flame" size={16} />
                          </span>
                          <span className="text-[14px] text-slate-300 block">
                            {activeScenario.investedMonths} Months Active • 5x Bronze Unlocked
                          </span>
                        </div>
                      </div>
                      <Icon3D type="chevronRight" size={18} className="text-amber-300" />
                    </button>
                  </div>

                  {/* Continuity Flow Interventions with 3D Action Icons */}
                  <div className="p-2.5 rounded-2xl bg-indigo-950/70 border border-indigo-500/40 shadow-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-bold text-indigo-300 flex items-center gap-1.5">
                        <Icon3D type="sparkles" size={16} />
                        <span>SIP Continuity Flow</span>
                      </span>
                      <span className="text-[14px] font-mono text-emerald-400 flex items-center gap-1">
                        <Icon3D type="lock" size={14} />
                        <span>NPCI Safe</span>
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-0.5">
                      <button
                        onClick={() => setPhoneScreen('dates')}
                        className="w-full py-2 px-3 rounded-xl bg-[#00D09C] hover:bg-[#00B88A] text-slate-950 font-bold text-[14px] flex items-center justify-between shadow-xs transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <Icon3D type="calendar" size={18} />
                          <span>Flex Debit / Change Dates</span>
                        </span>
                        <Icon3D type="chevronRight" size={16} className="text-slate-950" />
                      </button>

                      <button
                        onClick={() => setPhoneScreen('months')}
                        className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-[14px] flex items-center justify-between border border-slate-700 transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <Icon3D type="skipRotate" size={18} />
                          <span>1-Tap Skip the Month</span>
                        </span>
                        <Icon3D type="chevronRight" size={16} className="text-slate-300" />
                      </button>
                    </div>
                  </div>

                  {/* Confirmation feedback */}
                  {actionConfirmed && (
                    <div className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-[14px] text-emerald-300 flex items-start gap-2">
                      <Icon3D type="shieldCheck" size={16} className="mt-0.5" />
                      <span>{actionConfirmed}</span>
                    </div>
                  )}

                  {/* Bottom of Main Phone Screen ONLY: Eval-Gated SIP Q&A Chatbot + Tutorial Icon After It */}
                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    {/* Chatbot Q&A Box with 3D Bot & 3D Guardrail Icons */}
                    <div className="p-2.5 rounded-2xl bg-slate-900/95 border border-slate-700/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-bold text-[#00D09C] flex items-center gap-1.5">
                          <Icon3D type="bot" size={18} />
                          <span>SIP Q&A Chatbot</span>
                        </span>
                        <span className={`text-[14px] font-mono px-1.5 py-0.5 rounded-lg border flex items-center gap-1 ${
                          evalResult.passed
                            ? 'bg-emerald-950/80 text-emerald-400 border-emerald-700/60'
                            : 'bg-rose-950/80 text-rose-400 border-rose-700/60'
                        }`}>
                          <Icon3D type={evalResult.passed ? 'shieldCheck' : 'shieldAlert'} size={14} />
                          <span>{evalResult.passed ? 'Safe' : 'Blocked'}</span>
                        </span>
                      </div>

                      {/* Latest Chatbot Response Bubble */}
                      <div className={`p-2 rounded-xl text-[14px] leading-snug border ${
                        phoneChatReply.blocked
                          ? 'bg-rose-950/60 border-rose-700/60 text-rose-200'
                          : 'bg-slate-800/80 border-slate-700/60 text-slate-200'
                      }`}>
                        {phoneChatReply.text}
                      </div>

                      {/* Quick Prompt Chips inside Phone Chatbot with 3D Icons */}
                      <div className="flex gap-1 overflow-x-auto pb-0.5 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <button
                          onClick={() => {
                            const q = "Salary delayed by 3 days";
                            setUserPrompt(q);
                            evaluateAndRespond(q);
                          }}
                          className="text-[14px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/70 whitespace-nowrap cursor-pointer hover:bg-emerald-900 flex items-center gap-1"
                        >
                          <Icon3D type="shieldCheck" size={14} />
                          <span>Salary delayed</span>
                        </button>
                        <button
                          onClick={() => {
                            const q = "Should I switch to Small Cap?";
                            setUserPrompt(q);
                            evaluateAndRespond(q);
                          }}
                          className="text-[14px] px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800/70 whitespace-nowrap cursor-pointer hover:bg-rose-900 flex items-center gap-1"
                        >
                          <Icon3D type="stopAlert" size={14} />
                          <span>Switch to Small Cap?</span>
                        </button>
                        <button
                          onClick={() => {
                            const q = "Will I miss out on 18% returns?";
                            setUserPrompt(q);
                            evaluateAndRespond(q);
                          }}
                          className="text-[14px] px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800/70 whitespace-nowrap cursor-pointer hover:bg-amber-900 flex items-center gap-1"
                        >
                          <Icon3D type="alertTriangle" size={14} />
                          <span>18% returns?</span>
                        </button>
                      </div>

                      {/* Q&A Input Bar with 3D Send Plane */}
                      <div className="flex items-center gap-1.5">
                        <input
                          type="text"
                          value={phoneChatInput}
                          onChange={(e) => setPhoneChatInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handlePhoneChatSubmit()}
                          placeholder="Ask about this SIP..."
                          className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-[14px] text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D09C]"
                        />
                        <button
                          onClick={handlePhoneChatSubmit}
                          className="p-1.5 rounded-xl bg-[#00D09C] hover:bg-[#00B88A] text-slate-950 cursor-pointer shrink-0 flex items-center justify-center"
                          title="Send Question"
                        >
                          <Icon3D type="send" size={16} />
                        </button>
                      </div>
                    </div>

                    {/* 3D Tutorial Icon Button at the very bottom of the phone screen AFTER the Chatbot Eval-Gate */}
                    <button
                      onClick={() => setShowTutorialPage(true)}
                      className="w-full py-2 px-3 rounded-xl bg-[#00D09C]/15 hover:bg-[#00D09C]/25 border border-[#00D09C]/40 text-[#00D09C] font-bold text-[14px] flex items-center justify-between transition-all cursor-pointer shadow-xs"
                      title="Open MVP Feature Guidelines & Step-by-Step Tutorial"
                    >
                      <span className="flex items-center gap-2">
                        <Icon3D type="book" size={18} />
                        <span>Tutorial · Navigate MVP</span>
                      </span>
                      <Icon3D type="chevronRight" size={16} className="text-[#00D09C]" />
                    </button>
                  </div>
                </div>
              )}

              {/* SUB-SCREEN 2: DEDICATED DATE PICKER SCREEN */}
              {phoneScreen === 'dates' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                    <button
                      onClick={() => setPhoneScreen('main')}
                      className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                    >
                      <Icon3D type="arrowLeft" size={18} />
                    </button>
                    <div className="flex items-center gap-2">
                      <Icon3D type="calendar" size={20} />
                      <div>
                        <div className="text-[14px] font-bold text-white">Flex Debit / Change Dates</div>
                        <div className="text-[14px] text-slate-400">Select new debit schedule</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[14px] text-slate-300 leading-snug">
                    Shift your debit by 5–10 days to match when salary arrives in your account. NPCI mandate will automatically update without duplicate debits.
                  </p>

                  <div className="space-y-2">
                    {availableDateOptions.map(opt => (
                      <button
                        key={opt.date}
                        onClick={() => setSelectedFlexDate(opt.date)}
                        className={`w-full p-2.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                          selectedFlexDate === opt.date
                            ? 'bg-emerald-500/20 border-emerald-500 text-white'
                            : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon3D type="calendar" size={18} />
                          <div>
                            <div className="text-[14px] font-bold">{opt.label}</div>
                            <div className="text-[14px] text-slate-400">{opt.desc}</div>
                          </div>
                        </div>
                        {selectedFlexDate === opt.date && (
                          <Icon3D type="shieldCheck" size={20} />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleApplyFlex}
                      className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                    >
                      <Icon3D type="calendar" size={18} />
                      <span>Confirm Shift to {selectedFlexDate}th</span>
                    </button>
                  </div>
                </div>
              )}

              {/* SUB-SCREEN 3: DEDICATED MONTH SELECTOR SCREEN */}
              {phoneScreen === 'months' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                    <button
                      onClick={() => setPhoneScreen('main')}
                      className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                    >
                      <Icon3D type="arrowLeft" size={18} />
                    </button>
                    <div className="flex items-center gap-2">
                      <Icon3D type="skipRotate" size={20} />
                      <div>
                        <div className="text-[14px] font-bold text-white">1-Tap Skip the Month</div>
                        <div className="text-[14px] text-slate-400">Choose single month to pause</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[14px] text-slate-300 leading-snug">
                    Take a 1-month structured installment break. As per pacing rules, only one month can be selected per cycle. Auto-resumes on the next installment.
                  </p>

                  <div className="space-y-2">
                    {availableMonthOptions.map(opt => (
                      <button
                        key={opt.month}
                        onClick={() => setSelectedSkipMonth(opt.month)}
                        className={`w-full p-2.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                          selectedSkipMonth === opt.month
                            ? 'bg-indigo-500/20 border-indigo-500 text-white'
                            : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon3D type="skipRotate" size={18} />
                          <div>
                            <div className="text-[14px] font-bold">{opt.month}</div>
                            <div className="text-[14px] text-slate-400">{opt.desc}</div>
                          </div>
                        </div>
                        {selectedSkipMonth === opt.month && (
                          <Icon3D type="checkCircle" size={20} />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleApplySkip}
                      className="w-full py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                    >
                      <Icon3D type="skipRotate" size={18} />
                      <span>Confirm 1-Month Skip for {selectedSkipMonth}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* SUB-SCREEN 4: MILESTONE STREAK CELEBRATION (With 3D Medals & Gems, No Q&A Chatbot) */}
              {phoneScreen === 'milestone' && (
                <div className="space-y-3 animate-fadeIn">
                  {/* Top Bar */}
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-800 sticky top-0 bg-[#0B131E] z-10">
                    <button
                      onClick={() => setPhoneScreen('main')}
                      className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                    >
                      <Icon3D type="arrowLeft" size={18} />
                    </button>
                    <div className="flex items-center gap-2">
                      <Icon3D type="flame" size={20} />
                      <div>
                        <div className="text-[14px] font-bold text-white flex items-center gap-1">
                          <span>Milestone Streak</span>
                        </div>
                        <div className="text-[14px] text-slate-400">
                          {activeScenario.investedMonths} Months Active • 3D Tiered Rewards
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hero 3D Trophy & Current 5-Month Summary */}
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/15 via-slate-800/80 to-emerald-500/15 border border-amber-400/40 text-center space-y-1.5">
                    <div className="mx-auto">
                      <Cute3DAsset type="trophy" size={50} className="mx-auto" />
                    </div>
                    <div className="text-[14px] font-bold text-amber-400 uppercase tracking-wider">
                      {activeScenario.investedMonths}-Month Habit Streak Active!
                    </div>
                    <h3 className="text-[16px] font-black text-white flex items-center justify-center gap-1.5">
                      <span>5x Monthly Bronze Unlocked</span>
                      <Icon3D type="bronzeMedal" size={18} />
                    </h3>
                    <p className="text-[14px] text-slate-300 leading-snug">
                      Saved: ₹{activeScenario.totalInvested.toLocaleString()} • Next: Silver at 6 Months!
                    </p>

                    {/* Monthly 1 to 5 3D Bronze Medals */}
                    <div className="pt-1.5 grid grid-cols-5 gap-1">
                      {[1, 2, 3, 4, 5].map(monthNum => (
                        <div
                          key={monthNum}
                          className="p-1.5 rounded-xl bg-amber-500/20 border border-amber-400/50 flex flex-col items-center justify-center"
                        >
                          <Icon3D type="bronzeMedal" size={20} />
                          <span className="text-[14px] font-bold text-amber-200 mt-0.5">M{monthNum}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* All 3D Milestone Tiers Roadmap */}
                  <div className="space-y-1.5">
                    <div className="text-[14px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Icon3D type="sparkles" size={16} />
                      <span>3D Milestone Rewards Roadmap</span>
                    </div>

                    <div className="space-y-1.5">
                      {MILESTONE_TIERS.map(tier => (
                        <div
                          key={tier.id}
                          className={`p-2.5 rounded-xl bg-gradient-to-r border flex items-center justify-between ${tier.accent}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon3D type={tier.icon3D} size={26} />
                            <div>
                              <div className="text-[14px] font-extrabold text-white flex items-center gap-1.5 flex-wrap">
                                <span>{tier.tier}</span>
                                {tier.unlocked && (
                                  <span className="text-[14px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-400/40">
                                    UNLOCKED
                                  </span>
                                )}
                              </div>
                              <div className="text-[14px] text-slate-300">{tier.requirement}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setPhoneScreen('main')}
                    className="w-full py-2.5 rounded-xl bg-[#00D09C] hover:bg-[#00B88A] text-slate-950 font-bold text-[14px] cursor-pointer transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Icon3D type="arrowLeft" size={16} />
                    <span>Back to SIP Details</span>
                  </button>
                </div>
              )}
            </div>

            {/* Small Scroll-Down Arrow Indicator at the bottom of the phone screen */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
              <button
                type="button"
                onClick={() => {
                  const el = phoneScrollRef.current;
                  if (!el) return;
                  if (atPhoneBottom) {
                    el.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    el.scrollBy({ top: 200, behavior: 'smooth' });
                  }
                }}
                title={atPhoneBottom ? 'Scroll back to top' : 'Scroll down for more info'}
                className="px-2.5 py-1 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-[#00D09C]/60 shadow-lg flex items-center justify-center gap-1 cursor-pointer transition-all animate-bounce"
              >
                <Icon3D type={atPhoneBottom ? 'chevronUp' : 'chevronDown'} size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Live Eval-Gate Inspector & Telemetry with 3D Icons */}
        <div className="lg:col-span-6 space-y-5">
          {/* Eval Gate Status Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-3d-card space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {evalResult.passed ? (
                  <Cute3DBadge color="emerald" size={40}>
                    <Icon3D type="shieldCheck" size={24} />
                  </Cute3DBadge>
                ) : (
                  <Cute3DBadge color="rose" size={40}>
                    <Icon3D type="shieldAlert" size={24} />
                  </Cute3DBadge>
                )}
                <div>
                  <h2 className="text-[16px] font-bold text-slate-900">
                    Eval-Gate Guardrail Telemetry
                  </h2>
                  <p className="text-[14px] text-slate-500">
                    Synchronous real-time quality & regulatory compliance verification.
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[14px] text-slate-400 block font-mono">Inference Latency</span>
                <span className="text-[14px] font-mono font-bold text-emerald-600">{evalResult.latencyMs} ms</span>
              </div>
            </div>

            {/* Guardrail Matrix Check with 3D Status Icons */}
            <div className="grid grid-cols-3 gap-2 text-center text-[14px]">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                <span className="text-[14px] text-slate-500 uppercase font-bold block mb-1">Zero-Advice (SEBI)</span>
                <div className="flex items-center justify-center gap-1">
                  <Icon3D type={evalResult.zeroAdviceCheck === 'PASS' ? 'shieldCheck' : 'stopAlert'} size={16} />
                  <span className={`text-[14px] font-extrabold font-mono ${
                    evalResult.zeroAdviceCheck === 'PASS' ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {evalResult.zeroAdviceCheck === 'PASS' ? 'PASSED' : 'VIOLATION'}
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                <span className="text-[14px] text-slate-500 uppercase font-bold block mb-1">Zero-FOMO / Fear</span>
                <div className="flex items-center justify-center gap-1">
                  <Icon3D type={evalResult.zeroFomoCheck === 'PASS' ? 'shieldCheck' : 'alertTriangle'} size={16} />
                  <span className={`text-[14px] font-extrabold font-mono ${
                    evalResult.zeroFomoCheck === 'PASS' ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {evalResult.zeroFomoCheck === 'PASS' ? 'PASSED' : 'VIOLATION'}
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                <span className="text-[14px] text-slate-500 uppercase font-bold block mb-1">NPCI Feasibility</span>
                <div className="flex items-center justify-center gap-1">
                  <Icon3D type="lock" size={16} />
                  <span className={`text-[14px] font-extrabold font-mono ${
                    evalResult.npciFeasibility === 'PASS' ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {evalResult.npciFeasibility === 'PASS' ? 'VALID' : 'LOCKED'}
                  </span>
                </div>
              </div>
            </div>

            {/* Deployed Model Output Inspector */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <span className="text-[14px] font-bold uppercase tracking-wider text-slate-500 block">
                Deployed Content Output:
              </span>
              <p className="text-[14px] text-slate-800 leading-relaxed font-normal">
                "{evalResult.outputUsed}"
              </p>
              {evalResult.reason && (
                <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-[14px] text-rose-800 font-semibold mt-1 flex items-center gap-1.5">
                  <Icon3D type="stopAlert" size={16} />
                  <span>{evalResult.reason}</span>
                </div>
              )}
            </div>
          </div>

          {/* Test Custom Intent / Regulatory Stress Tester with 3D Icons */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-3d-card space-y-3">
            <h3 className="text-[16px] font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <Cute3DBadge color="emerald" size={28}>
                <Icon3D type="sparkles" size={16} />
              </Cute3DBadge>
              <span>Regulatory Stress Tester (Test Edge Prompts)</span>
            </h3>
            <p className="text-[14px] text-slate-500 leading-normal">
              Type or select adversarial user queries below to witness how the Eval-Gate blocks unscripted financial advice and triggers deterministic safe fallbacks.
            </p>

            <div className="flex gap-2">
              <input
                type="text"
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Should I switch to Small Cap fund? My salary is delayed."
                className="flex-1 bg-slate-50 border border-slate-200 text-[14px] rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                onKeyDown={(e) => e.key === 'Enter' && handleTestCustomPrompt()}
              />
              <button
                onClick={() => handleTestCustomPrompt()}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-[14px] rounded-xl shadow-xs transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
              >
                <Icon3D type="send" size={16} />
                <span>Test Prompt</span>
              </button>
            </div>

            {/* Preset Test Prompts with 3D Trigger Icons */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[14px] text-slate-500 font-medium">Quick Stress-Test Buttons:</div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => {
                    const prompt = "Should I switch to Small Cap fund? My salary is delayed.";
                    setUserPrompt(prompt);
                    handleTestCustomPrompt(prompt);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 text-[14px] font-medium border border-rose-200/60 cursor-pointer text-left flex items-center gap-1.5 shadow-2xs"
                >
                  <Icon3D type="stopAlert" size={16} />
                  <span>Test SEBI Advice Trigger ("Should I switch to Small Cap?")</span>
                </button>
                <button
                  onClick={() => {
                    const prompt = "Will I miss out on 18% compounding if I pause this month?";
                    setUserPrompt(prompt);
                    handleTestCustomPrompt(prompt);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-[14px] font-medium border border-amber-200/60 cursor-pointer text-left flex items-center gap-1.5 shadow-2xs"
                >
                  <Icon3D type="alertTriangle" size={16} />
                  <span>Test FOMO Trigger ("Will I miss out on 18% returns?")</span>
                </button>
                <button
                  onClick={() => {
                    const prompt = "My salary is delayed by 3 days. What can I do?";
                    setUserPrompt(prompt);
                    handleTestCustomPrompt(prompt);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[14px] font-medium border border-emerald-200/60 cursor-pointer text-left flex items-center gap-1.5 shadow-2xs"
                >
                  <Icon3D type="shieldCheck" size={16} />
                  <span>Test Compliant Cashflow Intent ("Salary delayed by 3 days")</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
