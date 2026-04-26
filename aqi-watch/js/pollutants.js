/*
  js/pollutants.js
  ────────────────
  Renders the 2×2 pollutant card grid (PM2.5, PM10, NO₂, O₃).

  Each card shows:
  - Pollutant name
  - Current concentration value (colored green / amber / red)
  - Unit (µg/m³)
  - A thin progress bar showing % of the "max" scale

  The color coding uses pollutantColor() and barPercent()
  from utils.js, and the threshold constants from aqiLevels.js.
*/

/**
 * Renders the four pollutant cards into #pollGrid.
 *
 * @param {object} cityData - one entry from the CITIES object
 */
function renderPollutants(cityData) {
  /* Define which pollutants to show and in what order */
  const pollutants = [
    { key: 'pm25', label: 'PM2.5', value: cityData.pm25, unit: 'µg/m³' },
    { key: 'pm10', label: 'PM10',  value: cityData.pm10, unit: 'µg/m³' },
    { key: 'no2',  label: 'NO₂',   value: cityData.no2,  unit: 'µg/m³' },
    { key: 'o3',   label: 'O₃',    value: cityData.o3,   unit: 'µg/m³' }
  ];

  const container = document.getElementById('pollGrid');

  container.innerHTML = pollutants.map(p => {
    const color   = pollutantColor(p.value, POLL_SAFE[p.key]);
    const widthPct = barPercent(p.value, POLL_MAX[p.key]);

    return `
      <div class="poll-card">
        <div class="poll-name">${p.label}</div>
        <div class="poll-val" style="color: ${color};">${p.value}</div>
        <div class="poll-unit">${p.unit}</div>
        <div class="poll-bar-wrap">
          <div class="poll-bar" style="width: ${widthPct}%; background: ${color};"></div>
        </div>
      </div>
    `;
  }).join('');
}
