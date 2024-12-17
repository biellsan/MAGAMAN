import React from 'react';
import { SettingsSection } from './SettingsSection';

export const NotificationsSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <p className="mt-1 text-sm text-gray-500">
          Configure notification preferences
        </p>
      </div>

      <SettingsSection
        title="Notification Settings"
        description="Manage your notification preferences"
      >
        <div className="space-y-4">
          {/* Add notification settings */}
        </div>
      </SettingsSection>
    </div>
  );
};