const player1Moves = [];
const player2Moves = [];
const winningCombination = ["123", "456", "789", "147", "258", "369", "159", "357"];

function isValuePresent(array, value) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return true;
    }
  }

  return false;
}

function getSymbol(player1Moves, player2Moves, index) {
  if (isValuePresent(player1Moves, index)) {
    return " ❌ ";
  }

  return isValuePresent(player2Moves, index) ? " ⚪️ " : "    ";
}

function createGrid(player1Moves, player2Moves) {
  let string = "";

  for (let index = 1; index <= 9; index++) {
    if (index % 3 === 1 && index > 3) {
      string += "\n\n";
    }

    string += getSymbol(player1Moves, player2Moves, index);
    string += "┃";
  }

  return string;
}

function isValidMoves(input) {
  for (let index = 0; index < 5; index++) {
    if (player1Moves[index] === input || player2Moves[index] === input) {
      return false;
    }
  }

  return true;
}

function inputSection(playerName) {
  return +prompt("\nNow " + playerName + "'s turn, press a number(1 to 9 ) : ");
}

function addPlayer1Moves(index, player1Name) {
  const input1 = inputSection(player1Name);
  console.clear();

  if (!isValidMoves(input1)) {
    return "invalid moves";
  }

  player1Moves[index] = input1;
  console.log(createGrid(player1Moves, player2Moves));
}

function addPlayer2Moves(index, player2Name) {
  const input2 = inputSection(player2Name);
  console.clear();

  if (!isValidMoves(input2)) {
    return "invalid moves";
  }

  player2Moves[index] = input2;
  console.log(createGrid(player1Moves, player2Moves));
}

function isSubset(array, subset) {
  for (let index = 0; index < subset.length; index++) {
    if (!isValuePresent(array, +  subset[index])) {
      return false;
    }
  }

  return true;
}

function isPlayerWin() {
  for (let index = 1; index < winningCombination.length; index++) {
    if (isSubset(player1Moves, winningCombination[index])) {
      return true;
    }

    if (isSubset(player2Moves, winningCombination[index])) {
      return true;
    }
  }

  return false;
}

function playTicTacToe(player1Name, player2Name) {
  for (let index = 0; index < 5; index++) {

    console.log(addPlayer1Moves(index, player1Name));
    if (isPlayerWin()) {
      return player1Name + " is winner...";
    }

    console.log(addPlayer2Moves(index, player2Name));
    if (isPlayerWin()) {
      return player2Name + " is winner...";
    }
  }

  return "Game Over...";
}

function welcomeContext() {
  return "\n************** welcome to Tic Tac Toe  ***********************\n";
}

function instruction() {
  let message = "press the numbers(1 to 9) for choosing the box ,";
  message += "if you give wrong input or want to replace then you will miss your turn.";
  return message;
}

function start() {
  const nameOfPlayer1 = prompt("\nenter a name of first player...");
  const nameOfPlayer2 = prompt("\nenter a name of second player...");

  console.log(welcomeContext());
  console.log(instruction());
  console.log(createGrid(player1Moves, player2Moves));
  console.log(playTicTacToe(nameOfPlayer1, nameOfPlayer2));
}

start();