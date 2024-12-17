const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export function validateThemeFile(file: File): string | null {
  // Check file type
  if (!file.name.endsWith('.zip')) {
    return 'Theme file must be a ZIP archive';
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return `Theme file must be smaller than ${MAX_FILE_SIZE / 1024 / 1024}MB`;
  }

  // Check file name format
  if (!/^[a-zA-Z0-9-_]+\.zip$/.test(file.name)) {
    return 'Theme file name can only contain letters, numbers, hyphens, and underscores';
  }

  return null;
}