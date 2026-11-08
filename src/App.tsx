/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EvidenceLogView } from './components/EvidenceLogView';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F6F9] flex flex-col font-sans text-slate-900 selection:bg-[#00D09C] selection:text-slate-950">
      {/* Pure Evidence Log Website - Zero top bars, Zero CTAs */}
      <main className="flex-1 flex flex-col py-4">
        <EvidenceLogView />
      </main>
    </div>
  );
}
