function grid(){
    const container = document.querySelector("#container");
    
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
    
    
    }
console.log(grid());

const multiDivs = document.querySelectorAll(".newdivContainer")

multiDivs.forEach(div => div.addEventListener('mouseover', function (e) {
    e.target.style.background = 'blue';
  }));
    
    




