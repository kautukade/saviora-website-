import React, { useState } from 'react';
import { X, Calendar, CheckCircle, Clock, Stethoscope, Building2, User, Mail, Phone } from 'lucide-react';
import { DemoRequestData } from '../../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, initialRole }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<DemoRequestData>({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    organization: '',
    role: (initialRole as any) || 'doctor',
    specialty: 'Internal Medicine / General Practice',
    patientVolumeDaily: '30-50 patients/day',
    preferredDate: '',
    preferredTime: '10:00 AM - 11:00 AM',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      newErrors.workEmail = 'Please provide a valid work email';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone/WhatsApp number is required for demo link';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Hospital or Clinic name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // In production, posts to /api/demo-request
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-sky-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 id="demo-modal-title" className="text-lg font-bold text-white">Schedule a Live Clinical Demo</h3>
              <p className="text-xs text-slate-300">See how Saviora transforms your 2-minute OPD consultations</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4 overflow-y-auto">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Demo Scheduled Successfully</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>Dr./Director {formData.fullName}</strong>. A Saviora Clinical Solutions Specialist will meet you on{' '}
              <span className="font-semibold text-slate-900">{formData.preferredDate || 'tomorrow'}</span> at{' '}
              <span className="font-semibold text-slate-900">{formData.preferredTime}</span>.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-left text-xs text-slate-600 space-y-1">
              <div><strong>Organization:</strong> {formData.organization}</div>
              <div><strong>Specialty:</strong> {formData.specialty}</div>
              <div><strong>Confirmed Email:</strong> {formData.workEmail}</div>
              <div><strong>Calendar Invite:</strong> Sent with Google Meet & Zoom coordinates</div>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Done & Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Dr. Rajesh Patel"
                    className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 ${
                      errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="doctor@hospital.org"
                    className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 ${
                      errors.workEmail ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.workEmail && <p className="text-[11px] text-red-500 mt-1">{errors.workEmail}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+91 98765 43210 / +1..."
                    className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 ${
                      errors.phoneNumber ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.phoneNumber && <p className="text-[11px] text-red-500 mt-1">{errors.phoneNumber}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Clinic / Hospital Name *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Apex Care Polyclinic"
                    className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 ${
                      errors.organization ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.organization && <p className="text-[11px] text-red-500 mt-1">{errors.organization}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Specialty
                </label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="Internal Medicine / General Practice">Internal Medicine / GP</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Diabetology & Endocrinology">Diabetology & Endocrinology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics & Surgery">Orthopedics & Surgery</option>
                  <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
                  <option value="Multi-specialty Hospital OPD">Multi-specialty OPD</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Daily Patient OPD Volume
                </label>
                <select
                  value={formData.patientVolumeDaily}
                  onChange={(e) => setFormData({ ...formData, patientVolumeDaily: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="Under 20 patients/day">Under 20 patients/day</option>
                  <option value="20-50 patients/day">20-50 patients/day</option>
                  <option value="50-100 patients/day">50-100 patients/day</option>
                  <option value="100+ patients/day">100+ patients/day (High Volume)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Time Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                  <option value="04:30 PM - 05:30 PM">04:30 PM - 05:30 PM (Post OPD)</option>
                  <option value="08:00 PM - 09:00 PM">08:00 PM - 09:00 PM (Evening)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Confirm Demo Reservation</span>
                <span>&rarr;</span>
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                No credit card required · 25-minute tailored clinical walkthrough · NDA protected
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
