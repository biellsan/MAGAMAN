import React from 'react';
import { SettingsSection } from './SettingsSection';
import { useSettings } from '../hooks/useSettings';

export const OrderSettings: React.FC = () => {
  const { settings, updateSettings } = useSettings();

  return (
    <SettingsSection title="Order Settings" description="Configure how orders are handled">
      <div className="space-y-6 pt-6">
        <div>
          <label htmlFor="orderPrefix" className="block text-sm font-medium text-gray-700">
            Order number prefix
          </label>
          <input
            type="text"
            id="orderPrefix"
            value={settings.orderPrefix}
            onChange={(e) => updateSettings({ orderPrefix: e.target.value })}
            placeholder="#"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="orderSuffix" className="block text-sm font-medium text-gray-700">
            Order number suffix
          </label>
          <input
            type="text"
            id="orderSuffix"
            value={settings.orderSuffix}
            onChange={(e) => updateSettings({ orderSuffix: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </SettingsSection>
  );
};