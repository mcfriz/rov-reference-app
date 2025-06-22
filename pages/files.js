// ✅ Info content for subcategories like T4, Constructor 05, etc.
const t4VideoGroups = {
  "Azimuth": [
    { label: "Removing the azimuth resolver", url: "https://youtu.be/BBacQIZjYzc" },
    { label: "Re-assembly of the azimuth resolver", url: "https://youtu.be/VspHZ19kKlU" },
    { label: "Exterior cover re-attach", url: "https://youtu.be/R-BnQIlFpqM" },
    { label: "Azimuth actuator removal", url: "https://youtu.be/XfzsUxUXTS0" },
    { label: "Azimuth actuator re assembly", url: "https://youtu.be/dZbqdxKbczs" }
  ],
  "Elbow": [
    { label: "Installing the elbow resolver", url: "https://youtu.be/4BkaSYhx79A" },
    { label: "Elbow actuator removal", url: "https://youtu.be/iUdxOetclQ4" },
    { label: "Elbow actuator disassembly", url: "https://youtu.be/gm3GXnFXdyQ" },
    { label: "Elbow actuator re-assembly", url: "https://youtu.be/if1QAEWQ8zY" },
    { label: "Elbow actuator re-attach", url: "https://youtu.be/dYXBbipjilo" },
    { label: "Removing the elbow resolver", url: "https://youtu.be/zmDEwqvp4V8" },
    { label: "Exterior cover re-attach", url: "https://youtu.be/uuXqxJT0oRA" }
  ],
  "Forearm": [
    { label: "Forearm board servo disassembly", url: "https://youtu.be/aQQGaf1JhcY" },
    { label: "Forearm board servo re-assembly", url: "https://youtu.be/p90EvudLlkk" },
    { label: "Intro to resolvers", url: "https://youtu.be/TZqrgIhncKc" },
    { label: "Exterior cover re-attach", url: "https://youtu.be/SdHey6M0yqc" }
  ],
  "Jaw": [
    { label: "Disassembly of the pin type jaw assy", url: "https://youtu.be/0QGCBP2lw1A" },
    { label: "Jaw pin re-assembly", url: "https://youtu.be/rX9U-X2AwJk" },
    { label: "Jaw t-bar design disassembly", url: "https://youtu.be/KYZ7CNZblBQ" },
    { label: "Jaw t-bar re-assembly", url: "https://youtu.be/neciA1zpsmA" }
  ],
  "Master Controller": [
    { label: "Master controller re-assembly", url: "https://youtu.be/bo6C6b1yj9k" },
    { label: "Master controller disassembly", url: "https://youtu.be/m4vTGS_MwMo" }
  ],
  "Shoulder": [
    { label: "Removing the shoulder resolver", url: "https://youtu.be/Era2gOtWapo" },
    { label: "Installing the shoulder resolver", url: "https://youtu.be/REb0lAHXT64" },
    { label: "Shoulder joint disassembly", url: "https://youtu.be/M2fUi5ULV9E" },
    { label: "Shoulder joint re-assembly", url: "https://youtu.be/wYkhfEKABO8" },
    { label: "Exterior cover re-attach", url: "https://youtu.be/SdHey6M0yqc" }
  ],
  "Upper Arm": [
    { label: "Solenoid valve and filter replacement", url: "https://youtu.be/kIySaOuEoqw" },
    { label: "Linear actuator disassembly", url: "https://youtu.be/zXW7IhCEDPg" },
    { label: "Linear actuator re-assembly", url: "https://youtu.be/Hws9bqMlazY" },
    { label: "Filter replacement only", url: "https://youtu.be/gm-USEme5fE" },
    { label: "Exterior cover re-attach", url: "https://youtu.be/SdHey6M0yqc" }
  ],
  "Wrist Pitch Yaw": [
    { label: "Nose block re-assembly", url: "https://youtu.be/p98Ykk0Gxks" },
    { label: "Removing the pitch resolver", url: "https://youtu.be/I1Vp9UgXSNk" },
    { label: "Installing the pitch resolver", url: "https://youtu.be/GeBixweI-3A" },
    { label: "Removing the yaw resolver", url: "https://youtu.be/6jF3Gaqmoz4" },
    { label: "Installing the yaw resolver", url: "https://youtu.be/YZplYdMzdpw" },
    { label: "Removing camera assy", url: "https://youtu.be/fh1HN5RNMTQ" },
    { label: "Installing the camera assy", url: "https://youtu.be/FrZV0mEBTlo" },
    { label: "Wrist jaw removal", url: "https://youtu.be/TDcKzvucF8M" },
    { label: "Wrist jaw resolver LDVT disassembly", url: "https://youtu.be/racOxWicBP8" },
    { label: "Wrist jaw LVDT resolver assembly", url: "https://youtu.be/RRnnLhcawDE" },
    { label: "Nose block disassembly", url: "https://youtu.be/90Y-4N8j488" },
    { label: "Wrist disassembly", url: "https://youtu.be/WjQqLfm2kAw" },
    { label: "Wrist re-assembly", url: "https://youtu.be/-QFCFxhEsco" },
    { label: "Wrist jaw re-attach", url: "https://youtu.be/LPgLuRhKi9I" },
    { label: "Pitch yaw removal", url: "https://youtu.be/5qhOEXb8AWY" },
    { label: "Pitch yaw re-attach", url: "https://youtu.be/K3XMLv694O8" }
  ],
  "Compensation and Testing": [
    { label: "Weekly re-torquing", url: "https://youtu.be/dqvv1HjVyEQ" },
    { label: "Testing re-assembled manipulator", url: "https://youtu.be/r4YNADZR-LU" },
    { label: "Charging the compensation system", url: "https://youtu.be/SgOU01FOU6M" }
  ]
};

function renderT4VideoAccordion() {
  return `
    <div class="t4-video-section">
      <h4 class="t4-video-heading">🎥 T4 Training Videos</h4>
      ${Object.entries(t4VideoGroups).map(([joint, videos]) => `
        <details class="video-joint">
          <summary class="joint-summary">${joint}</summary>
          <ul class="video-list">
            ${videos.map(v => `<li><a href="${v.url}" target="_blank" class="video-link">▶ ${v.label}</a></li>`).join('')}
          </ul>
        </details>
      `).join('')}
    </div>
  `;

}

const infoContentMap = {
  // 🔧 Manipulators
  'T4': {
    title: 'ℹ️ T4 Overview',
    body: `
      <p>The Titan 4 (T4) manipulator is a heavy-duty hydraulic arm designed for subsea intervention. It offers precise, multi-axis movement, and is widely used in offshore tasks.</p>
      <ul>
        <li><strong>Functions:</strong> 7-function hydraulic control</li>
        <li><strong>Depth Rating:</strong> 3,000 m</li>
        <li><strong>Gripper:</strong> Interchangeable jaw sets</li>
      </ul>
    `
  },
  'Atlas': {
    title: 'ℹ️ Atlas Overview',
    body: `
      <p>The Atlas manipulator is a robust, high-power tool ideal for subsea handling and heavy lifting. It supports interchangeable end-effectors and dual-arm configurations.</p>
      <ul>
        <li><strong>Strength:</strong> High torque joints for heavy payloads</li>
        <li><strong>Modularity:</strong> Tool-free joint servicing</li>
        <li><strong>Integration:</strong> SCU & ROV HMI compatible</li>
      </ul>
    `
  },
  'Rigmaster': {
    title: 'ℹ️ Rigmaster Overview',
    body: `
      <p>The Rigmaster arm provides precision and strength for subsea construction. It is especially suited for valve turning, equipment handling, and detailed interventions.</p>
      <ul>
        <li><strong>Reach:</strong> Optimized for tight spaces</li>
        <li><strong>Controls:</strong> Master-arm or SCU-based</li>
        <li><strong>Common Use:</strong> Tool deployment and fastening</li>
      </ul>
    `
  },

  // 🚢 ROVs
  'Constructor 01': {
    title: 'ℹ️ Constructor 01 Overview',
    body: `
      <p>Early-generation WROV developed for deepwater inspection and intervention. Features compact layout and moderate hydraulic capacity.</p>
      <ul>
        <li><strong>Power:</strong> ~100 HP</li>
        <li><strong>Depth:</strong> 2,000–3,000 m</li>
        <li><strong>Usage:</strong> Inspection, small tooling</li>
      </ul>
    `
  },
  'Constructor 02': {
    title: 'ℹ️ Constructor 02 Overview',
    body: `
      <p>The second model in the Constructor ROV series, featuring upgraded power and better payload capacity over the original.</p>
      <ul>
        <li><strong>Thrusters:</strong> Enhanced positioning control</li>
        <li><strong>Payload:</strong> ~250 kg</li>
        <li><strong>Common Tools:</strong> Torque tools, water jet</li>
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
  'Constructor 06': {
    title: 'ℹ️ Constructor 06 Overview',
    body: `
      <p>The latest generation of the Constructor series, featuring enhanced telemetry, power efficiency, and advanced tooling management.</p>
      <ul>
        <li><strong>Upgrades:</strong> Real-time diagnostics and networked control</li>
        <li><strong>Deck Power:</strong> 400V or 690V</li>
        <li><strong>Deepwater:</strong> Standard 3,000 m rating</li>
      </ul>
    `
  },
  'Kystdesign TMS': {
    title: 'ℹ️ Kystdesign TMS Overview',
    body: `
      <p>This top-hat Tether Management System (TMS) from Kystdesign ensures safe and smooth deployment of ROVs to depth.</p>
      <ul>
        <li><strong>Winch:</strong> Drum or bullet-style</li>
        <li><strong>Tether Length:</strong> Up to 500 m</li>
        <li><strong>Features:</strong> Active heave compensation</li>
      </ul>
    `
  },
  'Malm Orstad TMS': {
    title: 'ℹ️ Malm Orstad TMS Overview',
    body: `
      <p>The Malm Orstad TMS is widely used across the offshore industry for its rugged build and reliable cable handling under harsh conditions.</p>
      <ul>
        <li><strong>Design:</strong> Reinforced for harsh environments</li>
        <li><strong>Depth:</strong> Up to 4,000 m tether support</li>
        <li><strong>Known For:</strong> Smooth cable payout/retrieval</li>
      </ul>
    `
  },

  // 🛠️ Tooling
  'Torque Tools': {
    title: 'ℹ️ Torque Tool Overview',
    body: `
      <p>ROV torque tools allow remote engagement of subsea valves and fasteners. Compatible with API 17H Class 1–4 interfaces and available in hydraulic or electric variants.</p>
      <ul>
        <li><strong>Standard:</strong> API 17H compliant</li>
        <li><strong>Types:</strong> FLOT, Non-compensated, Dual-speed</li>
        <li><strong>Mounting:</strong> Tool skids, hot-stab or wrist</li>
      </ul>
    `
  },

  // 📄 General
  'General': {
    title: 'ℹ️ General Overview',
    body: `
      <p>This section includes general checklists, documents, and forms used across different systems and campaigns.</p>
      <ul>
        <li><strong>Usage:</strong> Standard operating procedures</li>
        <li><strong>Format:</strong> PDF downloads</li>
        <li><strong>Audience:</strong> Offshore crew & engineers</li>
      </ul>
    `
  }
};

export function loadFilesPage() {
  const app = document.getElementById('app');
  if (!app) return;

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
        // Create top-level section
        const group = document.createElement('div');
        group.className = 'file-group';

        const header = document.createElement('button');
        header.className = 'file-group-header tab-btn';
        header.textContent = topLevel;
        group.appendChild(header);

        section.appendChild(group);

        // === On click, replace page content with subcategory view ===
        header.addEventListener('click', () => {
          // Clear main view and render subcategory page
          app.innerHTML = `
            <h2>📂 ${topLevel}</h2>
            <p class="page-subtext">Documents and manuals for ${topLevel.toLowerCase()}.</p>
            <div class="file-section"></div>
            <button class="guide-btn" id="backToFiles">⬅ Back to All Files</button>
          `;

          const innerSection = app.querySelector('.file-section');

          Object.entries(subGroups).forEach(([subCat, files]) => {
            const card = document.createElement('div');
            card.className = 'card';

            const infoAccordion = renderInfoAccordion(subCat);
            const fileEntries = `
              <div class="file-links-wrapper">
                ${files.map(file => renderFileEntry(file)).join('')}
                ${subCat === 'T4' ? renderT4VideoAccordion() : ''}
              </div>`;

            card.innerHTML = `
              <button class="card-header">${subCat}</button>
              <div class="card-body">
                ${infoAccordion}
                ${fileEntries}
              </div>
            `;

            innerSection.appendChild(card);
          });

          // Enable sub-card toggles
          innerSection.querySelectorAll('.card-header').forEach(btn => {
            btn.addEventListener('click', () => {
              const body = btn.nextElementSibling;
              const isOpen = body.classList.contains('open');
              innerSection.querySelectorAll('.card-body').forEach(b => {
                b.classList.remove('open');
                b.style.height = null;
              });
              if (!isOpen) {
                body.classList.add('open');
                body.style.height = 'auto';
              }
            });
          });

          innerSection.querySelectorAll('.info-header').forEach(btn => {
            btn.addEventListener('click', () => {
              const infoBody = btn.nextElementSibling;
              const cardBody = btn.closest('.card-body');
              const isOpen = infoBody.classList.contains('open');
              cardBody.querySelectorAll('.info-body').forEach(b => {
                b.classList.remove('open');
                b.style.maxHeight = null;
              });
              if (!isOpen) {
                infoBody.classList.add('open');
                requestAnimationFrame(() => {
                  infoBody.style.maxHeight = infoBody.scrollHeight + 'px';
                });
              } else {
                infoBody.classList.remove('open');
                infoBody.style.maxHeight = null;
              }
            });
          });

          document.getElementById('backToFiles')?.addEventListener('click', loadFilesPage);
        });
      });
    })
    .catch(err => {
      console.error('❌ Failed to load file list:', err);
      section.innerHTML = `<p class="error">Could not load files. Please try again later.</p>`;
    });
}

// === Render File Entry
function renderFileEntry(file) {
  const icon = getFileIcon(file.name);
  const fileUrl = file.url || '#';

  return `
    <div class="file-entry">
      <a class="file-link-btn flat-btn" href="${fileUrl}" target="_blank" rel="noopener">
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

// === Render System Info (e.g., T4 Overview)
function renderInfoAccordion(subCat) {
  // Normalize key for lookup
  const normalizedKey = subCat.trim().toLowerCase();
  const match = Object.keys(infoContentMap).find(
    key => key.trim().toLowerCase() === normalizedKey
  );

  const info = match ? infoContentMap[match] : null;
  if (!info) return '';

  return `
  <div class="file-entry overview-entry">
      <button class="info-header">${info.title}</button>
      <div class="info-body" style="max-height: 0; overflow: hidden;">
        ${info.body}
      </div>
    </div>
  `;
}

// === File Type to Emoji
function getFileIcon(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  if (ext === 'pdf') return '📄';
  if (['xls', 'xlsx', 'csv'].includes(ext)) return '📊';
  if (['doc', 'docx'].includes(ext)) return '📝';
  if (['png', 'jpg', 'jpeg', 'gif'].includes(ext)) return '🖼️';
  if (['zip', 'rar'].includes(ext)) return '🗜️';
  return '📁';
}

// === YouTube URL to Embed
function convertToEmbed(url) {
  const id = url.includes('watch?v=') ? url.split('watch?v=')[1] : url.split('/').pop();
  return `https://www.youtube.com/embed/${id}`;
}
