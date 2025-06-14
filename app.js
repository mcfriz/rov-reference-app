// app.js
import { loadFittingsPage } from './pages/fittings.js';
import { loadFittingFinderPage } from './pages/fitting-finder.js';
import { loadGuidePage } from './pages/guide.js';
import { loadManipulatorPage } from './pages/manipulators.js';

const routes = {
  '/': () => renderContent(`
    <h2>Welcome to the ROV Reference App</h2>
    <p>Select a section from the menu to begin.</p>
  `),

  '/operations': () => renderContent(`
    <h2>Operations Home</h2>
    <p>Placeholder for operations dashboard or tools.</p>
  `),

  '/fittings': loadFittingsPage,
  '/finder': loadFittingFinderPage,
  '/guide': loadGuidePage,
  '/manipulators': loadManipulatorPage,

  '/electrical': () => renderContent(`
    <h2>Electrical Maintenance</h2>
    <p>Placeholder for electrical procedures and diagnostics.</p>
  `),

  '/fiber': () => renderContent(`
    <h2>Fiber Maintenance</h2>
    <p>Placeholder for fiber optic maintenance and testing guides.</p>
  `),

  '/404': () => renderContent(`<h2>404 - Page not found</h2>`)
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

    console.log('[Router] Navigating to:', path);
    route();

    // Highlight active link
    document.querySelectorAll('.menu a').forEach(link => {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === `#${path}`) {
        link.classList.add('active-link');
      }
    });

    // Collapse dropdowns
    document.querySelectorAll('.dropdown-parent').forEach(li => li.classList.remove('active'));
  }, 50);
}

// Ensure router triggers on load and hash change
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(router, 0);
});
window.addEventListener('hashchange', router);
