// ✅ Info content for subcategories like T4, Constructor 05, etc.
const infoContentMap = {
  'T4': {
    title: 'ℹ️ T4 Overview',
    body: `
      <p>The Titan 4 (T4) manipulator is a heavy-duty hydraulic arm developed for deepwater tasks. It offers 7 functions, a high lift-to-weight ratio, and replaceable wrist components.</p>
      <ul>
        <li><strong>Mounting:</strong> Side-frame bolted or hot-stab interchangeable base</li>
        <li><strong>Max Lift:</strong> Approx. 250 kg at full extension in air</li>
        <li><strong>Rated Depth:</strong> 3,000 m standard (upgradable)</li>
        <li><strong>Uses:</strong> General intervention, tool handling, valve turning</li>
      </ul>
    `
  },
  'Constructor 05': {
    title: 'ℹ️ Constructor 05 Overview',
    body: `
      <p>The Constructor 05 is a Kystdesign-built WROV rated for 3,000 m depth with a modular hydraulic system, advanced control, and a powerful tooling suite.</p>
      <ul>
        <li><strong>Power:</strong> 150 HP</li>
        <li><strong>Thrusters:</strong> 7 × Sub-Atlantic brushless</li>
        <li><strong>Payload:</strong> Up to 300 kg</li>
        <li><strong>Control:</strong> Fully redundant SCU & HMI</li>
      </ul>
    `
  },
  'Torque Tools': {
    title: 'ℹ️ Torque Tool Overview',
    body: `
      <p>ROV torque tools allow remote engagement of subsea valves and fasteners. Compatible with Class 1–4 interfaces.</p>
      <ul>
        <li><strong>Class:</strong> API 17H Class 1–4</li>
        <li><strong>Drive:</strong> Hydraulic via ROV valve pack</li>
        <li><strong>Usage:</strong> Valve operation, latching, subsea intervention</li>
      </ul>
    `
  }
};

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
  const basePath = location.hostname === '127.0.0.1' ? '' : '/rov-reference-app';

  fetch(`${basePath}/files-data.json`)
    .then(res => res.json())
    .then(data => {
      Object.entries(data).forEach(([topLevel, subGroups]) => {
        const topHeader = document.createElement('h3');
        topHeader.className = 'category-header';
        topHeader.textContent = topLevel;
        section.appendChild(topHeader);

        Object.entries(subGroups).forEach(([subCat, files]) => {
          const card = document.createElement('div');
          card.className = 'card';

          const fileEntries = files.map(file => renderFileEntry(file)).join('');
          const infoAccordion = renderInfoAccordion(subCat);

          card.innerHTML = `
            <button class="card-header">${subCat}</button>
            <div class="card-body">
              ${fileEntries}
              ${infoAccordion}
            </div>
          `;

          section.appendChild(card);
        });
      });

// ✅ Top-level card expand/collapse with 'auto' height for stability
section.querySelectorAll('.card-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = body.classList.contains('open');

    // Close all other cards
    section.querySelectorAll('.card-body').forEach(b => {
      b.classList.remove('open');
      b.style.height = null;
    });

    if (!isOpen) {
      body.classList.add('open');
      body.style.height = 'auto'; // 👈 Key fix
    }
  });
});

// ✅ Nested accordion logic – no parent collapse
section.querySelectorAll('.info-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const infoBody = btn.nextElementSibling;
    const isOpen = infoBody.classList.contains('open');

    // Toggle the nested info body
    if (isOpen) {
      infoBody.classList.remove('open');
      infoBody.style.maxHeight = null;
    } else {
      infoBody.classList.add('open');
      infoBody.style.maxHeight = infoBody.scrollHeight + 'px';
    }

    // Set parent card-body height to auto to allow nested growth
    const cardBody = btn.closest('.card-body');
    cardBody.style.height = 'auto'; // ✅ Keeps parent from collapsing
  });
});
    })
    .catch(err => {
      console.error('❌ Failed to load file list:', err);
      section.innerHTML = `<p class="error">Could not load files. Please try again later.</p>`;
    });
}

// ✅ Render each file with quick links and/or videos
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

// ✅ Render overview accordion for a system like T4
function renderInfoAccordion(subCat) {
  const info = infoContentMap[subCat];
  if (!info) return '';
  return `
    <div class="file-entry">
      <button class="info-header">${info.title}</button>
      <div class="info-body">
        ${info.body}
      </div>
    </div>
  `;
}

// ✅ Convert file extension to emoji icon
function getFileIcon(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  if (ext === 'pdf') return '📄';
  if (['xls', 'xlsx', 'csv'].includes(ext)) return '📊';
  if (['doc', 'docx'].includes(ext)) return '📝';
  if (['png', 'jpg', 'jpeg', 'gif'].includes(ext)) return '🖼️';
  if (['zip', 'rar'].includes(ext)) return '🗜️';
  return '📁';
}

// ✅ Convert a YouTube link to embed format
function convertToEmbed(url) {
  const id = url.includes('watch?v=') ? url.split('watch?v=')[1] : url.split('/').pop();
  return `https://www.youtube.com/embed/${id}`;
}
