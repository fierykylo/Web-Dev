/*
  js/tabs.js
  ──────────
  Builds and manages the city selector tab row.

  Responsibilities:
  - Read the list of cities from the CITIES data object
  - Render a <button> for each city
  - Highlight the active city tab
  - Call app.switchCity() when a tab is clicked

  The tab row updates automatically whenever CITIES gains
  or loses a city entry — no changes needed in this file.
*/

/**
 * Renders the city tab buttons into #cityTabs.
 * Called once on startup and again when the active city changes.
 *
 * @param {string} activeCity - the key of the currently selected city
 */
function renderTabs(activeCity) {
  const container = document.getElementById('cityTabs');

  /* Build one button per city in the data layer */
  container.innerHTML = Object.keys(CITIES)
    .map(cityName => {
      const isActive = cityName === activeCity;
      return `<button
        class="city-tab ${isActive ? 'active' : ''}"
        onclick="switchCity('${cityName}')"
      >${cityName}</button>`;
    })
    .join('');
}
