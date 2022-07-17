let hello = document.getElementById('hello');

/*
hello.onclick = function(){
    hello.classList.add("name")
}

hello.oncontextmenu = function(){        ===> on context.. for mouse right click
    hello.classList.remove("name")  
}
*/

hello.onclick = function(){
    hello.classList.toggle("name")
}