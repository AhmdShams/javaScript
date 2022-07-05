/* let car = {
    title:'BMW',
    price:800000,
    color:['yellow', 'white', 'black'],
    model:2023

    Hello:function(){
        return 'Hello'
    }
};
console.log(car.title);
*/


let user = {
    firstName: 'Ahmed',
    lastName: 'Shams',
    email: 'ahmed@gmail.com',
    age:26,
    skills: ['html', 'css', 'js', 'python', 'php'],
    active: true,
    phoneNum: { //nested object
        first:'010254536',
        second:'01234545',
    },
    address: {
        Egypt:'Cairo',
        UAE:'Dubai',
    },
    isActive:function(){
        if(user,active === true){
            return 'hello user';
        }
        else{
            return 'sorry you are not active';
        }
    }
}

console.log(user)


let player = {
    player1: 'Adam',

    getName: function() {
        return player.player1
        return this.player1
    }
}

console.log(player.getName())


let x = this;
console.log(x); // here this using the global object 