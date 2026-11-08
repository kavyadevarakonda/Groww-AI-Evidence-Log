import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Download, 
  Printer, 
  Video, 
  Laptop,
  Sparkles,
  CheckCircle2,
  X,
  FileDown,
  Database,
  ExternalLink,
  ArrowLeft,
  Smartphone,
  FileCheck
} from 'lucide-react';
import { Slide1Scale } from './slides/Slide1Scale';
import { Slide2Opportunity } from './slides/Slide2Opportunity';
import { Slide3Engine } from './slides/Slide3Engine';
import { Slide4Insights } from './slides/Slide4Insights';
import { Slide5Validation } from './slides/Slide5Validation';
import { Slide6Segmentation } from './slides/Slide6Segmentation';
import { Slide7Problem } from './slides/Slide7Problem';
import { Slide8Comparison } from './slides/Slide8Comparison';
import { Slide9Solution } from './slides/Slide9Solution';
import { Slide10Roadmap } from './slides/Slide10Roadmap';
import { Groww3DLogo } from './CuteAssets';
import { LiveTestingVideoModal } from './LiveTestingVideoModal';
import { FONT_EMBED_CSS } from '../data/fontEmbedCSS';
import jsPDF from 'jspdf';
import { toJpeg } from 'html-to-image';
import html2canvas from 'html2canvas-pro';

interface SlideViewerProps {
  onOpenEngine?: () => void;
  onOpenMvp?: () => void;
  onOpenEvidence?: () => void;
}

const SLIDE_TITLES = [
  "Groww Wins SIP Setup, But Struggles With Persistence",
  "Continuity Is Groww's Biggest Growth & LTV Opportunity",
  "AI-Powered Review Discovery Engine",
  "Key Insights from AI-Powered Review Analysis",
  "User Research Validated Our AI Findings",
  "Habit Breaks Most for First-Time Salaried Starters",
  "Defining the Core Problem",
  "Groww Onboards Users Easily, But Fails at 12-Month Retention",
  "Meet Groww Orbit: Continuity by Flexibility, not Lock-in",
  "Measuring Success & Future Roadmap"
];

export const SlideViewer: React.FC<SlideViewerProps> = ({ onOpenEngine, onOpenMvp, onOpenEvidence }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportSlideIndex, setExportSlideIndex] = useState(1);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [exportFileName] = useState<'NL_Groww.pdf'>('NL_Groww.pdf');

  const containerRef = useRef<HTMLDivElement>(null);
  const exportContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === 'Space') {
        setCurrentSlide(prev => Math.min(prev + 1, 10));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentSlide(prev => Math.max(prev - 1, 1));
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape' && onOpenEngine) {
        onOpenEngine();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenEngine]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Both Print and Export buttons directly download NL_Groww.pdf into user's downloads folder
  const handlePrint = async () => {
    await handleExportPdf('NL_Groww.pdf');
  };

  // High-Resolution 10-Page PDF Generator with Exact Fonts & Dimensions (<40MB)
  const handleExportPdf = async (customName?: string) => {
    if (isExporting) return;
    setIsExporting(true);
    setExportProgress(5);
    const targetFileName = customName || 'NL_Groww.pdf';

    try {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1920, 1080],
        hotfixes: ['px_scaling']
      });

      // Capture each slide 1 to 10 sequentially
      for (let slideNum = 1; slideNum <= 10; slideNum++) {
        setExportSlideIndex(slideNum);
        setExportProgress(Math.round((slideNum / 10) * 90));

        // Wait for DOM to render the slide and fonts to settle
        await new Promise(resolve => setTimeout(resolve, 220));

        const targetEl = exportContainerRef.current;
        if (!targetEl) continue;

        let imgData: string;

        try {
          // Native browser SVG foreignObject rendering with embedded Google Fonts (Plus Jakarta Sans & JetBrains Mono)
          // Evaluates CSS, fonts and exact sizing natively with zero parse error
          imgData = await toJpeg(targetEl, {
            quality: 0.94,
            canvasWidth: 1920,
            canvasHeight: 1080,
            backgroundColor: '#FFFFFF',
            pixelRatio: 1,
            fontEmbedCSS: FONT_EMBED_CSS,
            cacheBust: false,
            imagePlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAED5ebGQ=='
          });
        } catch (toJpegError) {
          console.warn('toJpeg fallback, attempting html2canvas-pro:', toJpegError);
          // Fallback to html2canvas-pro with CORS protection
          const canvas = await html2canvas(targetEl, {
            scale: 1.0,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#FFFFFF',
            logging: false,
            width: 1920,
            height: 1080
          });
          imgData = canvas.toDataURL('image/jpeg', 0.92);
        }

        if (slideNum > 1) {
          pdf.addPage([1920, 1080], 'landscape');
        }
        pdf.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);
      }

      setExportProgress(100);
      pdf.save(targetFileName);
    } catch (err) {
      console.error('PDF export error:', err);
    } finally {
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  const renderSlide = (index: number) => {
    switch (index) {
      case 1: return <Slide1Scale />;
      case 2: return <Slide2Opportunity />;
      case 3: return <Slide3Engine onOpenEngine={onOpenEngine} />;
      case 4: return <Slide4Insights />;
      case 5: return <Slide5Validation />;
      case 6: return <Slide6Segmentation />;
      case 7: return <Slide7Problem />;
      case 8: return <Slide8Comparison />;
      case 9: return <Slide9Solution onOpenMvp={onOpenMvp} />;
      case 10: return <Slide10Roadmap />;
      default: return <Slide1Scale />;
    }
  };

  return (
    <div ref={containerRef} className="relative flex flex-col h-full w-full bg-slate-900/95 text-slate-100">
      {/* Top Presentation Bar */}
      <div className="no-print h-14 bg-slate-900 border-b border-slate-800 px-5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <Groww3DLogo size={24} showText={true} className="[&>span]:text-white hidden lg:inline-flex" />
          <div className="h-4 w-px bg-slate-700 hidden lg:block" />

          {/* Compact Top Navigation with Small Icons & Fonts */}
          <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-lg border border-slate-700/70">
            {onOpenMvp && (
              <button
                onClick={onOpenMvp}
                className="px-2.5 py-1 rounded-md bg-[#00D09C] hover:bg-[#00B789] text-slate-950 text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95"
                title="Open AI MVP Prototype"
              >
                <Smartphone className="w-3 h-3 stroke-[2.5]" />
                <span>AI MVP</span>
              </button>
            )}

            {onOpenEngine && (
              <button
                onClick={onOpenEngine}
                className="px-2.5 py-1 rounded-md bg-slate-700/60 hover:bg-slate-700 text-slate-200 hover:text-white text-[11px] font-medium flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                title="Open AI Discovery Engine"
              >
                <Database className="w-3 h-3 text-emerald-400" />
                <span>AI Discovery Engine</span>
              </button>
            )}

            {onOpenEvidence && (
              <button
                onClick={onOpenEvidence}
                className="px-2.5 py-1 rounded-md bg-slate-700/60 hover:bg-slate-700 text-slate-200 hover:text-white text-[11px] font-medium flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                title="Open AI Evidence Log"
              >
                <FileCheck className="w-3 h-3 text-indigo-400" />
                <span>AI Evidence Log</span>
              </button>
            )}
          </div>
        </div>

        {/* Slide Title Dropdown & Stepper */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 1))}
            disabled={currentSlide === 1}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-200 transition-colors cursor-pointer"
            title="Previous Slide (Left Arrow key)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <select
            value={currentSlide}
            onChange={(e) => setCurrentSlide(Number(e.target.value))}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer max-w-[340px] truncate"
          >
            {SLIDE_TITLES.map((title, idx) => (
              <option key={idx + 1} value={idx + 1}>
                {idx + 1}. {title}
              </option>
            ))}
          </select>

          <span className="text-xs font-mono text-slate-400 px-1">
            {currentSlide} / 10
          </span>

          <button
            onClick={() => setCurrentSlide(prev => Math.min(prev + 1, 10))}
            disabled={currentSlide === 10}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-200 transition-colors cursor-pointer"
            title="Next Slide (Right Arrow key)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons: Fullscreen, Print & Download PDF */}
        <div className="flex items-center gap-2">

          <button
            onClick={toggleFullscreen}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
          </button>

          {/* Print Button that directly downloads NL_Groww.pdf into user's Downloads */}
          <button
            onClick={handlePrint}
            disabled={isExporting}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700 shadow-xs"
            title="Download print-ready 10-slide deck as NL_Groww.pdf directly into Downloads"
          >
            <Printer className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Print (Save PDF)</span>
          </button>

          {/* 1-Click Groww PDF Download Button (Only Groww PDF icon & branding) */}
          <button
            onClick={() => handleExportPdf('NL_Groww.pdf')}
            disabled={isExporting}
            className="px-4 py-1.5 rounded-xl bg-[#00D09C] hover:bg-[#00D09C]/90 disabled:opacity-50 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-md transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            title="Download all 10 slides as NL_Groww.pdf (<40MB) directly to your Downloads folder"
          >
            <Groww3DLogo size={18} />
            <Download className="w-3.5 h-3.5 text-slate-950" />
            <span>{isExporting ? `Exporting PDF (${exportProgress}%)` : 'Download Groww PDF (NL_Groww.pdf)'}</span>
          </button>
        </div>
      </div>

      {/* Slide Presentation Canvas (16:9 Aspect Ratio Container with Floating Subtle Arrow Controls) */}
      <div className="relative flex-1 overflow-auto flex items-center justify-center p-4 md:p-6 bg-slate-950/80">
        {/* SUBTLE FLOATING LEFT ARROW NAVIGATION CONTROL */}
        <button
          onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 1))}
          disabled={currentSlide === 1}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/95 text-white backdrop-blur-md border border-white/15 shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 disabled:opacity-0 disabled:pointer-events-none group cursor-pointer z-30"
          title={`Previous Slide: ${currentSlide > 1 ? SLIDE_TITLES[currentSlide - 2] : ''} (Left Arrow)`}
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 text-slate-200 group-hover:text-emerald-400 transition-colors" />
        </button>

        {/* 16:9 Slide Canvas (Enforces Strict Typography Standards across all slides, sections, words and letters) */}
        <div className="slide-deck-canvas w-full max-w-[1440px] min-h-[760px] aspect-[16/9] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/60 flex flex-col transition-all">
          {renderSlide(currentSlide)}
        </div>

        {/* SUBTLE FLOATING RIGHT ARROW NAVIGATION CONTROL */}
        <button
          onClick={() => setCurrentSlide(prev => Math.min(prev + 1, 10))}
          disabled={currentSlide === 10}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/95 text-white backdrop-blur-md border border-white/15 shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 disabled:opacity-0 disabled:pointer-events-none group cursor-pointer z-30"
          title={`Next Slide: ${currentSlide < 10 ? SLIDE_TITLES[currentSlide] : ''} (Right Arrow)`}
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 text-slate-200 group-hover:text-emerald-400 transition-colors" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="no-print h-14 bg-slate-900 border-t border-slate-800 px-4 flex items-center justify-center gap-2 shrink-0 overflow-x-auto">
        {SLIDE_TITLES.map((title, idx) => {
          const slideNum = idx + 1;
          const isActive = slideNum === currentSlide;
          return (
            <button
              key={slideNum}
              onClick={() => setCurrentSlide(slideNum)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-xs'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
              }`}
            >
              <span>{slideNum}</span>
              <span className="max-w-[120px] truncate hidden md:inline text-[11px]">
                {title.split(' ')[0]} {title.split(' ')[1] || ''}
              </span>
            </button>
          );
        })}
      </div>

      {/* Exporting Progress Modal Overlay */}
      {isExporting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <FileDown className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Generating {exportFileName} (&lt; 40 MB)</h3>
              <p className="text-xs text-slate-400 mt-1">
                Rendering 1080p high-resolution slide {exportSlideIndex} of 10 (Figma 26px / Canva 22px / PPT 14pt standard)...
              </p>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${exportProgress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold block">
              {exportProgress}% Complete
            </span>
          </div>
        </div>
      )}

      {/* Off-screen dedicated high-res render container for clean PDF capture */}
      <div 
        className="fixed top-0 left-0 pointer-events-none"
        style={{ 
          width: '1920px', 
          height: '1080px', 
          zIndex: isExporting ? 99998 : -9999,
          visibility: isExporting ? 'visible' : 'hidden'
        }}
      >
        <div 
          ref={exportContainerRef}
          style={{ width: '1920px', height: '1080px' }} 
          className="bg-white p-6 overflow-hidden flex flex-col justify-between figma-frame-1080"
        >
          {renderSlide(exportSlideIndex)}
        </div>
      </div>

      {/* Print Deck Container: Cleanly renders all 10 slides on 10 separate pages for window.print() */}
      <div className="hidden print:block print-only figma-frame-1080 slide-deck-canvas">
        <div className="print-slide bg-white"><Slide1Scale /></div>
        <div className="print-slide bg-white"><Slide2Opportunity /></div>
        <div className="print-slide bg-white"><Slide3Engine /></div>
        <div className="print-slide bg-white"><Slide4Insights /></div>
        <div className="print-slide bg-white"><Slide5Validation /></div>
        <div className="print-slide bg-white"><Slide6Segmentation /></div>
        <div className="print-slide bg-white"><Slide7Problem /></div>
        <div className="print-slide bg-white"><Slide8Comparison /></div>
        <div className="print-slide bg-white"><Slide9Solution /></div>
        <div className="print-slide bg-white"><Slide10Roadmap /></div>
      </div>

      {/* Live Video Testing Modal */}
      <LiveTestingVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenLiveApp={onOpenEngine}
      />
    </div>
  );
};
