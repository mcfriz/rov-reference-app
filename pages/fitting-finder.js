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

    let output = \`
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
    \`;

    for (let i = 0; i < 5 && i < sorted.length; i++) {
      const { fitting, diff } = sorted[i];
      output += \`
        <tr class="\${i === 0 ? 'highlight bold' : ''}">
          <td>\${fitting.od} mm</td>
          <td>\${fitting.id ?? 'N/A'} mm</td>
          <td>\${fitting.type}</td>
          <td>\${fitting.thread}</td>
          <td>\${fitting.tips || 'No tip available'}</td>
          <td>\${diff.toFixed(2)} mm</td>
        </tr>
      \`;
    }

    output += '</tbody></table>';
    document.getElementById('result').innerHTML = output;

    const bestMatch = document.querySelector('tr.highlight');
    if (bestMatch) {
      bestMatch.classList.add('highlight');
      setTimeout(() => bestMatch.classList.remove('highlight'), 2000);
    }
  }

  loadFittings();
}
