export interface Theme {
  id: string;
  name: string;
  version: string;
  previewUrl: string;
  status: 'active' | 'inactive';
  customizations?: Record<string, any>;
  lastModified: string;
}

export interface ThemeSettings {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    baseSize: string;
  };
  layout: {
    containerWidth: string;
    spacing: string;
  };
  header: {
    style: 'minimal' | 'standard' | 'expanded';
    showSearch: boolean;
    showCart: boolean;
  };
  footer: {
    columns: number;
    showNewsletter: boolean;
    showSocial: boolean;
  };
}

export interface ThemeCustomization {
  themeId: string;
  settings: ThemeSettings;
  sections: Record<string, any>;
}