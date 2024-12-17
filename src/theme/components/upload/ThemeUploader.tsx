import React, { useCallback } from 'react';
import { useThemeUpload } from '../../hooks/useThemeUpload';
import { UploadProgress } from './UploadProgress';
import { DropZone } from './DropZone';

export const ThemeUploader: React.FC = () => {
  const { uploadTheme, isUploading, uploadProgress } = useThemeUpload();

  const handleFileSelect = useCallback(async (file: File) => {
    await uploadTheme(file);
  }, [uploadTheme]);

  return (
    <div className="theme-uploader">
      <DropZone 
        onFileSelect={handleFileSelect}
        disabled={isUploading}
      />
      {isUploading && <UploadProgress progress={uploadProgress} />}
    </div>
  );
};