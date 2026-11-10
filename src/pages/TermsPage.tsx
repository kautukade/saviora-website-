import React from 'react';
import { RoutePath } from '../types';
import { FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
          <FileText className="w-4 h-4 text-slate-600" />
          <span>Terms of Service & Clinical Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Saviora Health Terms of Service
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: January 1, 2026 · Standard Commercial & Clinical License Agreement
        </p>
      </div>

      {/* Critical Medical Disclaimer Banner */}
      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-2 text-xs text-amber-950">
        <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700" />
          <span>Important Clinical Notice & Medical Disclaimer</span>
        </div>
        <p className="leading-relaxed">
          Saviora Health provides clinical workflow documentation, translation, structured post-consultation education, and communication assistance software. 
          Saviora is <strong>not an independent diagnostic device</strong> and does not practice medicine. 
          The attending licensed physician maintains sole responsibility and legal authority over all diagnoses, treatment regimens, and clinical decisions.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By creating an account, accessing the Saviora Doctor Workspace, utilizing the Patient Portal, or scheduling patient education dispatches, you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. Authorized Use by Clinicians</h2>
          <p>
            The Saviora Doctor Platform is made available to verified physicians, hospitals, and licensed healthcare institutions. Clinicians warrant that:
          </p>
          <ul className="pl-5 list-disc space-y-1 text-slate-600">
            <li>They possess valid medical registration licenses in good standing in their respective jurisdictions.</li>
            <li>They will independently review generated education packs and clinical leaflets before finalizing dispatches to patients.</li>
            <li>They will maintain emergency contact protocols for their clinical practice.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. SaaS Subscription, Billing, and Cancellations</h2>
          <p>
            Subscription fees are billed according to your selected plan (Starter, Practice Pro, or Health System) on a monthly or annual cadence. 
            All subscriptions may be canceled at any time prior to the next billing cycle. Enterprise contracts are governed by their respective Master Service Agreements (MSAs).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">4. Service Availability & Support SLA</h2>
          <p>
            Saviora targets 99.9% uptime for cloud services. Routine maintenance windows will be announced to practice administrators at least 48 hours in advance during non-peak clinical hours.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">5. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Delaware (for US contracts) and the Republic of India (for South Asian deployments), without regard to conflict of law principles.
          </p>
        </section>

      </div>

    </div>
  );
};
