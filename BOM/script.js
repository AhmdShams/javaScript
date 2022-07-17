let btn = document.getElementById('btn');

window.onscroll = function(){
    if(scrollY >= 400)
    {
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
}

/*
btn.onclick = function(){
    scroll(0,0)             =====> i can do it like this to go to the top of page but there is better practice to do that...
}
*/ 

btn.onclick = function(){
    this.scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}