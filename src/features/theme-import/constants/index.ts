export const THEME_VALIDATION = {
  MAX_FILE_SIZE: 50 * 1024 * 1024, // 50MB
  REQUIRED_DIRECTORIES: ['layout', 'templates', 'sections', 'snippets'],
  REQUIRED_FILES: ['layout/theme.liquid'],
  ALLOWED_EXTENSIONS: ['.zip'],
  MIME_TYPES: ['application/zip', 'application/x-zip-compressed'],
};

export const ERROR_MESSAGES = {
  FILE_TOO_LARGE: 'Theme file exceeds maximum size of 50MB',
  INVALID_FILE_TYPE: 'Invalid file type. Please upload a ZIP file',
  MISSING_REQUIRED_DIR: (dir: string) => `Missing required directory: ${dir}/`,
  MISSING_REQUIRED_FILE: (file: string) => `Missing required file: ${file}`,
  INVALID_ZIP: 'Invalid ZIP file format',
  UPLOAD_FAILED: 'Failed to upload theme. Please try again.',
};