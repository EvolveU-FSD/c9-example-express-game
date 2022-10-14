const readlineSync = require("readline-sync");
const playerName = readlineSync.question(
  "What is your name? Send it to http://localhost:4000/playerName?name=<>"
);
console.log(`Hello ${playerName}, welcome to an adventure`);
while (true) {
  let playerChoice = readlineSync.question(
    "Where do you want to go? Store, Kitchen, Basement"
  );
  if (playerChoice === "Store") {
    console.log("You go to the store and meet your friend, Julie");
  } else if (playerChoice === "Kitchen") {
    console.log("You go to the kitchen and pet your dog");
  } else if (playerChoice === "Basement") {
    console.log("You go to the basement, there is a monster, game over");
  } else {
    console.log("Wrong choice, please choose Store, Kitchen, Basement");
  }
}
