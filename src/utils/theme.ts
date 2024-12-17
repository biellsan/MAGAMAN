import { themeData } from '../theme/config/settings_data.json';

export const getThemeColor = (colorName: string): string => {
  return themeData.current[colorName] || '';
};

export const getThemeFont = (fontName: string): string => {
  return themeData.current[fontName] || '';
};

export const getThemeSetting = (path: string): any => {
  return path.split('.').reduce((obj, key) => obj?.[key], themeData.current);
};