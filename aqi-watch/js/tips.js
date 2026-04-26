/*
  js/tips.js
  ──────────
  Renders the protective action tip cards.

  Each city in cities.js has a `tips` array with 4 items.
  This module just maps that array into HTML cards.

  To add more tips: edit the city's `tips` array in data/cities.js.
  To change the card layout: edit .tip-card in css/components.css.
*/

/**
 * Renders the tips grid for the current city.
 *
 * @param {object} cityData - one entry from the CITIES object
 */
function renderTips(cityData) {
  const container = document.getElementById('tipsGrid');

  container.innerHTML = cityData.tips
    .map(tip => `
      <div class="tip-card">
        <div class="tip-icon">${tip.icon}</div>
        <div class="tip-label">${tip.label}</div>
        <div class="tip-text">${tip.text}</div>
      </div>
    `)
    .join('');
}
