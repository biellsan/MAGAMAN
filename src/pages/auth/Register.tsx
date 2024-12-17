import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignUpOptions } from '../../components/auth/SignUpOptions';
import { EmailSignUpForm } from '../../components/auth/EmailSignUpForm';
import { AuthLayout } from '../../components/auth/AuthLayout';

export const Register: React.FC = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route index element={<SignUpOptions />} />
        <Route path="email" element={<EmailSignUpForm />} />
      </Routes>
    </AuthLayout>
  );
};