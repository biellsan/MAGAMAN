import { z } from 'zod';

export const themeSchema = z.object({
  id: z.string(),
  name: z.string(),
  version: z.string(),
  previewImage: z.string().url().optional(),
  status: z.enum(['active', 'inactive']),
});

export type Theme = z.infer<typeof themeSchema>;

export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export interface ThemeUploadResponse {
  success: boolean;
  theme?: Theme;
  error?: string;
}