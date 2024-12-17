import path from 'path';
import fs from 'fs/promises';

export async function getThemeData() {
  const settingsSchemaPath = path.resolve(process.cwd(), 'src/theme/config/settings_schema.json');
  const settingsDataPath = path.resolve(process.cwd(), 'src/theme/config/settings_data.json');
  
  try {
    const [schemaContent, dataContent] = await Promise.all([
      fs.readFile(settingsSchemaPath, 'utf-8'),
      fs.readFile(settingsDataPath, 'utf-8')
    ]);

    return {
      schema: JSON.parse(schemaContent),
      data: JSON.parse(dataContent)
    };
  } catch (error) {
    console.error('Error loading theme data:', error);
    return { schema: [], data: { current: {} } };
  }
}