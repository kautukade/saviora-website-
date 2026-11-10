import { PlanTier, CheckoutState } from '../types';

export const PLANS: PlanTier[] = [
  {
    id: 'starter',
    name: 'Clinical Starter',
    tagline: 'Ideal for independent doctors & solo consultants seeking streamlined patient follow-ups.',
    monthlyPrice: 49,
    annualPricePerMonth: 39,
    baseSeats: 1,
    additionalSeatPrice: 35,
    includedAiCredits: 500,
    targetAudience: 'Solo Practitioners & Independent Clinics',
    features: [
      'Single clinician workspace',
      'OPD queue & digital quick-notes',
      'Multilingual post-consultation leaflets',
      'Automated WhatsApp follow-up summary',
      '500 monthly AI query credits',
      'Basic clinical analytics',
      'Standard email & chat support',
    ],
    comingSoonFeatures: [
      'Voice-to-leaflets clinical dictation',
      'ABDM direct registry linking',
    ],
  },
  {
    id: 'professional',
    name: 'Practice Pro',
    tagline: 'Complete clinical command center for growing clinics, polyclinics, and group practices.',
    monthlyPrice: 129,
    annualPricePerMonth: 99,
    popular: true,
    baseSeats: 3,
    additionalSeatPrice: 29,
    includedAiCredits: 2500,
    targetAudience: 'Polyclinics & Group Practices (2-10 Clinicians)',
    features: [
      'Up to 3 clinicians included (expandable)',
      'Full OPD & IPD discharge manager',
      'Doctor-supervised AI patient engagement',
      'Custom branded patient education packs',
      'Specialist disease templates (Cardiology, Diabetes, Pediatrics)',
      '2,500 monthly AI query credits',
      'WhatsApp Business API integration',
      'Automated chronic adherence reminders',
      'Priority clinical specialist support',
    ],
    comingSoonFeatures: [
      'Multi-branch inventory synchronization',
      'Automated clinical audit reports',
    ],
  },
  {
    id: 'enterprise',
    name: 'Health System',
    tagline: 'Enterprise-grade clinical intelligence for multi-specialty hospitals & healthcare networks.',
    monthlyPrice: 399,
    annualPricePerMonth: 319,
    baseSeats: 10,
    additionalSeatPrice: 25,
    includedAiCredits: 10000,
    targetAudience: 'Hospitals, Multi-Center Networks & Health Systems',
    features: [
      '10 clinicians included (custom unlimited scale)',
      'Hospital EMR/HIS bidirectional bridge',
      'Custom LLM guardrails tuned to hospital clinical formulary',
      'Unlimited patient education dispatches',
      '10,000 monthly AI query credits',
      'Dedicated compliance manager (HIPAA / ABDM)',
      'Enterprise SSO & role-based access control (RBAC)',
      '99.9% uptime SLA with dedicated TAM',
      'Custom on-site clinical workflow training',
    ],
    comingSoonFeatures: [
      'Predictive readmission risk telemetry',
      'Federated hospital-wide research engine',
    ],
  },
];

export const ADDON_PRICING = {
  whatsappDedicatedNumber: { monthly: 25, annual: 20 },
  priorityAiPack: { monthly: 40, annual: 30 },
  emrIntegrationSupport: { monthly: 90, annual: 75 },
};

export const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1, suffix: 'USD' },
  INR: { symbol: '₹', rate: 84, suffix: 'INR' },
  EUR: { symbol: '€', rate: 0.92, suffix: 'EUR' },
};

export function calculateSubscriptionTotal(state: CheckoutState) {
  const plan = PLANS.find((p) => p.id === state.planId) || PLANS[1];
  const isAnnual = state.billingCycle === 'annual';
  const baseMonthlyRate = isAnnual ? plan.annualPricePerMonth : plan.monthlyPrice;

  // Extra seats beyond base
  const extraSeats = Math.max(0, state.seats - plan.baseSeats);
  const extraSeatsMonthly = extraSeats * plan.additionalSeatPrice;

  // Addons
  let addonsMonthly = 0;
  if (state.addons.whatsappDedicatedNumber) {
    addonsMonthly += isAnnual
      ? ADDON_PRICING.whatsappDedicatedNumber.annual
      : ADDON_PRICING.whatsappDedicatedNumber.monthly;
  }
  if (state.addons.priorityAiPack) {
    addonsMonthly += isAnnual
      ? ADDON_PRICING.priorityAiPack.annual
      : ADDON_PRICING.priorityAiPack.monthly;
  }
  if (state.addons.emrIntegrationSupport) {
    addonsMonthly += isAnnual
      ? ADDON_PRICING.emrIntegrationSupport.annual
      : ADDON_PRICING.emrIntegrationSupport.monthly;
  }

  const subtotalMonthlyUSD = baseMonthlyRate + extraSeatsMonthly + addonsMonthly;

  // Annual billing discount applies to 12 months
  const totalBilledUSD = isAnnual ? subtotalMonthlyUSD * 12 : subtotalMonthlyUSD;

  // Coupon discount
  let discountUSD = 0;
  if (state.couponCode?.trim().toUpperCase() === 'SAVIORA10') {
    discountUSD = Math.round(totalBilledUSD * 0.1 * 100) / 100;
  } else if (state.couponCode?.trim().toUpperCase() === 'CLINIC20') {
    discountUSD = Math.round(totalBilledUSD * 0.2 * 100) / 100;
  }

  const finalUSD = Math.round(Math.max(0, totalBilledUSD - discountUSD) * 100) / 100;
  const currencyInfo = CURRENCY_RATES[state.currency];
  const finalConverted = Math.round(finalUSD * currencyInfo.rate);

  return {
    plan,
    isAnnual,
    baseMonthlyRate,
    extraSeats,
    extraSeatsMonthly,
    addonsMonthly,
    subtotalMonthlyUSD,
    totalBilledUSD,
    discountUSD,
    finalUSD,
    finalConverted,
    currencySymbol: currencyInfo.symbol,
    currencyCode: state.currency,
  };
}
