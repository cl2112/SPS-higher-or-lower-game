// Wait for the page to load then call the startGame function.
document.addEventListener("DOMContentLoaded", getStat);

// Global Variables
let dataContainers = getDataContainers(); // TODO: Make this a constant
let game_data;
let score = 0;

// Set up event listeners.
createButtonEventListeners(dataContainers.buttons);

// Gets a prompt and displays it on the page. Also shows the prompt container and
// hides the answer container.
function displayPrompt() {
  // TODO: Make sure the same prompt is not seen twice.
  // Display stat
  dataContainers.stat.innerText = game_data.prompt;

  // Display source
  dataContainers.source.setAttribute("href", game_data.sourceURL);
  dataContainers.source.innerText = game_data.source;

  // Show/Hide containers
  dataContainers.answerContainer.classList.add("hide");
  dataContainers.promptContainer.classList.remove("hide");
  dataContainers.source.classList.add("hide");
}

// Creates the event listeners for the buttons.
function createButtonEventListeners(buttonContainers) {
  // Add event listeners for the three response buttons
  buttonContainers.higher.addEventListener("click", buttonPressed);
  buttonContainers.equal.addEventListener("click", buttonPressed);
  buttonContainers.lower.addEventListener("click", buttonPressed);

  // Add event listeners for the continue button
  buttonContainers.continue.addEventListener("click", continueReponse);
}

// Handles the user clicking on the continue button. If they were correct then
// it starts the next round, else it sends them to the game over page.
function continueReponse() {
  // Check if the answer text says 'CORRECT' to determine the next step.
  if (dataContainers.answer.innerText == "CORRECT") {
    getStat(); 
  }
  else {
    window.location.href = "/gameover.html";
  }
}

// Handles the user clicking on one of the answer buttons. If it is the correct
// choice then follow the correct response procedure, else follow the wrong
// response procedure.
function buttonPressed(event) {
  choice = event.target.id
  
  // Check if the id of the button matches the answer field of the prompt.
  if (choice == game_data.comparison) {
    correctResponse();
  } 
  else {
    wrongResponse();
  }
}

// Procedure when the user gets the right answer. Displays the correct data and
// shows the answer container while hiding the prompt container.
function correctResponse() {
  // Display the true stat
  dataContainers.stat.innerText = game_data.actual;

  // Display if the answer was correct
  dataContainers.answer.innerText = "CORRECT";

  increaseScore();

  // Display a supportive message.
  // TODO: Randomize the message or include one in the prompt to pull from.
  dataContainers.moreInfo.innerText =
    "Mental illnesses are common, but often kept quiet. \
    Know that you can reach out for help without shame, you are not alone!";
  
  // Show/Hide containers
  dataContainers.promptContainer.classList.add("hide");
  dataContainers.answerContainer.classList.remove("hide");
  dataContainers.source.classList.remove("hide");
}

// Procedure when the user gets the wrong answer. Displays the correct data and
// shows the answer container while hiding the prompt container.
function wrongResponse() {
  // Display the true stat
  dataContainers.stat.innerText = game_data.actual;

  // Display if the answer was correct
  dataContainers.answer.innerText = "INCORRECT";

  // Display a supportive message.
  // TODO: Randomize the message or include one in the prompt to pull from.
  dataContainers.moreInfo.innerText =
    "Mental illnesses are common, but often kept quiet. \
    Know that you can reach out for help without shame, you are not alone!";
  
  // Show/Hide containers
  dataContainers.promptContainer.classList.add("hide");
  dataContainers.answerContainer.classList.remove("hide");
  dataContainers.source.classList.remove("hide");
}

// Increases the score and displays the new score on the page.
// TODO: Save the score in local storage so that it can be used on the 
// game over screen.
function increaseScore() {
  score++;
  dataContainers.score.innerText = "Score: " + score;
}

// Fetches the data for the prompts
async function getStat() {
  const responseFromServer = await fetch('/game-data');
  game_data = await responseFromServer.json();
  
  displayPrompt();
}

// Grabs the output elements on the page and returns them in an object.
function getDataContainers() {
  return {
    "stat": document.getElementById("stat"),
    "answer": document.getElementById("answer"),
    "promptContainer": document.getElementById("prompt-container"),
    "answerContainer": document.getElementById("answer-container"),
    "moreInfo": document.getElementById("message"),
    "source": document.getElementById("source"),
    "buttons": {
      "higher": document.getElementById("higher"),
      "equal": document.getElementById("equal"),
      "lower": document.getElementById("lower"),
      "continue": document.getElementById("continue")
    },
    "score": document.getElementById("score")
  };
}
