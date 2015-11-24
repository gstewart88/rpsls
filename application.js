var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
var userChoice = ""


function randomChoice(){
 return choices[Math.floor(Math.random()*choices.length)]
} 

$("#element").html(choices.map(function(value) {
  return('<li id="'+ value +'">' + value + '</li>');
}).join(""));

var battle = function (userChoice) {
  var computerChoice = randomChoice(); 
  if (userChoice === computerChoice) {
    return("The computer chose the same as you. The result is a tie!");
  }
  return('You chose ' +userChoice+ '. The computer chose ' +computerChoice+ '. '+winOrLose(userChoice, computerChoice))
};

function winOrLose(userChoice, computerChoice){
  switch(userChoice){
    case("Rock"):
    if (computerChoice === "Scissors" || computerChoice === "Lizard") {
      return ("You win");
    } 
    break;
    case("Paper"):
    if (computerChoice === "Rock" || computerChoice === "Spock") {
      return ("You win");
    }
    break;
    case("Scissors"):
    if (computerChoice === "Lizard" || computerChoice === "Paper") {
      return ("You win");
    }
    break;
    case("Lizard"):
    if (computerChoice === "Spock" || computerChoice === "Paper") {
      return ("You win");
    }
    break;
    case("Spock"):
    if (computerChoice === "Rock" || computerChoice === "Scissors") {
      return ("You win");
    } 
    break;    
  }
  return ("You lose");
}

$('#Rock').click(function() { (userChoice = "Rock"); 
  document.getElementById("winner").innerHTML = battle(userChoice)});
$('#Paper').click(function() { (userChoice = "Paper"); 
  document.getElementById("winner").innerHTML = battle(userChoice)});
$('#Scissors').click(function() { (userChoice = "Scissors"); 
  document.getElementById("winner").innerHTML = battle(userChoice)});
$('#Lizard').click(function() { (userChoice = "Lizard"); 
  document.getElementById("winner").innerHTML = battle(userChoice)});
$('#Spock').click(function() { (userChoice = "Spock"); 
  document.getElementById("winner").innerHTML = battle(userChoice)});