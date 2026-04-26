/*
  js/health.js
  ────────────
  Updates the health advisory banner.

  The banner has:
  - A colored left border  (indicates severity)
  - A tinted background    (same color family, low opacity)
  - A bold title           (e.g. "Health Advisory — Very Unhealthy")
  - A description sentence

  All colors come from getCategoryStyle() → AQI_STYLES in aqiLevels.js.
  Changing a color there updates the banner automatically.
*/

/**
 * Updates the health advisory box for a given city.
 *
 * @param {object} cityData - one entry from the CITIES object
 */
function renderHealth(cityData) {
  const style = getCategoryStyle(cityData.category);

  const box   = document.getElementById('healthBox');
  const title = document.getElementById('healthTitle');
  const desc  = document.getElementById('healthDesc');

  /* Apply dynamic colors directly as inline styles */
  box.style.background   = style.bg;
  box.style.borderColor  = style.border;

  title.style.color      = style.text;
  title.textContent      = `Health Advisory — ${cityData.category}`;

  desc.textContent       = cityData.health;
}
