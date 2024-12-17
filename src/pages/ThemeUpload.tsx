import React from 'react';
import { useThemeUpload } from './OnlineStore/hooks/useThemeUpload';

const ThemeUpload = () => {
  const { uploadTheme, isUploading, error, progress } = useThemeUpload();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadTheme(file);
    }
  };

  return (
    <div>
      <h1>Upload Theme</h1>
      <input type="file" accept=".zip" onChange={handleFileChange} />
      {isUploading && <p>Uploading... {progress?.percentage}%</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ThemeUpload;
