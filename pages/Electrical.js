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
            The electrical system delivers and manages all power and signal distribution required by the Constructor 5 & 6 ROVs. It supports propulsion, lighting, sensors, manipulators, control electronics, and survey gear through a robust and modular DC power framework.
          </p>
        </div>

        <div class="info-block">
          <h4>⚡ Key Specs</h4>
          <ul>
            <li><strong>Primary Voltage Supply:</strong> 3000 VDC (nominal) from topside</li>
            <li><strong>ROV Bus Voltage:</strong> 400 VDC distribution subsea</li>
            <li><strong>Control Electronics:</strong> 24 VDC (regulated from 400 VDC)</li>
            <li><strong>Lighting:</strong> 400 VDC dimmable via PWM drivers</li>
            <li><strong>Total Power Capacity:</strong> Up to ~100 kW subsea depending on loadout</li>
            <li><strong>Protection:</strong> Fully fused & monitored via GUI + software alarms</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>🔧 Core Components</h4>
          <ul>
            <li><strong>✅ Topside Power Supply Unit (PSU):</strong>
              <ul>
                <li>Converts vessel AC power (typically 440V 3-phase) to 3000 VDC</li>
                <li>Fiber-isolated control and monitoring</li>
                <li>Safety interlocks, E-stops, and RCDs built-in</li>
                <li>Controlled via SCU (Surface Control Unit)</li>
              </ul>
            </li>
            <li><strong>✅ Umbilical Cable:</strong>
              <ul>
                <li>Carries 3000 VDC, fiber optic, and optional hydraulic lines</li>
                <li>Designed for minimal voltage drop over full depth</li>
                <li>Includes armor and strength members for mechanical load</li>
              </ul>
            </li>
            <li><strong>✅ Subsea Electrical Distribution (in Control Pod):</strong>
              <ul>
                <li>Main DC/DC Converter: Steps down 3000 VDC to 400 VDC</li>
                <li>Internal Bus: 400 VDC routed to thrusters, lights, tools, etc.</li>
                <li>DC-DC Converters: Generate 24 VDC for logic circuits, control boards, sensors</li>
                <li>PWM Drivers: Control lighting brightness and soft-start functions</li>
                <li>Fused Power Distribution Board: Modular, with GUI reporting for each circuit</li>
              </ul>
            </li>
            <li><strong>✅ Thruster Power:</strong>
              <ul>
                <li>400 VDC directly powers each Kystdesign thruster</li>
                <li>Each thruster circuit has:
                  <ul>
                    <li>Soft-start</li>
                    <li>Current monitoring</li>
                    <li>Individual trip protection</li>
                  </ul>
                </li>
                <li>Real-time current draw & fault status shown on GUI</li>
              </ul>
            </li>
            <li><strong>✅ Manipulator & Tooling Power:</strong>
              <ul>
                <li>Hydraulic solenoids powered via 24 VDC</li>
                <li>Optional auxiliary 400 VDC outlets for heavy tooling (e.g. cutters, torque tools)</li>
                <li>Tooling relays controlled via GUI or mapped to joystick inputs</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="info-block">
          <h4>📟 Control & Monitoring</h4>
          <ul>
            <li>Kystdesign GUI (via PXI & Ethernet):
              <ul>
                <li>Shows power status, voltages, and trip alarms</li>
                <li>Allows reset of tripped circuits</li>
                <li>Displays current draw for each thruster, tool, and circuit</li>
              </ul>
            </li>
            <li>Event Logging: Logs undervoltage, trips, and E-stop triggers for diagnostics</li>
            <li>E-Stop Chain: Includes topside, ROV, and TMS interlocks</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>📦 Features & Redundancy</h4>
          <ul>
            <li>Modular Power Cards: Hot-swappable in control pod</li>
            <li>Circuit Isolation: Short/fault on one tool does not affect others</li>
            <li>Remote Resettable Fuses: Software-enabled power cycling</li>
            <li>Emergency Power Down: Global or per-channel power cut from topside</li>
            <li>Optional Redundant PSU: On some systems for critical redundancy</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>⚠️ Operator Notes</h4>
          <ul>
            <li>Always check thruster current draw after startup — may indicate water ingress or motor jam</li>
            <li>If a circuit trips repeatedly, check tool or connector for faults before reset</li>
            <li>Use GUI logs to review cause of trips or undervoltage events</li>
            <li>Power modules are live when umbilical connected — observe safe isolation during maintenance</li>
            <li>Confirm correct voltage rails (24V, 400V) before deploying new tools</li>
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
