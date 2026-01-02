let containerDiv = document.querySelector(".container");

let popupButton = document.querySelector(".popup");
popupButton.addEventListener("click", () => {
  let gridSize = +prompt(
    "Enter no of squares per side you want and you might want to limit that to 100 chief eh"
  );
  while (gridSize > 100) {
    gridSize = +prompt("100 is the limit dude");
  }
  // defining custom css properties/variables
  containerDiv.style.setProperty("--cell-size", 100 / gridSize + "%");
  buildGrid(gridSize);
});

function buildGrid(gridSize) {
  containerDiv.replaceChildren();
  for (let i = 1; i <= gridSize; i++) {
    for (let j = 1; j <= gridSize; j++) {
      let childDiv = document.createElement("div");
      childDiv.classList.add("childDiv");
      containerDiv.appendChild(childDiv);
    }
  }
}
