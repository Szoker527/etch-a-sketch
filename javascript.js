

const button = document.querySelector("#myBtn")

button.addEventListener("click", newGrid
    // location.reload();
  )

for (let i = 0; i < 16; i++) {
    const divs = document.createElement("div");
    divs.classList.add("divContainer")
    container.appendChild(divs);
for (let i = 0; i < 16; i++) {
    const newDivs = document.createElement("div");
    newDivs.classList.add("newdivContainer");
    divs.appendChild(newDivs);
}
}
function colorGrid() {
const multiDivs = document.querySelectorAll(".newdivContainer")

multiDivs.forEach(div => div.addEventListener('mouseover', function (e) {
let randomColor = Math.floor(Math.random()*16777215).toString(16);
e.target.style.background =  "#" + randomColor;
}));

}
colorGrid()

function grid(gridNumber){
    const container = document.querySelector("#container");
    
    for (let i = 0; i < gridNumber; i++) {
            const divs = document.createElement("div");
            divs.classList.add("divContainer")
            container.appendChild(divs);
        for (let i = 0; i < gridNumber; i++) {
            const newDivs = document.createElement("div");
            newDivs.classList.add("newdivContainer");
            divs.appendChild(newDivs);
        }
    }
    const multiDivs = document.querySelectorAll(".newdivContainer")

    multiDivs.forEach(div => div.addEventListener('mouseover', function (e) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.background =  "#" + randomColor;
  }));
    
}

function newGrid() {
    const text = prompt("How big you want your grid?", "" )

    if (text === "null" || text === null || text === "" ){
         return;
    }

    let gridNumber = text;
    if (gridNumber < 100) {
        eraseGrid();
         return grid(gridNumber);

    }
    else if(gridNumber > 100) {
        alert("Grid can't be bigger then 100!")
        return newGrid();
    }
}  

function eraseGrid() {
    const myNode = document.getElementById("container");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
}

function resetGrid() {
    eraseGrid();

    for (let i = 0; i < 16; i++) {
        const divs = document.createElement("div");
        divs.classList.add("divContainer")
        container.appendChild(divs);
    for (let i = 0; i < 16; i++) {
        const newDivs = document.createElement("div");
        newDivs.classList.add("newdivContainer");
        divs.appendChild(newDivs);
    }
    }
    const multiDivs = document.querySelectorAll(".newdivContainer")
    
    multiDivs.forEach(div => div.addEventListener('mouseover', function (e) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.background =  "#" + randomColor;
    }));
}

function clearGrid() {
    const multiDivs = document.querySelectorAll(".newdivContainer")

    multiDivs.forEach(div => div.addEventListener('mouseover', function (e) {
        e.target.style.background =  "#0000" ;
  }));
} 

function blackGrid() {
    const multiDivs = document.querySelectorAll(".newdivContainer")
    
    multiDivs.forEach(div => div.addEventListener('mouseover', function (e) {
        e.target.style.background =  "#000000" ;
  }));
} 
    
const btnReset = document.querySelector("#gridGone")

btnReset.addEventListener("click", resetGrid) 

const btnClear = document.querySelector("#clearGrid")

btnClear.addEventListener("click", clearGrid) 

const btnBlack = document.querySelector("#blackGrid")

btnBlack.addEventListener("click", blackGrid) 



