import React, { useState } from 'react';
import { SavioraLogo } from './SavioraLogo';
import { 
  Stethoscope, 
  Send, 
  CheckCheck, 
  Languages, 
  FileText, 
  Sparkles, 
  Clock, 
  User, 
  Activity, 
  AlertCircle,
  CheckCircle2,
  Share2
} from 'lucide-react';

interface PatientCase {
  id: string;
  name: string;
  ageGender: string;
  consultTime: string;
  diagnosis: string;
  prescriptionSummary: string[];
  dietRestrictions: string[];
  warningSigns: string[];
  hindiSummary: string;
  gujaratiSummary: string;
  spanishSummary: string;
}

const SAMPLE_PATIENTS: PatientCase[] = [
  {
    id: 'p1',
    name: 'Ramesh Patel',
    ageGender: '54 M',
    consultTime: '10:14 AM (2m 15s)',
    diagnosis: 'Type 2 Diabetes Mellitus + Essential Hypertension',
    prescriptionSummary: [
      'Tab Metformin 500mg — 1 tablet twice daily with meals',
      'Tab Telmisartan 40mg — 1 tablet every morning',
      'Blood sugar log weekly (Fasting & PP)',
    ],
    dietRestrictions: ['Avoid simple sugars & refined carbs', 'Limit salt to <5g/day', '30 min daily brisk walking'],
    warningSigns: ['Dizziness, cold sweat, or blood glucose <70 mg/dL (hypoglycemia)'],
    hindiSummary: 'दवा: मेटफॉर्मिन 500mg भोजन के साथ दिन में दो बार लें। टेल्मिसर्टन 40mg सुबह लें। मीठे और अधिक नमक से परहेज करें। यदि चक्कर आए तो तुरंत डॉक्टर से संपर्क करें।',
    gujaratiSummary: 'દવા: મેટફોર્મિન 500mg જમ્યા પછી દિવસમાં બે વાર. ટેલ્મીસાર્ટન 40mg સવારે. ગળ્યું અને વધુ મીઠું બંધ રાખવું.',
    spanishSummary: 'Medicamentos: Metformina 500mg dos veces al día con comidas. Telmisartán 40mg por la mañana. Evitar azúcares y sal.',
  },
  {
    id: 'p2',
    name: 'Sunita Sharma',
    ageGender: '42 F',
    consultTime: '10:18 AM (1m 55s)',
    diagnosis: 'Acute Bronchitis & Allergic Rhinitis',
    prescriptionSummary: [
      'Tab Azithromycin 500mg — 1 tablet daily for 3 days',
      'Tab Levocetirizine 5mg — 1 tablet at bedtime',
      'Steam inhalation twice daily',
    ],
    dietRestrictions: ['Avoid chilled beverages and direct air-conditioning dust', 'Stay well hydrated with warm water'],
    warningSigns: ['High fever >102°F or breathlessness'],
    hindiSummary: 'अज़ीथ्रोमाइसिन 500mg दिन में 1 बार 3 दिन तक लें। लीवोसिट्रिजिन रात में लें। ठंडा पानी न पिएं। भाप दिन में दो बार लें।',
    gujaratiSummary: 'એઝીથ્રોમાસીન 500mg ૩ દિવસ માટે. રાત્રે લીવોસેટ્રીઝીન. ઠંડા પીણાં ટાળો અને ગરમ પાણીની વરાળ લો.',
    spanishSummary: 'Azitromicina 500mg una vez al día por 3 días. Levocetirizina por la noche. Inhalación de vapor.',
  },
  {
    id: 'p3',
    name: 'Dr. Michael Chen',
    ageGender: '68 M',
    consultTime: '10:22 AM (3m 10s)',
    diagnosis: 'Post-Op Knee Arthroscopy (Day 7 Follow-Up)',
    prescriptionSummary: [
      'Tab Paracetamol 650mg as needed for pain',
      'Active quad isometric exercises 3x daily',
      'Keep dressing dry and clean',
    ],
    dietRestrictions: ['High protein recovery diet', 'Adequate fiber to prevent constipation'],
    warningSigns: ['Calf swelling, increasing redness around portals, or fever'],
    hindiSummary: 'दर्द के लिए पैरासिटामोल 650mg लें। घुटने की कसरत दिन में 3 बार करें। घाव सूखा रखें।',
    gujaratiSummary: 'દુખાવા માટે પેરાસીટામોલ. કસરત દિવસમાં ૩ વખત. ઘા પર પાણી ન લગાવો.',
    spanishSummary: 'Paracetamol para el dolor. Ejercicios de cuádriceps 3 veces al día. Mantener vendaje seco.',
  },
];

export const DoctorWorkspaceSimulator: React.FC = () => {
  const [selectedPatientId, setSelectedPatientId] = useState<string>('p1');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'hi' | 'gu' | 'es'>('en');
  const [dispatched, setDispatched] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const currentPatient = SAMPLE_PATIENTS.find((p) => p.id === selectedPatientId) || SAMPLE_PATIENTS[0];

  const handleLanguageChange = (lang: 'en' | 'hi' | 'gu' | 'es') => {
    setIsGenerating(true);
    setSelectedLanguage(lang);
    setTimeout(() => setIsGenerating(false), 250);
  };

  const handleDispatch = () => {
    setDispatched(true);
    setTimeout(() => {
      // Keep dispatched state active
    }, 2000);
  };

  const getTranslatedSummary = () => {
    if (selectedLanguage === 'hi') return currentPatient.hindiSummary;
    if (selectedLanguage === 'gu') return currentPatient.gujaratiSummary;
    if (selectedLanguage === 'es') return currentPatient.spanishSummary;
    return null;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Application Bar */}
      <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <SavioraLogo size={28} />
          <div>
            <div className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>Saviora Clinical Workspace</span>
              <span className="text-[10px] font-normal text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-sm border border-sky-800/60">
                Live Simulator
              </span>
            </div>
            <div className="text-[11px] text-slate-400">Dr. Ananya Rao, MD · OPD Room 4</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>Avg Consult: <strong>2m 20s</strong></span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-emerald-400">
            <Activity className="w-3.5 h-3.5" />
            <span>Queue Active: 18 seen / 6 waiting</span>
          </div>
        </div>
      </div>

      {/* Simulator Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        
        {/* Left: OPD Patient Queue List */}
        <div className="lg:col-span-4 border-r border-slate-200 bg-slate-50/70 p-3 sm:p-4 space-y-2">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
            Today's OPD Queue
          </div>

          <div className="space-y-1.5">
            {SAMPLE_PATIENTS.map((patient) => {
              const isSelected = patient.id === selectedPatientId;
              return (
                <button
                  key={patient.id}
                  onClick={() => {
                    setSelectedPatientId(patient.id);
                    setDispatched(false);
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all border ${
                    isSelected 
                      ? 'bg-white border-blue-500 shadow-sm ring-1 ring-blue-500' 
                      : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-xs text-slate-900">{patient.name}</div>
                    <span className="text-[10px] text-slate-500">{patient.ageGender}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 truncate mt-0.5">{patient.diagnosis}</div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">
                    <span>{patient.consultTime}</span>
                    <span className="text-emerald-600 font-medium">Completed</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100 text-xs text-blue-900 space-y-1">
            <div className="font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>How it bridges the gap</span>
            </div>
            <p className="text-[11px] text-blue-800 leading-relaxed">
              When a doctor finishes typing or dictating the prescription, Saviora automatically converts clinical jargon into clean, patient-friendly instructions in their preferred home language.
            </p>
          </div>
        </div>

        {/* Right: Active Consultation & Leaflet Engine */}
        <div className="lg:col-span-8 p-4 sm:p-6 flex flex-col justify-between space-y-4">
          
          <div className="space-y-4">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <div>
                <h4 className="text-base font-bold text-slate-900">{currentPatient.name}</h4>
                <p className="text-xs text-slate-500">{currentPatient.diagnosis} · {currentPatient.ageGender}</p>
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                <Languages className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-0.5" />
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    selectedLanguage === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('hi')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    selectedLanguage === 'hi' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  हिन्दी (Hindi)
                </button>
                <button
                  onClick={() => handleLanguageChange('gu')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    selectedLanguage === 'gu' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ગુજરાતી
                </button>
                <button
                  onClick={() => handleLanguageChange('es')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    selectedLanguage === 'es' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Español
                </button>
              </div>
            </div>

            {/* Structured Post-Consultation Patient Leaflet */}
            <div className={`p-4 rounded-xl border transition-all ${
              isGenerating ? 'opacity-50' : 'opacity-100'
            } bg-slate-50/50 border-slate-200`}>
              
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Automated Patient Education Pack
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  Target: 6th-grade literacy level
                </span>
              </div>

              {selectedLanguage !== 'en' && getTranslatedSummary() ? (
                <div className="p-3 bg-amber-50/80 rounded-lg border border-amber-200/60 mb-3 text-xs text-amber-950 font-medium leading-relaxed">
                  {getTranslatedSummary()}
                </div>
              ) : null}

              {/* Prescribed Items in Plain Language */}
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-slate-700 block mb-1">Prescribed Regimen & Timings:</span>
                  <ul className="space-y-1 text-slate-600 pl-4 list-disc">
                    {currentPatient.prescriptionSummary.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-slate-700 block mb-1">Diet & Lifestyle Guidance:</span>
                  <ul className="space-y-1 text-slate-600 pl-4 list-disc">
                    {currentPatient.dietRestrictions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 bg-red-50 rounded-lg border border-red-100 text-red-900">
                  <span className="font-semibold flex items-center gap-1.5 mb-1 text-[11px]">
                    <AlertCircle className="w-3.5 h-3.5 text-red-600" />
                    When to contact clinic immediately:
                  </span>
                  <p className="text-[11px] text-red-800 pl-5">
                    {currentPatient.warningSigns.join(', ')}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Action Bar */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Doctor Review Verified · Clinician in the loop</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {dispatched ? (
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200 text-xs font-semibold">
                  <CheckCheck className="w-4 h-4 text-emerald-600" />
                  <span>Delivered to Patient's WhatsApp (+91 98***)</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleDispatch}
                  className="w-full sm:w-auto py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send 1-Click WhatsApp Leaflet</span>
                </button>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
