```typescript
import { useCallback } from 'react';
import { useDropzone as useReactDropzone } from 'react-dropzone';

interface UseDropzoneOptions {
  onDrop: (files: File[]) => void;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  disabled?: boolean;
}

export const useDropzone = (options: UseDropzoneOptions) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    options.onDrop(acceptedFiles);
  }, [options]);

  return useReactDropzone({
    onDrop,
    accept: options.accept,
    maxFiles: options.maxFiles,
    disabled: options.disabled,
    multiple: false
  });
};
```