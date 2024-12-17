export const validateThemeFile = (file: File): string | null => {
  // Check file type
  if (!file.name.endsWith('.zip')) {
    return 'Please upload a valid .zip file';
  }

  // Check file size (50MB limit)
  const MAX_SIZE = 50 * 1024 * 1024; // 50MB in bytes
  if (file.size > MAX_SIZE) {
    return 'File size exceeds 50MB limit';
  }

  // Check file name format
  const validNameRegex = /^[a-zA-Z0-9-_]+\.zip$/;
  if (!validNameRegex.test(file.name)) {
    return 'Invalid file name. Use only letters, numbers, hyphens, and underscores';
  }

  return null;
};

export const getMimeType = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      const arr = new Uint8Array(e.target?.result as ArrayBuffer).subarray(0, 4);
      let header = '';
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16);
      }
      
      // Check for ZIP signature
      if (header.startsWith('504b0304')) {
        resolve('application/zip');
      } else {
        resolve('');
      }
    };
    reader.readAsArrayBuffer(file.slice(0, 4));
  });
};