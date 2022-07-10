// 1- create element
let container = document.createElement('div');
let head = document.createElement('h1');
let img = document.createElement('img');

// 2- add content
let content = document.createTextNode('hello world');
head.appendChild(content);
img.src = 'images/1.jpg';
img.style.width = '100px';
img.style.height = '100px';

// 3- add the element to a spicific place (in the container)
container.appendChild(head);
container.appendChild(img);
document.body.appendChild(container);

console.log(container)