import React, { useState } from 'react';
import { RoutePath, PlanTier } from '../types';
import { PLANS, CURRENCY_RATES } from '../utils/pricing';
import { CheckoutModal } from '../components/modals/CheckoutModal';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  CreditCard, 
  Building2,
  Calendar
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (path: RoutePath) => void;
  onRequestDemo: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onRequestDemo }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'EUR'>('USD');
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<PlanTier | null>(null);

  const currencyInfo = CURRENCY_RATES[currency];

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currencyInfo.rate);
    return `${currencyInfo.symbol}${converted.toLocaleString()}`;
  };

  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Transparent SaaS Pricing</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Invest in Patient Retention & Clinical Peace of Mind
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Predictable pricing with zero hidden implementation charges. Switch billing frequency or cancel anytime.
        </p>

        {/* Toggles: Billing Cycle & Currency */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* Annual / Monthly Toggle */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                billingCycle === 'annual' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-blue-500 text-white px-1.5 py-0.2 rounded-full">Save 20%</span>
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
            {(['USD', 'INR', 'EUR'] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setCurrency(curr)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  currency === curr ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Plan Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {PLANS.map((plan) => {
            const isAnnual = billingCycle === 'annual';
            const priceMonthly = isAnnual ? plan.annualPricePerMonth : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  isPopular 
                    ? 'bg-slate-900 text-white shadow-2xl border-2 border-blue-500 ring-4 ring-blue-500/10' 
                    : 'bg-white text-slate-900 shadow-md border border-slate-200/90'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        {formatPrice(priceMonthly)}
                      </span>
                      <span className={`text-xs ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                        / seat / mo
                      </span>
                    </div>
                    <div className={`text-[11px] mt-1 ${isPopular ? 'text-blue-300' : 'text-blue-600'}`}>
                      {isAnnual ? 'Billed annually · Includes 20% discount' : 'Billed monthly · Cancel anytime'}
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl text-xs space-y-1 ${
                    isPopular ? 'bg-slate-800 border border-slate-700 text-slate-300' : 'bg-slate-50 border border-slate-100 text-slate-600'
                  }`}>
                    <div>Base seats included: <strong>{plan.baseSeats} Clinician(s)</strong></div>
                    <div>Additional seats: <strong>{formatPrice(plan.additionalSeatPrice)}/mo each</strong></div>
                    <div>AI Patient Queries: <strong>{plan.includedAiCredits.toLocaleString()} credits/mo</strong></div>
                  </div>

                  {/* Included features */}
                  <div className="space-y-3 pt-2">
                    <div className={`text-xs font-bold uppercase tracking-wider ${isPopular ? 'text-slate-400' : 'text-slate-400'}`}>
                      What's Included
                    </div>
                    <ul className="space-y-2 text-xs">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-sky-400' : 'text-blue-600'}`} />
                          <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coming Soon Features Clearly Tagged */}
                  {plan.comingSoonFeatures && plan.comingSoonFeatures.length > 0 && (
                    <div className="space-y-2 pt-3 border-t border-slate-200/40">
                      <div className="text-[10px] font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Upcoming in Future Updates (Coming Soon)</span>
                      </div>
                      <ul className="space-y-1 text-[11px] opacity-75">
                        {plan.comingSoonFeatures.map((csf, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            <span>{csf}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                {/* Subscribe CTA */}
                <div className="pt-8 space-y-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPlanForCheckout(plan)}
                    className={`w-full py-3 px-4 font-semibold text-xs rounded-xl shadow-sm transition-all active:scale-[0.99] flex items-center justify-center gap-2 ${
                      isPopular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Select & Review {plan.name}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onRequestDemo}
                    className={`w-full py-2 text-xs font-medium text-center transition-colors ${
                      isPopular ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Or Schedule 1-on-1 Walkthrough
                  </button>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* Enterprise Custom Quotes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900">Need Custom Hospital Deployment or On-Premises Hosting?</h4>
            <p className="text-xs text-slate-500">We work directly with hospital CIOs, medical directors, and government health authorities.</p>
          </div>
          <button
            onClick={onRequestDemo}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shrink-0 shadow-sm"
          >
            Speak to Enterprise Sales &rarr;
          </button>
        </div>
      </section>

      {/* Hosted Checkout Modal */}
      {selectedPlanForCheckout && (
        <CheckoutModal
          isOpen={true}
          selectedPlan={selectedPlanForCheckout}
          onClose={() => setSelectedPlanForCheckout(null)}
        />
      )}

    </div>
  );
};
