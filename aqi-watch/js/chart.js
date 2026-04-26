/*
  js/chart.js
  ───────────
  Manages the 24-hour AQI trend line chart using Chart.js.

  Why destroy-and-recreate on each city switch?
  Chart.js doesn't let you safely swap a dataset's array reference
  after creation without re-instantiating. Destroying first prevents
  canvas state leaks and ghost datasets.

  The gradient fill is created via a Chart.js callback so it
  always matches the canvas dimensions, even on resize.
*/

/* Module-level variable — holds the current Chart.js instance */
let trendChartInstance = null;

/**
 * Draws (or redraws) the 24-hour AQI trend chart.
 *
 * @param {number[]} history - array of 24 hourly AQI readings
 */
function renderChart(history) {
  /* x-axis labels: "0:00", "1:00", ... "23:00" */
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  const canvas = document.getElementById('trendChart');
  const ctx    = canvas.getContext('2d');

  /* Destroy the previous chart instance before creating a new one */
  if (trendChartInstance) {
    trendChartInstance.destroy();
    trendChartInstance = null;
  }

  trendChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: hours,
      datasets: [{
        data: history,
        borderColor: '#e0533a',   /* brand red-orange line */
        borderWidth: 2,
        pointRadius: 0,           /* no dots on the line itself */
        pointHoverRadius: 4,      /* dot appears on hover     */
        fill: true,
        /*
          Gradient fill: opaque at the top of the chart,
          transparent at the bottom. Created as a callback
          so Chart.js recalculates it if the canvas resizes.
        */
        backgroundColor: (context) => {
          const { chart } = context;
          const gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'rgba(224, 83, 58, 0.20)');
          gradient.addColorStop(1, 'rgba(224, 83, 58, 0)');
          return gradient;
        },
        tension: 0.4   /* smoothed curve, not jagged lines */
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,   /* respects the wrapper div's height */
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            /* Custom tooltip label: "AQI: 187" */
            label: (context) => `AQI: ${context.parsed.y}`
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#aaa',
            font: { size: 9 },
            maxTicksLimit: 6   /* show ~6 hour labels, not all 24 */
          },
          grid: { color: 'rgba(128, 128, 128, 0.1)' }
        },
        y: {
          min: 0,
          ticks: {
            color: '#aaa',
            font: { size: 9 }
          },
          grid: { color: 'rgba(128, 128, 128, 0.1)' }
        }
      }
    }
  });
}
