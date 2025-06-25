import './accordion.js';
import './modal.js';
// import other components as needed

window.crisp = window.crisp || {};
crisp.init = function() {
  crisp.accordion?.init();
  crisp.modal?.init();
  // ...init other components
};