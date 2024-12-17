import { useState, useCallback } from 'react';
import { themeApi } from '../services/api/themeApi';
import { ThemeUploadResponse, ThemeError } from '../types/theme';
import { useToast } from './useToast';

export function useThemeUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const { showToast } = useToast();

  const uploadTheme = useCallback(async (file: File): Promise<ThemeUploadResponse | null> => {
    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      const response = await themeApi.uploadTheme(file);

      clearInterval(progressInterval);
      setUploadProgress(100);

      showToast({
        type: 'success',
        message: 'Theme uploaded successfully!'
      });

      return response;
    } catch (error) {
      let errorMessage = 'Failed to upload theme';
      
      if (error instanceof ThemeError) {
        errorMessage = error.message;
      }

      showToast({
        type: 'error',
        message: errorMessage
      });

      return null;
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  }, [showToast]);

  return {
    uploadTheme,
    isUploading,
    uploadProgress
  };
}