function hello(name) // name is a parameter
{
    console.log('hello ' + name);
}

hello('Ahmed');
hello('Shams');


function calcAge(age) //calculating age into days 
{
    let result = age * 365;
    console.log(result);
}

calcAge(28);
calcAge(22);
calcAge(55);




function pro(price, taxes, ads)
{
    let product = price + taxes; 
    let cost = product + ads;
    console.log(cost);
}

pro(500, 3, 20);
pro(900, 1.5, 10);
