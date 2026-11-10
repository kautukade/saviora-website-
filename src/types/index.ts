export type RoutePath =
  | '/'
  | '/about'
  | '/products'
  | '/products/doctor-platform'
  | '/products/patient-platform'
  | '/products/ai-assistant'
  | '/products/clinical-workflow'
  | '/solutions/doctors'
  | '/solutions/patients'
  | '/technology'
  | '/pricing'
  | '/resources'
  | '/contact'
  | '/privacy'
  | '/terms';

export interface PlanTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPricePerMonth: number;
  popular?: boolean;
  baseSeats: number;
  additionalSeatPrice: number;
  features: string[];
  includedAiCredits: number;
  targetAudience: string;
  comingSoonFeatures?: string[];
}

export interface DemoRequestData {
  fullName: string;
  workEmail: string;
  phoneNumber: string;
  organization: string;
  role: 'doctor' | 'clinic_owner' | 'hospital_admin' | 'partner' | 'other';
  specialty?: string;
  patientVolumeDaily: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
}

export interface CheckoutState {
  planId: string;
  billingCycle: 'monthly' | 'annual';
  seats: number;
  addons: {
    whatsappDedicatedNumber: boolean;
    priorityAiPack: boolean;
    emrIntegrationSupport: boolean;
  };
  couponCode?: string;
  currency: 'USD' | 'INR' | 'EUR';
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Position Paper' | 'Clinical Research' | 'Case Study' | 'Whitepaper' | 'Guide';
  readTime: string;
  publishedDate: string;
  excerpt: string;
  author: string;
  downloadable?: boolean;
  featured?: boolean;
}
