// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/** 
 * Adds a random quote from the TV show Parks and Rec to the page.
 */
const addRandomQuote = () => {
  const quotes = [
      "I have no idea what I'm doing, but I know I'm doing it really, " + 
        "really well",
      "I typed your symptoms into the thing up here and it says you could " + 
        "have network connectivity problems.",
      "Ron: I'll have the number 8. Waiter: That's a party platter. It " + 
        "serves 12 people. Ron: I know what I'm about, son.",
      "I'm allergic to sushi. Everytime I eat more than 80 pieces I throw up.",
  ];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById("quote-container");
  quoteContainer.innerText = quote;
}
