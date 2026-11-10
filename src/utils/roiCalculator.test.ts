import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateClinicalImpact } from './roiCalculator';

test('Single doctor seeing 40 patients per day with 2 min consultation calculates realistic impact', () => {
  const result = calculateClinicalImpact({
    dailyPatientsPerDoctor: 40,
    consultationMinutes: 2,
    doctorCount: 1,
    chronicPatientPercent: 50,
  });

  // 40 * 24 = 960 monthly encounters
  assert.equal(result.monthlyPatientEncounters, 960);
  assert.ok(result.estimatedRepeatClarificationCalls > 0);
  assert.ok(result.hoursSavedClarifyingPerMonth > 0);
  assert.equal(result.adherenceGainPercentage, 34);
  assert.ok(result.preventedMedicationDropoutsPerYear > 500);
  assert.ok(result.annualValueCreatedUSD > 5000);
});

test('Clinic with 5 doctors scales monthly patient volume proportionally', () => {
  const resultSingle = calculateClinicalImpact({
    dailyPatientsPerDoctor: 30,
    consultationMinutes: 3,
    doctorCount: 1,
    chronicPatientPercent: 40,
  });

  const resultFive = calculateClinicalImpact({
    dailyPatientsPerDoctor: 30,
    consultationMinutes: 3,
    doctorCount: 5,
    chronicPatientPercent: 40,
  });

  assert.equal(resultFive.monthlyPatientEncounters, resultSingle.monthlyPatientEncounters * 5);
  assert.equal(resultFive.hoursSavedClarifyingPerMonth, resultSingle.hoursSavedClarifyingPerMonth * 5);
});
