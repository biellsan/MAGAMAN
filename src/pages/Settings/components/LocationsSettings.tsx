import React from 'react';
import { SettingsSection } from './SettingsSection';

export const LocationsSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Locations</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your store locations
        </p>
      </div>

      <SettingsSection
        title="Store Locations"
        description="Add and manage store locations"
      >
        <div className="space-y-4">
          {/* Add location management */}
        </div>
      </SettingsSection>
    </div>
  );
};