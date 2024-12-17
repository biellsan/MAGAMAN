export function addCustomFilters(engine) {
  // Money filter
  engine.registerFilter('money', (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  });

  // Image URL filter
  engine.registerFilter('img_url', (image, size = 'medium') => {
    if (!image) return '';
    const sizes = {
      small: '100x100',
      medium: '300x300',
      large: '600x600',
      original: 'original'
    };
    return `${image}?size=${sizes[size] || size}`;
  });

  // Pluralize filter
  engine.registerFilter('pluralize', (word, count) => {
    return count === 1 ? word : `${word}s`;
  });

  // Time tag filter
  engine.registerFilter('time_tag', (date) => {
    const d = new Date(date);
    return `<time datetime="${d.toISOString()}">${d.toLocaleDateString()}</time>`;
  });
}