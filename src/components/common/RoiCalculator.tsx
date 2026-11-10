import React, { useState } from 'react';
import { calculateClinicalImpact, RoiInputs } from '../../utils/roiCalculator';
import { Clock, TrendingUp, HeartHandshake, PhoneCall, DollarSign, Stethoscope } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<RoiInputs>({
    dailyPatientsPerDoctor: 40,
    consultationMinutes: 2,
    doctorCount: 3,
    chronicPatientPercent: 50,
  });

  const results = calculateClinicalImpact(inputs);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-2">
          <Stethoscope className="w-4 h-4" />
          <span>Interactive Clinical Impact & ROI Calculator</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Quantify the Value of Extending the 2-Minute Consultation
        </h3>
        <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
          See how structured multilingual leaflets and clinician-guided AI reduce non-adherence, unbilled callbacks, and hospital readmissions across your outpatient volume.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
        
        {/* Sliders on Left */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Daily Patients */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
              <label htmlFor="daily-patients">Daily Patients per Clinician</label>
              <span className="text-blue-600 font-bold bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                {inputs.dailyPatientsPerDoctor} patients/day
              </span>
            </div>
            <input
              id="daily-patients"
              type="range"
              min="10"
              max="100"
              step="5"
              value={inputs.dailyPatientsPerDoctor}
              onChange={(e) => setInputs({ ...inputs, dailyPatientsPerDoctor: Number(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>10 (Low volume)</span>
              <span>40 (Avg OPD)</span>
              <span>100 (Max peak)</span>
            </div>
          </div>

          {/* Consultation Length */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
              <label htmlFor="consult-time">Average Consultation Duration</label>
              <span className="text-blue-600 font-bold bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                {inputs.consultationMinutes} minutes
              </span>
            </div>
            <input
              id="consult-time"
              type="range"
              min="1.5"
              max="15"
              step="0.5"
              value={inputs.consultationMinutes}
              onChange={(e) => setInputs({ ...inputs, consultationMinutes: Number(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span className="text-amber-600 font-medium">1.5m (India/Asia High-Volume Mean)</span>
              <span>7m</span>
              <span>15m</span>
            </div>
          </div>

          {/* Number of Clinicians */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
              <label htmlFor="doctor-count">Number of Clinicians in Practice</label>
              <span className="text-blue-600 font-bold bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                {inputs.doctorCount} Doctors
              </span>
            </div>
            <input
              id="doctor-count"
              type="range"
              min="1"
              max="25"
              step="1"
              value={inputs.doctorCount}
              onChange={(e) => setInputs({ ...inputs, doctorCount: Number(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>1 (Solo)</span>
              <span>5 (Clinic)</span>
              <span>25 (Hospital Dept)</span>
            </div>
          </div>

          {/* Chronic patients % */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
              <label htmlFor="chronic-percent">Chronic Disease Share (Diabetes, HTN, Cardiac)</label>
              <span className="text-blue-600 font-bold bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                {inputs.chronicPatientPercent}%
              </span>
            </div>
            <input
              id="chronic-percent"
              type="range"
              min="20"
              max="80"
              step="5"
              value={inputs.chronicPatientPercent}
              onChange={(e) => setInputs({ ...inputs, chronicPatientPercent: Number(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>20%</span>
              <span>50% (Typical)</span>
              <span>80% (Specialty)</span>
            </div>
          </div>

        </div>

        {/* Dynamic Metric Cards on Right */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {results.hoursSavedClarifyingPerMonth} hrs
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Clinical Staff Hours Saved/Month</div>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                Eliminates ~{results.estimatedRepeatClarificationCalls.toLocaleString()} unbilled callbacks about dosage, food timings, and directions.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                +{results.adherenceGainPercentage}%
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Patient Adherence Uplift</div>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                Patients receive instructions in their mother tongue with clear medication schedule cards.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {results.preventedMedicationDropoutsPerYear.toLocaleString()}
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Prevented Treatment Dropouts/Year</div>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                Chronic patients retained on active therapy rather than stopping due to lack of comprehension.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-blue-900 text-white flex flex-col justify-between shadow-md">
            <div className="w-10 h-10 rounded-lg bg-blue-800 text-sky-300 flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                ${results.annualValueCreatedUSD.toLocaleString()}
              </div>
              <div className="text-xs font-semibold text-sky-200 mt-1">Est. Annual Value Created</div>
              <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                Measured by staff time reclaimed, improved follow-up visit retention, and lab adherences.
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <span>Based on clinical health literacy data: 40-80% of verbal consult instructions forgotten within 30 minutes.</span>
        <span className="font-semibold text-slate-700">Calculated over {results.monthlyPatientEncounters.toLocaleString()} monthly consultations</span>
      </div>

    </div>
  );
};
