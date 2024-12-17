import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900">
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-[400px] bg-white rounded-lg shadow-xl p-8">
          {children}
        </div>
      </div>
    </div>
  );
};