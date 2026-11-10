import React from 'react';
import { RoutePath } from '../types';
import { 
  UserCheck, 
  Languages, 
  Lock, 
  Bell, 
  Calendar, 
  CheckCircle2, 
  FileCheck, 
  HeartHandshake, 
  Share2,
  ExternalLink
} from 'lucide-react';

interface PatientPlatformPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const PatientPlatformPage: React.FC<PatientPlatformPageProps> = ({ onNavigate, onRequestDemo }) => {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
          <UserCheck className="w-4 h-4" />
          <span>Saviora Patient Platform</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Clear Health Instructions You and Your Family Actually Understand
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          No medical jargon. No tiny illegible handwritten notes. Delivered directly to your WhatsApp in your own language, with automatic medication reminders and a secure health records locker.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://patient.saviorahealth.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm shadow-sm flex items-center gap-2"
          >
            <span>Open Patient Health Locker</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={() => onNavigate('/solutions/patients')}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm"
          >
            Explore Patient Solutions
          </button>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Built for Patients</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Why Patients Love Saviora</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Written in Your Home Language</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Medical prescriptions are translated into clear, simple instructions in Hindi, Gujarati, Tamil, Telugu, Spanish, and 9 other regional dialects.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">WhatsApp Medication Schedule</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Get timely notifications on WhatsApp before breakfast, lunch, and dinner so you never miss a dose or take the wrong pill by mistake.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Lifetime Encrypted Records</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All your doctor visits, lab reports, and prescription histories in one place. Easily share records with family members or consulting specialists with 1 tap.
            </p>
          </div>
        </div>
      </section>

      {/* Zero App Download Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Zero Barriers to Care</div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">No App Download Required to Get Started</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Most health apps fail because elderly patients and busy working people do not want to download another 100MB app with endless password resets. 
            Saviora works over ordinary SMS and WhatsApp. If you have a basic smartphone, you receive your doctor-approved instructions instantly.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs text-emerald-300">
            <span>✓ Works on all smartphones</span>
            <span>✓ Low bandwidth friendly</span>
            <span>✓ Accessible for senior citizens</span>
          </div>
        </div>
      </section>

    </div>
  );
};
