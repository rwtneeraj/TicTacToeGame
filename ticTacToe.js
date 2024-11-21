console.log("\n************** welcome to Tic Tac Toe  ***********************\n");

let nameOfPlayer1 = prompt("enter a name of first player...");
let nameOfPlayer2 = prompt("enter a name of second player...");

let index1 = "1";
let index2 = "2";
let index3 = "3";
let index4 = "4";
let index5 = "5";
let index6 = "6";
let index7 = "7";
let index8 = "8";
let index9 = "9";

function inputForUser1(nameOfPlayer1) {
  const player1 = +prompt("Now  " + nameOfPlayer1 + "'s turn  : 1 to 9  : ");
  return player1;
}

function inputForUser2(nameOfPlayer2) {
  const player2 = +prompt("Now " + nameOfPlayer2 + "'s turn: 1 to 9  : ");
  return player2;
}

function printTicTacToe() {
  console.clear();
  const line1 = "━━━╋━━━╋━━━" + "\n";
  const line2 = "   ┃   ┃     " + "\n";
  const firstRow = " " + index1 + "   " + index2 + "   " + index3 + " \n";
  const secondRow = " " + index4 + "   " + index5 + "   " + index6 + " \n";
  const thirdRow = " " + index7 + "   " + index8 + "   " + index9 + " \n";
  const output = line2 + firstRow + line1 + secondRow + line1 + thirdRow + line2;

  console.log(output);
}

function winPlayer1() {
  console.log(nameOfPlayer1 + "  is winnner !!");
}

function winPlayer2() {
  console.log(nameOfPlayer2 + "  is winnner !!");
}

function checkcondition(symbol) {
  if (index1 === symbol && index2 === symbol && index3 === symbol) {
    return (symbol === "❌") ? winPlayer1() : winPlayer2();
  }

  if (index4 === symbol && index5 === symbol && index6 === symbol) {
    return (symbol === "❌") ? winPlayer1() : winPlayer2();

  }
  if (index7 === symbol && index8 === symbol && index9 === symbol) {
    return (symbol === "❌") ? winPlayer1() : winPlayer2();

  }
  if (index1 === symbol && index4 === symbol && index7 === symbol) {
    return (symbol === "❌") ? winPlayer1() : winPlayer2();

  }
  if (index2 === symbol && index5 === symbol && index8 === symbol) {
    return (symbol === "❌") ? winPlayer1() : winPlayer2();

  }
  if (index3 === symbol && index6 === symbol && index9 === symbol) {
    return (symbol === "❌") ? winPlayer1() : winPlayer2();

  }
  if (index1 === symbol && index5 === symbol && index9 === symbol) {
    return (symbol === "❌") ? winPlayer1() : winPlayer2();

  }
  if (index3 === symbol && index5 === symbol && index7 === symbol) {
    return (symbol === "❌") ? winPlayer1() : winPlayer2();

  }

  return;
}

function putDataInGrid(player, count) {
  let input = 0;
  let symbol = "";

  if (count >= 10) {
    console.log("no. of attempt is empty..");
    console.log("Draw!!!!");
    return;
  }

  if (player === 1) {
    input = inputForUser1(nameOfPlayer1);
    symbol = "❌";
  } else {
    input = inputForUser2(nameOfPlayer2);
    symbol = "●";
  }

  switch (input) {
    case 1:
      if (index1 === "1") {
        index1 = symbol;
      }
      break;
    case 2:
      if (index2 === "2") {
        index2 = symbol;
      }
      break;
    case 3:
      if (index3 === "3") {
        index3 = symbol;
      }
      break;
    case 4:
      if (index4 === "4") {
        index4 = symbol;
      }
      break;
    case 5:
      if (index5 === "5") {
        index5 = symbol;
      }
      break;
    case 6:
      if (index6 === "6") {
        index6 = symbol;
      }
      break;
    case 7:
      if (index7 === "7") {
        index7 = symbol;
      }
      break;
    case 8:
      if (index8 === "8") {
        index8 = symbol;
      }
      break;
    case 9:
      if (index9 === "9") {
        index9 = symbol;
      }
  }
  printTicTacToe();
  checkcondition(symbol);
  
  return player === 1 ? putDataInGrid(2, count + 1) : putDataInGrid(1, count + 1);
}

function enterInGame() {
  console.log("\n\n******************** GAME STARTS HERE ******************** \n");
  printTicTacToe();
  putDataInGrid(1, 1);

  console.log("game end ....  ");

  return;
}

function ticTacToe() {
  const ready = confirm("\ndo you want to play .... ");

  if (ready) {
    return enterInGame();
  }

  console.log("\nok thanks byyeee...😏\n");
}

ticTacToe();
