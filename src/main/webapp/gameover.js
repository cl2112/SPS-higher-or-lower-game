
// Wait for the page to load then call the startGame function.
document.addEventListener("DOMContentLoaded", displayResults);

// Returns player's final game score and deletes it from local storage
function getScore() {
  // Get score from finalscore
  let score = localStorage.getItem("finalScore");
  // Clear everything from finalscore to prevent reusing
  localStorage.removeItem("finalScore");
  if (score == null) {
    return;
  }
  return Number(score); 
}

// Gets player's average score and updates avgScore based on last score
function getAvg(score) {
  let avgScore = localStorage.getItem("avgScore");

  // If nothing in avgScore, creates avgScore object and sets game count to 1
  if (avgScore === null) {
    avgScore = {sum: score, count: 1};
  }
  // Updates score and number of games in avgScore
  else {
    avgScore = JSON.parse(avgScore);
    avgScore.sum += score;
    avgScore.count += 1;
  }
  // Adds avgScore to local storage and return avg score
  localStorage.setItem("avgScore", JSON.stringify(avgScore));
  return avgScore.sum / avgScore.count;
}

// Displays the average player score and the user final score at gameover 
function displayResults() {
  let score = getScore();
  let avg = getAvg(score);
  document.getElementById("results-average").innerText = avg;
  document.getElementById("results-score").innerText = score;
}
