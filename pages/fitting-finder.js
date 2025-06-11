// pages/fitting-finder.js
export function loadFittingFinderPage() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Hydraulic Fitting Finder</h2>
    <div class="container">
      <div class="input-section">
        <label for="diameter">Enter Approx. Diameter (mm):</label>
        <input type="number" id="diameter" step="0.01" placeholder="Enter diameter" />
        <label for="type">Select Measurement Type:</label>
        <select id="type">
          <option value="outer">Outer Diameter</option>
          <option value="inner">Inner Diameter</option>
        </select>
        <button id="findBtn">Find Closest Matches</button>
      </div>
      <div id="result" class="result-section"></div>
    </div>
  `;

  document.getElementById('findBtn').addEventListener('click', findFitting);

  let fittings = [];

  async function loadFittings() {
    try {
      const res = await fetch('src/data/fittings2.json');
      fittings = await res.json();
    } catch (err) {
      console.error('Failed to load fittings:', err);
    }
  }

  async function findFitting() {
    const diameter = parseFloat(document.getElementById('diameter').value);
    const type = document.getElementById('type').value;

    if (!fittings.length) await loadFittings();
    if (!diameter) return alert('Please enter a valid diameter.');

    const prop = type === 'outer' ? 'od' : 'id';
    const sorted = fittings.map(f => ({
      fitting: f,
      diff: Math.abs(f[prop] - diameter)
    })).sort((a, b) => a.diff - b.diff);

    const rows = sorted.slice(0, 5).map((entry, i) => {
      const f = entry.fitting;
      const rowClass = i === 0 ? 'highlight bold' : '';
      return `
        <tr class="${rowClass}">
          <td>${f.od} mm</td>
          <td>${f.id ?? 'N/A'} mm</td>
          <td>${f.type}</td>
          <td>${f.thread}</td>
          <td>${f.tips || 'No tip available'}</td>
          <td>${entry.diff.toFixed(2)} mm</td>
        </tr>`;
    }).join('');

    const table = `
      <table class="result-table">
        <thead>
          <tr>
            <th>Outer Diameter</th>
            <th>Inner Diameter</th>
            <th>Type</th>
            <th>Thread</th>
            <th>Tips</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;

    document.getElementById('result').innerHTML = table;

    const bestMatch = document.querySelector('tr.highlight');
    if (bestMatch) {
      bestMatch.classList.add('highlight');
      setTimeout(() => bestMatch.classList.remove('highlight'), 2000);
    }
  }

  loadFittings();
}
