import React from 'react';
import { Theme } from '../../types/theme';
import { ShoppingCart } from 'lucide-react';

interface MarketplaceTheme extends Theme {
  price: number;
  description: string;
  author: string;
  rating: number;
  downloads: number;
}

interface ThemeMarketplaceProps {
  themes: MarketplaceTheme[];
  onPurchase: (themeId: string) => void;
  onPreview: (themeId: string) => void;
}

export const ThemeMarketplace: React.FC<ThemeMarketplaceProps> = ({
  themes,
  onPurchase,
  onPreview,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {themes.map((theme) => (
        <div key={theme.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="aspect-video relative">
            <img
              src={theme.previewUrl}
              alt={theme.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => onPreview(theme.id)}
              className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity"
            >
              <span className="sr-only">Preview theme</span>
            </button>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{theme.name}</h3>
                <p className="text-sm text-gray-500">by {theme.author}</p>
              </div>
              <div className="text-lg font-medium text-gray-900">
                ${theme.price}
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {theme.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < theme.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {theme.downloads} downloads
                </span>
              </div>

              <button
                onClick={() => onPurchase(theme.id)}
                className="flex items-center px-4 py-2 bg-[#404040] text-white rounded-md hover:bg-[#303030] transition-colors"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Purchase
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};