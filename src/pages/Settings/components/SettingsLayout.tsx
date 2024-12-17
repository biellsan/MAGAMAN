import React from 'react';
import { SettingsTabs } from './SettingsTabs';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full bg-gray-50">
      <div className="w-64 border-r border-gray-200 bg-white">
        <SettingsTabs />
      </div>
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  );
};