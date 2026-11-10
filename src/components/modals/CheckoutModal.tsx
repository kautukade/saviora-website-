import React, { useState } from 'react';
import { X, ShieldCheck, Check, Info, CreditCard, ChevronRight, Lock, Building, ArrowUpRight } from 'lucide-react';
import { PlanTier, CheckoutState } from '../../types';
import { calculateSubscriptionTotal, CURRENCY_RATES, ADDON_PRICING } from '../../utils/pricing';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PlanTier;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [seats, setSeats] = useState<number>(selectedPlan.baseSeats);
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'EUR'>('USD');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [addons, setAddons] = useState({
    whatsappDedicatedNumber: true,
    priorityAiPack: false,
    emrIntegrationSupport: false,
  });

  const [checkoutStep, setCheckoutStep] = useState<'review' | 'gateway_handover'>('review');
  const [selectedProvider, setSelectedProvider] = useState<'stripe' | 'razorpay'>('stripe');

  if (!isOpen) return null;

  const checkoutState: CheckoutState = {
    planId: selectedPlan.id,
    billingCycle,
    seats,
    addons,
    couponCode: appliedCoupon,
    currency,
  };

  const totals = calculateSubscriptionTotal(checkoutState);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedCoupon(couponCode);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-sky-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 id="checkout-modal-title" className="text-lg font-bold text-white">Saviora Subscription Checkout</h3>
              <p className="text-xs text-slate-300">Secure enterprise subscription setup & portal provisioning</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {checkoutStep === 'review' ? (
          <div className="p-6 space-y-5 overflow-y-auto">
            {/* Plan Header Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200/80 gap-3">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Selected Clinical Plan</span>
                <h4 className="text-xl font-bold text-slate-900">{selectedPlan.name}</h4>
                <p className="text-xs text-slate-500">{selectedPlan.tagline}</p>
              </div>

              {/* Billing frequency toggle */}
              <div className="flex items-center p-1 bg-white border border-slate-200 rounded-lg shrink-0">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    billingCycle === 'monthly' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    billingCycle === 'annual' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Annual (Save 20%)
                </button>
              </div>
            </div>

            {/* Customization Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Seats selector */}
              <div className="p-4 border border-slate-200 rounded-xl space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Doctor / Clinician Seats
                </label>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSeats(Math.max(selectedPlan.baseSeats, seats - 1))}
                      className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                      disabled={seats <= selectedPlan.baseSeats}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-slate-900 text-base">{seats}</span>
                    <button
                      type="button"
                      onClick={() => setSeats(seats + 1)}
                      className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right text-xs text-slate-500">
                    <div>{selectedPlan.baseSeats} base included</div>
                    {seats > selectedPlan.baseSeats && (
                      <div className="text-blue-600 font-medium">+{seats - selectedPlan.baseSeats} extra seat(s)</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Currency selector */}
              <div className="p-4 border border-slate-200 rounded-xl space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Billing Currency
                </label>
                <div className="grid grid-cols-3 gap-1 pt-1">
                  {(['USD', 'INR', 'EUR'] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setCurrency(curr)}
                      className={`py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                        currency === curr 
                          ? 'border-blue-600 bg-blue-50 text-blue-700' 
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {CURRENCY_RATES[curr].symbol} {curr}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Optional Add-ons */}
            <div className="border border-slate-200 rounded-xl p-4 space-y-3">
              <span className="text-xs font-semibold text-slate-700">Recommended Operational Add-ons</span>
              
              <label className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={addons.whatsappDedicatedNumber}
                  onChange={(e) => setAddons({ ...addons, whatsappDedicatedNumber: e.target.checked })}
                  className="mt-1 rounded-sm text-blue-600 focus:ring-blue-500"
                />
                <div className="flex-1 text-xs">
                  <div className="font-semibold text-slate-900">Dedicated Verified Clinic WhatsApp Number</div>
                  <div className="text-slate-500">Official Meta Green-Tick verified sender with your clinic branding.</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 shrink-0">+$25/mo</div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={addons.priorityAiPack}
                  onChange={(e) => setAddons({ ...addons, priorityAiPack: e.target.checked })}
                  className="mt-1 rounded-sm text-blue-600 focus:ring-blue-500"
                />
                <div className="flex-1 text-xs">
                  <div className="font-semibold text-slate-900">Priority AI Inference Pack (+5,000 queries)</div>
                  <div className="text-slate-500">Sub-second patient question comprehension & voice transcribing.</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 shrink-0">+$40/mo</div>
              </label>
            </div>

            {/* Coupon and Summary */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon code (e.g. SAVIORA10)"
                  className="flex-1 px-3 py-1.5 text-xs border border-slate-200 rounded-lg uppercase"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                >
                  Apply
                </button>
              </form>

              {appliedCoupon && totals.discountUSD > 0 && (
                <div className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Coupon {appliedCoupon} applied! Discount: -${totals.discountUSD}</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="border-t border-slate-200 pt-3 text-xs space-y-1.5 text-slate-600">
                <div className="flex justify-between">
                  <span>Base Plan ({billingCycle})</span>
                  <span>${totals.baseMonthlyRate * (billingCycle === 'annual' ? 12 : 1)}</span>
                </div>
                {totals.extraSeats > 0 && (
                  <div className="flex justify-between">
                    <span>{totals.extraSeats} Additional Seat(s)</span>
                    <span>${totals.extraSeatsMonthly * (billingCycle === 'annual' ? 12 : 1)}</span>
                  </div>
                )}
                {totals.addonsMonthly > 0 && (
                  <div className="flex justify-between">
                    <span>Selected Addons</span>
                    <span>${totals.addonsMonthly * (billingCycle === 'annual' ? 12 : 1)}</span>
                  </div>
                )}
                {totals.discountUSD > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount</span>
                    <span>-${totals.discountUSD}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount Due:</span>
                  <span>{totals.currencySymbol}{totals.finalConverted.toLocaleString()} {totals.currencyCode}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setCheckoutStep('gateway_handover')}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>Proceed to Secure Gateway Handover</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  PCI-DSS Level 1 Encrypted
                </span>
                <span>·</span>
                <span>Cancel Anytime</span>
                <span>·</span>
                <span>Instant Portal Activation</span>
              </div>
            </div>
          </div>
        ) : (
          /* Gateway Handover Step */
          <div className="p-6 space-y-5 overflow-y-auto">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-900 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Production Hosted Checkout Integration Notice</span>
              </div>
              <p className="leading-relaxed">
                As required by Saviora's strict healthcare compliance policies, payment credentials and customer credit card data are <strong>never processed or stored directly on client browser threads</strong>.
              </p>
              <p className="leading-relaxed">
                In this preview deployment, checkout initiates a secure server-side session to the verified payment provider API (Stripe Hosted Checkout / Razorpay Health Gateway).
              </p>
            </div>

            {/* Gateway Selection */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-700">Select Payment Processing Rail</span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProvider('stripe')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedProvider === 'stripe' 
                      ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600' 
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold text-slate-900 text-sm">Stripe Hosted Checkout</div>
                  <div className="text-[11px] text-slate-500">International cards, ACH, SEPA & Apple Pay</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedProvider('razorpay')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedProvider === 'razorpay' 
                      ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600' 
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold text-slate-900 text-sm">Razorpay Healthcare</div>
                  <div className="text-[11px] text-slate-500">UPI, NetBanking, RuPay & Corporate Cards</div>
                </button>
              </div>
            </div>

            {/* Order Review Summary */}
            <div className="p-4 border border-slate-200 rounded-xl text-xs space-y-2">
              <div className="font-semibold text-slate-800">Checkout Session Payload Summary</div>
              <div className="grid grid-cols-2 gap-2 text-slate-600">
                <div>Plan: <strong>{selectedPlan.name}</strong></div>
                <div>Billing: <strong>{billingCycle}</strong></div>
                <div>Seats: <strong>{seats} Clinician(s)</strong></div>
                <div>Total: <strong>{totals.currencySymbol}{totals.finalConverted.toLocaleString()} {totals.currencyCode}</strong></div>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                Post-payment redirect: <code className="bg-slate-100 px-1 py-0.5 rounded-sm">https://app.saviorahealth.com/onboarding?session_id=...</code>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-2">
              <a
                href="https://app.saviorahealth.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Saviora Clinical Onboarding</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setCheckoutStep('review')}
                className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                &larr; Back to Order Details Review
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
