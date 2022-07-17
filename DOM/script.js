//console.log(document.getElementById('head'));

let head = document.getElementById('head'); //id 

console.log(head)

// let body = document.getElementsByClassName('body')[1]; // class
// body.style.color = 'red'

// console.log(body)

let body = document.querySelector('h2'); // through tagName
head.style.color = 'yellow'

console.log(body)

let img = document.getElementById('images');
img.src = 'images/2.jpg'; // changing to another image

console.log(img)

let element = document.getElementById('second');

console.log(element.previousElementSibling)
console.log(element.nextElementSibling)


//let container = document.getElementById('container');
//console.log(container.outerHTML) get all the div
//console.log(container.innerHTML) just inside the div which is h3

//container.outerHTML = '<p>Hello</p>';
//container.innerHTML = '<p>Hello</p>';
//container.innerText = '<p>Hello</p>'


let container = document.getElementById('container');

container.innerText = 'Hello World';

// element.style.property = value ===> for CSS
container.style.backgroundColor = '#264';
container.style.color = '#fff';
container.style.padding = '10px';
container.style.borderLeft = '4px solid #fa0';

//element.style.cssText = 
//container.style.cssText = 'color:red'; // this cancel all the previous steps



