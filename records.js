"use strict";

// Global variables
const records = document.querySelector(".records");

// Get JSON data
const response = await fetch("./data.json");
const data = await response.json();

console.log(data);
// Store all the team names from JSON
let teams = [];
for (let item in data) teams.push(item);

let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */
let HEIGHT = teams.length;
let WIDTH = teams.length;

const makeBoard = () => {
  //  set "board" to empty HEIGHT x WIDTH matrix array
  Array.from({ length: WIDTH }).map(() => {
    board.push(Array.from({ length: HEIGHT }));
  });
};

/** makeHtmlBoard: make HTML table and row of column tops. */

const makeHtmlBoard = () => {
  //  get "htmlBoard" from the item in HTML w/ID of "records"
  let htmlBoard = document.querySelector("#records");
  htmlBoard.classList.add("table", "table-bordered", "w-50", "m-auto");

  //  Dynamically create the top row
  let top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.classList.add("text-danger");
  const firstTopHead = document.createElement("td");
  firstTopHead.append("Team");
  top.prepend(firstTopHead);

  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    headCell.append(teams[x]);
    top.append(headCell);
  }

  htmlBoard.append(top);

  //  Dynamically create table rows to display the records board
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");

    // Append team names to Y-axis/ the first element of each row
    const firstCell = document.createElement("td");
    firstCell.append(`${teams[y]}`);
    row.append(firstCell);

    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      let count = "";
      if (x === y) {
        count = "--";
      } else {
        count = data[`${teams[y]}`][`${teams[x]}`]["W"];
      }

      cell.append(count);
      row.append(cell);
    }

    htmlBoard.append(row);
  }

  //   Dynamically create the bottom row
  let bottom = document.createElement("tr");
  bottom.setAttribute("id", "column-top");
  const firstBottomHead = document.createElement("td");
  firstBottomHead.append("Team");
  bottom.prepend(firstBottomHead);
  for (let z = 0; z < WIDTH; z++) {
    let bottomCell = document.createElement("td");
    bottomCell.setAttribute("id", z);
    bottomCell.append(teams[z]);
    bottom.append(bottomCell);
  }
  htmlBoard.append(bottom);
};

makeHtmlBoard();
