import React from 'react';
import { RoutePath } from '../types';
import { 
  ShieldCheck, 
  Lock, 
  Cpu, 
  FileCheck, 
  Database, 
  Server, 
  Layers, 
  Network,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface TechnologyPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate, onRequestDemo }) => {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Platform Engineering</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Enterprise Healthcare Architecture & Deterministic AI Guardrails
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          How Saviora protects Protected Health Information (PHI), prevents generative hallucinations, and connects with hospital core systems at millisecond latencies.
        </p>
      </section>

      {/* Architecture Diagram Representation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Multi-Tier Stack</span>
              <h3 className="text-xl font-bold text-white mt-1">Saviora Health Cloud Topology</h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational · SOC 2 Type II Certified</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* Layer 1: Ingestion */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-bold">
                <Network className="w-4 h-4" />
                <span>1. Ingestion & HIS Interop</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Connects to doctor interfaces and hospital HIS/EMR systems through HL7 v2 and FHIR R4 standard interfaces. De-identifies telemetry before translation pipelines.
              </p>
              <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded-md font-mono">
                FHIR R4 / HL7 / REST / WebSocket
              </div>
            </div>

            {/* Layer 2: Clinical Grounding */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Cpu className="w-4 h-4" />
                <span>2. Medical Guardrail Engine</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Anchors every query strictly to the attending physician's prescription note. Evaluates generated text against peer-reviewed clinical knowledge bases (SNOMED-CT / ICD-10).
              </p>
              <div className="text-[11px] text-emerald-300 bg-slate-900/60 p-2 rounded-md font-mono">
                Deterministic Red-Flag Classifier
              </div>
            </div>

            {/* Layer 3: Encrypted Delivery */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-bold">
                <Lock className="w-4 h-4" />
                <span>3. Patient Delivery & Locker</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Delivers multilingual leaflets via official Meta WhatsApp Business Cloud API with end-to-end transport security and stores records in an ABDM-linked health locker.
              </p>
              <div className="text-[11px] text-purple-300 bg-slate-900/60 p-2 rounded-md font-mono">
                AES-256 at Rest / TLS 1.3 in Flight
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Compliance</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Regulatory Certifications & Standards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">HIPAA Security & Privacy Rule</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Saviora maintains strict Administrative, Physical, and Technical safeguards as mandated by the United States Health Insurance Portability and Accountability Act (HIPAA). Business Associate Agreements (BAAs) are executed with all enterprise clients.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
              <li>✓ Tenant-isolated databases</li>
              <li>✓ Role-based access control with MFA enforcement</li>
              <li>✓ Comprehensive audit trail of all record accesses</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Ayushman Bharat Digital Mission (ABDM)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fully compliant with the National Health Authority (NHA) standards of India. Supports Milestone 1 (ABHA creation), Milestone 2 (HIP - Health Information Provider), and Milestone 3 (HIU - Health Information User) interoperability.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
              <li>✓ Direct 14-digit ABHA creation and linking</li>
              <li>✓ Consent-driven digital record sharing</li>
              <li>✓ Standardized Fast Healthcare Interoperability (FHIR) records</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Zero Training Commitment */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 text-center">
          <h3 className="text-xl font-bold text-slate-900">Our Sacred Zero-Training Guarantee</h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-xl mx-auto">
            Saviora never uses client clinic notes, doctor prescriptions, or patient WhatsApp interactions to train public AI models. Your clinic's knowledge and patient records remain strictly your proprietary intellectual property.
          </p>
        </div>
      </section>

    </div>
  );
};
