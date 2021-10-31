//we can also use function as a property(it is the behaviour of object)

let myCar = {
    name:'Buggati',
    model:2018,
    color:'Black',
    speed:0,
    move:function() {
        this.speed++;
    }
};

myCar.move();myCar.move();myCar.move();
console.log(myCar.speed);