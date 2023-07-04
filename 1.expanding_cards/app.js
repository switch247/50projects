    var x = document.querySelectorAll(".image-card img")
// console.log(x)
x.forEach(element => {
    element.addEventListener('click', function () {
        rem(x)
        element.classList.toggle("expand")
        // console.log(element)
    });

});

function rem(x){
    x.forEach(element => {
        element.classList.remove("expand")
    });
}

function darkmode(){
    document.querySelector('body').classList.toggle('dark-mode')
}