import React, { useState } from 'react';
import { GOLDEN_SET, REJECTED_AI_CASE } from '../data/corpusData';
import { Cute3DBadge, Groww3DLogo, Icon3D } from './CuteAssets';

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
    <div className="p-6 max-w-7xl mx-auto space-y-6 mvp-font-ppt-14">
      {/* Header Banner with 3D Groww Logo & 3D Badges */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5">
        <div className="flex items-center gap-3.5 flex-wrap">
          <Cute3DBadge color="emerald" size={46}>
            <Icon3D type="fileReport" size={28} />
          </Cute3DBadge>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <Groww3DLogo
                size={34}
                showText={true}
                className="groww-green-brand [&>span]:!text-[#00D09C] [&>span]:!font-black"
              />
              <h1 className="font-black text-slate-900 tracking-tight border-l border-slate-300 pl-3">
                Groww AI Evidence Log & Golden Set Validation
              </h1>
            </div>
            <p className="text-slate-500 mt-1">
              Evaluation benchmark of 20 hand-labeled ground-truth records, mismatch resolutions, and eval-gate guardrail audit.
            </p>
          </div>
        </div>

        {/* Accuracy Score with 3D Icons */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-xs">
            <Cute3DBadge color="emerald" size={38}>
              <Icon3D type="checkCircle" size={22} />
            </Cute3DBadge>
            <div>
              <span className="uppercase font-bold text-emerald-700 block">Exact Match Agreement</span>
              <span className="font-black text-emerald-800 font-mono">
                {matchCount} / {GOLDEN_SET.length} ({accuracyPercentage}%)
              </span>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-xs">
            <Cute3DBadge color="blue" size={38}>
              <Icon3D type="shieldCheck" size={22} />
            </Cute3DBadge>
            <div>
              <span className="uppercase font-bold text-indigo-700 block">SEBI Advice Violations</span>
              <span className="font-black text-indigo-800 font-mono">0 (100% Guarded)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Summary Bar with 3D Icons */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <Cute3DBadge color="purple" size={34}>
            <Icon3D type="search" size={20} />
          </Cute3DBadge>
          <span className="font-bold text-slate-700">Filter Dataset:</span>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3.5 py-1.5 rounded-xl font-bold cursor-pointer transition-colors flex items-center gap-1.5 ${
                filterMode === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Icon3D type="database" size={16} />
              <span>All Items (20)</span>
            </button>
            <button
              onClick={() => setFilterMode('matches')}
              className={`px-3.5 py-1.5 rounded-xl font-bold cursor-pointer transition-colors flex items-center gap-1.5 ${
                filterMode === 'matches'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              <Icon3D type="checkCircle" size={16} />
              <span>Matches (18)</span>
            </button>
            <button
              onClick={() => setFilterMode('mismatches')}
              className={`px-3.5 py-1.5 rounded-xl font-bold cursor-pointer transition-colors flex items-center gap-1.5 ${
                filterMode === 'mismatches'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <Icon3D type="alertTriangle" size={16} />
              <span>Mismatches (2)</span>
            </button>
          </div>
        </div>

        <div className="text-slate-600 font-medium flex items-center gap-2">
          <Icon3D type="brain" size={20} />
          <span>
            Classification Engine: <strong className="font-mono text-slate-900">Batch Size: 10 · Temp: 0.1</strong>
          </span>
        </div>
      </div>

      {/* Golden Set Table with 3D Icons */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="font-black text-slate-900 flex items-center gap-2.5">
            <Cute3DBadge color="blue" size={36}>
              <Icon3D type="database" size={20} />
            </Cute3DBadge>
            <span>20-Item Golden Set Hand-Labeled Benchmark</span>
          </h2>
          <span className="font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl flex items-center gap-1.5">
            <Icon3D type="shieldCheck" size={18} />
            <span>Ground-Truth Verified</span>
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                <th className="py-3 px-3.5">#</th>
                <th className="py-3 px-3.5">Public User Statement</th>
                <th className="py-3 px-3.5">Source</th>
                <th className="py-3 px-3.5">Ground Truth</th>
                <th className="py-3 px-3.5">AI Prediction</th>
                <th className="py-3 px-3.5 text-center">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/70 text-slate-700">
              {filteredItems.map(item => (
                <tr
                  key={item.id}
                  className={item.isMatch ? 'hover:bg-slate-50/80' : 'bg-amber-50/40 hover:bg-amber-50/60'}
                >
                  <td className="py-3 px-3.5 font-mono text-slate-500 font-bold">{item.id}</td>
                  <td className="py-3 px-3.5 font-normal text-slate-900 max-w-md">
                    <div>"{item.statement}"</div>
                    {item.notes && (
                      <div className="text-amber-900 font-medium mt-1.5 bg-amber-100/80 border border-amber-300/70 p-2 rounded-xl flex items-center gap-2">
                        <Icon3D type="info" size={16} />
                        <span>Note: {item.notes}</span>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-3.5">
                    <span className="font-semibold bg-slate-100 border border-slate-200 text-slate-800 px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5">
                      <Icon3D type="smartphone" size={15} />
                      <span>{item.source}</span>
                    </span>
                  </td>
                  <td className="py-3 px-3.5 font-mono text-slate-700 font-bold">
                    {item.groundTruthTag}
                  </td>
                  <td className="py-3 px-3.5 font-mono text-slate-700 font-bold">
                    {item.prediction}
                  </td>
                  <td className="py-3 px-3.5 text-center">
                    {item.isMatch ? (
                      <span className="font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                        <Icon3D type="checkCircle" size={16} />
                        <span>MATCH</span>
                      </span>
                    ) : (
                      <span className="font-bold text-amber-800 bg-amber-50 border border-amber-300 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                        <Icon3D type="alertTriangle" size={16} />
                        <span>MISMATCH ({item.id === 9 ? '1' : '2'})</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deep-Dive into the 2 Mismatches & Resolutions with 3D Icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mismatch 1 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <span className="font-bold text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full flex items-center gap-2">
                <Icon3D type="alertTriangle" size={18} />
                <span>Mismatch #9 Deep Dive</span>
              </span>
              <span className="text-slate-500 font-mono flex items-center gap-1.5">
                <Icon3D type="smartphone" size={16} />
                <span>Play Store Review</span>
              </span>
            </div>

            <p className="italic text-slate-900 font-semibold mb-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              "SBI charged me ₹250 penalty because balance was low on SIP day. Groww should warn us earlier."
            </p>

            <div className="space-y-2 text-slate-700">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-slate-600 font-semibold flex items-center gap-2">
                  <Icon3D type="checkCircle" size={16} />
                  <span>Human Label:</span>
                </span>
                <span className="font-mono font-bold text-slate-900">Mandate_UI_Friction</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-800 font-semibold flex items-center gap-2">
                  <Icon3D type="brain" size={16} />
                  <span>AI Model Predicted:</span>
                </span>
                <span className="font-mono font-bold text-rose-800">Salary_Cashflow_Friction</span>
              </div>
            </div>

            <div className="mt-4 text-slate-700 space-y-2">
              <p>
                <strong>Root Cause:</strong> The LLM gave excessive weight to "balance was low" and tagged it as an income shortfall, ignoring the user's primary complaint: bank penalty charges and lack of pre-debit notifications from the app.
              </p>
              <p className="text-emerald-900 font-semibold p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2">
                <Icon3D type="shieldCheck" size={20} className="mt-0.5 shrink-0" />
                <span>
                  <strong>Resolution Applied:</strong> Added a prompt decision heuristic: If bank penalty fees or bounce charges are mentioned alongside notification complaints, classify under `Mandate_UI_Friction` regardless of balance state.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Mismatch 2 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <span className="font-bold text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full flex items-center gap-2">
                <Icon3D type="alertTriangle" size={18} />
                <span>Mismatch #18 Deep Dive</span>
              </span>
              <span className="text-slate-500 font-mono flex items-center gap-1.5">
                <Icon3D type="message" size={16} />
                <span>TradingQ&A Thread</span>
              </span>
            </div>

            <p className="italic text-slate-900 font-semibold mb-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              "Can I skip just the February installment without cancelling the whole SIP?"
            </p>

            <div className="space-y-2 text-slate-700">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-slate-600 font-semibold flex items-center gap-2">
                  <Icon3D type="checkCircle" size={16} />
                  <span>Human Label:</span>
                </span>
                <span className="font-mono font-bold text-slate-900">Salary_Cashflow_Friction</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-800 font-semibold flex items-center gap-2">
                  <Icon3D type="brain" size={16} />
                  <span>AI Model Predicted:</span>
                </span>
                <span className="font-mono font-bold text-rose-800">Mandate_UI_Friction</span>
              </div>
            </div>

            <div className="mt-4 text-slate-700 space-y-2">
              <p>
                <strong>Root Cause:</strong> The parser parsed "how to skip" as an operational app question rather than recognizing it as a short-term cashflow buffer request.
              </p>
              <p className="text-emerald-900 font-semibold p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2">
                <Icon3D type="shieldCheck" size={20} className="mt-0.5 shrink-0" />
                <span>
                  <strong>Resolution Applied:</strong> Added few-shot examples clarifying that questions about skipping a single month reflect short-term liquidity management (`Salary_Cashflow_Friction`).
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rejected AI Output Case Study with 3D Icons */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-3d-card space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Cute3DBadge color="rose" size={40}>
              <Icon3D type="shieldAlert" size={24} />
            </Cute3DBadge>
            <h2 className="font-black text-slate-900">
              Audit of Rejected AI Output (Eval-Gate Block in Production)
            </h2>
          </div>
          <span className="font-bold text-rose-800 bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full flex items-center gap-2">
            <Icon3D type="stopAlert" size={18} />
            <span>Eval-Gate Interception</span>
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="font-bold text-slate-600 uppercase flex items-center gap-2 mb-1">
            <Icon3D type="message" size={18} />
            <span>User Situation Input:</span>
          </span>
          <p className="text-slate-900 font-semibold">"{REJECTED_AI_CASE.userInput}"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Raw AI Output (Rejected) */}
          <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
            <div className="flex items-center gap-2 font-bold text-rose-900">
              <Cute3DBadge color="rose" size={32}>
                <Icon3D type="stopAlert" size={18} />
              </Cute3DBadge>
              <span>Raw AI Generation (REJECTED & BLOCKED)</span>
            </div>
            <p className="text-rose-950 font-normal leading-relaxed italic">
              "{REJECTED_AI_CASE.rawAiOutput}"
            </p>
            <div className="pt-3 border-t border-rose-200/80 space-y-1.5 text-rose-900">
              <strong className="uppercase tracking-wide flex items-center gap-1.5">
                <Icon3D type="alertTriangle" size={16} />
                <span>Violations Flagged:</span>
              </strong>
              {REJECTED_AI_CASE.violations.map((v, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Icon3D type="stopAlert" size={15} className="mt-1 shrink-0" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Safe Fallback (Approved) */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <Cute3DBadge color="emerald" size={32}>
                  <Icon3D type="shieldCheck" size={18} />
                </Cute3DBadge>
                <span>Deployed Deterministic Safe Fallback</span>
              </div>
              <p className="text-emerald-950 font-medium leading-relaxed">
                "{REJECTED_AI_CASE.deployedSafeFallback}"
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-emerald-200 text-emerald-900 font-semibold mt-2 flex items-center gap-2">
              <Icon3D type="checkCircle" size={18} />
              <span>Non-advisory • Zero FOMO • Explains concrete product levers (Date Flex & 1-Month Skip).</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
