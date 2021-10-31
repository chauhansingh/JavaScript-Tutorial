let ford = {
    name: 'Aspire',
    color: 'Blue',
    start: function () {
        console.log('car started');
    },
    move: function () {
        console.log('car is moving');
    }
};

for (properties in ford)
    console.log(properties + ': ' + ford[properties]);

ford.start();
ford.move();
