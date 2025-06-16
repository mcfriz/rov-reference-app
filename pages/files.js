// pages/files.js

export function loadFilesPage() {
  const app = document.getElementById('app');
  if (!app) return;

  // Inject page structure
app.innerHTML = `
  <h2>📂 ROV Files & Documents</h2>
  <p class="page-subtext">Browse reference manuals, checklists, schematics, and inspection tools by category.</p>
  <div class="file-section"></div>
`;
  const section = app.querySelector('.file-section');

  // ✅ Auto-detect local vs GitHub Pages path
  const basePath = location.hostname === '127.0.0.1' ? '' : '/rov-reference-app';
  fetch(`${basePath}/files-data.json`)
    .then(res => res.json())
    .then(data => {
      Object.entries(data).forEach(([category, files]) => {
        const card = document.createElement('div');
        card.className = 'card';

        // ✅ Build card structure with styled file buttons
        card.innerHTML = `
          <button class="card-header">${category}</button>
          <div class="card-body">
            <ul class="link-list">
              ${files.map(file => {
                const icon = getFileIcon(file.name);
                return `
                  <li>
                    <a class="file-link-btn" href="${file.url}" target="_blank" rel="noopener">
                      ${icon} ${file.name}
                    </a>
                  </li>
                `;
              }).join('')}
            </ul>
          </div>
        `;

        section.appendChild(card);
      });

      // ✅ Accordion toggle for each card
      section.querySelectorAll('.card-header').forEach(btn => {
        btn.addEventListener('click', () => {
          const body = btn.nextElementSibling;
          const isOpen = body.style.maxHeight;
          section.querySelectorAll('.card-body').forEach(b => (b.style.maxHeight = null));
          if (!isOpen) body.style.maxHeight = body.scrollHeight + 'px';
        });
      });
    })
    .catch(err => {
      console.error('❌ Failed to load file list:', err);
      section.innerHTML = `<p class="error">Could not load files. Please try again later.</p>`;
    });
}

// ✅ Helper: Detect file type and return emoji icon
function getFileIcon(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  if (ext === 'pdf') return '📄';
  if (['xls', 'xlsx', 'csv'].includes(ext)) return '📊';
  if (['doc', 'docx'].includes(ext)) return '📝';
  if (['png', 'jpg', 'jpeg', 'gif'].includes(ext)) return '🖼️';
  if (['zip', 'rar'].includes(ext)) return '🗜️';
  return '📁';
}
