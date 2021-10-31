let myCar = new Object();//object constructor function gives object leteral i.e --> {}
console.log(myCar);
myCar.color = 'Black',
myCar.start = function () {
    console.log(`my ${this.color} car is started`);
}
console.log(myCar);
myCar.start();