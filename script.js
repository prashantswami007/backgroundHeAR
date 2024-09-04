const container = document.querySelector("#container")
 
    tile = document.querySelector(".tile");

for(let i = 0; i < 399; i++) {
  container.appendChild(tile.cloneNode());
  
}