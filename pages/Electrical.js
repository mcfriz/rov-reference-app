// electrical.js – Electrical Maintenance Page Logic

export function loadElectricalPage() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <section class="guide-card">
      <h2>⚡ Electrical Maintenance</h2>
      <p class="page-subtext">This guide outlines key electrical systems and handling procedures for ROVs. Always isolate power and follow proper lockout/tagout protocols before servicing.</p>

      <div class="section-spacer"></div>
      <h3>🔌 Electrical System – Overview (Constructor 5 & 6 ROV)</h3>

      <div id="electricalOverviewWrapper" style="max-height: 6em; overflow: hidden; transition: max-height 0.4s ease">
        <div class="info-block">
          <h4>🎯 Purpose</h4>
          <p>
            The electrical system in Constructor ROVs distributes power, interfaces with control units, and supplies voltage to tooling, lighting, and sensors.
          </p>
          <p>
            It integrates with the ROV’s control pod and SCU via low- and high-voltage subsystems. Power conditioning, isolation, and distribution are handled by modular components mounted in the electronics bay.
          </p>
        </div>

        <div class="info-block">
          <h4>🧠 Key Specs</h4>
          <ul>
            <li><strong>Input Voltage:</strong> 3-phase 380–480 V AC</li>
            <li><strong>Subsea DC Bus:</strong> 24 V and 300 V DC rails</li>
            <li><strong>Surge Protection:</strong> MOV and fuse protected circuits</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>🧩 Core Components</h4>
          <ul>
            <li><strong>✅ Main Breaker Panel:</strong> Distribution of 3-phase AC</li>
            <li><strong>✅ DC/DC Converters:</strong> Step-down for logic and sensor supply</li>
            <li><strong>✅ Relay Boards:</strong> Isolated switching to lighting, solenoids, pumps</li>
            <li><strong>✅ Power Filters:</strong> EMI suppression on sensitive circuits</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>🔧 Features</h4>
          <ul>
            <li>Modular component layout for rapid swaps</li>
            <li>Remote voltage monitoring via SCU</li>
            <li>Fused and labelled outputs on all high voltage lines</li>
            <li>Optional UPS support for safety-critical systems</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>⚙️ Typical Loads</h4>
          <ul>
            <li>24 V: sensors, relays, LED lighting, cameras</li>
            <li>300 V: thrusters, manipulator pumps, tooling valves</li>
            <li>AC passthroughs: for onboard chargers or external tools</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>⚠️ Operator Notes</h4>
          <ul>
            <li>Confirm isolation before disconnecting any high-voltage cable</li>
            <li>Inspect subsea connectors for corrosion or trapped water</li>
            <li>Use thermal camera or IR thermometer for hotspot checks</li>
            <li>Use correct polarity and fusing when wiring any tool</li>
          </ul>
        </div>
      </div>

      <button class="toggle-expand-btn" id="togglePurpose" style="margin-top: 1rem; margin-bottom: 1.5rem; background: none; border: none; color: var(--primary); font-size: 0.95rem; font-weight: 600; cursor: pointer; padding: 0.3rem 0;">📖 Keep Reading</button>

      <div class="section-spacer"></div>
      <h3>📎 Downloadable Resources</h3>
      <ul class="link-list">
        <li><a href="#" target="_blank">📄 Constructor 5 Electrical Diagram (PDF)</a></li>
        <li><a href="#" target="_blank">📄 Electrical Fault-Finding Flowchart (PDF)</a></li>
      </ul>

      <div class="t4-video-section" style="margin-top: 2.5rem;">
        <h4 class="t4-video-heading">🎥 Electrical Training Videos</h4>
        <details class="video-joint">
          <summary class="joint-summary">Safety & Fault Finding</summary>
          <ul class="video-list">
            <li><a href="https://youtu.be/nTqM6Zq_OoY" target="_blank" class="video-link">▶ Basic Electrical Isolation for Technicians</a></li>
            <li><a href="https://youtu.be/U_R7RUPnWGM" target="_blank" class="video-link">▶ ROV Fault-Finding Tips – Power</a></li>
          </ul>
        </details>
      </div>
    </section>
  `;

  // Toggle logic for overview collapse
  setTimeout(() => {
    const wrapper = document.getElementById('electricalOverviewWrapper');
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
