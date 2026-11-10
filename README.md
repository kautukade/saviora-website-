# Saviora Health · Clinical Care & Patient Intelligence Platform

[![React 19](https://img.shields.io/badge/React-19.0.1-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Compliance](https://img.shields.io/badge/Compliance-HIPAA%20%7C%20ABDM%20Ready-00C49F)](#security--regulatory-compliance)
[![Tests](https://img.shields.io/badge/Tests-Passing-success)](#testing)

> **Official Website:** [https://saviorahealth.com/](https://saviorahealth.com/)  
> **Doctor Platform Portal:** [https://app.saviorahealth.com/login](https://app.saviorahealth.com/login)  
> **Patient Platform Portal:** [https://patient.saviorahealth.com/login](https://patient.saviorahealth.com/login)

---

## 📌 Executive Overview

In outpatient departments (OPDs) across high-volume healthcare systems, clinical consultations average just **120 seconds**. While physicians make rapid and accurate diagnoses, patients struggle to retain complex regimens: **40% to 80% of verbal clinical instructions are forgotten immediately**, leading to medication non-adherence and treatment dropouts.

**Saviora Health** is an enterprise clinical technology and intelligence platform that bridges this consultation gap. Without demanding extra typing from busy clinicians, Saviora automatically translates prescriptions into multilingual, 6th-grade-literacy educational packs and delivers doctor-supervised AI follow-up support directly via WhatsApp.

---

## 🚀 Key Platform Capabilities

### 🩺 For Clinicians & Healthcare Networks
- **Sub-Minute OPD Charting:** High-speed clinical workspaces, specialty-tailored templates, and quick-note dictation.
- **Multilingual Education Packs:** 1-click automatic generation of patient leaflets in English, Hindi, Gujarati, and Spanish.
- **IPD Discharge Manager:** Streamlined discharge summaries, follow-up timelines, and medication reconciliation.
- **Medicolegal Audit Trail:** Immutable delivery verification and timestamped education records.

### 👥 For Patients & Families
- **Personal Health Locker:** Secure digital record repository with chronological prescription tracking.
- **Simplified Lab Insights:** Medical terminology translated into clear, actionable health literacy summaries.
- **Clinician-Supervised AI Assistant:** 24/7 post-consultation medication guidance anchored exclusively to the doctor's chart with automated red-flag triage.

---

## 🌐 Complete Route Architecture

The platform features 15 dedicated, high-conversion static routes:

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Hero walkthrough, interactive simulators, problem statement, ROI calculator, and plan overview. |
| `/about` | **About Saviora** | Founding vision, clinical leadership, research basis, and mission statement. |
| `/products` | **Products Hub** | Unified ecosystem overview and comparison matrix. |
| `/products/doctor-platform` | **Doctor Platform** | OPD queue, clinical charting, and team management deep dive. |
| `/products/patient-platform` | **Patient Platform** | Patient portal, digital locker, and family profile manager. |
| `/products/ai-assistant` | **AI Assistant** | Clinician guardrails, zero-hallucination policy, and WhatsApp delivery. |
| `/products/clinical-workflow` | **Workflow Engine** | EMR/HIS bidirectional bridge (HL7/FHIR), automated recall workflows. |
| `/solutions/doctors` | **Solutions: Clinicians** | Value proposition for solo practitioners, polyclinics, and hospital OPDs. |
| `/solutions/patients` | **Solutions: Patients** | Chronic disease adherence, post-operative care, and health literacy. |
| `/technology` | **Technology & Trust** | Security architecture, encryption standards, and clinical guardrails. |
| `/pricing` | **Pricing & Plans** | Interactive monthly/annual billing calculator, currency toggle (USD/INR), and checkout. |
| `/resources` | **Resources & Science** | Clinical position papers, whitepapers, documentation, and case studies. |
| `/contact` | **Contact & Demo** | Enterprise sales consultation, live walkthrough requests, and direct support. |
| `/privacy` | **Privacy Policy** | HIPAA compliance details, ABDM consent framework, and data retention policies. |
| `/terms` | **Terms of Service** | Software licensing, uptime SLA, and clinician-in-the-loop legal terms. |

---

## 🧩 Interactive Simulator Components

1. **Doctor Clinical Workspace Simulator (`src/components/common/DoctorWorkspaceSimulator.tsx`)**
   - Live queue simulation featuring real-time multilingual patient leaflet generation and WhatsApp dispatch.
2. **Patient AI Assistant Simulator (`src/components/common/PatientAiSimulator.tsx`)**
   - Interactive chat simulator demonstrating deterministic medical guardrails and emergency symptom escalation.
3. **Clinical ROI & Value Calculator (`src/components/common/RoiCalculator.tsx`)**
   - Real-time algorithmic modeling of consultation time reclaimed, adherence uplift, and clinic revenue protection.
4. **Checkout & Demo Modals (`CheckoutModal.tsx`, `DemoModal.tsx`)**
   - Clean SaaS purchase and lead-capture workflows with zero-leakage configurable webhooks.

---

## 🎨 Design System & Branding

- **Authentic Logo Asset:** 100% faithful representation of the official Saviora Health crest with high-DPI multi-resolution assets:
  - Default: `/public/logo.png`
  - Retina (2x): `/public/logo-hd.png`
  - Ultra HD (3x): `/public/logo-ultra-hd.png`
- **Color Palette:**
  - **Primary:** Deep Navy Blue (`#04285E` / `#0A4B92`)
  - **Secondary:** Royal Blue (`#0E5CAD` / `#2563EB`)
  - **Accent:** Emerald Teal (`#00C49F`) & Cyan Sky (`#00B4D8`)
  - **Backgrounds:** Crisp White (`#FFFFFF`) with soft Ice Blue tints (`#F8FAFC` / `#EFF6FF`)
  - **Typography:** Inter & Plus Jakarta Sans via Google Fonts

---

## 🛠️ Tech Stack & Directory Structure

```
├── public/
│   ├── assets/aistudio/logo_12e1b25a.png  # Authentic official logo source
│   ├── logo.png                           # 1x Web asset (128x103)
│   ├── logo-hd.png                        # 2x High-density retina asset (1024x824)
│   ├── logo-ultra-hd.png                  # 3x Ultra-HD 4K asset (2048x1648)
│   └── favicon / metadata icons
├── src/
│   ├── components/
│   │   ├── common/                        # SavioraLogo, Simulators, ROI Calculator, Modals
│   │   └── layout/                        # Navbar, Footer
│   ├── data/                              # Navigation, pricing tiers, FAQs, team data
│   ├── pages/                             # 15 Dedicated marketing and product pages
│   ├── types/                             # TypeScript interfaces & domain models
│   ├── utils/                             # Pure business logic (pricing, ROI algorithms)
│   │   ├── pricing.ts & pricing.test.ts
│   │   └── roiCalculator.ts & roiCalculator.test.ts
│   ├── App.tsx                            # Client-side router & modal orchestration
│   ├── index.css                          # Tailwind CSS v4 entry point
│   └── main.tsx                           # React 19 application mount
├── index.html                             # Semantic HTML5 entry with Schema.org JSON-LD
├── package.json                           # Dependencies & scripts
├── tsconfig.json                          # Strict TypeScript configuration
└── vite.config.ts                         # Vite 8 bundler configuration
```

---

## 💻 Local Development Setup

### Prerequisites
- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/saviora-health/saviora-website.git
cd saviora-website

# Install dependencies
npm install
```

### Running Locally
```bash
# Start development server on port 3000
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Unit Tests
```bash
# Execute unit test suite for pure pricing and ROI calculation logic
npm run test
```

### Type Checking & Linting
```bash
npm run lint
```

### Building for Production
```bash
# Compile and optimize static assets
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Security & Regulatory Compliance

- **Zero Patient PHI Training:** Proprietary patient charts and prescription logs are strictly isolated and never fed into generalized foundational models.
- **HIPAA Standards:** End-to-end 256-bit AES encryption at rest and TLS 1.3 in transit.
- **ABDM Readiness:** Architected to align with Ayushman Bharat Digital Mission (M1, M2, M3) health data exchange guidelines.
- **Clinician-in-the-Loop:** All educational packs and patient-facing recommendations require licensed physician review before transmission.

---

## 📄 License & Intellectual Property

Copyright © 2026 Saviora Health, Inc. All rights reserved.  
Unauthorized copying, reverse engineering, or redistribution of proprietary clinical workflows is strictly prohibited.
