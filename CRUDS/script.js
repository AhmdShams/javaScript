let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

console.log(title, price, taxes, ads, discount, total, count, category, submit);


//get total
function getTotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result
        total.style.background = '#040';
    }
    else{
        total.innerHTML = '';
        total.style.background = '#f10';
    }
}

//create product
let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}
else{
    dataPro = [];
}
//let dataPro = [];

submit.onclick = function(){
    let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    dataPro.push(newPro)

    //save is locaStorage
    localStorage.setItem('product', JSON.stringify(dataPro))
    clearData()
    showData()
    console.log(dataPro)
}



//clear inputs
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
}


//read
function showData()
{
    let table = '';
    for(let i = 0; i < dataPro.length;i++){
        table = dataPro[i];
    }

    document.getElementById('tbody').innerHTML = table; 
}

//count
//delete
//update
//search
//clean data