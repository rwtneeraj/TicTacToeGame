const player1Moves = [];
const player2Moves = [];
const WIN_MESG = " is winner...";
const winningCombination = [
  "123",
  "456",
  "789",
  "147",
  "258",
  "369",
  "159",
  "357",
];

const isValuePresent = function (array, value) {
  return array.some((element) => element === value);
};

const getSymbol = function (player1Moves, player2Moves, index) {
  if (isValuePresent(player1Moves, index)) {
    return " ❌ ";
  }

  return isValuePresent(player2Moves, index) ? " ⚪️ " : "    ";
};

const displayGrid = function () {
  let grid = "";

  for (let index = 1; index <= 9; index++) {
    if (index % 3 === 1 && index > 3) {
      grid += "\n\n";
    }
    grid += "    ┃";
  }

  console.log(grid);
};

const createGrid = function (player1Moves, player2Moves) {
  let grid = "";

  for (let index = 1; index <= 9; index++) {
    if (index % 3 === 1 && index > 3) {
      grid += "\n\n";
    }

    grid += getSymbol(player1Moves, player2Moves, index);
    grid += "┃";
  }

  return grid;
};

const isValidMoves = function (moves) {
  let index = 0;

  while (index < 5) {
    if (player1Moves[index] === moves || player2Moves[index] === moves) {
      return false;
    }
    index++;
  }

  return true;
};

const inputSection = function (playerName) {
  return +prompt("\nNow " + playerName + "'s turn, press a number(1 to 9 ) : ");
};

const player1Turn = function (index, player1Name) {
  const moves = inputSection(player1Name);
  console.clear();

  if (!isValidMoves(moves)) {
    return "invalid moves";
  }

  player1Moves[index] = moves;
  return createGrid(player1Moves, player2Moves);
};

const player2Turn = function (index, player2Name) {
  const moves = inputSection(player2Name);
  console.clear();

  if (!isValidMoves(moves)) {
    return "invalid moves";
  }

  player2Moves[index] = moves;
  return createGrid(player1Moves, player2Moves);
};

const doesContain = function (moves, winSet) {
  let index = 0;

  while (index < winSet.length) {
    if (!isValuePresent(moves, +winSet[index])) {
      return false;
    }
    
    index++;
  }

  return true;
};

const arePlayersWin = function () {
  let index = 1;

  while (index < winningCombination.length) {
    if (doesContain(player1Moves, winningCombination[index])) {
      return true;
    }

    if (doesContain(player2Moves, winningCombination[index])) {
      return true;
    }

    index++;
  }

  return false;
};

const playTicTacToe = function (player1Name, player2Name) {

  for (let index = 0; index < 5; index++) {
    console.log(player1Turn(index, player1Name));

    if (arePlayersWin()) {
      return "\n" + player1Name + WIN_MESG;
    }

    console.log(player2Turn(index, player2Name));
    
    if (arePlayersWin()) {
      return "\n" + player2Name + WIN_MESG;
    }
  }

  return "\n Game Over...";
};

const printWelcomeContext = function () {
  console.log(
    "\n************** welcome to Tic Tac Toe  ***********************\n"
  );
};

const printIntstruction = function () {
  let message = "press the numbers(1 to 9) for choosing the box ,\n";
  message +=
    "if you give wrong input or want to replace then you will miss your turn.\n";
  console.log(message);
};

const main = function () {
  const firstPlayerName = prompt("\nenter a name of first player...");
  const secondPlayerName = prompt("\nenter a name of second player...");

  printWelcomeContext();
  printIntstruction();
  displayGrid();
  console.log(playTicTacToe(firstPlayerName, secondPlayerName));
};

main();
