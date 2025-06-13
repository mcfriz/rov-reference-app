// pages/guide.js
export function loadGuidePage() {
  const app = document.getElementById('app');
  if (!app) return console.error('#app not found');

  app.innerHTML = `
    <h2>Hydraulic Fitting Guide for ROV Operations</h2>
    <div class="guide-container">
      ${renderSection('1. Introduction', `
        <p>This guide is for ROV technicians, supervisors, and engineers working offshore in subsea environments. It provides essential information on identifying, selecting, and safely using hydraulic fittings across a range of ROV systems, with practical guidance tailored to real-world conditions.</p>
      `)}

      ${renderSection('2. Common Hydraulic Fitting Types Used on ROVs', `
        <ul>
          <li><strong>JIC (37° Flare):</strong> Metal-to-metal flare with UNF threads. Common in manipulators, hoses, and valve packs.</li>
          <li><strong>ORB (O-Ring Boss):</strong> Straight threads with O-ring seal. Ideal for manifolds and sensors.</li>
          <li><strong>BSPP:</strong> Parallel threads sealed with a bonded washer. Used in many European components.</li>
          <li><strong>NPT:</strong> Tapered threads that seal by interference. Typical for legacy equipment.</li>
          <li><strong>DIN/Metric (24° Cone):</strong> Compression-based 24° cone. Used in high-vibration, European-rated subsystems.</li>
          <li><strong>Ermeto:</strong> DIN 2353 cutting-ring metric fitting. Compact, stainless, vibration-resistant subsea use.</li>
          <li><strong>Quick Disconnects (QDs):</strong> Tool-free connect/disconnect. Great for tooling, hot stabs, and test access.</li>
        </ul>
      `)}

      ${renderSection('3. Fitting Identification Guide', `
        <ol>
          <li><strong>Clean the Fitting:</strong> Remove oil, grime, corrosion.</li>
          <li><strong>Measure Thread OD:</strong> Use calipers to measure crest-to-crest diameter.</li>
          <li><strong>Measure Thread Pitch:</strong> Use a gauge: 60° = UNF/JIC/ORB, 55° = BSP.</li>
          <li><strong>Inspect Seal Type:</strong> Determine if it’s flare face, O-ring, bonded washer, cone, or tapered.</li>
          <li><strong>Look for Markings:</strong> Like Parker or Ermeto code stamps.</li>
          <li><strong>Use Fitting Board:</strong> Go/No-Go gauge included in some ROV kits.</li>
          <li><strong>Confirm Identity:</strong> Compare with known fittings or OEM diagrams.</li>
        </ol>
      `)}

      ${renderSection('4. Fitting Selection Criteria', `
        <ul>
          <li><strong>Pressure Rating:</strong> Meet or exceed system pressure.</li>
          <li><strong>Material:</strong> Use 316 stainless or corrosion-resistant alloy for subsea.</li>
          <li><strong>Seal Compatibility:</strong> Ensure FKM/NBR O-ring works with fluid type.</li>
          <li><strong>Vibration Resistance:</strong> Consider design and coupling clamp.</li>
          <li><strong>Accessibility:</strong> Check for wrench clearance, bend radius, ease of disconnect.</li>
          <li><strong>Locking:</strong> Use clips, locknuts near high-vibration or mobile joints.</li>
        </ul>
      `)}

      ${renderSection('5. Assembly Best Practices', `
        <ul>
          <li><strong>Clean Components:</strong> Avoid contamination.</li>
          <li><strong>Use Correct Torque:</strong> Over/under torque causes leaks or damage.</li>
          <li><strong>Sealants:</strong> Use only on NPT. Never on flare or O-ring fittings.</li>
          <li><strong>Anti-Seize Paste:</strong> On stainless connections to prevent galling.</li>
          <li><strong>Witness Mark:</strong> Paint pen mark after final torque.</li>
        </ul>
      `)}

      ${renderSection('6. Common Fitting Issues & Troubleshooting', `
        <table>
          <tr><th>Issue</th><th>Cause</th><th>Action</th></tr>
          <tr><td>Leaking</td><td>Damaged seal/mis-ID/torque issue</td><td>Replace, verify fitting, torque properly</td></tr>
          <tr><td>Thread galling</td><td>Stainless-on-stainless with dry threads</td><td>Use anti-seize paste</td></tr>
          <tr><td>Loosening</td><td>No locking feature</td><td>Add locknuts or bracket</td></tr>
          <tr><td>Stripped threads</td><td>Cross-thread or overtight</td><td>Replace and carefully thread</td></tr>
          <tr><td>Corrosion</td><td>Wrong alloy or water ingress</td><td>Use 316/duplex, improve seal/drainage</td></tr>
        </table>
      `)}

      ${renderSection('7. Safety Notes', `
        <ul>
          <li>🔹 Ensure system is depressurized before loosening fittings.</li>
          <li>🔹 Wear PPE: gloves, face shield, coveralls.</li>
          <li>🔹 Record fitting changes in system log.</li>
          <li>🔹 Dispose of contaminated fluids/seals per environmental guidelines.</li>
        </ul>
      `)}
    </div>
  `;
}

function renderSection(title, contentHtml) {
  return `
    <div class="guide-section">
      <h3>${title}</h3>
      <div class="guide-body">
        ${contentHtml}
      </div>
    </div>
  `;
}
