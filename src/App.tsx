/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode } from './types';
import { SlideViewer } from './components/SlideViewer';
import { DiscoveryEngineWorkbench } from './components/DiscoveryEngineWorkbench';
import { PaceMakerSimulator } from './components/PaceMakerSimulator';
import { EvidenceLogView } from './components/EvidenceLogView';
import { PrimaryResearchView } from './components/PrimaryResearchView';

export default function App() {
  // Default to standalone PaceMaker MVP view with top bar hidden
  const [currentView, setCurrentView] = useState<ViewMode>('mvp');

  return (
    <div className="min-h-screen bg-[#F4F6F9] flex flex-col font-sans text-slate-900 selection:bg-[#00D09C] selection:text-slate-950">
      {/* Top tabular navigation bar hidden per user request to keep just the standalone PaceMaker MVP */}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {currentView === 'mvp' && (
          <PaceMakerSimulator 
            onOpenDeck={() => setCurrentView('slides')}
            onOpenEngine={() => setCurrentView('engine')}
            onOpenEvidence={() => setCurrentView('evidence')}
          />
        )}
        {currentView === 'engine' && (
          <DiscoveryEngineWorkbench 
            onOpenDeck={() => setCurrentView('slides')} 
            onOpenMvp={() => setCurrentView('mvp')}
          />
        )}
        {currentView === 'slides' && (
          <SlideViewer
            onOpenEngine={() => setCurrentView('engine')}
            onOpenMvp={() => setCurrentView('mvp')}
            onOpenEvidence={() => setCurrentView('evidence')}
          />
        )}
        {currentView === 'evidence' && (
          <EvidenceLogView onBackToMvp={() => setCurrentView('mvp')} />
        )}
        {currentView === 'research' && (
          <PrimaryResearchView onBackToMvp={() => setCurrentView('mvp')} />
        )}
      </main>
    </div>
  );
}
