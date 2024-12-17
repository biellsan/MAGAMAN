import React from 'react';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { LoginForm } from '../../components/auth/LoginForm';
import { SocialLogin } from '../../components/auth/SocialLogin';
import { AuthFooter } from '../../components/auth/AuthFooter';

export const Login: React.FC = () => {
  return (
    <AuthLayout>
      <AuthHeader 
        title="Log in" 
        subtitle="Continue to Shopify" 
      />
      <LoginForm />
      <SocialLogin />
      <AuthFooter />
    </AuthLayout>
  );
};