import React from 'react';
import { RoutePath } from '../types';
import { 
  Layers, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  FileCheck, 
  Cpu, 
  Workflow, 
  ArrowRight,
  Database,
  Building2
} from 'lucide-react';

interface ClinicalWorkflowPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const ClinicalWorkflowPage: React.FC<ClinicalWorkflowPageProps> = ({ 
  onNavigate, 
  onRequestDemo 
}) => {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200">
          <Layers className="w-4 h-4 text-purple-600" />
          <span>Clinical Workflow Engine</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Speed-First Clinical Workflow & Automated Patient Leaflet Suite
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Eliminate clunky multi-step data entry. Saviora adapts to how physicians naturally work, instantly transforming routine prescription keystrokes into structured patient leaflets and recall triggers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onRequestDemo}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-sm shadow-sm"
          >
            Request Workflow Architecture Walkthrough
          </button>
          <button
            onClick={() => onNavigate('/pricing')}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm"
          >
            View Enterprise Licensing
          </button>
        </div>
      </section>

      {/* Specialty Templates Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">Specialty-Optimized</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Pre-Configured Specialty Templates</h2>
          <p className="text-sm text-slate-600">Built to capture key clinical metrics without slowing down the consultation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <h3 className="font-bold text-base text-slate-900">Cardiology</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              BP logs, lipid management goals, dual antiplatelet therapy reminders, and dietary sodium warning packs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <h3 className="font-bold text-base text-slate-900">Diabetology</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fasting/PP blood sugar tracking, hypoglycemia rescue protocols, foot care leaflets, and HbA1c 90-day recall triggers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <h3 className="font-bold text-base text-slate-900">Pediatrics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Weight-based dosage safety checks, vaccination schedule calendars, fever management guides, and parent-friendly tips.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <h3 className="font-bold text-base text-slate-900">Orthopedics & Surgery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Post-op wound care instructions, physical therapy isometric exercise schedules, and DVT symptom warnings.
            </p>
          </div>
        </div>
      </section>

      {/* Integration with Hospital EMR */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
            <Database className="w-4 h-4" />
            <span>Hospital EMR & HIS Bidirectional Bridge</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Seamless Sync with Your Existing Hospital Systems</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Hospitals do not need to discard their existing EMR investments. Saviora mounts as a companion intelligence and communication layer via FHIR R4 and HL7 v2 messages, reading prescription entries and returning patient engagement receipts into the patient chart.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
              <div className="font-bold text-white">HL7 v2 & FHIR R4</div>
              <div className="text-slate-400 mt-1">Standard clinical protocol support</div>
            </div>
            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
              <div className="font-bold text-white">Zero Rip-and-Replace</div>
              <div className="text-slate-400 mt-1">Works alongside your current HIS</div>
            </div>
            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
              <div className="font-bold text-white">99.9% Uptime SLA</div>
              <div className="text-slate-400 mt-1">High-concurrency cloud architecture</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
