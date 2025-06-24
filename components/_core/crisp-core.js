// === CrispJS Module ===
const crisp = (() => {
  'use strict';

  const version = '0.1.0';

  // Example: Utility to toggle a class
  function toggleClass(el, className) {
    if (el && className) {
      el.classList.toggle(className);
    }
  }

  // DOM-ready helper
  function ready(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Public API
  return {
    version,
    toggleClass,
    ready
  };
})();
