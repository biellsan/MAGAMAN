import { ThemeUploadResponse, ThemeError } from '../../types/theme';
import { handleApiError } from '../utils/errorHandler';
import { validateThemeFile } from '../utils/themeValidator';

const API_ENDPOINTS = {
  UPLOAD: '/api/themes/upload',
  STATUS: '/api/themes/status',
};

export const themeApi = {
  async uploadTheme(file: File): Promise<ThemeUploadResponse> {
    try {
      // Validate file before upload
      const validationError = validateThemeFile(file);
      if (validationError) {
        throw new ThemeError('VALIDATION_ERROR', validationError);
      }

      const formData = new FormData();
      formData.append('theme', file);

      const response = await fetch(API_ENDPOINTS.UPLOAD, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw await handleApiError(response);
      }

      return response.json();
    } catch (error) {
      if (error instanceof ThemeError) {
        throw error;
      }
      throw new ThemeError('UPLOAD_ERROR', 'Failed to upload theme. Please try again.');
    }
  },

  async getUploadStatus(uploadId: string): Promise<ThemeUploadResponse> {
    try {
      const response = await fetch(`${API_ENDPOINTS.STATUS}/${uploadId}`);
      
      if (!response.ok) {
        throw await handleApiError(response);
      }

      return response.json();
    } catch (error) {
      throw new ThemeError('STATUS_ERROR', 'Failed to get upload status.');
    }
  },
};