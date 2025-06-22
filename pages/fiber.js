// fiber.js – Fiber Maintenance Page Logic

export function loadFiberPage() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <section class="guide-card">
      <h2>📡 Fiber Installation & Maintenance</h2>
      <p class="page-subtext">This guide outlines basic fiber optic systems on ROVs. Always follow OEM and offshore safety standards.</p>

      <h3>🧠 Overview: ROV Fiber Optic Systems (Kystdesign)</h3>
      <p>Fiber optics on Kystdesign ROVs such as the Constructor series are essential for high-speed data and video transmission between the ROV and topside. These systems use single-mode fiber integrated into the tether and routed through the slip ring, termination canister, and camera/data mux boards.</p>
      <ul>
        <li><strong>Connector Types:</strong> Commonly ST or LC. Always use manufacturer-approved boots and polish methods.</li>
        <li><strong>Routing Path:</strong> Fiber is routed from the tether splice point to the ROV termination canister, then internally to the SCU/Telemetry module.</li>
        <li><strong>Redundancy:</strong> Many systems include dual fiber paths to ensure continued operation if one strand is damaged.</li>
        <li><strong>Housing:</strong> Optical fibers are housed within armored sheath inside the umbilical, and inside gel-filled microducts within the ROV.</li>
        <li><strong>Risk Factors:</strong> Tight bends, vibration, crush points, and connector misalignment are leading causes of faults.</li>
        <li><strong>Testing:</strong> OTDR trace and light meter readings are required after termination and before deployment.</li>
      </ul>

      <h3>🔧 UniCam® Toolkit – Field Termination</h3>
      <p>The <strong>TKT-UNICAM-PFC</strong> is a high-performance installation toolkit designed for fast, reliable terminations of <strong>LC, SC, and ST® connectors</strong> without the need for fusion splicing.</p>
      <ul>
        <li>Pre-polished connectors and precision cleaver</li>
        <li>Visual fault locator (VFL) for termination verification</li>
        <li>Handheld installation tool with guidance window</li>
        <li>Case and cleaning accessories</li>
      </ul>
      <p><strong>Please see below for helpful documents and training videos for these tools.</strong></p>

      <h3>📎 Downloadable Resources</h3>
      <ul class="link-list">
        <li><a href="#" target="_blank">📄 Fiber Handling SOP (PDF)</a></li>
        <li><a href="#" target="_blank">📄 OTDR Test Template</a></li>
        <li><a href="#" target="_blank">📄 UniCam® Connector Instructions (PDF)</a></li>
        <li><a href="#" target="_blank">📄 UniCam® Toolkit User Guide</a></li>
        <li><a href="#" target="_blank">📺 Fiber Prep Video (YouTube)</a></li>
      </ul>
      <div class="t4-video-section">
  <h4 class="t4-video-heading">🎥 Fiber Training Videos</h4>
  <details class="video-joint">
    <summary class="joint-summary">Fiber Prep & Testing</summary>
    <ul class="video-list">
      <li><a href="https://youtu.be/example1" target="_blank" class="video-link">▶ Fiber Optic Connector Cleaning</a></li>
      <li><a href="https://youtu.be/1aH8nnn9WGM?si=xubbPRBcuxw4Z4I-" target="_blank" class="video-link">▶ What Is an OTDR?</a></li>
      <li><a href="https://youtu.be/DVCMDgLb9zE?si=6fCgnRz45NJOHoou" target="_blank" class="video-link">▶ How to use a 1310/1550nm dual wavelength single mode laser light source?</a></li>
    </ul>
  </details>
  <details class="video-joint">
    <summary class="joint-summary">UniCam® Field Termination</summary>
    <ul class="video-list">
      <li><a href="https://youtu.be/MVv5Ubj3QXs?si=GdJoKL8gCvOncNoH" target="_blank" class="video-link">▶ Introduction to the FBC-007 High Performance Cleaver</a></li>
           <li><a href="https://youtu.be/IYmfIpHDNHU?si=-p-M5aYiSUe9FtrP" target="_blank" class="video-link">▶ Preparing the UniCam</a></li>

      <li><a href="https://youtu.be/BpIEpb6ic6M?si=nbAoK64rjvP28QA7" target="_blank" class="video-link">▶ Terminating Your Fiber with a UniCam</a></li>
    </ul>
  </details>
</div>
    </section>
  `;
}
