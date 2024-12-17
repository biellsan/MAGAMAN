export interface ThemeUploadResponse {
  id: string;
  name: string;
  version: string;
  status: ThemeStatus;
  previewUrl?: string;
  errors?: string[];
}

export type ThemeStatus = 'uploading' | 'processing' | 'completed' | 'failed';

export type ThemeErrorType = 
  | 'VALIDATION_ERROR'
  | 'AUTH_ERROR'
  | 'FILE_SIZE_ERROR'
  | 'FILE_TYPE_ERROR'
  | 'RATE_LIMIT_ERROR'
  | 'SERVER_ERROR'
  | 'UPLOAD_ERROR'
  | 'STATUS_ERROR'
  | 'UNKNOWN_ERROR';

export class ThemeError extends Error {
  constructor(
    public type: ThemeErrorType,
    message: string
  ) {
    super(message);
    this.name = 'ThemeError';
  }
}