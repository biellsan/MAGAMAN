import React from 'react';
import { Info } from 'lucide-react';

export const ThemeValidationInfo: React.FC = () => {
  return (
    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
      <div className="flex items-start">
        <Info className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
        <div>
          <h3 className="text-sm font-medium text-blue-900 mb-1">Theme Requirements</h3>
          <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
            <li>Must be a valid Shopify Liquid theme</li>
            <li>ZIP file containing theme files</li>
            <li>Required directories: layout/, templates/, sections/, snippets/</li>
            <li>Must include theme.liquid layout file</li>
            <li>Maximum file size: 50MB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};