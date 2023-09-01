
const switch_btn = document.getElementById("switch_btn")
const MODE2 = document.getElementById("position2")
const login = document.getElementById("login")
const MODE = document.getElementById("position1")
const login2 = document.getElementById("login2")
const pedar = document.getElementById("pedar")
const marry = document.getElementById("marry")
const son2 = document.getElementById("son2")
const not_yet = document.getElementById("not_yet")
const yepkid = document.getElementById("yep")
const havekid = document.getElementById("havekid")
const my_list = document.getElementById("my-list")
const kidname = document.getElementById("kidname")
const child_list = document.getElementById("child-list");
const divsub = document.getElementById("divsub");

login.onclick = function(){
    login2.style.display = "block"
}

switch_btn.onclick = function(){
    login.style.color = "black"
    login2.style.background = "#0e68aa"
    MODE2.style.color = "white"
    MODE.style.color = "white"
    MODE.innerHTML = "حالت روشن"
    switch_btn.style.display = "none"
    pedar.style.background = "#0e68aa"
    child_list.style.background = "#0e68aa"
    divsub .style.background = "#0e68aa"

}
MODE.onclick = function (){
    login2.style.background = "white"
    login.style.color = "white"
    MODE2.style.color = "grey"
    MODE.style.color = "grey"
    MODE.innerHTML = "حالت تاریک"
    switch_btn.style.display = "block"
    pedar.style.background = "white"
    child_list.style.background = "white"
    divsub .style.background = "white"
}

marry.onclick = function(){
son2.style.display = "block"
login2.style.height = "120%"
child_list.style.display = "block" 
}

not_yet.onclick = function(){
    son2.style.display = "none"
    login2.style.height = "100%"
    havekid.style.display = "none"
    child_list.style.display = "none" 
}


yepkid.onclick = function(){
    havekid.style.display = "block"
}



function add_child(){
    let input=document.createElement("INPUT");
     
    input.type='text';
    child_list.appendChild(input);
    }
    function delete_child(){
    child_list.removeChild(child_list.childNodes[0]);
    
    }