let playersScore = {
  user: 0,
  computer: 0,
};
//computer Choice ["rock", "paper" , "scissors"]


let input = document.querySelectorAll(".userInput ul li");
let userChoiceSign = document.querySelector("#userChoice");
input.forEach((choices) => {
  choices.addEventListener("click", (e) => {
    let computerChoice = randomGameChoice();
    userChoice = e.target.dataset.choice;
    userChoiceSign.src = `/Assets/${userChoice}-ico.svg`;
    let winner = checkWinner(computerChoice, userChoice);
    console.log(winner);
    popup(winner);
    setTimeout(() => {
      document.querySelector(".message").style.visibility = "hidden";
    }, 850);
    updateScore();
  });
});

    function randomGameChoice() {
      let choices = ["Rock", "Paper", "Scissors"];
      let x = Math.floor(Math.random() * 3);
      let computerChoice = document.querySelector("#computerChoice");
      computerChoice.src = `/Assets/${choices[x]}-ico.svg`;
      computerChoice.style.transform = `rotate(-${x === 0 ? 90 : 80}deg)`;
      let userChoice = (document.querySelector(
        "#userChoice"
      ).style.transform = `scaleX(-1) rotate(-${x === 0 ? 90 : 80}deg)`);
      return choices[x];
    }
    function checkWinner(computerChoice, userChoice) {
      if (computerChoice === userChoice) {
        return "draw";
      } else if (
        (userChoice === "Rock" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Scissors") ||
        (userChoice === "Scissors" && computerChoice === "Rock")
      ) {
        playersScore.computer += 1;
        return "You Loss!";
      } else {
        playersScore.user += 1;
        return "You Won!";
      }
    }
    
    function updateScore() {
      let userScore = (document.getElementById("userScore").textContent =
        playersScore.user);
      let computerScore = (document.getElementById("computerScore").textContent =
        playersScore.computer);
    }
    
    function popup(winner) {
      let message = document.querySelector(".message");
      message.style.visibility = "visible";
      message.textContent = winner;
    }
