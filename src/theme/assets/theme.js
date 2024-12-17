// Theme JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initializeAnnouncements();
  initializeModals();
  initializeCollectionFilters();
  initializeProductForm();
});

// Announcement Bar
function initializeAnnouncements() {
  const announcementBar = document.querySelector('[data-announcement-bar]');
  if (!announcementBar) return;

  const slider = announcementBar.querySelector('.announcement-slider');
  const autoplay = slider.dataset.autoplay === 'true';
  const speed = parseInt(slider.dataset.speed) * 1000;

  if (autoplay) {
    setInterval(() => {
      const slides = slider.children;
      const activeSlide = slider.querySelector('.active') || slides[0];
      const nextSlide = activeSlide.nextElementSibling || slides[0];

      activeSlide.classList.remove('active');
      nextSlide.classList.add('active');
    }, speed);
  }
}

// Modal
function initializeModals() {
  const modals = document.querySelectorAll('[data-modal]');
  
  modals.forEach(modal => {
    const closeButton = modal.querySelector('[data-modal-close]');
    const overlay = modal.querySelector('[data-modal-overlay]');

    closeButton?.addEventListener('click', () => closeModal(modal));
    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(modal);
    });
  });
}

function closeModal(modal) {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

// Collection Filters
function initializeCollectionFilters() {
  const filterForm = document.querySelector('.filter-form');
  if (!filterForm) return;

  const filterInputs = filterForm.querySelectorAll('[data-filter-update]');
  
  filterInputs.forEach(input => {
    input.addEventListener('change', () => {
      filterForm.submit();
    });
  });
}

// Product Form
function initializeProductForm() {
  const productForms = document.querySelectorAll('[data-product-form]');
  
  productForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      try {
        const formData = new FormData(form);
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) throw new Error('Failed to add to cart');

        const cart = await response.json();
        updateCart(cart);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    });
  });
}

function updateCart(cart) {
  const cartCount = document.querySelector('[data-cart-count]');
  if (cartCount) {
    cartCount.textContent = cart.item_count;
  }
}