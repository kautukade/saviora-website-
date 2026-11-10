export interface RoiInputs {
  dailyPatientsPerDoctor: number;
  consultationMinutes: number;
  doctorCount: number;
  chronicPatientPercent: number; // e.g. 45%
}

export interface RoiResults {
  monthlyPatientEncounters: number;
  estimatedRepeatClarificationCalls: number;
  hoursSavedClarifyingPerMonth: number;
  adherenceGainPercentage: number;
  preventedMedicationDropoutsPerYear: number;
  annualValueCreatedUSD: number;
}

export function calculateClinicalImpact(inputs: RoiInputs): RoiResults {
  const workingDaysPerMonth = 24;
  const monthlyPatientsPerDoctor = inputs.dailyPatientsPerDoctor * workingDaysPerMonth;
  const monthlyPatientEncounters = monthlyPatientsPerDoctor * inputs.doctorCount;

  // Traditional clinic: 30% of patients call back or are confused about dosage/side effects
  // With 2-min consultation, recall is poor (~40% lost)
  const baselineConfusionRate = inputs.consultationMinutes <= 3 ? 0.35 : inputs.consultationMinutes <= 5 ? 0.25 : 0.15;
  const estimatedRepeatClarificationCalls = Math.round(monthlyPatientEncounters * baselineConfusionRate);

  // Each unnecessary clarification call costs staff/doctor ~6 minutes (0.1 hours)
  // Saviora cuts confusion by 75% through automated multi-lingual structured leaflets + AI Q&A
  const callsSavedPerMonth = estimatedRepeatClarificationCalls * 0.75;
  const hoursSavedClarifyingPerMonth = Math.round(callsSavedPerMonth * 0.1);

  // Chronic patients adherence jump:
  // Baseline adherence ~48%, Saviora raises it by ~28% relative jump
  const chronicMonthly = monthlyPatientEncounters * (inputs.chronicPatientPercent / 100);
  const preventedMedicationDropoutsPerYear = Math.round(chronicMonthly * 12 * 0.22);

  // Adherence gain percentage
  const adherenceGainPercentage = inputs.consultationMinutes <= 3 ? 34 : 26;

  // Estimated economic value created per year (reduced unbilled phone support + improved retention)
  const staffHourCost = 35; // USD average blended
  const annualStaffSaving = hoursSavedClarifyingPerMonth * 12 * staffHourCost;
  const retentionValue = preventedMedicationDropoutsPerYear * 15; // retention & timely lab test value
  const annualValueCreatedUSD = Math.round(annualStaffSaving + retentionValue);

  return {
    monthlyPatientEncounters,
    estimatedRepeatClarificationCalls,
    hoursSavedClarifyingPerMonth,
    adherenceGainPercentage,
    preventedMedicationDropoutsPerYear,
    annualValueCreatedUSD,
  };
}
