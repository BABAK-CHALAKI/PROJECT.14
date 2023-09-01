


let pedar = document.getElementById("pedar")
let pesar = document.getElementById("pesar1")
let btn = document.getElementById("btn")

let number = Math.ceil(Math.random() * 10000);



btn.onclick = function(){
    pedar.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 10000)
    pedar.style.transition = "transform 5s"
}