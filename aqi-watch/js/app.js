/*
  js/app.js
  ─────────
  The main controller. This is the entry point that ties
  everything together.

  It does two things:
  1. Exposes switchCity() — called by tab buttons onclick
  2. Runs init() on page load to render the default city

  FLOW:
  ┌─────────────┐
  │  Page loads │
  └──────┬──────┘
         │ init() picks 'Delhi' (first city in CITIES)
         ▼
  ┌─────────────────────────────────────────┐
  │  render(cityName)                       │
  │   ├─ renderTabs(cityName)               │  ← tabs.js
  │   ├─ renderAQIHero(cityData)            │  ← inline below
  │   ├─ renderPollutants(cityData)         │  ← pollutants.js
  │   ├─ renderHealth(cityData)             │  ← health.js
  │   ├─ renderChart(cityData.history)      │  ← chart.js
  │   └─ renderTips(cityData)              │  ← tips.js
  └─────────────────────────────────────────┘
         │
         │ User clicks a city tab
         ▼
  switchCity(newCityName) → render(newCityName)
*/

/* ── State ── */
let currentCity = null;

/**
 * Renders every section of the UI for the given city.
 * Calling this with a different city name is all it takes
 * to update the entire page.
 *
 * @param {string} cityName - must be a key in CITIES (data/cities.js)
 */
function render(cityName) {
  const cityData = CITIES[cityName];
  if (!cityData) {
    console.error(`City not found: "${cityName}". Check data/cities.js.`);
    return;
  }

  /* Update AQI hero section (big number + category pill) */
  renderAQIHero(cityData);

  /* Delegate each section to its own module */
  renderTabs(cityName);         /* js/tabs.js        */
  renderPollutants(cityData);   /* js/pollutants.js  */
  renderHealth(cityData);       /* js/health.js      */
  renderChart(cityData.history);/* js/chart.js       */
  renderTips(cityData);         /* js/tips.js        */
}

/**
 * Updates the main AQI card (number, category pill, trend text).
 * Kept here because it touches multiple elements but doesn't
 * warrant its own file.
 *
 * @param {object} cityData - one entry from the CITIES object
 */
function renderAQIHero(cityData) {
  const style = getCategoryStyle(cityData.category);

  /* Big AQI number — color reflects severity */
  const numEl = document.getElementById('aqiNum');
  numEl.textContent  = cityData.aqi;
  numEl.style.color  = aqiColor(cityData.aqi);

  /* Category pill — background + text color from AQI_STYLES */
  const catEl = document.getElementById('aqiCat');
  catEl.textContent        = cityData.category;
  catEl.style.background   = style.bg;
  catEl.style.color        = style.text;

  /* Trend string e.g. "+12 from yesterday" */
  document.getElementById('aqiTrend').textContent = cityData.trend;
}

/**
 * Called by city tab onclick handlers (built in js/tabs.js).
 * Updates state and re-renders the full UI.
 *
 * @param {string} cityName - city key from CITIES
 */
function switchCity(cityName) {
  currentCity = cityName;
  render(cityName);
}

/**
 * Runs once when the page first loads.
 * Picks the first city in CITIES as the default.
 */
function init() {
  /* Render ask buttons once — they don't change per city */
  renderAskButtons();   /* js/askButtons.js */

  /* Default to the first city listed in data/cities.js */
  const defaultCity = Object.keys(CITIES)[0];
  switchCity(defaultCity);
}

/* Kick everything off */
init();
