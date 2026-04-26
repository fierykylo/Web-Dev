/*
  data/aqiLevels.js
  ─────────────────
  Lookup tables for AQI category styling and pollutant thresholds.
  Centralising these means changing a color or limit updates
  everywhere at once — health box, pills, chart, bars — with no
  risk of inconsistency.

  AQI_STYLES: maps a category name → CSS color strings
  POLL_MAX:   the upper end of the pollutant bar (100% width)
  POLL_SAFE:  WHO safe daily average limit for each pollutant
*/

/* ── Category → color mapping ── */
const AQI_STYLES = {
  'Good': {
    text:   '#15803d',                  /* dark green text        */
    bg:     'rgba(21, 128, 61, 0.10)',  /* light green background */
    border: '#15803d'                   /* left-border on advisory */
  },
  'Moderate': {
    text:   '#b45309',
    bg:     'rgba(180, 83, 9, 0.10)',
    border: '#d97706'
  },
  'Unhealthy for sensitive': {
    text:   '#c2410c',
    bg:     'rgba(194, 65, 12, 0.10)',
    border: '#ea580c'
  },
  'Very Unhealthy': {
    text:   '#b91c1c',
    bg:     'rgba(185, 28, 28, 0.10)',
    border: '#dc2626'
  },
  'Hazardous': {
    text:   '#6d28d9',
    bg:     'rgba(109, 40, 217, 0.10)',
    border: '#7c3aed'
  }
};

/*
  Pollutant bar max values (µg/m³).
  When a reading equals POLL_MAX, the bar shows 100%.
  These are chosen to represent "severely polluted" — not WHO limits.
*/
const POLL_MAX = {
  pm25: 250,
  pm10: 430,
  no2:  200,
  o3:   100
};

/*
  WHO safe daily average limits (µg/m³).
  The pollutant bar turns orange above this, red above 2×.
  Source: WHO Global Air Quality Guidelines 2021.
*/
const POLL_SAFE = {
  pm25: 15,
  pm10: 45,
  no2:  40,
  o3:   60
};
