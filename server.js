const express = require("express");
const PORT = 4001;
const app = express();

let playerName;
let playerScore;
let playerLife;
const getAnswer = (playerChoice) => {
  if (playerChoice === "Store") {
    return "You go to the store and meet your friend, Julie";
  } else if (playerChoice === "Kitchen") {
    return "You go to the kitchen and pet your dog";
  } else if (playerChoice === "Basement") {
    return "You go to the basement, there is a monster, game over";
  } else {
    return "Wrong choice, please choose Store, Kitchen, Basement";
  }
};
let player = {
  life: 100,
  score: 0,
  name: "",
};

app.get("/", (req, res) => {
  res.send(
    `What is your name? 
Send it to http://localhost:4001/playerName?name=<name>
`
  );
});

app.get("/playerName", (req, res) => {
  playerName = req.query.name;
  res.send(`Hello ${playerName}, welcome to an adventure
  Where do you want to go? Store, Kitchen, Basement
Send your choice to 
http://localhost:4001/playerChoice?choice=<yourChoice>`);
});

app.get("/playerChoice", (req, res) => {
  let playerChoice = req.query.choice;
  let answer = getAnswer(playerChoice);
  res.send(
    answer +
      "\n" +
      `Where do you want to go next? Store, Kitchen, Basement
  Send your choice to 
  http://localhost:4001/playerChoice?choice=<yourChoice>`
  );
});
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
