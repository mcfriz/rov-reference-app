export async function loadFittingsPage() {
  const container = document.getElementById('app');
  container.innerHTML = '<h2>Fittings Calculator</h2><p>Loading data...</p>';

  try {
    const res = await fetch('./fittings.json');
    const data = await res.json();

    const table = document.createElement('table');
    table.innerHTML = `
      <tr><th>Fitting</th><th>Size (mm)</th><th>Size (inches)</th></tr>
      ${data.map(f => `<tr><td>${f.name}</td><td>${f.mm}</td><td>${(f.mm / 25.4).toFixed(2)}</td></tr>`).join('')}
    `;
    container.innerHTML = '';
    container.appendChild(table);
  } catch (err) {
    container.innerHTML = '<p>Error loading fittings data.</p>';
  }
}