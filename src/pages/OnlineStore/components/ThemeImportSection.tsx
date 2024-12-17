```tsx
import React from 'react';
import { ThemeImporter } from '../../../features/theme-import/components/ThemeImporter';

export const ThemeImportSection: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900">Import Theme</h2>
        <p className="mt-1 text-sm text-gray-500">
          Import a custom Liquid theme to customize your online store
        </p>
      </div>
      <ThemeImporter />
    </div>
  );
};
```