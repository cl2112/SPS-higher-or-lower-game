function buttonPressed(buttonID) {

  // Add it to the page.
  const output = document.getElementById('answer-container');
  output.innerText = "You picked: " + buttonID;
}