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

    const prop = type === 'outer' ? 'od' : 'id';
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

    const rows = sorted.slice(0, 5).map((entry, i) => {
      const f = entry.fitting;
      return `
        <tr class="${i === 0 ? 'highlight bold' : ''}">
          <td>${f.od ?? 'N/A'} mm</td>
          <td>${f.id ?? 'N/A'} mm</td>
          <td>${f.type}</td>
          <td>${f.thread}</td>
          <td>${f.tips && f.tips !== "NULL" ? f.tips : '—'}</td>
          <td>${entry.diff.toFixed(2)} mm</td>
        </tr>`;
    }).join('');

    resultDiv.innerHTML = `
      <table class="result-table">
        <thead>
          <tr>
            <th>Outer Diameter</th>
            <th>Inner Diameter</th>
            <th>Type</th>
            <th>Thread</th>
            <th>Tips</th>
            <th>Diff.</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;

    const bestMatch = document.querySelector('tr.highlight');
    if (bestMatch) {
      bestMatch.classList.add('highlight');
      setTimeout(() => bestMatch.classList.remove('highlight'), 2000);
    }
  }

  loadFittings().then(() => {
    findBtn?.addEventListener('click', findFitting);
  });
}
