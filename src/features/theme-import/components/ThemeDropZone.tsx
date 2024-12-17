import React from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import { useDropzone } from '../hooks/useDropzone';

interface ThemeDropZoneProps {
  onFileSelect: (file: File) => void;
  isImporting: boolean;
  errors?: string[];
}

export const ThemeDropZone: React.FC<ThemeDropZoneProps> = ({
  onFileSelect,
  isImporting,
  errors
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: ([file]) => file && onFileSelect(file),
    accept: {
      'application/zip': ['.zip'],
      'application/x-zip-compressed': ['.zip']
    },
    maxFiles: 1,
    disabled: isImporting
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          ${isImporting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <input {...getInputProps()} />
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">
          {isDragActive ? 'Drop your theme file here' : 'Drag and drop your theme file here'}
        </p>
        <p className="text-sm text-gray-500">
          or <span className="text-blue-500">browse files</span>
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Accepts .zip files containing Liquid theme
        </p>
      </div>

      {errors && errors.length > 0 && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg">
          {errors.map((error, index) => (
            <div key={index} className="flex items-center text-red-700 text-sm">
              <AlertCircle className="w-4 h-4 mr-2" />
              {error}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};