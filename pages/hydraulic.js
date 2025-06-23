// hydraulic.js – Hydraulic Maintenance Page Logic

export function loadHydraulicPage() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <section class="guide-card">
      <h2>💧 Hydraulic Maintenance</h2>
      <p class="page-subtext">This section provides essential hydraulic system details for Constructor ROVs. Always depressurize lines and wear PPE before servicing.</p>

      <div class="section-spacer"></div>
      <h3>🛢️ Hydraulic System – Overview (Constructor ROV Series)</h3>

      <div id="hydraulicOverviewWrapper" style="max-height: 6em; overflow: hidden; transition: max-height 0.4s ease">
        <div class="info-block">
          <h4>🎯 Purpose</h4>
          <p>
            The hydraulic system powers the ROV’s propulsion, tooling, manipulators, and auxiliary actuators. It is a critical energy system managed from the topside HPU and distributed subsea via solenoid control valves.
          </p>
          <p>
            Kystdesign Constructor ROVs use open-loop or closed-loop circuits depending on the function. Solenoid valves are routed via control pod relays and interface with the SCU topside for status and control.
          </p>
        </div>

        <div class="info-block">
          <h4>🧠 Key Specs</h4>
          <ul>
            <li><strong>Working Pressure:</strong> 210–250 bar (typical)</li>
            <li><strong>Fluid:</strong> Mineral or synthetic subsea-rated hydraulic fluid</li>
            <li><strong>Return:</strong> Open drain to tank with pressure compensation</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>🧩 Core Components</h4>
          <ul>
            <li><strong>✅ HPU (Hydraulic Power Unit):</strong> Topside power source for pump and reservoir</li>
            <li><strong>✅ Valve Packs:</strong> Subsea solenoid blocks with feedback</li>
            <li><strong>✅ Accumulators:</strong> Damp surge & provide boost pressure</li>
            <li><strong>✅ Filter Modules:</strong> Inline filtration for system cleanliness</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>🔧 Features</h4>
          <ul>
            <li>Multiple valve banks for tools, manipulators, thrusters</li>
            <li>Pressure & temperature sensors via SCU readout</li>
            <li>Over-pressure bypass protection</li>
            <li>Inline check valves and flow restrictors</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>📏 Typical Hydraulic Loads</h4>
          <ul>
            <li>Manipulators: 2–7 function blocks</li>
            <li>Thrusters: via integrated drive packs</li>
            <li>Tools: torque tools, cutters, jetters, dredgers</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>⚠️ Operator Notes</h4>
          <ul>
            <li>Check pressure relief settings regularly</li>
            <li>Log all valve overrides and isolation events</li>
            <li>Flush and filter fluids after new system installation</li>
            <li>Inspect for leaks after every dive or tooling change</li>
          </ul>
        </div>
      </div>

      <button class="toggle-expand-btn" id="togglePurpose" style="margin-top: 1rem; margin-bottom: 1.5rem; background: none; border: none; color: var(--primary); font-size: 0.95rem; font-weight: 600; cursor: pointer; padding: 0.3rem 0;">📖 Keep Reading</button>

      <div class="section-spacer"></div>
      <h3>📎 Downloadable Resources</h3>
      <ul class="link-list">
        <li><a href="#" target="_blank">📄 Hydraulic Block Diagram (PDF)</a></li>
        <li><a href="#" target="_blank">📄 Kystdesign Valve Pack Specs (PDF)</a></li>
      </ul>

      <div class="t4-video-section" style="margin-top: 2.5rem;">
        <h4 class="t4-video-heading">🎥 Hydraulic Training Videos</h4>
        <details class="video-joint">
          <summary class="joint-summary">Hydraulic Handling & Testing</summary>
          <ul class="video-list">
            <li><a href="https://youtu.be/PGZAVqxOGKM" target="_blank" class="video-link">▶ Hydraulic Valve Pack Leak Testing</a></li>
            <li><a href="https://youtu.be/ASCP6vNeEH0" target="_blank" class="video-link">▶ Understanding ROV HPU Basics</a></li>
          </ul>
        </details>
      </div>
    </section>
  `;

  // Expand/Collapse button logic
  setTimeout(() => {
    const wrapper = document.getElementById('hydraulicOverviewWrapper');
    const btn = document.getElementById('togglePurpose');
    if (wrapper && btn) {
      let expanded = false;
      btn.addEventListener('click', () => {
        expanded = !expanded;
        wrapper.style.maxHeight = expanded ? wrapper.scrollHeight + 'px' : '6em';
        wrapper.style.overflow = expanded ? 'visible' : 'hidden';
        btn.textContent = expanded ? '🔽 Show Less' : '📖 Keep Reading';
      });
    }
  }, 0);
}
