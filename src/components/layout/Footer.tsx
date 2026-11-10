import React from 'react';
import { RoutePath } from '../../types';
import { SavioraLogo } from '../common/SavioraLogo';
import { ShieldCheck, Lock, CheckCircle2, HeartHandshake, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestDemo }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance & Trust Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-12 border-b border-slate-800/80 mb-12">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">HIPAA Compliant</div>
              <div className="text-[11px] text-slate-400">Strict patient PHI segregation</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <Lock className="w-5 h-5 text-sky-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">ABDM Connected</div>
              <div className="text-[11px] text-slate-400">Ayushman Bharat M1/M2/M3 ready</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">ISO 27001 & SOC 2</div>
              <div className="text-[11px] text-slate-400">Bank-grade 256-bit AES encryption</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <HeartHandshake className="w-5 h-5 text-sky-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">Clinician-Led</div>
              <div className="text-[11px] text-slate-400">Designed by doctors for doctors</div>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info with Ultra HD Logo */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('/')}
              className="text-left focus:outline-hidden"
              aria-label="Saviora Health Home"
            >
              <SavioraLogo size={46} showText={true} variant="dark" />
            </button>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Bridging the consultation gap. Saviora equips clinicians with speed-first OPD tools and empowers patients with post-consultation health literacy and adherence intelligence.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href="mailto:contact@saviorahealth.com" className="hover:text-white transition-colors">contact@saviorahealth.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Global Operations · Bengaluru · Delaware</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Products</div>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('/products/doctor-platform')} className="hover:text-white transition-colors">
                  Doctor Platform
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/products/patient-platform')} className="hover:text-white transition-colors">
                  Patient Health Platform
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/products/ai-assistant')} className="hover:text-white transition-colors">
                  AI Clinical Assistant
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/products/clinical-workflow')} className="hover:text-white transition-colors">
                  Workflow Engine
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/products')} className="text-sky-400 hover:text-sky-300 font-medium">
                  Product Overview &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Solutions</div>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('/solutions/doctors')} className="hover:text-white transition-colors">
                  Solo Clinicians
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/solutions/doctors')} className="hover:text-white transition-colors">
                  Polyclinics & Groups
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/solutions/doctors')} className="hover:text-white transition-colors">
                  Hospitals & OPD Networks
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/solutions/patients')} className="hover:text-white transition-colors">
                  Chronic Disease Patients
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/solutions/patients')} className="hover:text-white transition-colors">
                  Post-Surgical Follow-up
                </button>
              </li>
            </ul>
          </div>

          {/* Platform & Science */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Science & Tech</div>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('/technology')} className="hover:text-white transition-colors">
                  Architecture & Safety
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/resources')} className="hover:text-white transition-colors">
                  The 2-Minute Problem
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/resources')} className="hover:text-white transition-colors">
                  Clinical Papers & Research
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/pricing')} className="hover:text-white transition-colors">
                  Pricing & Subscriptions
                </button>
              </li>
              <li>
                <button onClick={onRequestDemo} className="hover:text-white transition-colors">
                  Schedule Live Walkthrough
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Company & Trust</div>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">
                  About Saviora Health
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
                  Contact Sales
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/privacy')} className="hover:text-white transition-colors">
                  Privacy Policy (HIPAA)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms')} className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <a 
                  href="https://app.saviorahealth.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 font-medium"
                >
                  Doctor App Login &nearr;
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-xs text-slate-500 space-y-4">
          <p className="leading-relaxed border-l-2 border-slate-800 pl-3">
            <strong className="text-slate-400">Clinical Disclaimer:</strong> Saviora Health provides clinical productivity tools, structured post-consultation patient literacy summaries, and communication support. Saviora is not a diagnostic device and does not render independent medical judgments. Licensed physicians maintain total clinical discretion and oversight over all prescriptions, treatment plans, and patient communications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900">
            <div>
              &copy; {new Date().getFullYear()} Saviora Health, Inc. All rights reserved. saviorahealth.com
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => onNavigate('/privacy')} className="hover:text-slate-300">Privacy Policy</button>
              <button onClick={() => onNavigate('/terms')} className="hover:text-slate-300">Terms of Service</button>
              <button onClick={() => onNavigate('/technology')} className="hover:text-slate-300">Security Architecture</button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
