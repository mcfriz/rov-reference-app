// fiber.js – Fiber Maintenance Page Logic

export function loadFiberPage() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <section class="guide-card">
      <h2>📡 Fiber Installation & Maintenance</h2>
      <p class="page-subtext">This guide outlines basic fiber optic systems on ROVs. Always follow OEM and offshore safety standards.</p>

      <div class="section-spacer"></div>
      <h3>🔌 Fiber Optic System – Overview (Constructor 5 & 6 ROV)</h3>

      <div id="fiberOverviewWrapper" style="max-height: 6em; overflow: hidden; transition: max-height 0.4s ease">
        <div class="info-block">
          <h4>🎯 Purpose</h4>
          <p>
            The fiber optic system forms the high-speed data backbone of the Constructor 5 & 6 ROVs. It transmits control, telemetry, video, and survey data between topside and subsea over a single-mode optical fiber integrated into the umbilical.
          </p>
          <p>
            The system relies on coarse wavelength-division multiplexing (CWDM) to send multiple signal types over one fiber, minimizing the number of fibers needed in the umbilical. Diagnostics and modular control are achieved through Kystdesign's LINK architecture. Each LINK card handles video, serial, or optional signal types like Ethernet or PECL.
          </p>
        </div>

        <div class="info-block">
          <h4>🧠 Key Specs</h4>
          <ul>
            <li><strong>Fiber Type:</strong> Single-mode (1470 & 1490 nm CWDM)</li>
            <li><strong>Bandwidth Capacity:</strong>
              <ul>
                <li>8× composite video channels</li>
                <li>36× serial data channels (RS232/RS485)</li>
              </ul>
            </li>
            <li><strong>Update Rate:</strong> 20 Hz real-time control loop</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>🧩 Core Components</h4>
          <ul>
            <li><strong>✅ Control Pod (Subsea):</strong>
              <ul>
                <li>KD Con™ fiber system with modular backplane</li>
                <li>LINK module slots for:
                  <ul>
                    <li>AV LINK (video + serial)</li>
                    <li>Ethernet LINK (optional)</li>
                    <li>PECL LINK (optional)</li>
                  </ul>
                </li>
                <li>CWDM Multiplexers: multiple data over a single fiber</li>
                <li>Diagnostics: LED + Kystdesign GUI</li>
              </ul>
            </li>
            <li><strong>✅ Fiber Termination Box (Subsea):</strong>
              <ul>
                <li>Entry for umbilical fiber</li>
                <li>6× bulkhead connectors (1 active)</li>
                <li>Oil-filled isolation to Control Pod</li>
              </ul>
            </li>
            <li><strong>✅ Topside PXI Controller:</strong>
              <ul>
                <li>Real-time control host</li>
                <li>Interfaces:
                  <ul>
                    <li>RS232 to LINK modules</li>
                    <li>Ethernet to SCU & chairs</li>
                  </ul>
                </li>
                <li>Redundant fiber link</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="info-block">
          <h4>🔧 Features</h4>
          <ul>
            <li>CWDM Multiplexing: reduces fiber complexity</li>
            <li>Hot-swappable LINK Cards: easy service</li>
            <li>Diagnostics: live signal monitoring</li>
            <li>Redundancy: spare fibers in umbilical</li>
          </ul>
        </div>

        <div class="info-block">
          <h4>📡 Supported Signals</h4>
          <ul>
            <li>Composite PAL video</li>
            <li>Serial (RS232/RS485)</li>
            <li>Control: joystick, relays, dimming</li>
            <li>Optional:
              <ul>
                <li>HD-SDI video via Ethernet LINK</li>
                <li>Survey Ethernet & PECL timing</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="info-block">
          <h4>⚠️ Operator Notes</h4>
          <ul>
            <li>Use attenuators if Rx signal is too strong</li>
            <li>Avoid tight bends or kinks — microbend risk</li>
            <li>Use Kystdesign GUI diagnostics tab</li>
            <li>Use spare connectors for survey gear</li>
          </ul>
        </div>
      </div>
      <button class="toggle-expand-btn" id="togglePurpose" style="margin-top: 1rem; margin-bottom: 1.5rem; background: none; border: none; color: var(--primary); font-size: 0.95rem; font-weight: 600; cursor: pointer; padding: 0.3rem 0;">📖 Keep Reading</button>

      <div class="section-spacer"></div>
      <h3>🔧 UniCam® Toolkit – Field Termination</h3>
      <p><strong>TKT-UNICAM-PFC:</strong> high-performance installation kit for <strong>LC, SC, ST®</strong> connectors (no fusion splicer needed).</p>
      <ul>
        <li>Pre-polished connectors + cleaver</li>
        <li>Visual fault locator (VFL)</li>
        <li>Handheld tool with viewing window</li>
        <li>Includes case & cleaning gear</li>
      </ul>
      <p><strong>Documents and video links below.</strong></p>

      <div class="section-spacer"></div>
      <h3>📎 Downloadable Resources</h3>
      <ul class="link-list">
        <li><a href="https://drive.google.com/file/d/1OaOUxtdjDwQk44Wd7fh50GI75PjQWd-H/view?usp=drive_link" target="_blank">📄 UniCam® Connector Technology (PDF)</a></li>
        <li><a href="https://drive.google.com/file/d/1LkraQ0dbSzJuEkElZwbRLsrJhwLwJ7T5/view?usp=drive_link" target="_blank">📄 Installation Guide for the TKT-UNICAM-PFC Tool Kit (PDF)</a></li>
      </ul>

      <div style="margin-top: 2.5rem;"></div>
      <div class="t4-video-section">
        <h4 class="t4-video-heading">🎥 Fiber Training Videos</h4>
        <details class="video-joint">
          <summary class="joint-summary">Fiber Prep & Testing</summary>
          <ul class="video-list">
            <li><a href="https://youtu.be/wxkmdkihIO4?si=jliO6CSQb3ACvtWU" target="_blank" class="video-link">▶ Fiber Optic laser </a></li>
            <li><a href="https://youtu.be/1aH8nnn9WGM?si=xubbPRBcuxw4Z4I-" target="_blank" class="video-link">▶ What Is an OTDR?</a></li>
            <li><a href="https://youtu.be/DVCMDgLb9zE?si=6fCgnRz45NJOHoou" target="_blank" class="video-link">▶ Using a 1310/1550nm Laser Light Source</a></li>
          </ul>
        </details>
        <details class="video-joint">
          <summary class="joint-summary">UniCam® Field Termination</summary>
          <ul class="video-list">
            <li><a href="https://youtu.be/MVv5Ubj3QXs?si=GdJoKL8gCvOncNoH" target="_blank" class="video-link">▶ FBC-007 High Performance Cleaver</a></li>
            <li><a href="https://youtu.be/IYmfIpHDNHU?si=-p-M5aYiSUe9FtrP" target="_blank" class="video-link">▶ Preparing the UniCam</a></li>
            <li><a href="https://youtu.be/BpIEpb6ic6M?si=nbAoK64rjvP28QA7" target="_blank" class="video-link">▶ UniCam Fiber Termination</a></li>
          </ul>
        </details>
      </div>
    </section>
  `;

  // After rendering, hook up the toggle button
  setTimeout(() => {
    const wrapper = document.getElementById('fiberOverviewWrapper');
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
