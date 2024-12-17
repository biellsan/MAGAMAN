export function validateLiquidSyntax(content: string): string[] {
  const errors: string[] = [];
  
  // Basic Liquid syntax validation
  const openTags = (content.match(/{%/g) || []).length;
  const closeTags = (content.match(/%}/g) || []).length;
  
  if (openTags !== closeTags) {
    errors.push('Mismatched Liquid tags');
  }

  // Validate object/variable references
  const liquidVariables = content.match(/{{.*?}}/g) || [];
  for (const variable of liquidVariables) {
    if (variable.includes('..')) {
      errors.push(`Invalid variable reference: ${variable}`);
    }
  }

  return errors;
}