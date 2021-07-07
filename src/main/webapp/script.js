// TODO: Retrieve data from backend
var prompt1 = ["1 in 5 people in the U.S. experience some form of mental illness each year.",
  "1 in 5 people in the U.S. experience some form of mental illness each year.",
  "equal"];
var prompt2 = ["79.5% of U.S. adults with mental illness received treatment in 2019.",
  "44.8% of U.S. adults with mental illness received treatment in 2019.", 
  "lower"];
var prompt3 = ["10.4% of U.S. adults with mental illness also experienced a substance use disorder in 2019.",
  "18.4% of U.S. adults with mental illness also experienced a substance use disorder in 2019.",
  "higher"];

var arr = [prompt1, prompt2, prompt3];

// TODO: Randomize prompt on backend
function randomIndex() {
  var randIndex = Math.floor(Math.random() * arr.length);
  return randIndex;
}

var index = randomIndex();

// Loads prompt on page load
function statLoader() {
  const output = document.getElementById('stat');
  output.innerText = arr[index][0];
}

// Displays answer after clicking a button
function buttonPressed(buttonID) {
  var answer;
  if(buttonID == arr[index][2]) {
    answer = "CORRECT";
  }
  else {
    answer = "INCORRECT";    
  }
  const output = document.getElementById('answer-container');
  output.innerText = answer;

  const info = document.getElementById('more-info-container');
  info.innerText = arr[index][1] + " Mental illnesses are common, but often kept quiet. \
  Know that you can reach out for help without shame, you are not alone!";
}
