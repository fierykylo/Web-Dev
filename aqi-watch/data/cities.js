/*
  data/cities.js
  ──────────────
  The data layer. This is the ONLY file you need to edit
  when adding a new city or updating values.

  In a real app, you'd replace the hardcoded values here
  with a fetch() call to an AQI API (OpenAQ, CPCB, IQAir).
  The structure of each city object would stay the same —
  only the values would come from the API response.

  HOW TO ADD A CITY:
  1. Copy one of the blocks below.
  2. Change the key (e.g. 'Kolkata').
  3. Fill in real or estimated values.
  4. A tab for the city will appear automatically — no other file needs changing.
*/

const CITIES = {

  'Delhi': {
    aqi: 187,
    trend: '+12 from yesterday',
    /*
      Pollutant concentrations in µg/m³.
      WHO safe limits: PM2.5 ≤15, PM10 ≤45, NO2 ≤40, O3 ≤60
    */
    pm25: 89,
    pm10: 163,
    no2: 54,
    o3: 28,
    /*
      24 hourly AQI readings for the trend chart.
      Index 0 = midnight (00:00), index 23 = 11 PM.
    */
    history: [210,195,180,165,158,142,137,155,170,185,192,187,
              180,172,168,175,183,187,191,187,182,176,170,187],
    category: 'Very Unhealthy',
    health: 'Significant health risk for everyone. Elderly, children, and people with heart/lung disease face serious health effects.',
    tips: [
      { icon: '🏠', label: 'Stay indoors',    text: 'Keep windows and doors shut. Use air purifiers with HEPA filters.' },
      { icon: '😷', label: 'Wear N95 mask',   text: 'If you must go out, wear a well-fitted N95 or P100 respirator.' },
      { icon: '🌿', label: 'Indoor plants',   text: 'Spider plants & peace lilies help absorb pollutants indoors.' },
      { icon: '🚗', label: 'Avoid driving',   text: 'Use public transport or WFH to reduce your contribution.' }
    ]
  },

  'Mumbai': {
    aqi: 112,
    trend: '-5 from yesterday',
    pm25: 41, pm10: 88, no2: 38, o3: 45,
    history: [130,125,118,108,100,95,88,92,102,110,115,112,
              108,105,103,107,110,114,116,112,109,106,103,112],
    category: 'Unhealthy for sensitive',
    health: 'Sensitive groups — children, elderly, those with asthma — may experience health effects.',
    tips: [
      { icon: '🏃', label: 'Reduce outdoor exercise', text: 'Sensitive groups should limit prolonged outdoor exertion at peak hours.' },
      { icon: '🌊', label: 'Sea breeze advantage',    text: 'Coastal areas have cleaner air — morning walks near the shore are better.' },
      { icon: '😷', label: 'Mask optional',           text: 'A surgical mask provides light protection for short exposures.' },
      { icon: '🏥', label: 'Check medications',       text: 'If you have asthma, carry your inhaler when going out.' }
    ]
  },

  'Bengaluru': {
    aqi: 68,
    trend: '-3 from yesterday',
    pm25: 22, pm10: 44, no2: 28, o3: 32,
    history: [75,72,68,62,58,55,52,55,60,65,68,70,
              68,66,64,65,67,69,70,68,66,65,63,68],
    category: 'Moderate',
    health: 'Air quality is acceptable. However, there may be a moderate health concern for a small number of unusually sensitive people.',
    tips: [
      { icon: '🌳', label: 'Enjoy green spaces', text: 'Cubbon Park and Lalbagh have significantly cleaner air than busy roads.' },
      { icon: '🚲', label: 'Cycle to work',      text: 'Traffic corridors have 3x higher pollution than side streets.' },
      { icon: '🪟', label: 'Open windows',       text: 'Natural ventilation is fine. Morning air (5–8 AM) is cleanest.' },
      { icon: '🌱', label: 'Plant trees',        text: 'Every tree planted improves local AQI. Join urban greening programs.' }
    ]
  },

  'Chennai': {
    aqi: 45,
    trend: 'Stable',
    pm25: 14, pm10: 32, no2: 18, o3: 28,
    history: [50,48,45,42,40,38,36,38,42,44,46,45,
              44,43,42,43,44,45,46,45,44,43,42,45],
    category: 'Good',
    health: 'Air quality is satisfactory and poses little or no risk. Great day to be outdoors!',
    tips: [
      { icon: '🏖️', label: 'Outdoor activities', text: 'Excellent conditions for jogging, cycling, and outdoor sports all day.' },
      { icon: '🌬️', label: 'Sea breeze helps',   text: 'Coastal winds from the Bay of Bengal keep pollutants dispersed.' },
      { icon: '🌻', label: 'Air is clean',        text: 'AQI below 50 means minimal health risk for all groups.' },
      { icon: '📊', label: 'Stay informed',       text: 'Monitor AQI during Diwali — levels spike temporarily.' }
    ]
  }

};
