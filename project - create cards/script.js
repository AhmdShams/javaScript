let names = ['Ahmed', 'Mohamed', 'Nada', 'Shams'];
let ages = ['15 years old', '20 years old', '25 years old', '30 years old'];
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
function element(name, ages)
 {
    // elements 
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    //content
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(ages);
    img.src = 'images/20220525_161110.jpg';
    title.appendChild(head);
    age.appendChild(ageContent);

    //style
    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display= 'inline-block';

    img.style.width = '100%';



    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);
}

//element()
//element()
//element()

for(let i = 0; i < 4; i++){   // using loop 
    element(names[i], ages[i]);
}