import React from 'react';
import { SettingsSection } from './SettingsSection';
import { useSettings } from '../hooks/useSettings';

export const StoreSettings: React.FC = () => {
  const { settings, updateSettings } = useSettings();

  return (
    <SettingsSection title="Store Details" description="Your store's address and contact information">
      <div className="space-y-6 pt-6">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Store address
          </label>
          <textarea
            id="address"
            rows={3}
            value={settings.address}
            onChange={(e) => updateSettings({ address: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            value={settings.phone}
            onChange={(e) => updateSettings({ phone: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Contact email
          </label>
          <input
            type="email"
            id="email"
            value={settings.email}
            onChange={(e) => updateSettings({ email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </SettingsSection>
  );
};