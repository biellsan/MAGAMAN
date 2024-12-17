import { useCallback } from 'react';
import { getThemeColor, getThemeFont, getThemeSetting } from '../utils/theme';

export const useTheme = () => {
  const getColor = useCallback((colorName: string) => {
    return getThemeColor(colorName);
  }, []);

  const getFont = useCallback((fontName: string) => {
    return getThemeFont(fontName);
  }, []);

  const getSetting = useCallback((path: string) => {
    return getThemeSetting(path);
  }, []);

  return {
    getColor,
    getFont,
    getSetting,
  };
};