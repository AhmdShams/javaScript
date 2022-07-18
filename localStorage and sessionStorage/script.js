localStorage.setItem('name', 'Shams');
localStorage.setItem('age', JSON.stringify(35))
localStorage.setItem('skills', JSON.stringify([1, 2, 3]))
localStorage.user = JSON.stringify({
    name:'shams',
    age:26,
})


console.log(localStorage.getItem('name'))
console.log(localStorage.name) //this is same as the first one
console.log(typeof localStorage.getItem('age'))
console.log(JSON.parse(localStorage.getItem('skills')))



/* the deference between localStorage and sessionStorage that
localStorage save the data all the time, on the other hand 
the sessionStorage just save the data when i am opening the tab
*/