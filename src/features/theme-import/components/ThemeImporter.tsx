import React from 'react';
import { ThemeDropZone } from './ThemeDropZone';
import { ThemeValidationInfo } from './ThemeValidationInfo';
import { useThemeImport } from '../hooks/useThemeImport';

export const ThemeImporter: React.FC = () => {
  const { importTheme, isImporting, validationErrors } = useThemeImport();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <ThemeValidationInfo />
      <ThemeDropZone 
        onFileSelect={importTheme}
        isImporting={isImporting}
        errors={validationErrors}
      />
    </div>
  );
};