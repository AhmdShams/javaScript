let name = ['Ahmed', 'Adel', 'Anwar', 'Shams'];
console.log(name); // for all arrays 
console.log(name[0]); // for specific array / arrays 

let objects = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(objects[3][3][1]);


let names = ['Mohamed', 'Shady', 'Murad'];

names[0] = 'Abdu';
names[2] = 'Kimo';
names.push('Mido'); // add it at the end of array 
names.unshift('Bodda', 'Layla'); // add these two names at the begining
names.shift(); // to delete the name at the beginig of array
names.shift(); // i deleted the second name 

console.log(names);



let theNames = ['Rady', 'Hady', 'Shafy'];

theNames.splice(0, 2); // delete and add in any place in the array 

console.log(theNames);


let arr = ['Ahmed', 'Adel', 'Shams'];
console.log(arr.reverse());

let nm = ['Mahmoud', 'Hassan', 'Nadine', 'Ahmed', 'Mariam'];
console.log(nm.sort()); // sort also working with numbers


let arr1 = ['Ahmed', 'Adel', 'Anwar'];
let arr2 = ['Layla', 'Nariman', 'Rasha'];

console.log(arr1.concat(arr2));