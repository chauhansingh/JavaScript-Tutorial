let car1 = {
    name: 'BMW',
    color: 'Gray',
    wheels: '4-Wheeler',
    engine: '6 Stoks engine',
    navigation: 'Here map navigator',
    avrage: '45 km/l',
    speed: '50 km/h',
    productNo: 465372,
    carDetails: function () {
        console.log(`Name: ${this.name}\nColor: ${this.color}\nProduct No: ${this.productNo}\nWheels: ${this.wheels}\nAvrage: ${this.avrage}\nSpeed: ${this.speed}`);
    },
    move: function (speed) {
        if (speed > 80)
            console.log('car is moving very fast');
        else if (speed < 80 && speed > 30)
            console.log('car is going on so awesome');
        else
            console.log('car is moving so slow');
    },
    turn: function (turn) {
        if (turn == 'w' || turn == 'W')
            console.log('Car is going straght');
        else if (turn == 'a' || turn == 'A')
            console.log('Car is turning to Left');
        else if (turn == 's' || turn == 'S') {
            console.log('Car is turning to Right');
        }
    }
}

let car2 = {
    name: 'Marcidice',
    color: 'Royal Green',
    wheels: '4-Wheel golden plated',
    engine: '6 Stoks fast engine',
    navigation: 'Here map navigator',
    avrage: '40 km/l',
    speed: '65 km/h',
    productNo: 574355,
    carDetails: function () {
        console.log(`Name: ${this.name}\nColor: ${this.color}\nProduct No: ${this.productNo}\nWheels: ${this.wheels}\nAvrage: ${this.avrage}\nSpeed: ${this.speed}`);
    },
    move: function (speed) {
        if (speed >= 80)
            console.log(`${this.name} is moving very fast`);
        else if (speed < 80 && speed > 30)
            console.log(`${this.name} is going on so awesome`);
        else
            console.log(`${this.name} is moving so slow`);
    },
    turn: function (turn) {
        if (turn == 'w' || turn == 'W')
            console.log(`${this.name} is going straight`);
        else if (turn == 'a' || turn == 'A')
            console.log(`${this.name} is turning to Left`);
        else if (turn == 's' || turn == 'S') {
            console.log(`${this.name} is turning to Right`);
        }
    }
}

car1.carDetails();
car1.move(80);
car1.move(60);
car1.turn('A');
console.log('--------------------------------')
car2.carDetails();
car2.move(30);
car2.move(60);
car2.turn('D');