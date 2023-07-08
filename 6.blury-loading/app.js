var percentage = document.getElementById("perc")
var blurred = document.querySelector(".blurred")
var load =0
let int = setInterval(blur,30)
function blur(){
    load++
    if(load>99){
    clearInterval(int)
}
    // console.log(load)
    percentage.innerText= `${load}%`
    percentage.style.opacity=scale(load, 0, 100, 1, 0)
    blurred.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}
// this maps numbers to another set of numbers 0-1 mapped to 0-100
const scale =(num , in_min , in_max , out_min , out_max ) =>{
    return ((num - in_min) * (out_max - out_min))/ (in_max -in_min) + out_min
}
