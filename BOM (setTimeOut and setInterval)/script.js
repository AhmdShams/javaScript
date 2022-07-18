//setTimeout make it work after the time which i used 
setTimeout(function(){
    console.log('hello');
},3000)
//setTimeout make the code work just for one time


let js = setTimeout(function(){
    console.log('js');
})

clearTimeout(js) // this is to stop the setTimeout


let i = 0;

let shams = setInterval(() => {
    console.log(i++);
    if(i == 6){
        clearInterval(shams);
    }
}, 1000);
