// pages/files.js

export function loadFilesPage() {
  const app = document.getElementById('app');
  if (!app) return;

  // ✅ Page intro
  app.innerHTML = `
    <h2>📂 ROV Files & Documents</h2>
    <p class="page-subtext">Browse manuals, schematics, procedures, and reference videos by system and category.</p>
    <div class="file-section"></div>
  `;

  const section = app.querySelector('.file-section');

  // ✅ Handle local vs GitHub Pages path
  const basePath = location.hostname === '127.0.0.1' ? '' : '/rov-reference-app';
  fetch(`${basePath}/files-data.json`)
    .then(res => res.json())
    .then(data => {
      Object.entries(data).forEach(([topLevel, subGroups]) => {
        // 🔹 Top-level header (e.g., Manipulators)
        const topHeader = document.createElement('h3');
        topHeader.className = 'category-header';
        topHeader.textContent = topLevel;
        section.appendChild(topHeader);

        // 🔹 Sub-category cards (e.g., T4, Atlas)
        Object.entries(subGroups).forEach(([subCat, files]) => {
          const card = document.createElement('div');
          card.className = 'card';

          card.innerHTML = `
            <button class="card-header">${subCat}</button>
            <div class="card-body">
              ${files.map(file => renderFileEntry(file)).join('')}
            </div>
          `;

          section.appendChild(card);
        });
      });

      // ✅ Accordion toggle using class + scrollHeight
      section.querySelectorAll('.card-header').forEach(btn => {
        btn.addEventListener('click', () => {
          const body = btn.nextElementSibling;
          const isOpen = body.classList.contains('open');

          // Close all
          section.querySelectorAll('.card-body').forEach(b => {
            b.classList.remove('open');
            b.style.maxHeight = null;
          });

          // Open clicked
          if (!isOpen) {
            body.classList.add('open');
            body.style.maxHeight = body.scrollHeight + 'px';
          }
        });
      });
    })
    .catch(err => {
      console.error('❌ Failed to load file list:', err);
      section.innerHTML = `<p class="error">Could not load files. Please try again later.</p>`;
    });
}

// ✅ Render each file with optional links & video
function renderFileEntry(file) {
  const icon = getFileIcon(file.name);
  const fileUrl = file.url || '#';

  return `
    <div class="file-entry">
      <a class="file-link-btn" href="${fileUrl}" target="_blank" rel="noopener">
        ${icon} ${file.name}
      </a>

      ${file.quickLinks ? `
        <div class="quick-links">
          <span>🔗 Quick Links:</span>
          <ul>
            ${file.quickLinks.map(link => `
              <li><a href="${fileUrl}#page=${link.page}" target="_blank">${link.label}</a></li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      ${file.videos ? `
        <div class="video-links">
          <span>🎥 Related Videos:</span>
          ${file.videos.map(v => {
            const isYouTube = v.url.includes('youtube.com') || v.url.includes('youtu.be');
            return isYouTube
              ? `<iframe width="100%" height="220" src="${convertToEmbed(v.url)}" frameborder="0" allowfullscreen></iframe>`
              : `<p><a href="${v.url}" target="_blank">▶ ${v.label}</a></p>`;
          }).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

// ✅ File type to emoji
function getFileIcon(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  if (ext === 'pdf') return '📄';
  if (['xls', 'xlsx', 'csv'].includes(ext)) return '📊';
  if (['doc', 'docx'].includes(ext)) return '📝';
  if (['png', 'jpg', 'jpeg', 'gif'].includes(ext)) return '🖼️';
  if (['zip', 'rar'].includes(ext)) return '🗜️';
  return '📁';
}

// ✅ YouTube link to embedded player
function convertToEmbed(url) {
  const id = url.includes('watch?v=') ? url.split('watch?v=')[1] : url.split('/').pop();
  return `https://www.youtube.com/embed/${id}`;
}
