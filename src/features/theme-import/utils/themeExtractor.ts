import JSZip from 'jszip';
import { ThemeFile } from '../types';

export async function extractThemeFiles(file: File): Promise<ThemeFile[]> {
  const zip = new JSZip();
  const contents = await zip.loadAsync(file);
  const files: ThemeFile[] = [];

  for (const [path, zipEntry] of Object.entries(contents.files)) {
    if (!zipEntry.dir) {
      const content = await zipEntry.async('string');
      files.push({ path, content });
    }
  }

  return files;
}