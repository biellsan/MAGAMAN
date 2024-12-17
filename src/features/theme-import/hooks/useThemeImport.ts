import { useState, useCallback } from 'react';
import { validateTheme } from '../utils/themeValidator';
import { importThemeFiles } from '../services/themeImportService';
import { useToast } from '../../../hooks/useToast';

export const useThemeImport = () => {
  const [isImporting, setIsImporting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const { showToast } = useToast();

  const importTheme = useCallback(async (file: File) => {
    setValidationErrors([]);
    
    // Validate theme structure
    const errors = await validateTheme(file);
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsImporting(true);
    try {
      await importThemeFiles(file);
      showToast({
        type: 'success',
        message: 'Theme imported successfully!'
      });
    } catch (error) {
      showToast({
        type: 'error',
        message: 'Failed to import theme. Please try again.'
      });
    } finally {
      setIsImporting(false);
    }
  }, [showToast]);

  return {
    importTheme,
    isImporting,
    validationErrors
  };
};