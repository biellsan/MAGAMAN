import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SettingsLayout } from './components/SettingsLayout';
import { GeneralSettings } from './components/GeneralSettings';
import { PlanSettings } from './components/PlanSettings';
import { BillingSettings } from './components/BillingSettings';
import { UsersSettings } from './components/UsersSettings';
import { PaymentsSettings } from './components/PaymentsSettings';
import { CheckoutSettings } from './components/CheckoutSettings';
import { ShippingSettings } from './components/ShippingSettings';
import { TaxesSettings } from './components/TaxesSettings';
import { LocationsSettings } from './components/LocationsSettings';
import { MarketsSettings } from './components/MarketsSettings';
import { AppsSettings } from './components/AppsSettings';
import { NotificationsSettings } from './components/NotificationsSettings';
import { PrivacySettings } from './components/PrivacySettings';

export const Settings: React.FC = () => {
  return (
    <SettingsLayout>
      <Routes>
        <Route index element={<GeneralSettings />} />
        <Route path="plan" element={<PlanSettings />} />
        <Route path="billing" element={<BillingSettings />} />
        <Route path="users" element={<UsersSettings />} />
        <Route path="payments" element={<PaymentsSettings />} />
        <Route path="checkout" element={<CheckoutSettings />} />
        <Route path="shipping" element={<ShippingSettings />} />
        <Route path="taxes" element={<TaxesSettings />} />
        <Route path="locations" element={<LocationsSettings />} />
        <Route path="markets" element={<MarketsSettings />} />
        <Route path="apps" element={<AppsSettings />} />
        <Route path="notifications" element={<NotificationsSettings />} />
        <Route path="privacy" element={<PrivacySettings />} />
      </Routes>
    </SettingsLayout>
  );
};