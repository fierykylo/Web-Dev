/*
  js/askButtons.js
  ────────────────
  Renders the "quick ask" buttons at the bottom of the page.

  In this demo they open a native browser alert().
  In a real deployment you'd replace the onclick handler
  to call your AI/chatbot API instead:

    Example with Anthropic API:
    ───────────────────────────
    async function askQuestion(question) {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': YOUR_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 500,
          messages: [{ role: 'user', content: question }]
        })
      });
      const data = await response.json();
      // Show data.content[0].text in a modal or chat panel
    }
*/

/* Questions shown as buttons — edit this array to change them */
const QUICK_QUESTIONS = [
  'What are the long-term health effects of breathing air with AQI above 150 daily?',
  'How can city governments and individuals reduce air pollution in dense urban areas?',
  'Which air purifiers are most effective for PM2.5 removal indoors?'
];

/**
 * Renders the quick-ask buttons into #askSection.
 * Called once on page load — questions don't change per city.
 */
function renderAskButtons() {
  const container = document.getElementById('askSection');

  container.innerHTML = QUICK_QUESTIONS
    .map(question => `
      <button
        class="ask-btn"
        onclick="handleAskQuestion(this.dataset.question)"
        data-question="${question.replace(/"/g, '&quot;')}"
      >${question} ↗</button>
    `)
    .join('');
}

/**
 * Handles a question button click.
 * Replace the body of this function to connect your AI API.
 *
 * @param {string} question - the question text to send
 */
function handleAskQuestion(question) {
  /*
    DEMO: just alert the question.
    PRODUCTION: call your AI API here and render the response.
  */
  alert(`Question sent to AI:\n\n"${question}"\n\nReplace handleAskQuestion() in js/askButtons.js to connect a real AI API.`);
}
