import ("./index.css")

import ("../file.png")
document.getElementById("btn").addEventListener("click", go);
let img = document.getElementById("img1");
let im = document.createElement("img");
im.src = "../file.png"
img.appendChild(im)
function go() {
    
    let text = document.getElementById("note").value;
  let h1 = document.createElement("h1");
  h1.innerText = text;
  document.getElementById("container").appendChild(h1);
}
