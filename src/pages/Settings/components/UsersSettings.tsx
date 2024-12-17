import React from 'react';
import { SettingsSection } from './SettingsSection';
import { UserPlus } from 'lucide-react';

export const UsersSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Users & Permissions</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage user access and permissions
        </p>
      </div>

      <SettingsSection
        title="Team Members"
        description="Manage your team members and their roles"
      >
        <div className="space-y-4">
          <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <UserPlus className="w-5 h-5 mr-2" />
            Add team member
          </button>
        </div>
      </SettingsSection>
    </div>
  );
};