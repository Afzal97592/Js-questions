// Task 1 write a function to calculate the maximum of two numbers and console

function calculateMaximumOfTwoNumbers(a, b) {
  return Math.max(a, b);
}

// console.log(`Maximum no is: ${calculateMaximumOfTwoNumbers(5, 4)}`);

function stringConcatenation(str1, str2) {
  let res = "";
  // Method 1

  //   res = str1 + str2;
  // Method 2

  res = str1.concat(str2);

  return res;
}

// console.log(`New String is: ${stringConcatenation("Afzal", "Ahmad")}`);

function checkSpecialChar(str) {
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return format.test(str);
}

console.log("is special char available: ", checkSpecialChar("Afzal"));

function PalindromeSwapper(str) {
  function isPalindrom(s) {
    return s === s?.split("")?.reverse()?.join("");
  }
  if (isPalindrom(str)) {
    return str;
  }

  for (let i = 0; i < str.length - 1; i++) {
    let arr = str.split("");
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    let newStr = arr?.join("");
    console.log(newStr);
    if (isPalindrom(newStr)) return newStr;
  }

  return "-1";
}
//  PalindromeSwapper()
// keep this function call here
// console.log(PalindromeSwapper("kyaak"));

import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "grid",
  flexDirection: "column",
  border: "3px #eee solid",
  display: "grid",
};
const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

function Square({ handlleCell, item }) {
  return (
    <button
      className="square"
      style={squareStyle}
      onClick={handlleCell}
      disabled={item}
    >
      {item}
    </button>
  );
}

function Board() {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [myTurn, setMyTurn] = useState(true);
  const [winner, setWinner] = useState();

  const winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5.8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (currentBoard) => {
    let length = winnerPattern.length;
    for (let i = 0; i < length; i++) {
      const [a, b, c] = winnerPattern[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
  };

  const handlleCell = (index) => {
    if (winner) return;

    const newBoard = [...board];
    newBoard[index] = myTurn ? "X" : "O";
    setBoard(newBoard);
    const isWinner = checkWinner(newBoard);
    console.log(isWinner);
    if (isWinner) {
      setWinner(isWinner);
    } else if (newBoard.every((cell) => cell !== null)) {
      setWinner("Draw");
    } else {
      setMyTurn(!myTurn);
    }
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{myTurn ? "X" : "O"}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner ? winner : "None"}</span>
      </div>
      <button
        style={buttonStyle}
        onClick={() => {
          setBoard(initialBoard);
          setMyTurn(true);
          setWinner();
        }}
      >
        Reset
      </button>
      <div
        style={{
          display: "grid",
          flexDirection: "column",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {board.map((item, i) => (
          <Square key={i} handlleCell={() => handlleCell(i)} item={item} />
        ))}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Game />);
