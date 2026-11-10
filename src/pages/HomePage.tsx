import React, { useState } from 'react';
import { RoutePath } from '../types';
import { DoctorWorkspaceSimulator } from '../components/common/DoctorWorkspaceSimulator';
import { PatientAiSimulator } from '../components/common/PatientAiSimulator';
import { RoiCalculator } from '../components/common/RoiCalculator';
import { 
  Stethoscope, 
  UserCheck, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Languages, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight,
  TrendingUp,
  FileCheck,
  Send,
  Building2,
  Lock,
  Calendar
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onRequestDemo }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the 'two-minute consultation challenge' that Saviora addresses?",
      a: "In outpatient settings across India and high-density global health systems, clinical consultations average just two to three minutes due to high patient volumes. While doctors diagnose quickly, there is virtually zero time to explain complex regimens. Research shows 40% to 80% of medical advice is forgotten immediately. Saviora bridges this by auto-generating structured, multilingual patient education packs straight from the doctor's prescription without adding typing burden.",
    },
    {
      q: "Does Saviora replace the physician or prescribe medications autonomously?",
      a: "No. Saviora is strictly clinician-led and designed to support, not replace, medical judgment. The doctor retains 100% control over all clinical decisions, prescriptions, and diagnosis. Our AI assistant only explains what the doctor has prescribed and strictly follows clinical guardrails, immediately flagging severe symptoms for in-person review.",
    },
    {
      q: "How does the patient receive their post-consultation education?",
      a: "Patients do not need to install complex new apps. Saviora delivers clean, interactive summary leaflets and adherence schedules directly via WhatsApp and secure web links in their home language (English, Hindi, Gujarati, Tamil, Spanish, etc.), with option to store them in the Saviora Health Locker.",
    },
    {
      q: "Is Saviora compliant with healthcare privacy regulations?",
      a: "Yes. Saviora is architected for strict HIPAA compliance and integration with the Ayushman Bharat Digital Mission (ABDM M1/M2/M3). All Protected Health Information (PHI) is encrypted at rest (AES-256) and in transit (TLS 1.3), stored with zero LLM model training on private patient records.",
    },
    {
      q: "How fast can a clinic or hospital deploy Saviora?",
      a: "Independent practitioners and polyclinics can be active within 24 hours via our cloud portal. Multi-specialty hospitals with legacy EMRs (such as Epic, Cerner, or local HIS) integrate via our HL7/FHIR and REST API connectors within 1 to 2 weeks.",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-8 overflow-hidden bg-radial-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Unboxed clinical announcement kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-200/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>The Next Generation Healthcare SaaS</span>
              <span className="text-slate-300">·</span>
              <span className="font-normal text-slate-600">Addressing the Outpatient Communication Gap</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Extending Clinical Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500">
                Beyond the Consultation Room
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
              In high-volume OPDs, consultations last barely two minutes, leaving patients to forget up to 80% of instructions. 
              <strong> Saviora Health</strong> equips clinicians with speed-first tools that automatically translate prescriptions into multilingual patient education and doctor-guided AI adherence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Clinical Demo</span>
              </button>

              <button
                onClick={() => onNavigate('/products')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-200 shadow-xs transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <a
                href="https://app.saviorahealth.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center justify-center gap-1.5"
              >
                <span>Doctor Portal Login</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Credibility highlights */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-500 border-t border-slate-200/80 max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Extra Typing for Doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Multilingual WhatsApp Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>HIPAA & ABDM Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Doctor-in-the-Loop Oversight</span>
              </div>
            </div>

          </div>

          {/* Interactive Hero Simulator Preview */}
          <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
            <div className="text-center mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Interactive Workspace Demonstration
              </span>
            </div>
            <DoctorWorkspaceSimulator />
          </div>

        </div>
      </section>

      {/* 2. The Core Problem Statement: The 2-Minute Consultation Crisis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              The Consultation Reality
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why 50% of Chronic Disease Therapy Fails in the First 90 Days
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Published health services research indicates that outpatient consultations in India average approximately <strong>120 seconds</strong>—among the shortest clinical durations globally. 
              Doctors make heroic, highly accurate diagnostic decisions under immense patient volume, but the human brain cannot absorb complex regimens in two minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 relative z-10">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">120 sec</div>
              <div className="text-sm font-semibold text-white">Average Consultation Duration</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                40 to 60 patients per session gives physicians less than 3 minutes to diagnose, chart, and instruct.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-400">40% - 80%</div>
              <div className="text-sm font-semibold text-white">Instructions Forgotten Immediately</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Patients leave the clinic overwhelmed. Nearly half of what they remember is recalled inaccurately.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">&lt;50%</div>
              <div className="text-sm font-semibold text-white">Chronic Medication Adherence</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hypertension and Diabetes patients discontinue or alter dosages due to unaddressed confusion at home.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span>Sources: Saviora Health Clinical Position Paper · Lancet Global Health & Indian Primary Care Studies</span>
            <button
              onClick={() => onNavigate('/resources')}
              className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1.5"
            >
              <span>Read Full Whitepaper</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Product Ecosystem Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Unified Healthcare SaaS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Complete Saviora Care Ecosystem
          </h2>
          <p className="text-base text-slate-600">
            Four seamlessly connected pillars that support clinicians during the rush of OPD and stay with patients long after they walk out the clinic door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Product 1: Doctor Platform */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Doctor Platform
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Fast OPD charting, patient queues, IPD discharge manager, and 1-click education pack generation.
                </p>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Sub-minute consultation notes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Discharge workflow automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Integrated clinic team permissions</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('/products/doctor-platform')}
              className="mt-6 text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex items-center justify-between"
            >
              <span>Explore Doctor Platform</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* Product 2: Patient Platform */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Patient Health Platform
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Patient registration, doctor discovery, digital prescription locker, and personalized adherence guides.
                </p>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Secure cloud records locker</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Prescription timeline history</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Simplified lab report explainers</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('/products/patient-platform')}
              className="mt-6 text-xs font-semibold text-emerald-600 group-hover:text-emerald-700 flex items-center justify-between"
            >
              <span>Explore Patient Platform</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* Product 3: AI Assistant */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  AI Clinical Assistant
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Doctor-supervised WhatsApp Q&A answering post-consultation medication queries with zero hallucinations.
                </p>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>WhatsApp direct communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Strict clinical guardrails</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Red-flag symptom escalation</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('/products/ai-assistant')}
              className="mt-6 text-xs font-semibold text-sky-600 group-hover:text-sky-700 flex items-center justify-between"
            >
              <span>Explore AI Assistant</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* Product 4: Clinical Workflow Engine */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Workflow Engine
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  High-throughput OPD templates, automated follow-up recalls, and hospital EMR bidirectional sync.
                </p>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Custom specialty templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Smart follow-up recall SMS/WA</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>HL7 & FHIR hospital connectors</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('/products/clinical-workflow')}
              className="mt-6 text-xs font-semibold text-purple-600 group-hover:text-purple-700 flex items-center justify-between"
            >
              <span>Explore Workflow Engine</span>
              <span>&rarr;</span>
            </button>
          </div>

        </div>
      </section>

      {/* 4. Doctor Experience & Patient Experience Side-by-Side */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>For Doctors & Clinical Teams</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Reclaim Your Peace of Mind During 50-Patient Outpatient Shifts
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Doctors spend hours every evening answering anxious calls from patients asking whether their medicine is before food or after food, or how long they must continue their doses. 
                Saviora takes that cognitive load off your shoulders entirely.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">1</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Zero Typing Latency</h4>
                    <p className="text-xs text-slate-500">Write prescriptions using your existing workflow, pen tablet, or fast quick-notes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">2</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Medicolegal Audit Trail</h4>
                    <p className="text-xs text-slate-500">Proof of thorough patient education and discharge counseling stamped with delivery timestamps.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">3</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Fewer Unscheduled Repeat Visits</h4>
                    <p className="text-xs text-slate-500">Patients understand medication side effects without unnecessary panic or clinic drop-ins.</p>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/solutions/doctors')}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm"
                >
                  See Clinician Solutions &rarr;
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">
                Interactive Patient AI Assistant Demo
              </div>
              <PatientAiSimulator />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Interactive ROI & Consultation Impact Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoiCalculator />
      </section>

      {/* 6. Pricing Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Transparent SaaS Licensing</span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Tailored for Independent Practices to Large Hospitals
          </h2>
          <p className="text-sm text-slate-600">
            Straightforward pricing with zero hidden implementation charges. 20% annual billing discount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
            <div>
              <h3 className="font-bold text-slate-900">Clinical Starter</h3>
              <p className="text-xs text-slate-500">For solo consultants & single clinics</p>
            </div>
            <div className="text-3xl font-extrabold text-slate-900">$39 <span className="text-xs font-normal text-slate-500">/mo billed annually</span></div>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>✓ 1 Clinician workspace</li>
              <li>✓ OPD queue & quick notes</li>
              <li>✓ Multilingual WhatsApp leaflets</li>
              <li>✓ 500 AI credits/mo</li>
            </ul>
            <button
              onClick={() => onNavigate('/pricing')}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg"
            >
              View Plan Details
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-blue-900 text-white space-y-4 shadow-xl border-2 border-blue-500 relative">
            <div className="absolute top-3 right-3 text-[10px] font-bold uppercase bg-blue-500 text-white px-2 py-0.5 rounded-full">
              Most Popular
            </div>
            <div>
              <h3 className="font-bold text-white">Practice Pro</h3>
              <p className="text-xs text-blue-200">For polyclinics & group practices (2-10 doctors)</p>
            </div>
            <div className="text-3xl font-extrabold text-white">$99 <span className="text-xs font-normal text-blue-200">/mo billed annually</span></div>
            <ul className="text-xs text-blue-100 space-y-2">
              <li>✓ Up to 3 Clinicians included</li>
              <li>✓ OPD + IPD discharge manager</li>
              <li>✓ Doctor-supervised AI assistant</li>
              <li>✓ 2,500 AI credits/mo</li>
              <li>✓ WhatsApp Business API integration</li>
            </ul>
            <button
              onClick={() => onNavigate('/pricing')}
              className="w-full py-2 bg-white hover:bg-blue-50 text-blue-900 text-xs font-bold rounded-lg shadow-sm"
            >
              Subscribe or Try Free
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
            <div>
              <h3 className="font-bold text-slate-900">Health System</h3>
              <p className="text-xs text-slate-500">For multi-specialty hospitals & networks</p>
            </div>
            <div className="text-3xl font-extrabold text-slate-900">$319 <span className="text-xs font-normal text-slate-500">/mo billed annually</span></div>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>✓ 10 Clinicians (unlimited scale)</li>
              <li>✓ EMR/HIS bidirectional bridge</li>
              <li>✓ Custom hospital formulary guardrails</li>
              <li>✓ 10,000 AI credits/mo</li>
              <li>✓ Dedicated compliance & SLA support</li>
            </ul>
            <button
              onClick={() => onNavigate('/pricing')}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg"
            >
              View Plan Details
            </button>
          </div>
        </div>
      </section>

      {/* 7. Clinical Trust, Security & Compliance */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Enterprise Architecture</span>
            <h2 className="text-3xl font-extrabold text-white">
              Engineered for Medical-Grade Trust and Zero Compromise
            </h2>
            <p className="text-sm text-slate-300">
              Healthcare data demands the highest bar of confidentiality, reliability, and clinical verifiability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Zero Patient PHI Training</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your clinic's patient records and prescription telemetry are never used to train generalized LLM models. Data is strictly tenant-isolated and encrypted.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">HIPAA & ABDM Ready</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full compliance with US Health Insurance Portability and Accountability Act (HIPAA) and Indian Ayushman Bharat Digital Mission (ABDM) standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Deterministic Clinical Guardrails</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                All patient educational generation is validated against peer-reviewed clinical knowledge bases with real-time escalation flags for critical symptoms.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('/technology')}
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-4"
            >
              Explore our full Security & Technology Architecture &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* 8. Frequently Asked Questions (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Common Questions</span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Everything you need to know about Saviora Health for your clinic or hospital practice.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-blue-600"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 text-slate-400 ${
                      isOpen ? 'rotate-90 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Final High-Impact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-14 text-white text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Transform Your Patient Consultations?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Join hundreds of forward-thinking physicians and hospitals extending compassionate, clear clinical care beyond the consultation room.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-7 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl shadow-md transition-all active:scale-[0.99] text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Schedule Your Clinical Walkthrough</span>
            </button>
            <button
              onClick={() => onNavigate('/pricing')}
              className="w-full sm:w-auto px-6 py-3.5 bg-blue-800/80 hover:bg-blue-900 text-white font-semibold rounded-xl border border-blue-400/40 text-sm"
            >
              Compare SaaS Plans
            </button>
          </div>
          <div className="text-xs text-blue-200 pt-2">
            Live setup in 24 hours · No credit card required for consultation audit · Full HIPAA compliance
          </div>
        </div>
      </section>

    </div>
  );
};
