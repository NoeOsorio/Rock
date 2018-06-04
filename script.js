function computerplay() {
  var number = Math.floor(Math.random()*3);
  switch (number) {
    case 1 :
        return "rock";
      break;
    case 2 :
        return "paper";
        break;
    case 3 :
        return "scizors";
        break;
    default:
        return "rock";

  }

}
function playerplay() {
  var play = prompt();

  return play;
}

function game(player, computer){
  switch (player) {
    case /ROCK/i:
        if (computer == "rock") {
          return "Draw"
        }
        else if (computer == "paper") {
            return "You Lose!"
        }
        else {
          return "You Won"
        }
      break;
    default:
      return "Just play!!"

  }
}
console.log(game(playerplay(),computerplay()));
