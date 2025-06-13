// pages/guide.js
export function loadGuidePage() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <section class="guide-container">
      <h2>Hydraulic Fitting Guide for ROV Operations</h2>

      <div class="guide-card">
        <h3>1. Introduction</h3>
        <p>This guide is for ROV technicians, supervisors, and engineers working offshore in subsea environments. It provides essential information on identifying, selecting, and safely using hydraulic fittings across a range of ROV systems, with practical guidance tailored to real-world conditions.</p>
      </div>

      <div class="guide-card">
        <h3>2. Common Hydraulic Fitting Types Used on ROVs</h3>
        <ul>
          <li><strong>JIC (37° Flare):</strong> Common on manipulators, hoses, and valve packs due to their high-pressure rating.</li>
          <li><strong>ORB (O-Ring Boss):</strong> Compact and ideal for manifold and sensor connections.</li>
          <li><strong>BSPP:</strong> Found on many European valves and components, uses bonded washers to seal.</li>
          <li><strong>NPT:</strong> Tapered thread fittings used on legacy or low-pressure systems.</li>
          <li><strong>DIN/Metric:</strong> Robust and vibration-resistant 24° cone fittings common in European equipment.</li>
          <li><strong>Ermeto:</strong> DIN 2353 metric style with 24° cone and cutting ring, compact and subsea-suitable.</li>
          <li><strong>Quick Disconnects (QDs):</strong> Tool-free connections found in tooling interfaces and hot stabs.</li>
        </ul>
      </div>

      <div class="guide-card">
        <h3>3. Fitting Identification Guide</h3>
        <ol>
          <li><strong>Clean the Fitting:</strong> Remove oil and corrosion for clear inspection.</li>
          <li><strong>Measure Thread Diameter (OD):</strong> Use calipers across thread crests.</li>
          <li><strong>Determine Thread Type:</strong> Use pitch gauges and inspect thread angle.</li>
          <li><strong>Check Seal Type:</strong> O-ring, flare face, bonded washer, or cone.</li>
          <li><strong>Look for Markings:</strong> Some fittings have codes or logos.</li>
          <li><strong>Use Thread ID Tools:</strong> Verify with Go/No-Go gauges or boards.</li>
        </ol>
      </div>

      <div class="guide-card">
        <h3>4. Fitting Selection Criteria</h3>
        <ul>
          <li><strong>Pressure Rating:</strong> Match or exceed system operating pressure.</li>
          <li><strong>Material Compatibility:</strong> Use 316 stainless or corrosion-safe alloys.</li>
          <li><strong>Seal Compatibility:</strong> Check hydraulic fluid compatibility.</li>
          <li><strong>Environmental Resistance:</strong> Consider vibration and seawater exposure.</li>
          <li><strong>Access & Orientation:</strong> Evaluate tool clearance and alignment.</li>
          <li><strong>Locking Features:</strong> Use retainer clips or locknuts in high-vibration zones.</li>
        </ul>
      </div>

      <div class="guide-card">
        <h3>5. Assembly Best Practices</h3>
        <ul>
          <li>Clean parts before assembly to avoid contamination.</li>
          <li>Apply correct torque per manufacturer spec.</li>
          <li>Use thread sealants only on tapered threads like NPT.</li>
          <li>Apply anti-galling paste to stainless threads.</li>
          <li>Mark after tightening with a paint pen for inspection.</li>
        </ul>
      </div>

      <div class="guide-card">
        <h3>6. Common Fitting Issues & Troubleshooting</h3>
        <table class="result-table">
          <thead>
            <tr>
              <th>Issue</th>
              <th>Possible Cause</th>
              <th>Corrective Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leaking fitting</td>
              <td>Damaged seal or incorrect fitting</td>
              <td>Inspect seal, verify type</td>
            </tr>
            <tr>
              <td>Thread galling</td>
              <td>Stainless threads assembled dry</td>
              <td>Use anti-seize or proper lube</td>
            </tr>
            <tr>
              <td>Loose after install</td>
              <td>No locking feature, vibration</td>
              <td>Use locknut or retention method</td>
            </tr>
            <tr>
              <td>Stripped threads</td>
              <td>Cross-thread or over-torque</td>
              <td>Replace part, inspect mating side</td>
            </tr>
            <tr>
              <td>Corrosion or pitting</td>
              <td>Seawater ingress, poor material</td>
              <td>Use duplex or coated fittings</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="guide-card">
        <h3>7. Safety Notes</h3>
        <ul>
          <li>Depressurize system before opening any fitting.</li>
          <li>Wear gloves, face shield, and coveralls.</li>
          <li>Log all hydraulic changes in the operations log.</li>
          <li>Dispose of hydraulic waste per environmental policy.</li>
        </ul>
      </div>
    </section>
  `;
}
