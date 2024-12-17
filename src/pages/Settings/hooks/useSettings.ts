import { useState, useCallback } from 'react';
import { StoreSettings } from '../types';

const defaultSettings: StoreSettings = {
  storeName: '',
  email: '',
  phone: '',
  timezone: 'UTC',
  currency: 'USD',
  address: '',
  orderPrefix: '#',
  orderSuffix: '',
};

export const useSettings = () => {
  const [settings, setSettings] = useState<StoreSettings>(defaultSettings);

  const updateSettings = useCallback((updates: Partial<StoreSettings>) => {
    setSettings(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  return {
    settings,
    updateSettings
  };
};