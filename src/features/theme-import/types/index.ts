export interface ThemeImportError {
  code: string;
  message: string;
}

export interface ThemeValidationResult {
  isValid: boolean;
  errors: ThemeImportError[];
}

export interface ThemeFile {
  path: string;
  content: string;
}

export interface ThemeImportProgress {
  status: 'idle' | 'validating' | 'uploading' | 'processing' | 'complete' | 'error';
  progress: number;
  message?: string;
}