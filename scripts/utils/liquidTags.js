import { Liquid } from 'liquidjs';

export function registerCustomTags(engine) {
  // Register section tag
  engine.registerTag('section', {
    parse: function(token) {
      this.sectionName = token.args.trim().replace(/^['"]|['"]$/g, '');
    },
    render: async function(ctx) {
      try {
        const template = await this.liquid.getTemplate(`sections/${this.sectionName}`);
        return template.render(ctx);
      } catch (error) {
        console.error(`Error rendering section ${this.sectionName}:`, error);
        return ''; // Return empty string on error
      }
    }
  });

  // Register form tag
  engine.registerTag('form', {
    parse: function(token) {
      this.formType = token.args;
      this.templates = [];
    },
    render: function(ctx) {
      return `<form action="/cart/add" method="post" class="product-form">
                ${this.templates.map(tpl => tpl.render(ctx)).join('')}
              </form>`;
    }
  });
}