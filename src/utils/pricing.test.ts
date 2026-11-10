import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSubscriptionTotal, PLANS } from './pricing';

test('Starter plan monthly billing with 1 seat calculates correctly', () => {
  const result = calculateSubscriptionTotal({
    planId: 'starter',
    billingCycle: 'monthly',
    seats: 1,
    addons: {
      whatsappDedicatedNumber: false,
      priorityAiPack: false,
      emrIntegrationSupport: false,
    },
    currency: 'USD',
  });

  assert.equal(result.plan.id, 'starter');
  assert.equal(result.baseMonthlyRate, 49);
  assert.equal(result.extraSeats, 0);
  assert.equal(result.subtotalMonthlyUSD, 49);
  assert.equal(result.totalBilledUSD, 49);
  assert.equal(result.finalUSD, 49);
  assert.equal(result.finalConverted, 49);
});

test('Professional plan annual billing applies annual monthly rate and multiplies by 12', () => {
  const result = calculateSubscriptionTotal({
    planId: 'professional',
    billingCycle: 'annual',
    seats: 3,
    addons: {
      whatsappDedicatedNumber: false,
      priorityAiPack: false,
      emrIntegrationSupport: false,
    },
    currency: 'USD',
  });

  assert.equal(result.plan.id, 'professional');
  assert.equal(result.baseMonthlyRate, 99);
  assert.equal(result.extraSeats, 0);
  assert.equal(result.totalBilledUSD, 99 * 12);
  assert.equal(result.finalUSD, 1188);
});

test('Additional seats and addons are computed correctly with coupon discount', () => {
  const result = calculateSubscriptionTotal({
    planId: 'professional',
    billingCycle: 'monthly',
    seats: 5, // 2 extra seats @ $29 = $58
    addons: {
      whatsappDedicatedNumber: true, // +$25
      priorityAiPack: false,
      emrIntegrationSupport: false,
    },
    couponCode: 'SAVIORA10', // 10% off
    currency: 'USD',
  });

  // Base $129 + extra seats $58 + addon $25 = $212
  assert.equal(result.subtotalMonthlyUSD, 212);
  assert.equal(result.discountUSD, 21.2);
  assert.equal(result.finalUSD, 190.8);
});

test('Currency conversion handles INR correctly', () => {
  const result = calculateSubscriptionTotal({
    planId: 'starter',
    billingCycle: 'monthly',
    seats: 1,
    addons: {
      whatsappDedicatedNumber: false,
      priorityAiPack: false,
      emrIntegrationSupport: false,
    },
    currency: 'INR',
  });

  assert.equal(result.currencySymbol, '₹');
  assert.equal(result.finalConverted, 49 * 84);
});
