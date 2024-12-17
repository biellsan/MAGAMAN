import React from 'react';
import { SettingsSection } from './SettingsSection';

export const AppsSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Apps & Sales Channels</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your apps and sales channels
        </p>
      </div>

      <SettingsSection
        title="Installed Apps"
        description="Manage your installed applications"
      >
        <div className="space-y-4">
          {/* Add app management */}
        </div>
      </SettingsSection>
    </div>
  );
};