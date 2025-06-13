// pages/fitting-finder.js
export function loadFittingFinderPage() {
  const app = document.getElementById('app');
  if (!app) return console.error("Element #app not found.");

  app.innerHTML = `
    <h2>Hydraulic Fitting Finder</h2>
    <div class="container">
      <div class="input-section">
        <label for="diameter">Enter Approx. Diameter (mm):</label>
        <input type="number" id="diameter" step="0.01" placeholder="e.g. 12.7" />
        
        <label for="type">Measurement Type:</label>
        <select id="type">
          <option value="outer">Outer Diameter</option>
          <option value="inner">Inner Diameter</option>
        </select>
        
        <button id="findBtn">Find Closest Matches</button>
      </div>
      <div id="result" class="result-section"></div>
    </div>
  `;

  const resultDiv = document.getElementById('result');
  const findBtn = document.getElementById('findBtn');
  let fittings = [];

  async function loadFittings() {
    try {
      const res = await fetch('fitting-finder-data.json');
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      fittings = await res.json();
      console.log('✅ Fittings loaded:', fittings.length);
    } catch (err) {
      console.error('❌ Failed to load fittings:', err);
      resultDiv.innerHTML = `<p class="error">Failed to load fitting data. Please try again later.</p>`;
    }
  }

  async function findFitting() {
    const diameterInput = document.getElementById('diameter');
    const typeSelect = document.getElementById('type');

    const diameter = parseFloat(diameterInput.value);
    const type = typeSelect.value;

    if (isNaN(diameter) || diameter <= 0) {
      alert('Please enter a valid positive number for diameter.');
      return;
    }

    if (!fittings.length) {
      alert('Fitting data not loaded yet.');
      return;
    }

    const isOuter = type === 'outer';
    const prop = isOuter ? 'od' : 'id';

    const sorted = fittings
      .filter(f => f[prop] !== undefined)
      .map(f => ({
        fitting: f,
        diff: Math.abs(f[prop] - diameter)
      }))
      .sort((a, b) => a.diff - b.diff);

    if (sorted.length === 0) {
      resultDiv.innerHTML = `<p>No matching fittings found.</p>`;
      return;
    }

    const headers = `
      <tr>
        <th>${isOuter ? 'Outer Diameter' : 'Inner Diameter'}</th>
        <th>Fittings Type</th>
        <th>Thread</th>
        <th>Tips</th>
        <th>Size Differance</th>
      </tr>`;

    const rows = sorted.slice(0, 5).map((entry, i) => {
      const f = entry.fitting;
      const diameterValue = isOuter ? f.od : f.id;
      return `
        <tr class="${i === 0 ? 'highlight bold' : ''}">
          <td>${diameterValue ?? 'N/A'} mm</td>
          <td>${f.type}</td>
          <td>${f.thread}</td>
          <td>${f.tips && f.tips !== "NULL" ? f.tips : '—'}</td>
          <td>${entry.diff.toFixed(2)} mm</td>
        </tr>`;
    }).join('');

    resultDiv.innerHTML = `
      <table class="result-table">
        <thead>${headers}</thead>
        <tbody>${rows}</tbody>
      </table>
    `;

    const bestMatch = document.querySelector('tr.highlight');
    if (bestMatch) {
      bestMatch.classList.add('highlight');
      // setTimeout(() => bestMatch.classList.remove('highlight'), 2000);
    }
  }

  const guideButtonWrap = document.createElement('div');
guideButtonWrap.className = 'finder-button-wrap';
guideButtonWrap.innerHTML = `
  <span>📘 <strong>Need help with hydraulic fittings?</strong> View the Fitting Guide:</span>
  <a href="#/guide" class="guide-btn small-btn"><strong>Open Fitting Guide</strong></a>
`;
app.appendChild(guideButtonWrap);


  
  function addInfoSections() {
    const wrapper = document.createElement('div');
    wrapper.className = 'info-wrapper';
    wrapper.innerHTML = `
      <div class="card">
        <button class="card-header">ℹ️ About This Tool</button>
        <div class="card-body">
          <p>This tool helps you identify hydraulic fittings by measuring outer or inner diameter. It shows closest matches, thread type, and tips.</p>
        </div>
      </div>

      <div class="card">
        <button class="card-header">📏 How to Measure</button>
        <div class="card-body">
          <p>Use a caliper and follow these steps:</p>
          <ol>
            <li><strong>Outer Diameter (OD):</strong> Place the outer jaws of the caliper on the outside edges of the fittings thread.</li>
            <li><strong>Inner Diameter (ID):</strong> Use the inner jaws to measure the inner opening of the fittings thread.</li>
          </ol>
          <img
            src="images/how-to-measure.jpg"
            alt="How to measure outer and inner diameter with calipers"
            class="measure-img"
          />
          <p>For accuracy, measure to at least <strong>0.1 mm</strong> with digital or precision calipers.</p>
        </div>
      </div>

      <div class="card">
        <button class="card-header">🧵 Fitting Types Explained</button>
        <div class="card-body">
          <ul>
            <li><strong>Ermeto</strong>: Ermeto fittings are DIN 2353 metric compression fittings with a 24° cone and cutting ring, commonly used in European hydraulic systems. They provide a secure, vibration-resistant, metal-to-metal seal.</li>
            <li><strong>BSP</strong>: BSPP fittings have parallel threads and seal using a bonded washer (e.g. Dowty seal) against a flat face. Often found on European and legacy ROV equipment, especially valves and cylinders.</li>
            <li><strong>NPT</strong>: NPT fittings have tapered threads that seal by thread interference, typically using thread tape or sealant. They are less common offshore now but still found on older systems and low-pressure lines.</li>
            <li><strong>JIC</strong>: JIC fittings use a 37° metal-to-metal flare to create a high-pressure seal, with UNF straight threads. They’re widely used on ROVs for hoses, manipulators, and valve packs due to their reliability and ease of service.</li>
            <li><strong>ORFS</strong>: ORB fittings use straight threads and a captured O-ring to form a leak-free face seal. They’re common in manifolds, pressure ports, and hydraulic blocks where compact, high-pressure connections are needed.</li>
          </ul>
        </div>
      </div>
    `;
    resultDiv.insertAdjacentElement('afterend', wrapper);

    wrapper.querySelectorAll('.card-header').forEach(btn => {
      btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        const isOpen = body.style.maxHeight;
        wrapper.querySelectorAll('.card-body').forEach(b => (b.style.maxHeight = null));
        if (!isOpen) body.style.maxHeight = body.scrollHeight + 'px';
      });
    });
  }

  loadFittings().then(() => {
    findBtn?.addEventListener('click', findFitting);
    addInfoSections();
  });
}
