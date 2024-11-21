console.log("\n************** welcome to Tic Tac Toe  ***********************\n");
let index1 = "";
let index2 = "";
let index3 = "";
let index4 = "";
let index6 = "";
let index7 = "";
let index8 = "";
let index5 = "";
let index9 = "";

function inputForUser1(nameOfPlayer1) {
  const player1 = +prompt("enter number for " + nameOfPlayer1 + " : 1 to 9  : ");
  return player1;
}

function inputForUser2(nameOfPlayer2) {
  const player2 = +prompt("enter number for " + nameOfPlayer2 + " : 1 to 9  : ");
  return player2;
}

function printSample() {
  console.clear();
  const firstRow = 1 + "   ┃ " + 2 + "  ┃  " + 3 + "\n";
  const line1 = "━━━━━━╋━━━━━━╋━━━━━" + "\n";
  const line2 = "      ┃      ┃   " + "\n";
  const secondRow = 4 + "    ┃ " + 5 + "   ┃  " + 6 + "\n";
  const thirdRow = 7 + "    ┃ " + 8 + "   ┃  " + 9 + "\n";
  const output = line2 + firstRow + line1 + secondRow + line1 + thirdRow + line2;

  console.log(output);
}

function makeRows(a, b, c) {
  let line = "        ";
  let string = "";

  for (let index = 0; index < line.length; index++) {
    if (index === 1) {
      string += a;
    } else if (index === 4) {
      string += b;
    } else if (index === 7) {
      string += c;
    } else {
      string += " ";
    }
  }

  return string;
}

function printTicTacToe() {
  console.clear();
  const line1 = "━━╋━━╋━━" + "\n";
  const line2 = "  ┃  ┃     " + "\n";
  const firstRow = makeRows(index1, index2, index3) + "\n";
  const secondRow = makeRows(index4, index5, index6) + "\n";
  const thirdRow = makeRows(index7, index8, index9) + "\n";
  const output = line2 + firstRow + line1 + secondRow + line1 + thirdRow + line2;

  console.log(output);
}

function checkcondition() {
  if ((index1 === "❌" && index2 === "❌" && index3 === '❌') || (index1 === "●" && index2 === "●" && index3 === "●")) {
    return true;
  }
  if ((index4 === "❌" && index5 === "❌" && index6 === "❌") || (index4 === "●" && index5 === "●" && index6 === "●")) {
    return true;
  }
  if ((index7 === "❌" && index8 === "❌" && index9 === "❌") || (index7 === "●" && index8 === "●" && index9 === "●")) {
    return true;
  }
  if ((index1 === "❌" && index4 === "❌" && index7 === "❌") || (index1 === "●" && index4 === "●" && index7 === "●")) {
    return true;
  }
  if ((index2 === "❌" && index5 === "❌" && index8 === "❌") || (index2 === "●" && index5 === "●" && index8 === "●")) {
    return true;
  }
  if ((index3 === "❌" && index6 === "❌" && index9 === "❌") || (index3 === "●" && index6 === "●" && index9 === "●")) {
    return true;
  }
  if ((index1 === "❌" && index5 === "❌" && index9 === "❌") || (index1 === "●" && index5 === "●" && index9 === "●")) {
    return true;
  }
  if ((index3 === "❌" && index5 === "❌" && index7 === "❌") || (index3 === "●" && index5 === "●" && index7 === "●")) {
    return true;
  }

}

function putDataInGrid(player, count, nameOfPlayer1, nameOfPlayer2) {
  let input = 0;
  let symbol = "";

  if (player === 1) {
    input = inputForUser1(nameOfPlayer1);
    symbol = "❌";
  } else {
    input = inputForUser2(nameOfPlayer2);
    symbol = "●";
  }

  switch (input) {
    case 1:
      if (index1 === "") {
        index1 = symbol;
      }
      break;
    case 2:
      if (index2 === "") {
        index2 = symbol;
      }
      break;
    case 3:
      if (index3 === "") {
        index3 = symbol;
      }
      break;
    case 4:
      if (index4 === "") {
        index4 = symbol;
      }
      break;
    case 5:
      if (index5 === "") {
        index5 = symbol;
      }
      break;
    case 6:
      if (index6 === "") {
        index7 = symbol;
      }
      break;
    case 7:
      if (index7 === "") {
        index7 = symbol;
      }
      break;
    case 8:
      if (index8 === "") {
        index8 = symbol;
      }
      break;
    case 9:
      if (index9 === "") {
        index9 = symbol;
      }


  }
  printTicTacToe();

  if (checkcondition()) {
    if (player === 1) {
      console.log(nameOfPlayer1 + "  is winnner !!");
    } else {
      console.log(nameOfPlayer2 + "  is winnner !!");
    }

    return;
  }

  if (count === 10) {
    console.log("no. of attempt is empty..");
    console.log("Draw!!!!");
    return;
  }

  return player === 1 ? putDataInGrid(2, count + 1) : putDataInGrid(1, count + 1);
}

function enterInGame(nameOfPlayer1, nameOfPlayer2) {
  console.log("\n\n******************** GAME STARTS HERE ******************** \n");
  printSample();
  putDataInGrid(1, 1, nameOfPlayer1, nameOfPlayer2);

  console.log("game end ....  ");

  return;
}

function ticTacToe() {
  const ready = confirm("\ndo you want to play .... ");

  if (ready) {
    const nameOfPlayer1 = prompt("\nenter the name of first player   : ");
    const nameOfPlayer2 = prompt("\nenter the name of second player  : ");

    return enterInGame(nameOfPlayer1, nameOfPlayer2);
  }

  console.log("\nok thanks byyeee...😏\n");
}

ticTacToe();

