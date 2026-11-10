import React from 'react';
import { RoutePath } from '../types';
import { Stethoscope, HeartHandshake, ShieldCheck, Award, Users, BookOpen, Clock, Target, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestDemo }) => {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Our Clinical Mission</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Bridging the Critical Gap Between Clinical Advice and Patient Understanding
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Saviora Health was founded by physicians, health economists, and software architects who witnessed firsthand the heartbreaking consequences of brief outpatient consultations.
        </p>
      </section>

      {/* The Core Challenge Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
              <Clock className="w-3.5 h-3.5" />
              <span>The Origin of Saviora</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Reality of the 2-Minute Consultation
            </h2>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                In high-density outpatient departments throughout developing economies, an average doctor sees between 40 and 80 patients in a single morning shift. A comprehensive observational study published in global medical journals confirmed that primary care visits often last around <strong>120 seconds</strong>.
              </p>
              <p>
                Doctors make astute, lifesaving diagnoses in that limited window. But explaining how to take three medications with differing food requirements, recognizing hypoglycemia, or understanding dietary salt restrictions takes at least 10 to 15 minutes.
              </p>
              <p>
                The result? Up to 80% of instructions are forgotten by the time the patient leaves the clinic building. Saviora was built to solve this exact communication breakdown.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Research Finding 1</div>
              <h4 className="text-base font-bold text-white">The Ebbinghaus Forgetting Curve in OPD</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Patients under clinical stress retain less than 20% of spoken medical instructions 48 hours after a consultation unless reinforced in their primary spoken language.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Research Finding 2</div>
              <h4 className="text-base font-bold text-white">Chronic Adherence Breakdown</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                More than 50% of Type 2 diabetes and hypertension patients abandon therapy or titrate their own medication because nobody answered their early queries about minor side-effects.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">The Saviora Answer</div>
              <h4 className="text-base font-bold text-white">Clinician-Guided Intelligence</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero typing overhead for doctors. Automatic conversion of clinical regimens into patient-friendly WhatsApp education leaflets and safe, doctor-supervised AI follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Core Values</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Our Clinical & Engineering Creed</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Clinician Primacy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never bypass the doctor. Technology must amplify the clinician's authority and save them time, never generate medical hypotheses without physician review.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Health Literacy for All</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Medicine should not require a medical degree to understand. We write at a 6th-grade comprehension level in regional languages so every grandmother, parent, and child understands their therapy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Deterministic Safety</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We forbid generic probabilistic medical guessing. All patient guidance is anchored strictly to the doctor's chart and validated against peer-reviewed pharmacopeia.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Clinical Advisory Board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Leadership & Advisory</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Guided by Veteran Clinicians</h2>
          <p className="text-xs text-slate-500">Multidisciplinary leaders spanning internal medicine, public health, cardiology and distributed software systems.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl mx-auto">
              AR
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Dr. Ananya Rao, MD</div>
              <div className="text-xs text-blue-600 font-medium">Chief Medical Officer</div>
              <div className="text-[11px] text-slate-400 mt-1">Former Head of Internal Medicine · AIIMS Fellow</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mx-auto">
              SK
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Dr. Suresh Kulkarni, MS, MCh</div>
              <div className="text-xs text-emerald-600 font-medium">Clinical Director, Surgery & Post-Op</div>
              <div className="text-[11px] text-slate-400 mt-1">Senior Orthopedic Surgeon · 22+ Years Practice</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl mx-auto">
              VM
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Vikram Mehta</div>
              <div className="text-xs text-purple-600 font-medium">Chief Technology Officer</div>
              <div className="text-[11px] text-slate-400 mt-1">Healthcare Systems Architect · Ex-Epic & Cerner</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl mx-auto">
              PN
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Dr. Priya Nair, MD, MPH</div>
              <div className="text-xs text-amber-600 font-medium">Head of Health Economics & Adherence</div>
              <div className="text-[11px] text-slate-400 mt-1">Chronic Care Health Systems Researcher</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 pt-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Partner with Saviora to Elevate Clinical Adherence
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Whether you run an independent practice or lead a multi-hospital outpatient network, we welcome the opportunity to demonstrate our clinical outcomes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onRequestDemo}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm"
          >
            Schedule a Meeting
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-sm"
          >
            Contact Inquiries
          </button>
        </div>
      </section>

    </div>
  );
};
