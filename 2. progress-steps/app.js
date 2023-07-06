
var level=1
var x = document.querySelectorAll(".circle")
var progress= document.querySelector(".progress")
// console.log(x)
// x.forEach(element => {
//     element.addEventListener('click', function () {
//         rem(x)
//         element.classList.toggle("expand")
//         // console.log(element)
//     });

// });

function rem(x){
    x.forEach(element => {
        element.classList.remove("active")
    });
}



function prev(){
    x[level].classList.remove("active")
    if(level >1){level--}
    progress.style.width= (document.querySelectorAll(".active").length - 1) /(x.length -1) * 100 +'%'
}
function next(){
    x[level].classList.add("active")
    if(level < x.length-1){level++}
    progress.style.width= (document.querySelectorAll(".active").length - 1) /(x.length -1) * 100 +'%'
    
}