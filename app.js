import { loadFittingsPage } from './pages/fittings.js';

const routes = {
  '/': () => document.getElementById('app').innerHTML = '<h2>Welcome to the ROV Reference App</h2><p>Select a tool from the menu.</p>',
  '/fittings': loadFittingsPage
};

function router() {
  const path = location.hash.replace('#', '') || '/';
  const route = routes[path];
  if (route) route();
  else document.getElementById('app').innerHTML = '<h2>Page not found</h2>';
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);