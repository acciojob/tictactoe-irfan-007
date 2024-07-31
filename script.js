//your JS code here. If required.
let submit = document.getElementById("submit");
let p1 = document.getElementById("player1");
let p1Cells = [];
let p2 = document.getElementById("player2");
let p2Cells = [];
let form = document.querySelector("form");
let grid = document.querySelector(".grid");
let message = document.querySelector(".message");
let cells = document.querySelectorAll(".item");
let turn = false;
const solution = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

submit.addEventListener("click", formSubmit);

// start game
function formSubmit(e) {
  e.preventDefault();
  console.log(p1.value, p2.value);
  form.style.display = "none";
  grid.style.display = "grid";
  message.innerText = p1.value + ", you're up";
}

// game logic
for (cell of cells) {
  cell.addEventListener("click", markCell);
}

function markCell(e) {
  let symbol = turn ? "o" : "x";
  if (e.target.innerText != "") return;
  e.target.innerText = symbol;
  if (turn) p2Cells.push(parseInt(e.target.id));
  else p1Cells.push(parseInt(e.target.id));

  turn = !turn;
  turn
    ? (message.innerText = p2.value + ", you're up")
    : (message.innerText = p1.value + ", you're up");

  if (checkSolution(p1Cells))
    message.innerText = p1.value + " congratulations you won!";
  else if (checkSolution(p2Cells))
    message.innerText = p2.value + " congratulations you won!";

  // console.log(p1Cells, p2Cells);
}

function checkSolution(arr) {
  if (arr.length < 3) return false;
  if (arr.length == 5) {
    alert("! Tied !");
    window.location.reload();
  }
  for (let sol of solution) {
    let i = 0;
    for (let val of arr) {
      if (sol.includes(val)) i++;
    }
    if (i == 3) return true;
  }
  return false;
}
