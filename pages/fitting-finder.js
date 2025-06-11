// pages/fitting-finder.js
export async function loadFittingFinderPage() {
  const container = document.getElementById('app');
  container.innerHTML = `
    <h2>Fitting Finder</h2>
    <p>Select a fitting type or size to filter results:</p>
    <input type="text" id="fittingSearch" placeholder="Search by name or thread..." />
    <div id="results"></div>
  `;

  const res = await fetch('./fitting-finder-data.json');
  const data = await res.json();

  const input = document.getElementById('fittingSearch');
  const results = document.getElementById('results');

  function renderList(filtered) {
    if (filtered.length === 0) {
      results.innerHTML = '<p>No matches found.</p>';
      return;
    }
    results.innerHTML = filtered.map(f =>
      `<div class="fitting-card">
        <strong>${f.name}</strong><br/>
        Type: ${f.type}<br/>
        Thread: ${f.thread}<br/>
        Size: ${f.size_mm} mm
      </div>`
    ).join('');
  }

  renderList(data);

  input.addEventListener('input', () => {
    const term = input.value.toLowerCase();
    const filtered = data.filter(f =>
      f.name.toLowerCase().includes(term) ||
      f.thread.toLowerCase().includes(term)
    );
    renderList(filtered);
  });
}
