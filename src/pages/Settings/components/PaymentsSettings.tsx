import React from 'react';
import { SettingsSection } from './SettingsSection';

export const PaymentsSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Payment Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Configure payment providers and methods
        </p>
      </div>

      <SettingsSection
        title="Payment Providers"
        description="Set up and manage payment providers"
      >
        <div className="space-y-4">
          {/* Add payment provider configuration */}
        </div>
      </SettingsSection>
    </div>
  );
};