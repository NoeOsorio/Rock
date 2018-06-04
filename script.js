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
        return "scissors";
        break;
    default:
        return "paper";

  }

}
function playerplay() {
  var play = prompt("Rock Scissors Paper");
  play = play.toLowerCase();
  return play;
}

function game(player, computer){
  console.log("Computer: " + computer);
  console.log("You: " + player);
  switch (player) {
    case "rock":
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
      case "paper":
          if (computer == "paper") {
            return "Draw"
          }
          else if (computer == "scissors") {
              return "You Lose!"
          }
          else {
            return "You Won"
          }
        break;
        case "scissors":
            if (computer == "scissors") {
              return "Draw"
            }
            else if (computer == "rock") {
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
function vs() {
  var player = 0, computer = 0;
  var winner;
  for (var i = 0; i < 5; i++) {
    var gameplayer = playerplay(), gamecomputer = computerplay();
    var result = game(gameplayer,gamecomputer);
    if (result.search(/won/i) >= 0) {
      player++;
    }
    else if (result.search(/lose/i) >= 0){
      computer++;
    }
    console.log(result);
  }
  if (player > computer){
    winner = "player";
  }
  else if (player < computer){
    winner = "computer";
  }
  else {
    winner = "Draw";
  }
  window.alert("Player: " + player + "\n" + "Computer: " + computer + "\n" +  "Winner: " + winner);
}
//console.log(game(playerplay(),computerplay()));
vs();
