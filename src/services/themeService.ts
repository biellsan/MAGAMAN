import { Theme, ThemeCustomization } from '../types/theme';

export const themeService = {
  async uploadTheme(file: File): Promise<Theme> {
    const formData = new FormData();
    formData.append('theme', file);

    const response = await fetch('/themes/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload theme');
    }

    return response.json();
  },

  async getThemes(): Promise<Theme[]> {
    const response = await fetch('/api/themes');
    if (!response.ok) {
      throw new Error('Failed to fetch themes');
    }
    return response.json();
  },

  async getThemeById(id: string): Promise<Theme> {
    const response = await fetch(`/api/themes/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch theme');
    }
    return response.json();
  },

  async updateTheme(id: string, customization: ThemeCustomization): Promise<Theme> {
    const response = await fetch(`/api/themes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customization),
    });

    if (!response.ok) {
      throw new Error('Failed to update theme');
    }

    return response.json();
  },

  async deleteTheme(id: string): Promise<void> {
    const response = await fetch(`/api/themes/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete theme');
    }
  },

  async previewTheme(id: string): Promise<string> {
    const response = await fetch(`/api/themes/${id}/preview`);
    if (!response.ok) {
      throw new Error('Failed to generate theme preview');
    }
    const { previewUrl } = await response.json();
    return previewUrl;
  },

  async activateTheme(id: string): Promise<Theme> {
    const response = await fetch(`/api/themes/${id}/activate`, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Failed to activate theme');
    }

    return response.json();
  },

  async applyTheme(): Promise<any> {
    const response = await fetch('/themes/apply', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Failed to apply theme');
    }
    return response.json();
  },
};