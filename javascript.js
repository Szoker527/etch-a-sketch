

const button = document.querySelector("#myBtn")



button.addEventListener("click", newGrid
    // location.reload();
  )



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
    const text = prompt("How big you want your grid?", "grid number")
    let gridNumber = text;
    if (gridNumber < 100) {
         return grid(gridNumber);

    }
    else {
        return newGrid();
    }
}  


button.addEventListener("click", () => {
    const container = document.querySelectorAll(".divContainer");
    console.log(container.length);
}
)
    


