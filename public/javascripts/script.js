/* const { get } = require("../../routes");

console.log("Client Side JS Served!")
const someUrlToHit = `https://api.reddit.com/r/${userSelectedSubreddit}`;
``
const subredditInputEl = document.querySelector('#subreddit-select');

const dataListValues = document.querySelector('#subreddits')
  .map(option => {
    return option.value
  });

const subreddits = [...dataListValues]
let userSelectedSubreddit;
subredditInputEl.addEventListener('keydown', function(e) {
  
  if(valueArr.find(e.target.value)) {
    userSelectedSubreddit = e.target.value;
  } 
  
  else {
    userSelectedSubreddit = undefined;
  }
});

function fetchSubredditListing() {
  fetch(someUrlToHit, (resp) => {
    resp.arrThatCameBack
  })
} */

const subredditForm = document.getElementById('subreddit-form');
subredditForm.onsubmit = (e) => {
  const searchedSub = document.getElementById('subreddit-input').value;
  /* subredditForm.action = `results/${searchedSub}`; */
}