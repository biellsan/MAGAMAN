import React from 'react';
import { SettingsSection } from './SettingsSection';

export const ShippingSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Shipping & Delivery</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage shipping zones and delivery options
        </p>
      </div>

      <SettingsSection
        title="Shipping Zones"
        description="Configure shipping rates and zones"
      >
        <div className="space-y-4">
          {/* Add shipping configuration */}
        </div>
      </SettingsSection>
    </div>
  );
};