import React, { useState } from 'react';
import { RoutePath } from '../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Send, 
  Calendar, 
  MessageSquare, 
  Building2,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onRequestDemo }) => {
  const [inquiryType, setInquiryType] = useState<'demo' | 'sales' | 'partnership'>('sales');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.organization.trim()) errs.organization = 'Clinic or Organization name is required';
    if (!formData.message.trim()) errs.message = 'Please provide details on your inquiry';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Connect with Saviora</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let's Elevate Your Outpatient Care Together
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Speak with our clinical solutions specialists, schedule an on-site hospital trial, or discuss enterprise EMR integrations.
        </p>
      </section>

      {/* Main Form & Contact Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Direct CTAs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Clinical Triage & Inquiries</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our clinical solutions team includes practicing healthcare administrators ready to review your OPD throughput and current patient follow-up bottlenecks.
              </p>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email Us Directly</div>
                    <a href="mailto:contact@saviorahealth.com" className="text-sky-400 hover:text-sky-300">
                      contact@saviorahealth.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Verified WhatsApp Desk</div>
                    <div className="text-slate-400">+91 (80) 4567-8900 (Mon-Sat, 9 AM - 7 PM IST)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-600/30 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Operational Hubs</div>
                    <div className="text-slate-400">Bengaluru Innovation Corridor, India</div>
                    <div className="text-slate-400">Delaware Corporate HQ, USA</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div>✓ Response within 4 business hours</div>
                <div>✓ Covered by mutual Non-Disclosure Agreement (NDA)</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 space-y-3">
              <h4 className="font-bold text-sm text-blue-950 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Prefer a Live Zoom or Google Meet?</span>
              </h4>
              <p className="text-xs text-blue-800 leading-relaxed">
                You can pick an exact 25-minute calendar slot right now for your practice or hospital team.
              </p>
              <button
                type="button"
                onClick={onRequestDemo}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
              >
                Schedule Calendar Slot &rarr;
              </button>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-md p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Message Received</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A Saviora Clinical Solutions representative will reach out to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', organization: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inquiry Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Inquiry Nature
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setInquiryType('sales')}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                        inquiryType === 'sales' 
                          ? 'border-blue-600 bg-blue-50 text-blue-700' 
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Clinic Sales
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('demo')}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                        inquiryType === 'demo' 
                          ? 'border-blue-600 bg-blue-50 text-blue-700' 
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Hospital Pilot
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('partnership')}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                        inquiryType === 'partnership' 
                          ? 'border-blue-600 bg-blue-50 text-blue-700' 
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Partnership / EMR
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Preeti Deshmukh"
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="preeti@apollohealth.org"
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 00000"
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Hospital / Clinic / Organization *
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Deshmukh Heart & Diabetes Clinic"
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 ${
                        errors.organization ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.organization && <p className="text-[11px] text-red-500 mt-1">{errors.organization}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    How can we assist your clinical team? *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We run a 4-doctor polyclinic seeing 150 patients/day. We want to automate post-consultation WhatsApp instructions in Hindi and Marathi..."
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Clinical Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
