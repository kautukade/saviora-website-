import React from 'react';
import { RoutePath } from '../types';
import { DoctorWorkspaceSimulator } from '../components/common/DoctorWorkspaceSimulator';
import { 
  Stethoscope, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Layers,
  Activity,
  ExternalLink
} from 'lucide-react';

interface DoctorPlatformPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
  onSubscribe: () => void;
}

export const DoctorPlatformPage: React.FC<DoctorPlatformPageProps> = ({ 
  onNavigate, 
  onRequestDemo,
  onSubscribe 
}) => {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Product Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          <Stethoscope className="w-4 h-4" />
          <span>Saviora Doctor Platform</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          A High-Speed Clinical Workspace Built for 50-Patient OPD Shifts
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Built from the ground up by practicing clinicians. Manage your queue, write rapid clinical notes, and automatically dispatch personalized multilingual leaflets in seconds.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onRequestDemo}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm shadow-sm"
          >
            Request 1-on-1 Walkthrough
          </button>
          <button
            onClick={onSubscribe}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm"
          >
            Start Doctor Subscription
          </button>
          <a
            href="https://app.saviorahealth.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm flex items-center gap-1.5"
          >
            <span>Doctor Login</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Live Workspace Simulator Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Interactive Clinician Cockpit Demo
          </span>
        </div>
        <DoctorWorkspaceSimulator />
      </section>

      {/* The Problem Solved */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-xl space-y-6">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">The Problem Solved</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Doctors Are Drowning in Administrative Overhead & Unpaid Answering Service Duty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs leading-relaxed text-slate-300">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <h4 className="font-bold text-sm text-white mb-2">The OPD Time Crunch</h4>
              <p>With only 2-3 minutes per patient, clinicians cannot verbally explain all dietary restrictions, interactions, and symptom red flags.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <h4 className="font-bold text-sm text-white mb-2">Post-OPD Panic Calls</h4>
              <p>Doctors spend 1-2 unpaid hours every evening replying to WhatsApp texts and calls about missed doses and food timings.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <h4 className="font-bold text-sm text-white mb-2">Medicolegal Exposure</h4>
              <p>When patients misunderstand dosage and suffer adverse reactions, the clinic lacks verifiable digital proof of post-consultation guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Clinical Modules</span>
          <h2 className="text-3xl font-extrabold text-slate-900">What's Inside the Saviora Doctor Workspace</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">OPD Queue & Real-Time Triage</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Track waiting, in-consultation, and completed patients. Receptionists check patients in; the doctor's screen updates seamlessly without page reloads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">1-Click Patient Education Dispatch</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automatically turns your diagnosis and Rx into a clean, color-coded leaflet in Hindi, Gujarati, Tamil, Telugu, Spanish, or English and dispatches it straight to the patient's WhatsApp.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">IPD Discharge Summary Suite</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Generate standardized, comprehensive discharge summaries with medication transition schedules, wound care instructions, and planned follow-up dates in under 3 minutes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Clinician AI Oversight Dashboard</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Review any patient questions answered by your AI assistant. Receive immediate escalation notifications if a patient reports red-flag symptoms like chest pain or extreme fever.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Clinic Team Permissions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Add junior residents, front-desk staff, and clinic nurses with role-based permissions (RBAC) ensuring doctor-only prescription authorization.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Medicolegal Delivery Proof</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cryptographically verified delivery timestamps and read receipts prove that complete post-consultation education was provided to the patient.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription CTA Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Equip Your Clinic with Saviora Doctor Platform Today
        </h3>
        <p className="text-sm text-slate-600">
          Available on Starter ($39/mo) and Practice Pro ($99/mo) plans. Immediate 24-hour setup.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onSubscribe}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm"
          >
            Subscribe to Doctor Platform
          </button>
          <button
            onClick={onRequestDemo}
            className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-sm"
          >
            Request Private Walkthrough
          </button>
        </div>
      </section>

    </div>
  );
};
