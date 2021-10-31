//getter in javaScript
let emp = {
    name: 'Akash',
    salary: 25000,
    city: 'Bangalore',
    get empCity() {
        return this.city;
    },
    get empName() {
        return this.name;
    }
};
console.log(emp.empCity);
console.log(emp.empName);