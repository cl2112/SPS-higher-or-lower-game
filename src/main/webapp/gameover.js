
// Wait for the page to load then call the startGame function.
document.addEventListener("DOMContentLoaded", getAndSaveScore);

function getAndSaveScore() {
  if (localStorage.getItem("finalScore") == null) {
    return;
  }
  let score = Number(localStorage.getItem("finalScore"));
  let avgScore = localStorage.getItem("avgScore");
  if (avgScore == null) {
    avgScore = {sum: score, count: 1};
  }
  else {
    avgScore = JSON.parse(avgScore);
    avgScore.sum += score;
    avgScore.count += 1;
  }
  console.log("sum", avgScore.sum);
  console.log("count", avgScore.count);
  localStorage.setItem("avgScore", JSON.stringify(avgScore)); 
  let avg = avgScore.sum / avgScore.count;
  console.log("avg", avg);
  document.getElementById("results-average").innerText = avg;
  document.getElementById("results-score").innerText = score;
  localStorage.clear("finalScore");
}
