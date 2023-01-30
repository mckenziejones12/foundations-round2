//elements created for html
const body = document.querySelector("body");

const newGridBtn = document.createElement("button");
newGridBtn.textContent = "New Grid";
newGridBtn.className = "btn";
newGridBtn.id = "newGrid";

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear Grid";
clearBtn.className = "btn";
clearBtn.id = "clearGrid";

const easGrid = document.createElement("div");
easGrid.id = "easGrid";

//write function to display 16x16 grid
function createGrid(num) {
  const rows = num;
  const columns = num;
  const gridArea = rows * columns;
  easGrid.style.gridTemplateColumns = `repeat(${num},auto)`;
  for (let i = 0; i < gridArea; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("mouseover", colorCell);

    easGrid.appendChild(cell);
  }
}
createGrid(16);

//write function to display new grid when New Grid btn is clicked
newGridBtn.addEventListener("click", newGrid);
function newGrid() {
  const newGridSize = prompt("How many squares per side to make new grid?");
  if (newGridSize > 100) {
    prompt("Sorry, too large of a number. Please pick a number 1-100.");
  } else {
    //remove old grid
    const oldCells = document.querySelectorAll(".cell");
    for (let i = 0; i < oldCells.length; i++) {
      const singleCell = oldCells[i];
      singleCell.remove();
    }
  }
  //create  newGrid
  createGrid(newGridSize);
}

clearBtn.addEventListener("click", clearGrid);
function clearGrid() {
  const singleCell = document.querySelectorAll(".cell");
  for (let i = 0; i < singleCell.length; i++) {
    const allCells = singleCell[i];
    allCells.style.backgroundColor = "white";
  }
}

//color each cell after mouseover
function colorCell(event) {
  event.target.style.backgroundColor = "black";
}

//append elements to html
body.appendChild(newGridBtn);
body.appendChild(clearBtn);
body.appendChild(easGrid);
