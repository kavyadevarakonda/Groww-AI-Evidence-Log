import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  Quote, 
  MapPin, 
  Briefcase, 
  Wallet, 
  Calendar, 
  CheckCircle2, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { RESEARCH_PARTICIPANTS, QUANT_SURVEY_STATS } from '../data/researchData';
import { CuteAvatar, SparkleCluster } from './CuteAssets';

export const PrimaryResearchView: React.FC<{ onBackToMvp?: () => void }> = ({ onBackToMvp }) => {
  const [selectedUser, setSelectedUser] = useState<string>('U1');

  const activeParticipant = RESEARCH_PARTICIPANTS.find(u => u.id === selectedUser) || RESEARCH_PARTICIPANTS[0];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xs">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                  Primary Qualitative & Quantitative Research
                </h1>
                {onBackToMvp && (
                  <button
                    onClick={onBackToMvp}
                    className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-200 transition-colors cursor-pointer"
                  >
                    ← Back to MVP Prototype
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                6 In-Depth First-Time Investor Behavioral Investigations & 62 Quantitative Survey Validations.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-xl">
            Ethical Guardrail: Zero PAN or account data collected
          </span>
        </div>
      </div>

      {/* Quantitative Stats Strips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {QUANT_SURVEY_STATS.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-4.5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-2xl font-black text-slate-900 font-mono tracking-tight">{stat.percentage}%</div>
              <h3 className="text-xs font-bold text-slate-800 mt-1">{stat.label}</h3>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-snug">{stat.detail}</p>
          </div>
        ))}
      </div>

      {/* 6 Participant Matrix */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card space-y-4">
        <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <UserCheck className="w-4 h-4 text-emerald-600" />
          Primary Research Participant Matrix (Select a Case to Inspect)
        </h2>

        {/* Participant Selection Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {RESEARCH_PARTICIPANTS.map(p => {
            const isSelected = p.id === selectedUser;
            const isRetained = p.status.includes('Active');
            const avatarType = p.id === 'U1' ? 'ankit' : p.id === 'U2' ? 'sneha' : p.id === 'U3' ? 'rohit' : p.id === 'U4' ? 'meena' : p.id === 'U5' ? 'tarun' : 'deepak';
            return (
              <button
                key={p.id}
                onClick={() => setSelectedUser(p.id)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-emerald-500' 
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200/80 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <CuteAvatar
                    type={avatarType as any}
                    size={40}
                    className="shrink-0"
                  />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold truncate">{p.name.split(' ')[0]}</div>
                    <div className={`text-[10px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {p.role.split(' ')[0]}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/40">
                  <span className={`text-[9.5px] font-semibold px-2 py-0.5 rounded-full inline-block truncate max-w-full ${
                    isRetained 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-rose-500/20 text-rose-400'
                  }`}>
                    {p.status.split(' ')[0]} {p.status.split(' ')[1] || ''}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Participant Deep-Dive Card */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <CuteAvatar
                type={(activeParticipant.id === 'U1' ? 'ankit' : activeParticipant.id === 'U2' ? 'sneha' : activeParticipant.id === 'U3' ? 'rohit' : activeParticipant.id === 'U4' ? 'meena' : activeParticipant.id === 'U5' ? 'tarun' : 'deepak') as any}
                size={56}
                className="border-2 border-emerald-400 shadow-sm shrink-0"
              />
              <div>
                <h3 className="text-base font-bold text-slate-900">{activeParticipant.name}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5 flex-wrap">
                  <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {activeParticipant.role}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {activeParticipant.location}</span>
                  <span className="flex items-center gap-1"><Wallet className="w-3 h-3" /> Income: {activeParticipant.income}</span>
                </div>
              </div>
            </div>

            <div className="text-left md:text-right">
              <span className="text-[10px] text-slate-400 font-mono block">Status at Investigation</span>
              <span className={`text-xs font-bold font-mono px-2.5 py-1 rounded-full border inline-block mt-0.5 ${
                activeParticipant.status.includes('Active')
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-rose-50 text-rose-700 border-rose-200'
              }`}>
                {activeParticipant.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* The Trigger Incident */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 space-y-1.5 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                The Trigger Incident in First 12 Months:
              </span>
              <p className="text-slate-800 leading-relaxed font-medium">
                {activeParticipant.incident}
              </p>
              <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Fund: <strong>{activeParticipant.fundType}</strong></span>
                <span>SIP Amount: <strong>{activeParticipant.monthlySip} / mo</strong></span>
              </div>
            </div>

            {/* Direct Quote */}
            <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 space-y-1.5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800 flex items-center gap-1">
                  <Quote className="w-3 h-3" /> Direct User Testimonial:
                </span>
                <p className="text-indigo-950 italic font-medium leading-relaxed mt-1">
                  "{activeParticipant.userQuote}"
                </p>
              </div>
            </div>
          </div>

          {/* Root Insight Box */}
          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950">
            <strong className="block text-emerald-900 mb-0.5">Root Product Insight:</strong>
            {activeParticipant.rootInsight}
          </div>
        </div>
      </div>

      {/* Methodology & Ethics Dossier */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card space-y-3">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-4 h-4 text-slate-600" />
          Research Methodology & Synthesis Evolution
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-bold text-slate-900 block">1. Sampling Strategy</span>
            <p>Targeted retail users aged 21–28 with monthly SIPs between ₹500 and ₹2,500 across Tier 1, 2, and 3 Indian cities.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-bold text-slate-900 block">2. Semi-Structured Interviews</span>
            <p>45-minute remote qualitative interviews focusing on month-by-month behavioral timeline, checking habits, and pause triggers.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-bold text-slate-900 block">3. Ethical Privacy Standards</span>
            <p>Strictly zero collection of PAN numbers, Demat folio details, or bank account credentials. Full privacy safeguards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
