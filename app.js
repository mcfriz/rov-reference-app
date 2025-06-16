// app.js
import { loadFittingsPage } from './pages/fittings.js';
import { loadFittingFinderPage } from './pages/fitting-finder.js';
import { loadGuidePage } from './pages/guide.js';
import { loadManipulatorPage } from './pages/manipulators.js';
import { loadFilesPage } from './pages/files.js';

// === ROUTES OBJECT ===
const routes = {
  '/': () => renderContent(`
    <h2>Welcome to the ROV Reference App</h2>
    <p>Select a section from the menu to begin.</p>
  `),

  '/operations': () => renderContent(`
    <h2>Operations Home</h2>
    <p>Placeholder for operations dashboard or tools.</p>
  `),

  '/maintenance': () => renderContent(`
    <h2>Maintenance Home</h2>
    <p>Select a category:</p>
    <ul class="link-list">
      <li><a href="#/fittings">💧 Hydraulic – Fittings Calculator</a></li>
      <li><a href="#/finder">🔍 Fittings Finder</a></li>
      <li><a href="#/guide">📘 Fitting Guide</a></li>
      <li><a href="#/electrical">⚡ Electrical</a></li>
      <li><a href="#/fiber">📡 Fiber</a></li>
      <li><a href="#/manipulators">🦾 Manipulator Reference</a></li>
    </ul>
  `),

  '/files': loadFilesPage, // ✅ THIS IS THE FIX

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

// === MAIN RENDER FUNCTION ===
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

// === ROUTER LOGIC ===
let routeTimeout;

function router() {
  clearTimeout(routeTimeout);
  routeTimeout = setTimeout(() => {
    const path = location.hash.replace('#', '') || '/';
    const route = routes[path] || routes['/404'];

    console.log('[Router] Navigating to:', path);
    route();

    // === Highlight active menu link ===
    document.querySelectorAll('.menu a').forEach(link => link.classList.remove('active-link'));
    highlightMobileTab(path);
    document.querySelectorAll('.dropdown-parent').forEach(parent => parent.classList.remove('active-parent'));

    // Desktop menu highlighting logic
    document.querySelectorAll('.menu a').forEach(link => {
      if (link.getAttribute('href') === `#${path}`) {
        link.classList.add('active-link');

        // Highlight dropdown parent (if applicable)
        const parentLi = link.closest('.dropdown-parent');
        if (parentLi) {
          parentLi.classList.add('active-parent');
        }

        // Highlight top level too if nested
        const nested = link.closest('.nested-parent');
        if (nested) {
          const topParent = nested.closest('.dropdown-parent');
          if (topParent) topParent.classList.add('active-parent');
        }
      }
    });

    // Collapse open dropdowns
    document.querySelectorAll('.dropdown-parent').forEach(li => li.classList.remove('active'));
  }, 50);
}

// === MOBILE TAB BAR HIGHLIGHT ===
function highlightMobileTab(path) {
  document.querySelectorAll('.tab-link').forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === `#${path}`) {
      link.classList.add('active-link');
    }
  });
}

// === INIT ROUTING ===
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(router, 0);
});

window.addEventListener('hashchange', router);
