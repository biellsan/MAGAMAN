import React from 'react';
import { Link } from 'react-router-dom';

export const AuthFooter: React.FC = () => {
  return (
    <>
      <div className="mt-8">
        <p className="text-sm text-gray-600">
          New to Shopify?{' '}
          <Link to="/register" className="text-blue-600 hover:text-blue-700">
            Get started
          </Link>
        </p>
      </div>

      <div className="mt-8 flex justify-center space-x-4 text-sm text-gray-600">
        <a href="#" className="hover:text-gray-900">Help</a>
        <a href="#" className="hover:text-gray-900">Privacy</a>
        <a href="#" className="hover:text-gray-900">Terms</a>
      </div>
    </>
  );
};