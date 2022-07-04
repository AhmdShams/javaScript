/*
for( let i = 0 ; i < 3 ; i += 1 ) // start, condition, steps
{
    console.log("hello world");
    console.log("this is Shams");
}
*/

let users = ['Ahmed', 'Mohamed',1, 2, 3, 4, 5, 'Ali', 'Shams', 'Nada', 'Fadwa'];
for(let i = 0; i < users.length; i++)
{
    if(typeof users[i] == 'number')
    {
        continue; //to skip the numbers from the array
    }
    console.log(users[i])
}