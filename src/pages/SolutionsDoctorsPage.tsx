import React from 'react';
import { RoutePath } from '../types';
import { 
  Building2, 
  Stethoscope, 
  Clock, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Calendar, 
  FileText,
  DollarSign
} from 'lucide-react';

interface SolutionsDoctorsPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const SolutionsDoctorsPage: React.FC<SolutionsDoctorsPageProps> = ({ 
  onNavigate, 
  onRequestDemo 
}) => {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          <Building2 className="w-4 h-4" />
          <span>Tailored Clinical Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Engineered for Solo Doctors, Polyclinics, and Hospital Outpatient Networks
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Whether you practice as a single consultant in private practice or oversee a 100-doctor hospital network, Saviora scales to your clinical throughput.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onRequestDemo}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm shadow-sm"
          >
            Request Tailored Practice Demo
          </button>
          <button
            onClick={() => onNavigate('/pricing')}
            className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-sm"
          >
            Explore Pricing Tiers
          </button>
        </div>
      </section>

      {/* Segment 1: Solo Practitioners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Solo Consultants</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Run an Ultra-Efficient Private Practice
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              As an independent practitioner, you cannot afford to hire multiple front-desk coordinators just to answer patient questions about medicine timings. Saviora gives you an automated digital clinical assistant that provides patients with clear, doctor-approved guidance.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Zero administrative staff overhead needed</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Fast quick-notes prescription workflow</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Automated patient WhatsApp education delivery</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
            <div className="text-4xl font-extrabold text-blue-600">Starter Plan</div>
            <div className="text-xs text-slate-500">$39/month · Cancel anytime</div>
            <button
              onClick={() => onNavigate('/pricing')}
              className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg"
            >
              Start Solo Practice &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Segment 2: Polyclinics & Group Practices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Polyclinics & Group Clinics</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Standardize Quality Across All Consulting Rooms
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Equip your multi-doctor clinic with shared patient queues, role-based front-desk check-in, unified WhatsApp branding with your clinic's green tick, and comprehensive follow-up analytics.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Support for 2 to 10 clinicians on one unified dashboard</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Custom clinic logo on all patient leaflets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Centralized recall queue for chronic disease follow-ups</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
            <div className="text-4xl font-extrabold text-emerald-600">Practice Pro</div>
            <div className="text-xs text-slate-500">Includes 3 seats · $99/month</div>
            <button
              onClick={() => onNavigate('/pricing')}
              className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg"
            >
              Start Group Practice &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Segment 3: Hospitals & Multi-Center Networks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Hospitals & Health Systems</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Enterprise Outpatient Throughput & Quality Compliance
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              High-volume hospital OPDs handle tens of thousands of encounters each month. Saviora connects with your enterprise HIS through FHIR connectors, standardizes discharge leaflets across all surgical departments, and ensures medicolegal audit trails.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Hospital-wide EMR integration (HL7 / FHIR)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Enterprise SLA with dedicated Technical Account Manager</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Single Sign-On (SSO) & HIPAA/ABDM BAA agreements</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center space-y-3">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Health System Tier</div>
            <div className="text-2xl font-bold text-white">Custom Hospital Deployment</div>
            <p className="text-xs text-slate-400">Tailored on-prem or private cloud hosting available.</p>
            <button
              onClick={onRequestDemo}
              className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg"
            >
              Contact Hospital Enterprise Team &rarr;
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
