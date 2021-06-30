/** Adds an onclick event listener to the get hello button. */
const getHelloButton = document.getElementById('get-hello-button');
getHelloButton.addEventListener('click', showHello);

/** Fetches a list of quotes from the server and adds one to the page. */ 
async function showHello() {
  const responseFromServer = await fetch('/hello');
  const quotes = await responseFromServer.json();

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  const getHelloContainer = document.getElementById('get-hello-container');
  getHelloContainer.innerText = quote;
}
