let ford = {
    name: 'Aspire',
    color: 'Black'
};
//adding a behaviour of object
ford.printDetails = function () {
    console.log(this.name + " " + this.color);
}

ford.printDetails();