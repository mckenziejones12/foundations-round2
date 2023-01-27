const body = document.querySelector("body");

const newGridBtn = document.createElement("button");
newGridBtn.textContent = "New Grid";
newGridBtn.className = "btn";
newGridBtn.id = "newGridBtn";
newGridBtn.addEventListener("click", newGrid);

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
clearBtn.className = "btn";

const easGrid = document.createElement("div");
easGrid.id = "easGrid";

const gridSize = Number(prompt("How many squares per side to make new grid?"));

function newGrid() {
  console.log(gridSize);
}

//write function to display 16x16 grid
function createGrid(gridSize) {
  const rows = gridSize;
  const columns = gridSize;
  const gridArea = rows * columns;
  easGrid.style.gridTemplateColumns = `repeat(${gridSize},auto)`;
  for (let i = 0; i < gridArea; i++) {
    const cell = document.createElement("div");
    cell.addEventListener("mouseover", colorCell);

    cell.className = "cell";
    easGrid.appendChild(cell);
  }
}
createGrid(gridSize);

function colorCell(event) {
  event.target.style.backgroundColor = "black";
}

body.appendChild(newGridBtn);
body.appendChild(clearBtn);
body.appendChild(easGrid);
