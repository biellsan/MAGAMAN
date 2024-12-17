import React from 'react';
import { SettingsSection } from './SettingsSection';

export const PlanSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Plan Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your subscription plan and billing cycle
        </p>
      </div>

      <SettingsSection
        title="Current Plan"
        description="Your subscription plan details"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Basic Plan</h3>
              <p className="text-sm text-gray-500">$29/month</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Upgrade plan
            </button>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
};