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


crisp.accordion = {
  init() {
    document.querySelectorAll('.crisp-accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.crisp-accordion-item');
        item.classList.toggle('active');
      });
    });
  }
};

crisp.button = {
  init() {
    console.log("crisp-button initialized");
  }
};

crisp.columns = {
  init() {
    console.log("crisp-columns initialized");
  }
};

// crisp-modal.js
crisp.modal = {
  init() {
    console.log("crisp-modal initialized");
  }
};

crisp.responsive = {
  init() {
    console.log("Responsive utilities initialized");
  }
};