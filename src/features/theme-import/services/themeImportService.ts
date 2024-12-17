import JSZip from 'jszip';
import { Theme } from '../../../types/theme';

export async function importThemeFiles(file: File): Promise<Theme> {
  const formData = new FormData();
  formData.append('theme', file);

  const response = await fetch('/api/themes/import', {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    throw new Error('Failed to import theme');
  }

  return response.json();
}

export async function extractThemeFiles(file: File): Promise<Map<string, string>> {
  const zip = new JSZip();
  const contents = await zip.loadAsync(file);
  const files = new Map<string, string>();

  for (const [path, zipEntry] of Object.entries(contents.files)) {
    if (!zipEntry.dir) {
      const content = await zipEntry.async('string');
      files.set(path, content);
    }
  }

  return files;
}