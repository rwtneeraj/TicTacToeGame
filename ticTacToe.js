let index1 = "01";
let index2 = "02";
let index3 = "03";
let index4 = "04";
let index5 = "05";
let index6 = "06";
let index7 = "07";
let index8 = "08";
let index9 = "09";

function winPlayer1(player1Name) {
  console.log(player1Name + "  is winnner !!\n");
  return true;
}

function winPlayer2(player2Name) {
  console.log(player2Name + "  is winnner !!\n");
  return true;

}

function printGrid() {
  console.clear();
  const line1 = "━━━━╋━━━━╋━━━━" + "\n";
  const line2 = "    ┃    ┃     " + "\n";
  const firstRow = " " + index1 + "   " + index2 + "   " + index3 + " \n";
  const secondRow = " " + index4 + "   " + index5 + "   " + index6 + " \n";
  const thirdRow = " " + index7 + "   " + index8 + "   " + index9 + " \n";
  const output = line2 + firstRow + line1 + secondRow + line1 + thirdRow + line2;

  console.log(output);
}

function modifyValueInLocation(input, symbol) {
  if (input === 1 && index1 === "01") {
    index1 = symbol;
  }

  if (input === 2 && index2 === "02") {
    index2 = symbol;
  }

  if (input === 3 && index3 === "03") {
    index3 = symbol;
  }

  if (input === 4 && index4 === "04") {
    index4 = symbol;
  }

  if (input === 5 && index5 === "05") {
    index5 = symbol;
  }

  if (input === 6 && index6 === "06") {
    index6 = symbol;
  }

  if (input === 7 && index7 === "07") {
    index7 = symbol;
  }

  if (input === 8 && index8 === "08") {
    index8 = symbol;
  }

  if (input === 9 && index9 === "09") {
    index9 = symbol;
  }

}

function isPlayerWin() {
  if ((index1 === index2 && index3 === index2) || (index4 === index5 && index6 === index5)
    || (index7 === index8 && index9 === index8) || (index1 === index4 && index7 === index1)
    || (index2 === index5 && index8 === index5) || (index3 === index6 && index9 === index3)
    || (index1 === index5 && index9 === index5) || (index3 === index5 && index7 === index3)) {
    return true;
  }

  return false;
}

function getSymbol(player) {
  return (player === 1) ? "❌" : "⚪️";
}

function inputSection(player, player1Name, player2Name) {
  if (player === 1) {
    return +prompt("\nNow  " + player1Name + "'s turn  : 1 to 9  : ");
  }

  return +prompt("\nNow  " + player2Name + "'s turn  : 1 to 9  : ");
}

function playTicTacToe(player, player1Name, player2Name) {
  for (let attempt = 1; attempt < 10; attempt++) {
    player = attempt % 2 === 0 ? 2 : 1;

    const symbol = getSymbol(player);
    const input = inputSection(player, player1Name, player2Name);

    modifyValueInLocation(input, symbol);
    printGrid();

    if (isPlayerWin()) {
      return player === 1 ? winPlayer1(player1Name) : winPlayer2(player2Name);
    }
  }
}

function showWelcomeContext() {
  console.log("\n************** welcome to Tic Tac Toe  ***********************\n");
}

function printInstruction() {
  const text = "press the numbers(1 to 9) for choosing the box , if you give wrong input or want to replace then you turn out.. ";
  console.log(text);
}

function start() {
  const nameOfPlayer1 = prompt("\nenter a name of first player...");
  const nameOfPlayer2 = prompt("\nenter a name of second player...");
  const isUserReady = confirm("\ndo you want to play ....\n ");

  if (isUserReady) {
    showWelcomeContext();
    printInstruction();
    printGrid();
    playTicTacToe(1, nameOfPlayer1, nameOfPlayer2);
    console.log(" Match Draw!!");
  }
}

start();
