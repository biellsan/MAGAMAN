import React from 'react';
import { MoreVertical, Edit, Eye, Trash2 } from 'lucide-react';
import { Theme } from '../../types/theme';

interface ThemeCardProps {
  theme: Theme;
  isActive?: boolean;
  onCustomize: (themeId: string) => void;
  onPreview: (themeId: string) => void;
  onDelete: (themeId: string) => void;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({
  theme,
  isActive,
  onCustomize,
  onPreview,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Theme Preview */}
      <div className="aspect-video relative">
        <img
          src={theme.previewUrl}
          alt={theme.name}
          className="w-full h-full object-cover"
        />
        {isActive && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
              Active theme
            </span>
          </div>
        )}
      </div>

      {/* Theme Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium text-gray-900">{theme.name}</h3>
          <div className="relative group">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 hidden group-hover:block z-10">
              <div className="py-1">
                <button
                  onClick={() => onCustomize(theme.id)}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Customize
                </button>
                <button
                  onClick={() => onPreview(theme.id)}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </button>
                {!isActive && (
                  <button
                    onClick={() => onDelete(theme.id)}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500">Version {theme.version}</p>
      </div>
    </div>
  );
};