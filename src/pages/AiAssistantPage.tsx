import React from 'react';
import { RoutePath } from '../types';
import { PatientAiSimulator } from '../components/common/PatientAiSimulator';
import { 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  Stethoscope,
  Lock,
  Zap,
  HelpCircle
} from 'lucide-react';

interface AiAssistantPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
  onSubscribe: () => void;
}

export const AiAssistantPage: React.FC<AiAssistantPageProps> = ({ 
  onNavigate, 
  onRequestDemo,
  onSubscribe 
}) => {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>Doctor-Supervised Clinical AI</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Automated Post-Consultation Patient Q&A with Zero Hallucinations
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Patients constantly have questions after leaving the clinic. Saviora's AI communicates with them on WhatsApp, strictly citing their doctor's prescription while immediately alerting your team to urgent red flags.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onRequestDemo}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm shadow-sm"
          >
            Schedule Clinical AI Demo
          </button>
          <button
            onClick={onSubscribe}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm"
          >
            Get Started on Practice Pro
          </button>
        </div>
      </section>

      {/* Interactive Simulator Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Interactive WhatsApp Patient Query Simulation
          </span>
        </div>
        <PatientAiSimulator />
      </section>

      {/* Safety Guardrails Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Medical Safety First</span>
          <h2 className="text-3xl font-extrabold text-slate-900">How Saviora Guarantees Clinical Safety</h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Unlike consumer chatbots that guess medical facts, Saviora is built with deterministic healthcare guardrails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Anchored in the Doctor's Chart</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The AI only answers based on what the treating clinician prescribed during the visit. It never suggests new medications or alters prescribed dosages.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Emergency Red-Flag Escalation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If a patient describes chest pain, breathing difficulty, or sudden high fever, the system instructs them to seek emergency care and alerts your clinic triage line.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Total Clinician Oversight</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Physicians can audit any conversation log in real time and take over the WhatsApp chat with one click if they wish to personally answer.
            </p>
          </div>
        </div>
      </section>

      {/* AI Usage & Credits Model */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>AI Credits & Usage Limits</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Predictable, Controlled AI Usage for Every Practice</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every Saviora plan includes a generous monthly quota of AI patient query credits (Starter: 500/mo, Practice Pro: 2,500/mo, Health System: 10,000/mo). 
            Clinics can set daily caps or add priority query packs anytime with zero surprise billing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
              <div className="font-bold text-white text-sm">Starter</div>
              <div className="text-sky-400 font-extrabold text-xl mt-1">500 Credits</div>
              <div className="text-slate-400 mt-1">~150 patient interactions</div>
            </div>
            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
              <div className="font-bold text-white text-sm">Practice Pro</div>
              <div className="text-sky-400 font-extrabold text-xl mt-1">2,500 Credits</div>
              <div className="text-slate-400 mt-1">~800 patient interactions</div>
            </div>
            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
              <div className="font-bold text-white text-sm">Health System</div>
              <div className="text-sky-400 font-extrabold text-xl mt-1">10,000 Credits</div>
              <div className="text-slate-400 mt-1">Hospital department scale</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
