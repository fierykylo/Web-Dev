# AQI Watch — Air Quality Monitor

A clean, modular frontend project for monitoring air quality across Indian cities.
Built as a plain HTML/CSS/JS project — no build tools, no frameworks, no install needed.

---

## Project structure

```
aqi-watch/
│
├── index.html              ← Page skeleton + loads all files in order
│
├── css/
│   ├── reset.css           ← Strips browser defaults (runs first)
│   ├── layout.css          ← Page grid, spacing, responsive breakpoints
│   ├── components.css      ← Individual UI pieces (cards, tabs, buttons)
│   └── theme.css           ← All colors + dark mode (edit this to retheme)
│
├── data/
│   ├── cities.js           ← City data: AQI, pollutants, tips (edit to add cities)
│   └── aqiLevels.js        ← AQI category colors + WHO safe limits
│
└── js/
    ├── utils.js            ← Pure helper functions (no DOM access)
    ├── tabs.js             ← City selector tab buttons
    ├── pollutants.js       ← PM2.5 / PM10 / NO2 / O3 cards
    ├── health.js           ← Health advisory banner
    ├── chart.js            ← 24-hour AQI trend chart (Chart.js)
    ├── tips.js             ← Protective action tip cards
    ├── askButtons.js       ← Quick-ask buttons (wire to AI API here)
    └── app.js              ← Main controller — ties everything together
```

---

## How to run

Just open `index.html` in any browser. No server, no install, no build step.

```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## How it works (data flow)

```
Page load
   │
   ▼
index.html loads all <script> tags in order:
  data/cities.js     → creates global CITIES object
  data/aqiLevels.js  → creates AQI_STYLES, POLL_MAX, POLL_SAFE
  js/utils.js        → helper functions available to all modules
  js/tabs.js         → renderTabs()
  js/pollutants.js   → renderPollutants()
  js/health.js       → renderHealth()
  js/chart.js        → renderChart()
  js/tips.js         → renderTips()
  js/askButtons.js   → renderAskButtons(), handleAskQuestion()
  js/app.js          → init() runs last, calls render('Delhi')
   │
   ▼
render(cityName)  [in app.js]
  ├─ renderAQIHero()       updates the big number + category pill
  ├─ renderTabs()          highlights the active city tab
  ├─ renderPollutants()    draws PM2.5, PM10, NO2, O3 cards
  ├─ renderHealth()        updates advisory banner color + text
  ├─ renderChart()         destroys old chart, draws new one
  └─ renderTips()          renders 4 tip cards

User clicks a tab
  └─ switchCity(name) → render(name)  — full re-render
```

---

## How to add a city

Open `data/cities.js` and add a new entry to the `CITIES` object:

```js
'Kolkata': {
  aqi: 134,
  trend: '+8 from yesterday',
  pm25: 55, pm10: 110, no2: 44, o3: 31,
  history: [140, 138, 135, ...],   // 24 hourly values
  category: 'Unhealthy for sensitive',
  health: 'Your health message here.',
  tips: [
    { icon: '😷', label: 'Wear a mask', text: 'Tip text here.' },
    ...
  ]
}
```

A new tab appears automatically — no other file needs changing.

---

## How to connect live AQI data

Replace the hardcoded values in `data/cities.js` with a fetch call.

**OpenAQ API (free, no key needed for basic use):**

```js
async function loadCityData(cityName) {
  const res  = await fetch(`https://api.openaq.org/v2/latest?city=${cityName}&country=IN`);
  const json = await res.json();
  // Map json.results to CITIES[cityName].pm25, .pm10, etc.
}
```

**CPCB India (official government data):**
https://app.cpcbccr.com/ccr/

**IQAir API (paid, most reliable):**
https://www.iqair.com/in-en/air-quality-api

---

## How to connect AI answers (askButtons.js)

In `js/askButtons.js`, replace `handleAskQuestion()`:

```js
async function handleAskQuestion(question) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'YOUR_KEY_HERE',
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      messages: [{ role: 'user', content: question }]
    })
  });
  const data = await response.json();
  // Render data.content[0].text somewhere on the page
}
```

Note: never expose API keys in frontend JS for a public site.
Use a small backend (Node/Python/etc.) to proxy the request instead.

---

## CSS architecture

| File            | What it controls                        | When to edit it          |
|-----------------|-----------------------------------------|--------------------------|
| reset.css       | Browser default removal                 | Almost never             |
| layout.css      | Grid columns, spacing, breakpoints      | Changing page structure  |
| components.css  | Card shapes, font sizes, padding        | Tweaking individual bits |
| theme.css       | Every color + dark mode                 | Rebranding / theming     |

---

## Dependencies

| Dependency  | Version | How it's loaded           |
|-------------|---------|---------------------------|
| Chart.js    | 4.4.1   | CDN `<script>` in HTML    |
| Syne font   | —       | Google Fonts `<link>`     |
| DM Mono     | —       | Google Fonts `<link>`     |

No npm, no bundler, no build step required.
