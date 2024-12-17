import React from 'react';
import { SettingsSection } from './SettingsSection';

export const TaxesSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Taxes & Duties</h1>
        <p className="mt-1 text-sm text-gray-500">
          Configure tax rates and settings
        </p>
      </div>

      <SettingsSection
        title="Tax Configuration"
        description="Set up tax rates and rules"
      >
        <div className="space-y-4">
          {/* Add tax configuration */}
        </div>
      </SettingsSection>
    </div>
  );
};