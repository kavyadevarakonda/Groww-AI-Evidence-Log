# Groww Prototype — Deployed AI-Native MVP
> **Part 5 Capstone:** Eval-Gated SIP Continuity & Habit Preservation Engine for First-Time Mutual Fund Investors.

---

## 🚀 Live Demo & Deployment
- **Deployed Applet:** [https://kavyadevarakonda.github.io/Groww-Prototype-AI-Native-MVP/](https://kavyadevarakonda.github.io/Groww-Prototype-AI-Native-MVP/)
- **10-Slide Deck & PDF:** Click **"10 Slide Deck"** in the top bar to inspect slides or download `NL_Groww.pdf`.
- **AI Discovery Engine:** Ingestion workbench of 3,420 multi-channel user reviews (Play Store, App Store, Reddit, MouthShut, Trustpilot).
- **AI Evidence Log:** Hand-labeled 20-item Golden Set validation benchmark and audit logs.

---

## 🎯 The Problem
Groww onboards millions of first-time retail investors effortlessly. However, **more than 40% of first-time SIPs lapse within the first 12 months**.
Our primary user research (6 in-depth persona investigations & 62 quantitative validations) and 3,420 review analysis revealed the root driver:
- **Temporary Liquidity Shocks & Payroll Mismatches (70%+):** First-time salaried starters face cashflow fluctuations (delayed salaries, unexpected medical costs, festival expenses).
- **The Rigid Non-AI Failure Mode:** Legacy banking auto-debits try to debit on a fixed date regardless of bank balance. When it fails, users are hit with **₹250–₹590 penal bank charges**. Terrified and confused, users choose the only visible action: **"Cancel SIP"**.

---

## 🧠 Where AI Earns Its Place
1. **Unstructured Human Distress to Execution Parameters:**
   Investors don't speak banking jargon (NACH presentation cycles, clearing lag). When salary is delayed by 3–5 days, AI parses natural, unformatted human distress (*"salary pushed back to 8th"*, *"bonus delayed"*) and synthesizes immediate non-destructive schedule adjustments without intimidating multi-step forms.
2. **Real-Time Regulatory Eval-Gate (<50ms):**
   SEBI regulations strictly prohibit non-registered financial advice. Every generation is passed through a synchronous Eval-Gate with:
   - **Zero-Advice Check:** Prohibits fund recommendations and return forecasts.
   - **Zero-FOMO Check:** Prohibits fear-based retention tactics.
   - **NPCI Feasibility Check:** Verifies bank clearing feasibility within T-2 cutoffs.
3. **Deterministic Safe Fallbacks:**
   When an adversarial or speculative query is detected (e.g. *"Should I switch to Small Cap?"*), the Eval-Gate blocks the response and deploys a certified non-advisory fallback directing users to official SEBI-registered resources.
4. **Golden Set Benchmarking:**
   Benchmarked against a 20-item hand-labeled Golden Set from the Evidence Log, achieving 100% agreement on regulatory non-advisory boundaries.

---

## 🛠 Tech Stack
- **Framework:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Icons & Assets:** Lucide React, Custom 3D SVG Vector graphics
- **Exporting:** jsPDF, html2canvas-pro, toJpeg (ForeignObject native font embedding)

---

## 📦 Local Development

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Run local development server
npm run dev

# 3. Build for production (outputs to /dist and /docs)
npm run build
```

---

## 📄 License
Apache-2.0
