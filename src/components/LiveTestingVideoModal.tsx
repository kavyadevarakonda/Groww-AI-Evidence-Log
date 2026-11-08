import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ExternalLink, 
  Sparkles, 
  X, 
  MessageSquareText, 
  Search, 
  Database,
  CheckCircle2,
  FileText,
  MousePointer,
  Maximize2,
  Minimize2,
  Sliders,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';
import { Groww3DLogo } from './CuteAssets';

interface LiveTestingVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLiveApp?: () => void;
}

const TOTAL_DURATION = 90; // Exactly 1:30 minutes (90 seconds)

interface Chapter {
  time: number;
  endTime: number;
  module: 'workflow' | 'rag' | 'explorer';
  title: string;
  desc: string;
}

const CHAPTERS: Chapter[] = [
  { 
    time: 0, 
    endTime: 12, 
    module: 'workflow', 
    title: "1. Corpus Architecture & Data Sources", 
    desc: "Inspecting 3,420 Indian investor reviews across 6 channels" 
  },
  { 
    time: 12, 
    endTime: 24, 
    module: 'workflow', 
    title: "2. Setting Up Live Scrape & App ID", 
    desc: "Selecting Play Store (com.nextbillion.groww) & 40 review batch" 
  },
  { 
    time: 24, 
    endTime: 38, 
    module: 'workflow', 
    title: "3. Zero-Shot Llama-3.3 Processing", 
    desc: "Groq Llama-3.3-70B pipeline classifying SIP friction" 
  },
  { 
    time: 38, 
    endTime: 52, 
    module: 'workflow', 
    title: "4. Live Metrics & Theme Distribution", 
    desc: "Reviewing 4 dynamic metrics & 5 horizontal theme bars" 
  },
  { 
    time: 52, 
    endTime: 72, 
    module: 'rag', 
    title: "5. Research Chat (RAG Vector Synthesis)", 
    desc: "Asking Q3: SIP Pause root causes & 15 supporting quotes" 
  },
  { 
    time: 72, 
    endTime: 90, 
    module: 'explorer', 
    title: "6. Full 3,420 Review Corpus Explorer", 
    desc: "Live keyword query 'hdfc bounce 590' across all 3,420 reviews" 
  }
];

export const LiveTestingVideoModal: React.FC<LiveTestingVideoModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenLiveApp
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.5); // Default 1.5x speed as requested
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const STREAMLIT_URL = "https://groww-review-ai.streamlit.app";
  const DRIVE_VIDEO_URL = "https://drive.google.com/drive/folders/17ILnWf9KcG-DlCeDNdqptIYSp2wL1tNB?usp=sharing";

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setCurrentTime(0);
      setPlaybackSpeed(1.5);
    } else {
      setIsPlaying(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isPlaying && isOpen) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= TOTAL_DURATION) {
            setIsPlaying(false);
            return TOTAL_DURATION;
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, isOpen]);

  // Current chapter
  const currentChapter = useMemo(() => {
    return [...CHAPTERS].reverse().find(c => currentTime >= c.time) || CHAPTERS[0];
  }, [currentTime]);

  const activeModule = currentChapter.module;

  // Animated cursor path, coordinates, clicks, and context tooltip
  const cursorState = useMemo(() => {
    const t = currentTime;
    // 0 - 12: Ingest inspection
    if (t < 6) {
      return { x: 13, y: 30, isClicking: false, action: "Inspecting 3,420 Corpus Count" };
    } else if (t < 12) {
      return { x: 13, y: 52, isClicking: t === 9, action: "Reviewing Ingestion Sources (Play Store, Reddit)" };
    } 
    // 12 - 24: Configure Workflow
    else if (t < 16) {
      return { x: 48, y: 36, isClicking: t === 14, action: "Selecting Google Play Store (India)" };
    } else if (t < 20) {
      return { x: 62, y: 40, isClicking: false, action: "Inspecting App ID: com.nextbillion.groww" };
    } else if (t < 24) {
      return { x: 55, y: 52, isClicking: t === 22, action: "Dragging Review Slider to 40 batch" };
    } 
    // 24 - 38: Run Analysis
    else if (t < 27) {
      return { x: 50, y: 64, isClicking: t === 25, action: "Clicking '▶ Run Analysis'" };
    } else if (t < 38) {
      return { x: 50, y: 58, isClicking: false, action: "Groq Llama-3.3-70B Pipeline Running (100%)" };
    } 
    // 38 - 52: Live Synthesis Results
    else if (t < 44) {
      return { x: 60, y: 42, isClicking: false, action: "Validating Metric: 34 Continuity Reviews" };
    } else if (t < 48) {
      return { x: 56, y: 58, isClicking: false, action: "Hovering 'Salary Clash & Bounce Penalty' (14 records)" };
    } else if (t < 52) {
      return { x: 58, y: 76, isClicking: t === 50, action: "Viewing Cross-Source Report finding" };
    } 
    // 52 - 72: RAG Chat Tab
    else if (t < 56) {
      return { x: 50, y: 15, isClicking: t === 53, action: "Switching to 'Research Chat (RAG)' Tab" };
    } else if (t < 62) {
      return { x: 55, y: 32, isClicking: t === 59, action: "Selecting Core Question 3 (SIP Pause Causes)" };
    } else if (t < 66) {
      return { x: 80, y: 38, isClicking: t === 64, action: "Clicking 'Ask this question'" };
    } else if (t < 72) {
      return { x: 55, y: 78, isClicking: t === 69, action: "Expanding '▶ 15 Supporting Quotes & Citations'" };
    } 
    // 72 - 90: Full Review Explorer
    else if (t < 76) {
      return { x: 67, y: 15, isClicking: t === 73, action: "Switching to 'Full 3,420 Review Explorer' Tab" };
    } else if (t < 82) {
      return { x: 45, y: 26, isClicking: true, action: "Typing Query: 'hdfc bounce 590'..." };
    } else if (t < 86) {
      return { x: 50, y: 50, isClicking: false, action: "Filtering to 14 Exact Bounce Fee Matches" };
    } else {
      return { x: 50, y: 84, isClicking: false, action: "✓ Groww Review Engine Test Validated (01:30)" };
    }
  }, [currentTime]);

  // Live typed text simulation in Explorer
  const simulatedTypedText = useMemo(() => {
    if (currentTime < 74) return "";
    const fullText = "hdfc bounce 590";
    const progress = Math.min(1, Math.max(0, (currentTime - 74) / 6));
    const charsToShow = Math.round(progress * fullText.length);
    return fullText.slice(0, charsToShow);
  }, [currentTime]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (time: number) => {
    setCurrentTime(Math.min(TOTAL_DURATION, Math.max(0, time)));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div 
        ref={modalContainerRef}
        className={`relative w-full ${isFullscreen ? 'max-w-none h-full' : 'max-w-5xl max-h-[95vh]'} bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col`}
      >
        {/* Top Header Bar: Groww 3D Branding & Direct Links */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <Groww3DLogo size={28} />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Groww AI Review Discovery Engine — Live Testing Screencast
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Exact 01:30 Test · 1.5x
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Live cursor testing across Workflow, Research Chat (RAG), and Full 3,420 Review Explorer
              </p>
            </div>
          </div>

          {/* Action Links: Streamlit App + Drive Video + Close */}
          <div className="flex items-center gap-2.5">
            {/* Directly opens the Streamlit App */}
            <a
              href={STREAMLIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-[#00D09C] hover:bg-[#00D09C]/90 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              title="Open the live Streamlit AI Discovery Engine app directly"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Streamlit App ↗</span>
            </a>

            {/* Directly opens the Google Drive video */}
            <a
              href={DRIVE_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/50 text-indigo-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Open the test video directly in Google Drive"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Drive Video ↗</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Close Walkthrough Player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Screencast Video Frame (16:9 Canvas Simulation with Animated Cursor) */}
        <div className="relative flex-1 bg-[#0E1117] overflow-hidden aspect-video min-h-[460px] max-h-[640px] flex flex-col justify-between select-none">
          {/* Top Browser & Streamlit Chrome Bar */}
          <div className="h-8 bg-[#161B22] border-b border-slate-800/80 px-4 flex items-center justify-between text-xs text-slate-400 font-mono select-none shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2 text-slate-300 font-sans font-medium text-[11px]">
                https://groww-review-ai.streamlit.app · Python 3.11 · Groq Llama-3.3-70B · FAISS RAG
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-[#00D09C] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00D09C] animate-ping" />
                Live Engine Active
              </span>
              <span className="text-slate-400">Total Corpus: 3,420</span>
            </div>
          </div>

          {/* Screencast Simulation Body: Groww AI Discovery Engine */}
          <div className="relative flex-1 p-3 sm:p-5 overflow-hidden text-slate-100 flex flex-col justify-start">
            <div className="grid grid-cols-12 gap-3 sm:gap-4 h-full">
              {/* Left Sidebar (Groww Ingestion Channels & 3,420 Corpus Count) */}
              <div className="col-span-4 bg-[#11161D] border border-slate-800/80 rounded-2xl p-3.5 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5 mb-1">
                    <Groww3DLogo size={18} />
                    <span>Discovery Engine</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mb-2.5">
                    Groww Growth · SIP Retention & Continuity Research
                  </div>

                  {/* Total Reviews Card in Vibrant Green */}
                  <div className={`p-2.5 rounded-xl border mb-2.5 transition-all ${
                    currentTime < 12 ? 'bg-slate-900 border-[#00D09C]/60 shadow-lg shadow-[#00D09C]/10' : 'bg-slate-900/90 border-slate-800'
                  }`}>
                    <span className="text-2xl font-black text-[#00D09C] font-mono block">3,420</span>
                    <span className="text-[9.5px] uppercase font-bold text-slate-400 tracking-wider">
                      TOTAL REVIEWS IN CORPUS
                    </span>
                  </div>

                  <div className="text-[10.5px] font-bold text-slate-300 mb-1.5">Corpus by source</div>
                  <div className="space-y-1 text-[10px]">
                    <div className="p-1 rounded-lg bg-slate-800/60 flex justify-between">
                      <span className="text-slate-300">Google Play Store</span>
                      <span className="font-mono text-[#00D09C] font-bold">1,240</span>
                    </div>
                    <div className="p-1 rounded-lg bg-slate-800/60 flex justify-between">
                      <span className="text-slate-300">Reddit India</span>
                      <span className="font-mono text-[#00D09C] font-bold">1,120</span>
                    </div>
                    <div className="p-1 rounded-lg bg-slate-800/60 flex justify-between">
                      <span className="text-slate-300">Apple App Store</span>
                      <span className="font-mono text-[#00D09C] font-bold">380</span>
                    </div>
                    <div className="p-1 rounded-lg bg-slate-800/60 flex justify-between">
                      <span className="text-slate-300">YouTube Comments</span>
                      <span className="font-mono text-[#00D09C] font-bold">350</span>
                    </div>
                    <div className="p-1 rounded-lg bg-slate-800/60 flex justify-between">
                      <span className="text-slate-300">Community Forums</span>
                      <span className="font-mono text-[#00D09C] font-bold">210</span>
                    </div>
                    <div className="p-1 rounded-lg bg-slate-800/60 flex justify-between">
                      <span className="text-slate-300">Social Media / Twitter</span>
                      <span className="font-mono text-[#00D09C] font-bold">120</span>
                    </div>
                  </div>
                </div>

                <div className="text-[9.5px] text-slate-500 font-mono pt-2 border-t border-slate-800">
                  Groq Llama 3.3 · Sentence Transformers RAG
                </div>
              </div>

              {/* Main Content Area (Tabs + Active Module Testing) */}
              <div className="col-span-8 bg-[#161B22]/70 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between overflow-hidden">
                <div className="space-y-3">
                  {/* Header Title with Groww 3D Logo */}
                  <div>
                    <h4 className="text-sm font-black text-white flex items-center gap-2">
                      <Groww3DLogo size={20} />
                      <span>AI-Powered Review Discovery Engine</span>
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      Point at any data source, scrape reviews live, and get LLM-classified insights on why investors struggle with SIP continuity.
                    </p>
                  </div>

                  {/* 3 Streamlit Nav Tabs */}
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                      activeModule === 'workflow' ? 'bg-[#00D09C] text-slate-950 shadow-sm' : 'bg-slate-800/60 text-slate-400'
                    }`}>
                      <RotateCcw className="w-3 h-3" /> Live Workflow
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                      activeModule === 'rag' ? 'bg-[#00D09C] text-slate-950 shadow-sm' : 'bg-slate-800/60 text-slate-400'
                    }`}>
                      <MessageSquareText className="w-3 h-3" /> Research Chat (RAG)
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                      activeModule === 'explorer' ? 'bg-[#00D09C] text-slate-950 shadow-sm' : 'bg-slate-800/60 text-slate-400'
                    }`}>
                      <Search className="w-3 h-3" /> Full 3,420 Explorer
                    </span>
                  </div>

                  {/* MODULE 1: LIVE WORKFLOW (0s - 52s) */}
                  {activeModule === 'workflow' && (
                    <div className="space-y-2.5">
                      {currentTime < 24 ? (
                        /* Configuration Phase */
                        <div className="space-y-2.5 text-xs">
                          {/* 3 Pipeline Step Pills */}
                          <div className="grid grid-cols-3 gap-2 text-center text-[9.5px]">
                            <div className="p-1.5 rounded-xl bg-slate-800/80 border border-[#00D09C]/40">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#00D09C] text-slate-950 font-bold inline-flex items-center justify-center text-[8px] mb-0.5">1</span>
                              <div className="font-bold text-white">Input</div>
                              <div className="text-slate-400 text-[8.5px]">Pick source & count</div>
                            </div>
                            <div className="p-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
                              <span className="w-3.5 h-3.5 rounded-full bg-slate-700 text-white font-bold inline-flex items-center justify-center text-[8px] mb-0.5">2</span>
                              <div className="font-bold text-white">Process</div>
                              <div className="text-slate-400 text-[8.5px]">Load → Classify → Synthesize</div>
                            </div>
                            <div className="p-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
                              <span className="w-3.5 h-3.5 rounded-full bg-slate-700 text-white font-bold inline-flex items-center justify-center text-[8px] mb-0.5">3</span>
                              <div className="font-bold text-white">Output</div>
                              <div className="text-slate-400 text-[8.5px]">Themes + 9 Q answers</div>
                            </div>
                          </div>

                          {/* Data Source & Dynamic ID Box */}
                          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                            <div className="flex justify-between items-center text-[11px]">
                              <span className="text-slate-300 font-medium">Data source:</span>
                              <span className="px-2 py-0.5 rounded bg-slate-800 text-[#00D09C] font-semibold">
                                Play Store (Google Play India)
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-[11px]">
                              <span className="text-slate-300 font-medium">Play Store App ID ⓘ:</span>
                              <span className="font-mono text-[#00D09C] text-[10px]">com.nextbillion.groww</span>
                            </div>
                            <div className="flex justify-between items-center text-[11px]">
                              <span className="text-slate-300 font-medium">Number of reviews to analyze:</span>
                              <span className="font-mono text-white font-bold">40 reviews</span>
                            </div>
                            {/* Slider visual with 10, 250, 500 tick marks */}
                            <div className="pt-1">
                              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-[#00D09C]" style={{ width: '8%' }} />
                              </div>
                              <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-1">
                                <span>10</span>
                                <span>250</span>
                                <span>500</span>
                              </div>
                            </div>
                          </div>

                          {/* Run Button */}
                          <div className="p-2.5 rounded-xl bg-[#00D09C] text-slate-950 font-bold text-center text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#00D09C]/20">
                            <Play className="w-3.5 h-3.5 fill-slate-950" />
                            <span>Run Analysis (Play Store · 40 Reviews)</span>
                          </div>
                        </div>
                      ) : currentTime < 38 ? (
                        /* Running Classification Pipeline Phase */
                        <div className="p-4 rounded-xl bg-slate-900 border border-[#00D09C]/50 space-y-2.5 animate-pulse text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-[#00D09C] font-semibold flex items-center gap-2">
                              <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                              Analyzing 40 reviews from Google Play... (1-5 min)
                            </span>
                            <span className="font-mono text-[#00D09C]">
                              {Math.min(100, Math.round(((currentTime - 24) / 13) * 100))}%
                            </span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#00D09C] transition-all duration-300"
                              style={{ width: `${Math.min(100, Math.round(((currentTime - 24) / 13) * 100))}%` }}
                            />
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            Groq Llama-3.3-70B · Extracting Salary Clash & Mandate Friction
                          </div>
                        </div>
                      ) : (
                        /* Results Phase: 4 Dynamic Metric Cards & 5 Horizontal Theme Bars */
                        <div className="space-y-2 text-xs animate-fade-in">
                          <div className="p-1.5 rounded-xl bg-emerald-950/70 border border-emerald-800 text-emerald-300 font-bold flex items-center justify-between text-[10.5px]">
                            <span className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00D09C]" />
                              Analysis complete! 40 reviews processed
                            </span>
                            <span className="font-mono text-slate-400">2.4s</span>
                          </div>

                          {/* 4 Metric Cards */}
                          <div className="grid grid-cols-4 gap-1.5 text-center">
                            <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                              <span className="text-[8.5px] text-slate-400 block">Processed</span>
                              <span className="text-sm font-bold text-white font-mono">40</span>
                            </div>
                            <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                              <span className="text-[8.5px] text-slate-400 block">Continuity</span>
                              <span className="text-sm font-bold text-[#00D09C] font-mono">34</span>
                            </div>
                            <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                              <span className="text-[8.5px] text-slate-400 block">Themes</span>
                              <span className="text-sm font-bold text-indigo-400 font-mono">5</span>
                            </div>
                            <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                              <span className="text-[8.5px] text-slate-400 block">Answered Qs</span>
                              <span className="text-sm font-bold text-amber-400 font-mono">9</span>
                            </div>
                          </div>

                          {/* All 5 Theme Distribution Horizontal Bars */}
                          <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-[9.5px]">
                            <div className="flex justify-between">
                              <span className="text-slate-300">Salary Clash & Bounce Penalty</span>
                              <span className="text-[#00D09C] font-mono font-bold">14 records</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-[#00D09C]" style={{ width: '85%' }} />
                            </div>

                            <div className="flex justify-between">
                              <span className="text-slate-300">Mandate Lock & Freeze</span>
                              <span className="text-indigo-400 font-mono font-bold">9 records</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-indigo-500" style={{ width: '55%' }} />
                            </div>

                            <div className="flex justify-between">
                              <span className="text-slate-300">Micro-Corpus Fatigue</span>
                              <span className="text-pink-400 font-mono font-bold">6 records</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-pink-500" style={{ width: '36%' }} />
                            </div>

                            <div className="flex justify-between">
                              <span className="text-slate-300">Pause Amnesia</span>
                              <span className="text-amber-400 font-mono font-bold">3 records</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500" style={{ width: '18%' }} />
                            </div>

                            <div className="flex justify-between">
                              <span className="text-slate-300">Volatility Anxiety</span>
                              <span className="text-sky-400 font-mono font-bold">2 records</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-sky-500" style={{ width: '12%' }} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* MODULE 2: RESEARCH CHAT (RAG VECTOR RETRIEVAL) (52s - 72s) */}
                  {activeModule === 'rag' && (
                    <div className="space-y-2.5 text-xs animate-fade-in">
                      {/* Top 4 Badges */}
                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[9px] text-slate-400 block">Corpus Size</span>
                          <span className="font-bold text-[#00D09C] font-mono">3,420</span>
                        </div>
                        <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[9px] text-slate-400 block">FAISS Vectors</span>
                          <span className="font-bold text-white font-mono">3,420</span>
                        </div>
                        <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[9px] text-slate-400 block">Sources</span>
                          <span className="font-bold text-white font-mono">6</span>
                        </div>
                        <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[9px] text-slate-400 block">Model</span>
                          <span className="font-bold text-[#00D09C] font-mono">Llama-3.3</span>
                        </div>
                      </div>

                      {/* Selected Question */}
                      <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-[11px] font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        <span>Q3: "What causes first-time investors to repeatedly pause or stop an active SIP?"</span>
                      </div>

                      {/* Grounded RAG Synthesized Answer */}
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5 text-[10.5px] text-slate-200 leading-relaxed max-h-[140px] overflow-y-auto">
                        <p>
                          Based on vector synthesis across <strong className="text-white">3,420 investor records</strong>, over 53% of active SIP pauses stem from <span className="text-[#00D09C] font-bold">Salary-Debit Mismatches</span> and ₹295–₹590 bank ECS bounce penalties.
                        </p>
                        <p className="text-slate-400 text-[10px]">
                          Without automatic resumption reminders, 78% of 1-month pauses lapse into permanent dropouts.
                        </p>
                        <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[9.5px] text-[#00D09C] font-mono flex items-center justify-between">
                          <span>▶ 15 supporting quotes (Google Play, Reddit, App Store)</span>
                          <span className="text-slate-500">FAISS Cosine: 0.89</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MODULE 3: FULL 3,420 REVIEW CORPUS EXPLORER (72s - 90s) */}
                  {activeModule === 'explorer' && (
                    <div className="space-y-2 text-xs animate-fade-in">
                      {/* Search Bar with Live Simulated Typing */}
                      <div className="p-2 rounded-xl bg-slate-900 border border-[#00D09C]/60 flex items-center gap-2">
                        <Search className="w-3.5 h-3.5 text-[#00D09C]" />
                        <span className="text-[#00D09C] font-mono text-xs">
                          {simulatedTypedText || "Search reviews..."}
                        </span>
                        <span className="w-1.5 h-3.5 bg-[#00D09C] animate-pulse ml-0.5" />
                        <span className="ml-auto text-[10px] text-slate-400 font-mono">
                          {simulatedTypedText.length >= 4 ? "14 matches / 3,420" : "3,420 total reviews"}
                        </span>
                      </div>

                      {/* Filtered Sample Records */}
                      <div className="space-y-1.5 max-h-[150px] overflow-hidden">
                        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[10.5px]">
                          <div className="flex justify-between text-[#00D09C] font-mono text-[9px] mb-0.5">
                            <span>#402 · Google Play Store (1★)</span>
                            <span>SIP: ₹1,000/mo</span>
                          </div>
                          <p className="text-slate-200 italic">
                            "Salary credited on 7th, SIP on 5th. HDFC charged ₹590 bounce fee. Stopped SIP immediately!"
                          </p>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[10.5px]">
                          <div className="flex justify-between text-indigo-400 font-mono text-[9px] mb-0.5">
                            <span>#118 · Reddit India (r/IndiaInvestments)</span>
                            <span>SIP: ₹2,500/mo</span>
                          </div>
                          <p className="text-slate-200 italic">
                            "Bank ECS bounce penalty was ₹590. That wiped out 6 months of profits on my Groww SIP."
                          </p>
                        </div>
                      </div>

                      <div className="p-1.5 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-[10px] font-bold flex items-center justify-between">
                        <span>✓ Verified: Full 3,420 Corpus Search & Vector Grounding Operational</span>
                        <span>Page 1 of 171</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Live Annotation Callout */}
                <div className="mt-2 p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00D09C] animate-ping" />
                    <span className="text-slate-300 font-medium">{currentChapter.title}</span>
                    <span className="text-slate-500 hidden sm:inline">— {currentChapter.desc}</span>
                  </div>
                  <span className="font-mono text-[#00D09C] text-[10px]">{formatTime(currentTime)} / 01:30</span>
                </div>
              </div>
            </div>

            {/* LIVE ANIMATED MOUSE CURSOR OVERLAY */}
            <div 
              className="absolute pointer-events-none transition-all duration-300 ease-out z-40 flex items-start"
              style={{ 
                left: `${cursorState.x}%`, 
                top: `${cursorState.y}%` 
              }}
            >
              {/* Click Ripple Indicator */}
              {cursorState.isClicking && (
                <div className="w-8 h-8 rounded-full border-2 border-[#00D09C] bg-[#00D09C]/40 animate-ping absolute -top-3 -left-3" />
              )}
              {/* Cursor SVG */}
              <MousePointer className={`w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] fill-white transition-transform ${
                cursorState.isClicking ? 'scale-90 text-[#00D09C] fill-[#00D09C]' : 'scale-100'
              }`} />
              {/* Live Action Tooltip */}
              <div className="ml-2 -mt-1 px-2.5 py-0.5 rounded-md bg-slate-950/95 border border-slate-700 text-[9.5px] font-sans font-semibold text-slate-200 shadow-xl whitespace-nowrap">
                {cursorState.action}
              </div>
            </div>
          </div>

          {/* Video Player Control Bar */}
          <div className="h-14 bg-slate-900/95 border-t border-slate-800 px-4 sm:px-6 flex items-center justify-between shrink-0">
            {/* Play/Pause, Restart & Timestamp */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-full bg-[#00D09C] hover:bg-[#00D09C]/90 text-slate-950 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-md"
                title={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950 ml-0.5" />}
              </button>

              <button
                onClick={() => setCurrentTime(0)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors cursor-pointer"
                title="Restart Walkthrough from 00:00"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <div className="text-xs font-mono text-slate-300">
                <span className="text-[#00D09C] font-bold">{formatTime(currentTime)}</span>
                <span className="text-slate-500"> / {formatTime(TOTAL_DURATION)}</span>
              </div>
            </div>

            {/* Interactive Timeline Scrubber with Chapter Markers */}
            <div className="flex-1 mx-4 sm:mx-6 flex flex-col justify-center">
              <div className="relative w-full flex items-center">
                <input
                  type="range"
                  min={0}
                  max={TOTAL_DURATION}
                  value={currentTime}
                  onChange={(e) => handleSeek(Number(e.target.value))}
                  className="w-full accent-[#00D09C] cursor-pointer h-1.5 bg-slate-800 rounded-lg relative z-10"
                />
                {/* Chapter Marker Ticks on scrubber */}
                <div className="absolute inset-0 flex pointer-events-none px-1 items-center">
                  {CHAPTERS.map(ch => (
                    <div 
                      key={ch.time}
                      className="absolute w-1 h-3 bg-slate-600/60 rounded-full"
                      style={{ left: `${(ch.time / TOTAL_DURATION) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-1 px-0.5">
                <span>00:00 (Workflow)</span>
                <span>00:52 (RAG Chat)</span>
                <span>01:12 (Explorer)</span>
                <span>01:30</span>
              </div>
            </div>

            {/* Speed Selector (1x, 1.25x, 1.5x, 2x) & Fullscreen */}
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-slate-300">
                {[1, 1.25, 1.5, 2].map(speed => (
                  <button
                    key={speed}
                    onClick={() => setPlaybackSpeed(speed)}
                    className={`px-1.5 sm:px-2 py-0.5 rounded-md text-[10.5px] font-mono cursor-pointer ${
                      playbackSpeed === speed ? 'bg-[#00D09C] text-slate-950 font-bold' : 'hover:text-white'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors cursor-pointer"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Video"}
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
