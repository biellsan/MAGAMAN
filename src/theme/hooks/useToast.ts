import { useCallback } from 'react';

interface ToastOptions {
  type: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
}

export function useToast() {
  const showToast = useCallback(({ type, message, duration = 3000 }: ToastOptions) => {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;

    // Add to container
    const container = document.getElementById('toast-container') || createToastContainer();
    container.appendChild(toast);

    // Remove after duration
    setTimeout(() => {
      toast.classList.add('toast--fade-out');
      setTimeout(() => {
        container.removeChild(toast);
        if (container.children.length === 0) {
          container.remove();
        }
      }, 300);
    }, duration);
  }, []);

  return { showToast };
}

function createToastContainer(): HTMLElement {
  const container = document.createElement('div');
  container.id = 'toast-container';
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}