let open = document.getElementById("open");
let close = document.getElementById("close");

let main =document.querySelector("section")

open.addEventListener('click', ()=>main.classList.add("show-nav"))
close.addEventListener('click', ()=>main.classList.remove("show-nav"))

