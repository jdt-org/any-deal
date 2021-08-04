// Create container for results
const resultsContainer = document.createElement('div')
resultsContainer.className = 'results-container';
document.body.append(resultsContainer)

// Add event listener to form and request subreddit results from server
const subredditForm = document.getElementById('subreddit-form')
subredditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchResults(e.target[0].value)
})

async function fetchResults(subreddit) {
  const res = await fetch(`/results?subreddit=${subreddit}`);
  const data = await res.text();
  resultsContainer.innerHTML = data;
}
