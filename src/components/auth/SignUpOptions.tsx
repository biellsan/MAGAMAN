import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Apple, Facebook } from 'lucide-react';

export const SignUpOptions: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Create a Shopify account</h1>
        <p className="text-gray-600">One last step before starting your free trial.</p>
      </div>

      <div className="space-y-3">
        <Link
          to="/register/email"
          className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Mail className="w-5 h-5 mr-3" />
          <span>Sign up with email</span>
        </Link>

        <button className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Apple className="w-5 h-5 mr-3" />
          <span>Sign up with Apple</span>
        </button>

        <button className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Facebook className="w-5 h-5 mr-3 text-[#1877F2]" />
          <span>Sign up with Facebook</span>
        </button>

        <button className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-3" />
          <span>Sign up with Google</span>
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Already have a Shopify account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-700">
            Log in
          </Link>
        </p>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          By proceeding, you agree to the{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700">
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};