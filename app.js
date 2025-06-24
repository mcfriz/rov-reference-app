// app.js
import { loadFittingsPage } from './pages/fittings.js';
import { loadFittingFinderPage } from './pages/fitting-finder.js';
import { loadGuidePage } from './pages/guide.js';
import { loadManipulatorPage } from './pages/manipulators.js';
import { loadFilesPage } from './pages/files.js';
import { loadFiberPage } from './pages/fiber.js';
import { loadElectricalPage } from './pages/electrical.js';
import { loadHydraulicPage } from './pages/hydraulic.js';



// === ROUTES OBJECT ===
const routes = {
'/': () => renderContent(`
  <section class="home-section">
    <h2>Welcome to the ROV Reference App</h2>
    <p class="page-subtext">Quick access to popular tools and guides:</p>

    <div class="quick-links-grid">
      <a href="#/files" class="quick-link-btn">
        <svg viewBox="0 0 24 24"><path d="M10 4H4v16h16V8h-8z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        <span>Files & Documents</span>
      </a>
      <a href="#/fiber" class="quick-link-btn">
        <svg viewBox="0 0 24 24"><path d="M2 12h20M12 2v20" stroke="currentColor" stroke-width="2" fill="none"/></svg>
        <span>Fiber Guide</span>
      </a>
      <a href="#/manipulators" class="quick-link-btn">
<svg viewBox="0 0 24 24">
  <path d="M4 12l3-3 4 4 5-5 4 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="4" cy="12" r="1.5" fill="currentColor"/>
  <circle cx="7" cy="9" r="1.5" fill="currentColor"/>
  <circle cx="11" cy="13" r="1.5" fill="currentColor"/>
  <circle cx="16" cy="8" r="1.5" fill="currentColor"/>
  <circle cx="20" cy="12" r="1.5" fill="currentColor"/>
</svg>
        <span>Manipulator Reference</span>
      </a>
      <a href="#/finder" class="quick-link-btn">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" fill="none"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-width="2"/></svg>
        <span>Fitting Finder</span>
      </a>
      <a href="#/electrical" class="quick-link-btn">
        <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8L21 10h-8z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        <span>Electrical Systems</span>
      </a>
      <a href="#/hydraulic" class="quick-link-btn">
<svg viewBox="0 0 24 24">
  <rect x="2" y="9" width="6" height="6" stroke="currentColor" stroke-width="2" fill="none"/>
  <rect x="16" y="9" width="6" height="6" stroke="currentColor" stroke-width="2" fill="none"/>
  <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" stroke-width="2"/>
  <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
</svg>
        <span>Hydraulic Systems</span>
      </a>
    </div>
  </section>
`),


  '/operations': () => renderContent(`
    <h2>Operations Home</h2>
    <p>Placeholder for operations dashboard or tools.</p>
  `),

  '/maintenance': () => renderContent(`
    <h2>Maintenance Home</h2>
    <p>Select a category:</p>
    <ul class="link-list">

      <li><a href="#/hydraulic">🛢️ Hydraulic</a></li> <!-- ✅ NEW BUTTON -->
      <li><a href="#/finder">🔍 Hydraulic Fittings Finder</a></li>
      <li><a href="#/guide">📘 Hydraulic Fitting Guide</a></li>
      <li><a href="#/electrical">⚡ Electrical</a></li>
      <li><a href="#/fiber">📡 Fiber</a></li>
      <li><a href="#/manipulators">🦾 Manipulators</a></li>
    </ul>
  `),

  '/files': loadFilesPage, // ✅ THIS IS THE FIX

  '/fittings': loadFittingsPage,
  '/finder': loadFittingFinderPage,
  '/guide': loadGuidePage,
  '/manipulators': loadManipulatorPage,
'/electrical': loadElectricalPage,
'/hydraulic': loadHydraulicPage,


'/fiber': loadFiberPage,



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
