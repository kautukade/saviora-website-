import React from 'react';
import { RoutePath } from '../types';
import { 
  HeartHandshake, 
  Languages, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Activity, 
  Bell, 
  ExternalLink 
} from 'lucide-react';

interface SolutionsPatientsPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const SolutionsPatientsPage: React.FC<SolutionsPatientsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
          <HeartHandshake className="w-4 h-4" />
          <span>Patient & Family Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Compassionate Healthcare Guidance for Every Chronic Condition & Recovery
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We understand how frightening it is to leave a doctor's clinic with an armful of prescriptions and confusing medical terms. Saviora stands by you and your family every single day.
        </p>
        <div className="pt-2">
          <a
            href="https://patient.saviorahealth.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm shadow-sm"
          >
            <span>Log In to Patient Health Locker</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Patient Use Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Diabetes & Hypertension Care</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Living with chronic conditions requires long-term discipline. Saviora delivers weekly blood glucose and BP logging prompts, dietary tips suited to Indian and regional cuisines, and alerts when lab tests are due.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
              <li>✓ Hypoglycemia warning reminders</li>
              <li>✓ Daily morning/night medicine alerts</li>
              <li>✓ 90-day HbA1c follow-up calendar</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Post-Surgery & Hospital Discharge</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Recovering from an operation shouldn't mean guessing whether an incision looks normal. Get step-by-step wound dressing care guidelines, active rehab exercise instructions, and red-flag symptom warnings on your phone.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
              <li>✓ Day-by-day physical recovery milestones</li>
              <li>✓ Pain medication tapering schedules</li>
              <li>✓ Direct alert for fever or wound redness</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Languages className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Caregiver & Family Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Caring for aging parents or young children from another city? Connect their Saviora records to your account to review what the doctor prescribed, ensure medicines are restocked, and receive adherence updates.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
              <li>✓ Shared family health timeline</li>
              <li>✓ Refill reminders before prescriptions run out</li>
              <li>✓ Multi-language translation for grandparents</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};
