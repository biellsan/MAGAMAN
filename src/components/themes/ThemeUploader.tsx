import React, { useCallback, useState } from 'react';
import { Upload, X, AlertCircle } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface ThemeUploaderProps {
  onUpload: (file: File) => Promise<void>;
  onClose: () => void;
}

export const ThemeUploader: React.FC<ThemeUploaderProps> = ({ onUpload, onClose }) => {
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (!file.name.endsWith('.zip')) {
      setError('Please upload a valid theme file (.zip)');
      return;
    }

    if (file.size > 50 * 1024 * 1024) { // 50MB limit
      setError('Theme file size must be less than 50MB');
      return;
    }

    try {
      setUploading(true);
      setError(null);
      await onUpload(file);
    } catch (err) {
      setError('Failed to upload theme. Please try again.');
    } finally {
      setUploading(false);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/zip': ['.zip'],
    },
    maxFiles: 1,
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Upload theme</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          <div
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-lg p-8 text-center transition-colors
              ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
              ${uploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <input {...getInputProps()} disabled={uploading} />
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">
              {isDragActive
                ? 'Drop your theme file here'
                : 'Drag and drop your theme file here'}
            </p>
            <p className="text-sm text-gray-500">
              or <span className="text-blue-500">browse files</span>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Maximum file size: 50MB (.zip)
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            disabled={uploading}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-[#404040] rounded-md hover:bg-[#303030] disabled:opacity-50"
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload theme'}
          </button>
        </div>
      </div>
    </div>
  );
};