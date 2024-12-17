import React from 'react';
import { SettingsSection } from './SettingsSection';
import { CreditCard } from 'lucide-react';

export const BillingSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Billing Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your billing information and payment methods
        </p>
      </div>

      <SettingsSection
        title="Payment Methods"
        description="Manage your payment methods"
      >
        <div className="space-y-4">
          <div className="flex items-center p-4 border rounded-lg">
            <CreditCard className="w-6 h-6 text-gray-400 mr-4" />
            <div>
              <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-500">Expires 12/24</p>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Add payment method
          </button>
        </div>
      </SettingsSection>
    </div>
  );
};