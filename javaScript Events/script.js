let btn = document.getElementById('btn');

let press = document.getElementById('press');

/*
btn.onclick = function(){
    console.log('hello')
}
*/

btn.addEventListener('click', function(){
    document.body.style.background = 'black';
    console.log('click');
})

btn.addEventListener('click', function(){
    btn.style.background = 'yellow';
    console.log('click');
})

btn.addEventListener('click', function(){
    btn.style.color = 'green';
    console.log('click');
})


press.onmouseup = function(){
    console.log('press');
}

/* هل الترتيب هنا صح؟؟؟؟؟؟؟؟؟ */