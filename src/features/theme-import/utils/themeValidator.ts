import JSZip from 'jszip';

const REQUIRED_DIRECTORIES = ['layout', 'templates', 'sections', 'snippets'];
const REQUIRED_FILES = ['layout/theme.liquid'];
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export async function validateTheme(file: File): Promise<string[]> {
  const errors: string[] = [];

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    errors.push('Theme file exceeds maximum size of 50MB');
    return errors;
  }

  try {
    const zip = new JSZip();
    const contents = await zip.loadAsync(file);
    
    // Check required directories
    const directories = new Set(
      Object.keys(contents.files)
        .map(path => path.split('/')[0])
        .filter(Boolean)
    );

    for (const dir of REQUIRED_DIRECTORIES) {
      if (!directories.has(dir)) {
        errors.push(`Missing required directory: ${dir}/`);
      }
    }

    // Check required files
    for (const requiredFile of REQUIRED_FILES) {
      if (!contents.files[requiredFile]) {
        errors.push(`Missing required file: ${requiredFile}`);
      }
    }

    // Validate liquid syntax in theme files
    const liquidFiles = Object.keys(contents.files).filter(path => 
      path.endsWith('.liquid') && !contents.files[path].dir
    );

    for (const liquidFile of liquidFiles) {
      const content = await contents.files[liquidFile].async('string');
      const liquidErrors = validateLiquidSyntax(content);
      errors.push(...liquidErrors.map(error => `${liquidFile}: ${error}`));
    }

  } catch (error) {
    errors.push('Invalid ZIP file format');
  }

  return errors;
}

function validateLiquidSyntax(content: string): string[] {
  const errors: string[] = [];
  
  // Basic Liquid syntax validation
  const openTags = (content.match(/{%/g) || []).length;
  const closeTags = (content.match(/%}/g) || []).length;
  
  if (openTags !== closeTags) {
    errors.push('Mismatched Liquid tags');
  }

  return errors;
}