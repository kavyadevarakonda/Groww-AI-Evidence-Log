import React, { useState } from 'react';
import { 
  FileCheck, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ShieldAlert, 
  ShieldCheck, 
  Filter, 
  ArrowRight,
  Database,
  Cpu
} from 'lucide-react';
import { GOLDEN_SET, REJECTED_AI_CASE } from '../data/corpusData';

export const EvidenceLogView: React.FC = () => {
  const [filterMode, setFilterMode] = useState<'all' | 'matches' | 'mismatches'>('all');

  const filteredItems = GOLDEN_SET.filter(item => {
    if (filterMode === 'matches') return item.isMatch;
    if (filterMode === 'mismatches') return !item.isMatch;
    return true;
  });

  const matchCount = GOLDEN_SET.filter(i => i.isMatch).length;
  const accuracyPercentage = ((matchCount / GOLDEN_SET.length) * 100).toFixed(1);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xs">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                AI Evidence Log & Golden Set Validation
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Evaluation benchmark of 20 hand-labeled ground-truth records, mismatch resolutions, and eval-gate guardrail audit.
              </p>
            </div>
          </div>
        </div>

        {/* Accuracy Score */}
        <div className="flex items-center gap-3">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2 text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-700 block">Exact Match Agreement</span>
            <span className="text-lg font-black text-emerald-700 font-mono">{matchCount} / {GOLDEN_SET.length} ({accuracyPercentage}%)</span>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-2 text-center">
            <span className="text-[10px] uppercase font-bold text-indigo-700 block">SEBI Advice Violations</span>
            <span className="text-lg font-black text-indigo-700 font-mono">0 (100% Guarded)</span>
          </div>
        </div>
      </div>

      {/* Filter & Summary Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-bold text-slate-700">Filter Dataset:</span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                filterMode === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Items (20)
            </button>
            <button
              onClick={() => setFilterMode('matches')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                filterMode === 'matches' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              Matches (18)
            </button>
            <button
              onClick={() => setFilterMode('mismatches')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                filterMode === 'mismatches' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
              }`}
            >
              Mismatches (2)
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Model: <span className="font-mono text-slate-800 font-bold">Groq Llama-3.3-70B-Versatile (Batch size: 10, Temp: 0.1)</span>
        </div>
      </div>

      {/* Golden Set Table */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card space-y-4">
        <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Database className="w-4 h-4 text-indigo-600" />
          20-Item Golden Set Hand-Labeled Benchmark
        </h2>

        <div className="overflow-x-auto rounded-xl border border-slate-200/80">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 font-semibold border-b border-slate-200">
                <th className="py-2.5 px-3">#</th>
                <th className="py-2.5 px-3">Public User Statement</th>
                <th className="py-2.5 px-3">Source</th>
                <th className="py-2.5 px-3">Ground Truth</th>
                <th className="py-2.5 px-3">AI Prediction</th>
                <th className="py-2.5 px-3 text-center">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredItems.map(item => (
                <tr key={item.id} className={item.isMatch ? 'hover:bg-slate-50/80' : 'bg-amber-50/30 hover:bg-amber-50/50'}>
                  <td className="py-2.5 px-3 font-mono text-slate-400 font-bold">{item.id}</td>
                  <td className="py-2.5 px-3 font-normal text-slate-900 max-w-sm">
                    "{item.statement}"
                    {item.notes && (
                      <span className="block text-[10px] text-amber-800 font-medium mt-1 bg-amber-100/70 p-1 rounded">
                        Note: {item.notes}
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10.5px]">
                      {item.source}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 font-mono text-[11px] text-slate-600 font-semibold">
                    {item.groundTruthTag}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-[11px] text-slate-600 font-semibold">
                    {item.prediction}
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    {item.isMatch ? (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> MATCH
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-500" /> MISMATCH ({item.id === 9 ? '1' : '2'})
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deep-Dive into the 2 Mismatches & Resolutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mismatch 1 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-3d-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                Mismatch #9 Deep Dive
              </span>
              <span className="text-xs text-slate-400 font-mono">Play Store Review</span>
            </div>

            <p className="text-xs italic text-slate-800 font-medium mb-2.5">
              "SBI charged me ₹250 penalty because balance was low on SIP day. Groww should warn us earlier."
            </p>

            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50">
                <span className="text-slate-500">Human Label:</span>
                <span className="font-mono font-bold text-slate-900">Mandate_UI_Friction</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-rose-50 border border-rose-100">
                <span className="text-rose-700 font-medium">AI Model Predicted:</span>
                <span className="font-mono font-bold text-rose-700">Salary_Cashflow_Friction</span>
              </div>
            </div>

            <div className="mt-3 text-xs text-slate-600 space-y-1">
              <p><strong>Root Cause:</strong> The LLM gave excessive weight to "balance was low" and tagged it as an income shortfall, ignoring the user's primary complaint: bank penalty charges and lack of pre-debit notifications from the app.</p>
              <p className="text-emerald-800 font-semibold pt-1">
                <strong>Resolution Applied:</strong> Added a prompt decision heuristic: If bank penalty fees or bounce charges are mentioned alongside notification complaints, classify under `Mandate_UI_Friction` regardless of balance state.
              </p>
            </div>
          </div>
        </div>

        {/* Mismatch 2 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-3d-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                Mismatch #18 Deep Dive
              </span>
              <span className="text-xs text-slate-400 font-mono">TradingQ&A Thread</span>
            </div>

            <p className="text-xs italic text-slate-800 font-medium mb-2.5">
              "Can I skip just the February installment without cancelling the whole SIP?"
            </p>

            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50">
                <span className="text-slate-500">Human Label:</span>
                <span className="font-mono font-bold text-slate-900">Salary_Cashflow_Friction</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-rose-50 border border-rose-100">
                <span className="text-rose-700 font-medium">AI Model Predicted:</span>
                <span className="font-mono font-bold text-rose-700">Mandate_UI_Friction</span>
              </div>
            </div>

            <div className="mt-3 text-xs text-slate-600 space-y-1">
              <p><strong>Root Cause:</strong> The parser parsed "how to skip" as an operational app question rather than recognizing it as a short-term cashflow buffer request.</p>
              <p className="text-emerald-800 font-semibold pt-1">
                <strong>Resolution Applied:</strong> Added few-shot examples clarifying that questions about skipping a single month reflect short-term liquidity management (`Salary_Cashflow_Friction`).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rejected AI Output Case Study */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-600" />
            <h2 className="text-base font-bold text-slate-900">
              Audit of Rejected AI Output (Eval-Gate Block in Production)
            </h2>
          </div>
          <span className="text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
            Eval-Gate Interception
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <span className="font-bold text-slate-500 uppercase text-[10px] block mb-1">User Situation Input:</span>
          <p className="text-slate-900 font-medium">"{REJECTED_AI_CASE.userInput}"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Raw AI Output (Rejected) */}
          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900">
              <XCircle className="w-4 h-4 text-rose-600" />
              Raw AI Generation (REJECTED & BLOCKED)
            </div>
            <p className="text-xs text-rose-950 font-normal leading-relaxed italic">
              "{REJECTED_AI_CASE.rawAiOutput}"
            </p>
            <div className="pt-2 border-t border-rose-200/60 space-y-1 text-[11px] text-rose-900">
              <strong className="block text-[10px] uppercase tracking-wide">Violations Flagged:</strong>
              {REJECTED_AI_CASE.violations.map((v, idx) => (
                <div key={idx} className="flex items-start gap-1">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Safe Fallback (Approved) */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Deployed Deterministic Safe Fallback
              </div>
              <p className="text-xs text-emerald-950 font-medium leading-relaxed mt-1">
                "{REJECTED_AI_CASE.deployedSafeFallback}"
              </p>
            </div>
            <div className="p-2 rounded-lg bg-white border border-emerald-200 text-[10.5px] text-emerald-800 font-medium mt-2">
              ✓ Non-advisory • Zero FOMO • Explains concrete product levers (Date Flex & 1-Month Skip).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
