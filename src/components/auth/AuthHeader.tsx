import React from 'react';
import { Store } from 'lucide-react';

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="flex justify-center mb-6">
        <Store className="w-8 h-8 text-green-600" />
      </div>
      <h1 className="text-[32px] font-medium text-gray-900 mb-1">{title}</h1>
      {subtitle && <p className="text-base text-gray-600 mb-8">{subtitle}</p>}
    </>
  );
};