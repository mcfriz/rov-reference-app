// app.js
import { loadFittingsPage } from './pages/fittings.js';
import { loadFittingFinderPage } from './pages/fitting-finder.js';
import { loadGuidePage } from './pages/guide.js';
import { loadManipulatorPage } from './pages/manipulators.js';

const routes = {
  '/': () => {
    renderContent(`
      <h2>Welcome to the ROV Reference App</h2>
      <p>Select a tool from the navigation above to get started.</p>
    `);
  },
  '/fittings': loadFittingsPage,
  '/finder': loadFittingFinderPage,
  '/guide': loadGuidePage, 
  '/manipulators': loadManipulatorPage,
  '/404': () => {
    renderContent('<h2>404 - Page not found</h2>');
  }
};

function renderContent(html) {
  const app = document.getElementById('app');
  if (!app) {
    console.error("Main container '#app' not found");
    return;
  }
  app.classList.add('fade-out');
  setTimeout(() => {
    app.innerHTML = html;
    app.classList.remove('fade-out');
  }, 150);
}

let routeTimeout;
function router() {
  clearTimeout(routeTimeout);
  routeTimeout = setTimeout(() => {
    const path = location.hash.replace('#', '') || '/';
    const route = routes[path] || routes['/404'];
    route();
  }, 50);
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
