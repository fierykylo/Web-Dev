/*
  js/utils.js
  ───────────
  Pure helper functions shared across all other JS modules.
  No DOM access here — these are just calculations and lookups.

  Why separate? So that any module can import these without
  pulling in unrelated UI code, and so they're easy to unit-test.
*/

/**
 * Returns a hex color for a given AQI number.
 * Used to color the big AQI number on the main card.
 *
 * @param  {number} value  - AQI reading (0–500+)
 * @returns {string}       - hex color string
 */
function aqiColor(value) {
  if (value <= 50)  return '#16a34a';   /* green   — Good               */
  if (value <= 100) return '#d97706';   /* amber   — Moderate            */
  if (value <= 150) return '#ea580c';   /* orange  — Unhealthy sensitive */
  if (value <= 200) return '#dc2626';   /* red     — Very Unhealthy      */
  return '#7c3aed';                     /* purple  — Hazardous           */
}

/**
 * Returns a hex color for a pollutant concentration
 * relative to its WHO safe limit.
 *
 * Green  = at or below safe limit
 * Amber  = between 1× and 2× the safe limit
 * Red    = more than 2× the safe limit
 *
 * @param  {number} value  - measured concentration
 * @param  {number} safe   - WHO safe daily average limit
 * @returns {string}       - hex color string
 */
function pollutantColor(value, safe) {
  if (value <= safe)      return '#16a34a';   /* green */
  if (value <= safe * 2)  return '#d97706';   /* amber */
  return '#dc2626';                           /* red   */
}

/**
 * Returns width as an integer percentage (0–100)
 * for a pollutant progress bar.
 *
 * @param  {number} value  - measured concentration
 * @param  {number} max    - value that represents 100% bar width
 * @returns {number}       - integer percentage 0–100
 */
function barPercent(value, max) {
  return Math.min(100, Math.round((value / max) * 100));
}

/**
 * Looks up AQI_STYLES for a category name.
 * Falls back to a neutral grey if the category isn't found.
 *
 * @param  {string} category  - e.g. 'Good', 'Hazardous'
 * @returns {object}          - { text, bg, border }
 */
function getCategoryStyle(category) {
  return AQI_STYLES[category] || {
    text:   '#555',
    bg:     '#eee',
    border: '#999'
  };
}
