import React from 'react';
import { SlideHeader } from './SlideHeader';
import { 
  Database, 
  Cpu, 
  Layers, 
  BrainCircuit, 
  LayoutDashboard, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  MessageSquareText,
  Search,
  Sparkles,
  Video,
  Laptop,
  Check,
  Globe,
  Share2,
  Bookmark,
  TrendingDown,
  Calendar,
  AlertTriangle,
  Clock,
  Flame,
  Radio
} from 'lucide-react';
import { SparkleCluster } from '../CuteAssets';

interface Slide3Props {
  onOpenEngine?: () => void;
}

export const Slide3Engine: React.FC<Slide3Props> = ({ onOpenEngine }) => {
  return (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FB] to-[#F0FAF7] p-7 rounded-[26px] relative overflow-hidden shadow-2xl">
      <SparkleCluster className="top-4 right-24" />
      <div className="absolute top-8 right-16 w-88 h-88 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 left-12 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <SlideHeader
        title="AI-Powered Review Discovery Engine"
        subtitle="Scrape → Classify → Synthesize insights & answer questions across the full review corpus"
        badge="Discovery Engine"
        pageNumber={3}
      />

      {/* Top Section: Metrics + Why Build This + Capabilities (9 Questions) */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Metric Card */}
        <div className="col-span-3 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex items-center gap-3.5 backdrop-blur-md hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 flex items-center justify-center text-white shadow-md shrink-0">
            <Database className="w-7 h-7" />
          </div>
          <div>
            <div className="text-[34px] font-black text-slate-900 tracking-tight tabular-nums leading-none">
              3,420+
            </div>
            <p className="text-[14px] text-slate-600 mt-1 font-semibold leading-snug">
              user reviews analyzed across 6 data sources
            </p>
          </div>
        </div>

        {/* Why Build This */}
        <div className="col-span-4 bg-white/95 rounded-[24px] p-5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between backdrop-blur-md hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-500">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-[16px] font-bold text-slate-900">Why build this?</h3>
          </div>
          <p className="text-[14px] text-slate-600 leading-relaxed font-normal">
            Manually analyzing thousands of reviews across multiple sources is slow, noisy, and inefficient. AI enables scalable pattern detection across unstructured feedback.
          </p>
        </div>

        {/* Capabilities: Answers 9 Key Research Questions */}
        <div className="col-span-5 bg-white/95 rounded-[24px] p-4.5 border border-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between backdrop-blur-md hover:-translate-y-0.5 transition-transform bg-fade-hover">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[14px] font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              CAPABILITIES: Answers All 9 Key Research Questions
            </span>
          </div>

          <div className="grid grid-cols-3 gap-x-2 gap-y-1.5 text-[14px] text-slate-700 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">1. Why start SIP?</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">2. Behavior changes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">3. Why pause/stop</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">4. In-app checks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">5. What confuses</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">6. Outside actions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">7. Continuer vs drop</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">8. User segments</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">9. Unmet needs</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Step Pipeline (Every single point has an attractive icon) */}
      <div className="my-2">
        <div className="text-[14px] font-bold tracking-wider text-slate-400 uppercase mb-2 flex items-center gap-2">
          <span>AI WORKFLOW (END-TO-END)</span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="grid grid-cols-5 gap-3.5">
          {/* Step 1: Collect Reviews (Cute icons for all points) */}
          <div className="bg-white/95 rounded-[22px] p-4 border border-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-all bg-fade-hover">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-[14px] font-bold flex items-center justify-center shadow-xs">1</span>
                <Database className="w-4 h-4 text-indigo-500" />
              </div>
              <h4 className="text-[15px] font-bold text-slate-900 leading-tight">COLLECT REVIEWS</h4>
              <p className="text-[14px] text-slate-500 mt-1 mb-2">Ingest user feedback from 6 sources</p>
              <div className="space-y-1.5 text-[14px] text-slate-700 border-t border-slate-100 pt-2 font-medium">
                <p className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Google Play Store</p>
                <p className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Apple App Store</p>
                <p className="flex items-center gap-2"><Share2 className="w-3.5 h-3.5 text-orange-500 shrink-0" /> Reddit India</p>
                <p className="flex items-center gap-2"><Video className="w-3.5 h-3.5 text-red-500 shrink-0" /> YouTube Reviews</p>
                <p className="flex items-center gap-2"><MessageSquareText className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Community Forums</p>
                <p className="flex items-center gap-2"><Radio className="w-3.5 h-3.5 text-pink-500 shrink-0" /> Social Media</p>
              </div>
            </div>
            <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center gap-1.5 text-[14px] text-indigo-600 font-bold">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Unified Corpus (3,420 records)
            </div>
          </div>

          {/* Step 2: AI Classification */}
          <div className="bg-white/95 rounded-[22px] p-4 border border-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-all bg-fade-hover">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-[14px] font-bold flex items-center justify-center shadow-xs">2</span>
                <Cpu className="w-4 h-4 text-emerald-500" />
              </div>
              <h4 className="text-[15px] font-bold text-slate-900 leading-tight">AI CLASSIFICATION</h4>
              <p className="text-[14px] text-slate-500 mt-1 mb-2">AI tags each review for core signals</p>
              <div className="space-y-1.5 text-[14px] text-slate-700 border-t border-slate-100 pt-2 font-medium">
                <p className="flex items-center gap-2 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Theme Tagging</p>
                <p className="flex items-center gap-2 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Sentiment Polarity</p>
                <p className="flex items-center gap-2 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Direct Key Quotes</p>
                <p className="flex items-center gap-2 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Discovery Relevance</p>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100 text-[14px] text-emerald-950 font-medium mt-2">
              Humanized semantic tagging (batch size: 10, temperature: 0.1)
            </div>
          </div>

          {/* Step 3: Theme Extraction */}
          <div className="bg-white/95 rounded-[22px] p-4 border border-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-all bg-fade-hover">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-purple-600 text-white text-[14px] font-bold flex items-center justify-center shadow-xs">3</span>
                <Layers className="w-4 h-4 text-purple-500" />
              </div>
              <h4 className="text-[15px] font-bold text-slate-900 leading-tight">THEME EXTRACTION</h4>
              <p className="text-[14px] text-slate-500 mt-1 mb-2">Semantic clustering & root causes</p>
              <div className="space-y-1.5 text-[14px] text-slate-800 border-t border-slate-100 pt-2 font-medium">
                <p className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  Salary Clash
                </p>
                <p className="flex items-center gap-2">
                  <TrendingDown className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  Micro-Corpus Fatigue
                </p>
                <p className="flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  Mandate Lock
                </p>
                <p className="flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                  Volatility Shock
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  Pause Amnesia
                </p>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-purple-50 border border-purple-100 text-[14px] text-purple-950 font-semibold mt-2">
              Categorized without vanity percentages
            </div>
          </div>

          {/* Step 4: RAG Insight Engine */}
          <div className="bg-white/95 rounded-[22px] p-4 border border-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-all bg-fade-hover">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-[14px] font-bold flex items-center justify-center shadow-xs">4</span>
                <BrainCircuit className="w-4 h-4 text-blue-500" />
              </div>
              <h4 className="text-[15px] font-bold text-slate-900 leading-tight">RAG INSIGHT ENGINE</h4>
              <p className="text-[14px] text-slate-500 mt-1 mb-2">Retrieve, reason and answer</p>
              <div className="space-y-1.5 text-[14px] text-slate-700 border-t border-slate-100 pt-2 font-medium">
                <p className="flex items-center gap-2"><Search className="w-3.5 h-3.5 text-blue-500 shrink-0" /> Retrieve Top-15 Reviews</p>
                <p className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-blue-500 shrink-0" /> Cosine Semantic Similarity</p>
                <p className="flex items-center gap-2"><Layers className="w-3.5 h-3.5 text-blue-500 shrink-0" /> Dense Vector Embeddings</p>
                <p className="flex items-center gap-2 text-blue-600 font-semibold"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Grounded LLM Answers</p>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 text-[14px] text-blue-950 font-medium mt-2">
              Cited sources & verifiable quotes
            </div>
          </div>

          {/* Step 5: Output & Actions (Groww Orbit) */}
          <div className="bg-white/95 rounded-[22px] p-4 border border-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-all bg-fade-hover">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-[14px] font-bold flex items-center justify-center shadow-xs">5</span>
                <LayoutDashboard className="w-4 h-4 text-emerald-500" />
              </div>
              <h4 className="text-[15px] font-bold text-slate-900 leading-tight">OUTPUT & ACTIONS</h4>
              <p className="text-[14px] text-slate-500 mt-1 mb-2">Actionable insights & app</p>
              <div className="space-y-1.5 text-[14px] text-slate-700 border-t border-slate-100 pt-2 font-medium">
                <p className="flex items-center gap-2 font-semibold text-slate-900">
                  <LayoutDashboard className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> Insights Report
                </p>
                <p className="flex items-center gap-2 font-semibold text-slate-900">
                  <Layers className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Theme Cards
                </p>
                <p className="flex items-center gap-2 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <MessageSquareText className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Q&A Chatbot
                </p>
                <p className="flex items-center gap-2 font-semibold text-blue-700">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" /> Groww Orbit MVP
                </p>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100 text-[14px] text-emerald-950 font-semibold mt-2">
              Actionable product interventions
            </div>
          </div>
        </div>
      </div>

      {/* Dark Purple Banner (3 Highlight columns matching Spotify Slide 3) */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#180B38] via-[#24124D] to-[#12072B] text-white flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3 px-3">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4 text-amber-300" />
          </div>
          <span className="text-[14px] font-medium leading-snug">
            Manual review of 3,420+ reviews is noisy and slow.
          </span>
        </div>

        <div className="h-8 w-px bg-white/10" />

        <div className="flex items-center gap-3 px-3">
          <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
            <Laptop className="w-4 h-4 text-cyan-300" />
          </div>
          <span className="text-[14px] font-medium leading-snug">
            AI-powered engine for scalable pattern detection across unstructured feedback.
          </span>
        </div>

        <div className="h-8 w-px bg-white/10" />

        <div className="flex items-center gap-3 px-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          </div>
          <span className="text-[14px] font-medium leading-snug">
            Transforms messy reviews into clear insights that drive better product decisions.
          </span>
        </div>
      </div>

      {/* Bottom Links Bar: Exact Spotify-Style Dual Pill Container with Globe & Laptop (Matches Screenshot 1) */}
      <div className="mt-1 w-full bg-[#f4f2ff] border border-[#d6cdff] rounded-2xl px-6 py-2.5 flex items-center justify-between text-[14px]">
        {/* DEMO VIDEO */}
        <div className="flex items-center gap-2.5">
          <div className="text-[#4338ca] flex items-center gap-1.5 font-bold tracking-wide">
            <Globe className="w-4 h-4 text-[#4338ca]" />
            <span>DEMO VIDEO</span>
          </div>
          <a 
            href="https://drive.google.com/drive/folders/17ILnWf9KcG-DlCeDNdqptIYSp2wL1tNB?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-900 font-semibold underline underline-offset-4 font-mono text-[14px] hover:text-[#4338ca] transition-colors"
          >
            https://drive.google.com/drive/folders/17ILnWf9KcG-DlCeDNdqptIYSp2wL1tNB?usp=sharing ↗
          </a>
        </div>

        {/* Vertical Divider */}
        <div className="h-6 w-px bg-[#c7b9ff]" />

        {/* LIVE APP */}
        <div className="flex items-center gap-2.5">
          <div className="text-[#4338ca] flex items-center gap-1.5 font-bold tracking-wide">
            <Laptop className="w-4 h-4 text-[#4338ca]" />
            <span>LIVE APP</span>
          </div>
          {onOpenEngine ? (
            <button
              onClick={onOpenEngine}
              className="text-slate-900 font-semibold underline underline-offset-4 font-mono text-[14px] hover:text-emerald-700 transition-colors cursor-pointer"
            >
              https://groww-review-ai.streamlit.app ↗
            </button>
          ) : (
            <a 
              href="https://groww-review-ai.streamlit.app"
              target="_blank" 
              rel="noreferrer"
              className="text-slate-900 font-semibold underline underline-offset-4 font-mono text-[14px] hover:text-emerald-700 transition-colors"
            >
              https://groww-review-ai.streamlit.app ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
