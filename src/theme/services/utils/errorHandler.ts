import { ThemeError } from '../../types/theme';

export async function handleApiError(response: Response): Promise<never> {
  let errorMessage: string;
  
  try {
    const errorData = await response.json();
    errorMessage = errorData.message || errorData.error || 'An unknown error occurred';
  } catch {
    errorMessage = `HTTP error ${response.status}: ${response.statusText}`;
  }

  switch (response.status) {
    case 400:
      throw new ThemeError('VALIDATION_ERROR', errorMessage);
    case 401:
      throw new ThemeError('AUTH_ERROR', 'Authentication required');
    case 413:
      throw new ThemeError('FILE_SIZE_ERROR', 'Theme file is too large');
    case 415:
      throw new ThemeError('FILE_TYPE_ERROR', 'Invalid file type');
    case 429:
      throw new ThemeError('RATE_LIMIT_ERROR', 'Too many requests. Please try again later');
    case 500:
      throw new ThemeError('SERVER_ERROR', 'Server error. Please try again later');
    default:
      throw new ThemeError('UNKNOWN_ERROR', errorMessage);
  }
}