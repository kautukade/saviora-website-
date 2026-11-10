import React from 'react';
import { RoutePath } from '../types';
import { ShieldCheck, Lock, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
          <ShieldCheck className="w-4 h-4 text-sky-600" />
          <span>Patient Privacy & Healthcare Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Saviora Health Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Effective Date: January 1, 2026 · Compliant with HIPAA, ABDM, GDPR, and ISO 27001
        </p>
      </div>

      {/* Highlights */}
      <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200/60 space-y-3 text-xs text-blue-950">
        <h3 className="font-bold text-sm">Key Privacy Commitments to Clinicians and Patients</h3>
        <ul className="space-y-1.5 pl-4 list-disc text-blue-900">
          <li><strong>Zero Generative AI Model Training:</strong> We never train publicly available artificial intelligence models on patient records, prescriptions, or private clinical charts.</li>
          <li><strong>Patient PHI Segregation:</strong> All Protected Health Information (PHI) is encrypted at rest using AES-256 and in transit via TLS 1.3.</li>
          <li><strong>Total Data Ownership:</strong> The treating clinician and the patient retain 100% legal ownership of their health information.</li>
          <li><strong>Patient Revocation Rights:</strong> Patients can revoke clinic data access or delete their health locker archives at any time.</li>
        </ul>
      </div>

      {/* Sections */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            Saviora Health collects information solely to facilitate post-consultation patient education, clinical note generation, and communication between physicians and patients:
          </p>
          <ul className="pl-5 list-disc space-y-1 text-slate-600">
            <li><strong>Clinician Account Information:</strong> Name, medical council registration number, specialty, clinic affiliation, work email, and billing records.</li>
            <li><strong>Patient Outpatient Data:</strong> Demographic information, telephone number for WhatsApp dispatch, prescription notes entered by the attending physician, and patient queries submitted through authorized support channels.</li>
            <li><strong>Audit & Telemetry Logs:</strong> Timestamped records of when education packs were generated, sent, opened, and acknowledged for medicolegal verification.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. How We Use Clinical Data</h2>
          <p>
            We process health data exclusively to:
          </p>
          <ul className="pl-5 list-disc space-y-1 text-slate-600">
            <li>Generate plain-language multilingual patient leaflets and medication schedules as directed by the clinician.</li>
            <li>Deliver scheduled appointment reminders and chronic care adherence prompts via authorized messaging channels.</li>
            <li>Execute automated red-flag symptom triage alerts back to the clinic's designated duty personnel.</li>
          </ul>
          <p className="font-semibold text-slate-900 pt-1">
            We will never sell, monetize, or rent patient data to pharmaceutical manufacturers, advertising brokers, or third-party marketers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. Compliance with HIPAA & ABDM Standards</h2>
          <p>
            In the United States, Saviora operates in strict accordance with the Health Insurance Portability and Accountability Act (HIPAA), executing formal Business Associate Agreements (BAAs) with covered entities.
          </p>
          <p>
            In India, Saviora integrates seamlessly with the Ayushman Bharat Digital Mission (ABDM) guidelines established by the National Health Authority (NHA). Patient consent is recorded using standardized electronic consent artifacts.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">4. Data Security and Storage</h2>
          <p>
            All databases are hosted in ISO 27001-certified, SOC 2 Type II-audited data centers with tenant isolation, immutable audit logging, and automated backups.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">5. Contact Our Data Protection Officer</h2>
          <p>
            For privacy inquiries, audit requests, or to exercise data subject rights:
          </p>
          <p className="text-slate-900 font-medium">
            Data Protection Officer, Saviora Health Inc. <br />
            Email: <a href="mailto:privacy@saviorahealth.com" className="text-blue-600 underline">privacy@saviorahealth.com</a>
          </p>
        </section>

      </div>

    </div>
  );
};
