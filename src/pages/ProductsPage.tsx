import React from 'react';
import { RoutePath } from '../types';
import { 
  Stethoscope, 
  UserCheck, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Check, 
  Clock, 
  ShieldCheck, 
  FileText,
  Activity,
  Calendar,
  Share2
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onRequestDemo }) => {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Saviora Healthcare Suite</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Purpose-Built Tools for Outpatient Excellence
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Every tool in the Saviora ecosystem was designed to solve one core problem: giving clinicians the speed to run high-volume OPDs while ensuring patients receive lifelong comprehension and care.
        </p>
      </section>

      {/* Product Deep Dives Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Product 1: Doctor Platform */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>For Clinicians & OPD Rooms</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Saviora Doctor Platform
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              A lightning-fast clinical cockpit that manages high patient volumes without the clunky data-entry traps of legacy EMRs. Dictate, click, or tap—Saviora organizes your OPD queue, prescription generation, and automated patient education dispatch in seconds.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>OPD & IPD patient tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>1-Click discharge summaries</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Specialist prescription templates</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Medicolegal time-stamped counseling log</span>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('/products/doctor-platform')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm"
              >
                Detailed Doctor Platform View &rarr;
              </button>
              <a
                href="https://app.saviorahealth.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-600 hover:text-blue-600"
              >
                Login to Doctor Portal &nearr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Clinical Impact</div>
            <div className="text-3xl font-extrabold text-white">45 Seconds</div>
            <div className="text-xs text-slate-300">Average time to generate a complete multilingual patient education pack from prescription</div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-400 space-y-1">
              <div>✓ Supports 14 regional Indian & international languages</div>
              <div>✓ Zero disruption to existing clinical habits</div>
              <div>✓ Works on desktop, iPad, or Android tablets</div>
            </div>
          </div>
        </div>

        {/* Product 2: Patient Health Platform */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              <UserCheck className="w-3.5 h-3.5" />
              <span>For Patients & Caregivers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Saviora Patient Health Platform
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Patients do not need to download an app to get value. Every post-consultation leaflet arrives over WhatsApp and secure SMS, linking into their encrypted health locker where family caregivers can view past prescriptions, lab trends, and scheduled follow-up alerts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero mandatory app downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multilingual plain language summaries</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Medication reminder alarms</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ABDM-compliant digital health locker</span>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('/products/patient-platform')}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm"
              >
                Detailed Patient Platform View &rarr;
              </button>
              <a
                href="https://patient.saviorahealth.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-600 hover:text-emerald-600"
              >
                Patient Portal Access &nearr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-emerald-950 text-white p-6 rounded-2xl border border-emerald-800 space-y-3">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Patient Literacy Jump</div>
            <div className="text-3xl font-extrabold text-white">88% Recall</div>
            <div className="text-xs text-emerald-200">Patients correctly identifying dose timings and food restrictions 7 days post-consultation</div>
            <div className="p-3 bg-emerald-900/60 rounded-xl border border-emerald-800 text-xs text-emerald-300 space-y-1">
              <div>✓ Color-coded morning / afternoon / night grids</div>
              <div>✓ Clear dietary red-flags (e.g. grapefruit, low sodium)</div>
              <div>✓ Accessible for elderly patients and low-literacy users</div>
            </div>
          </div>
        </div>

        {/* Product 3: AI Clinical Assistant */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Doctor-Supervised AI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Saviora AI Clinical Assistant
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The first post-consultation clinical communication agent built specifically for high-volume outpatient clinics. Patients chat or send voice notes on WhatsApp to ask routine clarification questions ("Can I take this with milk?", "I forgot my morning dose"). All answers are anchored strictly in the doctor's chart with immediate escalation if red flags are detected.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Deterministic clinical guardrails</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Audio voice-note transcription</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Emergency red-flag symptom routing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Doctor oversight dashboard & audit logs</span>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('/products/ai-assistant')}
                className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg shadow-sm"
              >
                Detailed AI Architecture &rarr;
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Clinic Time Saved</div>
            <div className="text-3xl font-extrabold text-white">75% Fewer Calls</div>
            <div className="text-xs text-slate-300">Reduction in routine unbilled receptionist and nursing triage calls about medicine timings</div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-400 space-y-1">
              <div>✓ Zero hallucinated medical claims</div>
              <div>✓ Strict scope: only explains physician's plan</div>
              <div>✓ Audit trail for every patient interaction</div>
            </div>
          </div>
        </div>

        {/* Product 4: Clinical Workflow Engine */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              <Layers className="w-3.5 h-3.5" />
              <span>Speed & Integration Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Saviora Clinical Workflow Engine
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Designed for hospitals, polyclinics, and high-velocity outpatient departments. Bridges the gap between your existing hospital management system (HIS) or EMR and our patient education layer via open HL7, FHIR, and REST APIs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-600 shrink-0" />
                <span>HL7 & FHIR bidirectional connectors</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Custom specialty clinical templates</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Automated recall & lab reminder queues</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Departmental performance telemetry</span>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('/products/clinical-workflow')}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-lg shadow-sm"
              >
                Detailed Workflow Engine View &rarr;
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-purple-950 text-white p-6 rounded-2xl border border-purple-800 space-y-3">
            <div className="text-xs font-bold text-purple-400 uppercase tracking-wider">Enterprise Scale</div>
            <div className="text-3xl font-extrabold text-white">100,000+ Encounters</div>
            <div className="text-xs text-purple-200">Handled reliably per month across hospital outpatient departments</div>
            <div className="p-3 bg-purple-900/60 rounded-xl border border-purple-800 text-xs text-purple-300 space-y-1">
              <div>✓ 99.9% High Availability SLA</div>
              <div>✓ Sub-second API synchronization</div>
              <div>✓ End-to-end audit logging & role-based access</div>
            </div>
          </div>
        </div>

      </section>

      {/* Feature Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Capability Breakdown</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Ecosystem Capabilities at a Glance</h2>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase font-semibold">
              <tr>
                <th className="p-4">Feature / Capability</th>
                <th className="p-4">Doctor Platform</th>
                <th className="p-4">Patient Platform</th>
                <th className="p-4">AI Assistant</th>
                <th className="p-4">Workflow Engine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="p-4 font-semibold text-slate-900">OPD Queue & Quick-Notes</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-slate-400">—</td>
                <td className="p-4 text-slate-400">—</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Extended</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Automated Multilingual Leaflets</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Viewed</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Clarified</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Batch Engine</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">WhatsApp Dispatch & Sync</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Native</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Conversational</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Enterprise API</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Emergency Red-Flag Escalation</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Alert Dashboard</td>
                <td className="p-4 text-slate-400">—</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Instant Flag</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Clinic Triage</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">HL7 / FHIR EMR Connectors</td>
                <td className="p-4 text-slate-400">—</td>
                <td className="p-4 text-slate-400">—</td>
                <td className="p-4 text-slate-400">—</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Bidirectional</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">ABDM Health Locker (M1-M3)</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Verified Link</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Native Locker</td>
                <td className="p-4 text-slate-400">—</td>
                <td className="p-4 text-emerald-600 font-bold">✓ Registry Sync</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">
                  Voice-to-Leaflet Dictation
                  <span className="ml-2 text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-sm border border-amber-200">
                    Coming Soon
                  </span>
                </td>
                <td className="p-4 text-amber-600">Beta Testing</td>
                <td className="p-4 text-slate-400">—</td>
                <td className="p-4 text-amber-600">Voice Ingestion</td>
                <td className="p-4 text-amber-600">Speech Pipeline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Experience Saviora With Your Team
        </h3>
        <p className="text-sm text-slate-600">
          Book a 25-minute live interactive session tailored to your clinical specialty and OPD volume.
        </p>
        <button
          onClick={onRequestDemo}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm"
        >
          Book Live Clinical Walkthrough
        </button>
      </section>

    </div>
  );
};
