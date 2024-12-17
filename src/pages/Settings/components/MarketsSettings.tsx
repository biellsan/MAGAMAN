import React from 'react';
import { SettingsSection } from './SettingsSection';

export const MarketsSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Markets</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your market presence
        </p>
      </div>

      <SettingsSection
        title="Market Configuration"
        description="Configure markets and regions"
      >
        <div className="space-y-4">
          {/* Add market configuration */}
        </div>
      </SettingsSection>
    </div>
  );
};