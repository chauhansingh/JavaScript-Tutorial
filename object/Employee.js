// constructotr - function 
function Employee() {

}

let emp = new Employee(); // with the help of new keyword this function creates a literl object'{}' that will be assigned to 'emp' variable now that means it creates this object --> emp = {}; it is an object with the help of object litral.


let emp1 = Employee(); //here we din't use new keyword so Employee is just a function that will undefined casuse it is not returning anything(i.e default value when function don't return anything)

console.log(emp);// it will print an empty object i.e --> {}; it is an 'object litral' object
console.log(emp1);//it will print undifined cause if function doesn't return anything it gives undifined 

console.log(typeof emp);// it will print object type
console.log(typeof emp1); // wit will print function type

function Employee(id1, name1) {
    this.id = id1;  //here id is object property and id1(user input) is a local variable
    this.name = name1; //here name is object property and name1(user input) is a local variable 
}

let emp2 = new Employee(); //here object would be --> let emp2 = {id: undifined, name: undefined}
console.log(emp2);

//adding a property in 'emp2' object
emp2.city = 'Bangalore'; // here object would be --> let emp2 = {id: undifined, name: undefined, city: 'Bangalore'}, here city property is added in only emp2 object but to add all abject we can use prototype property.
console.log(emp2);

let emp12 = new Employee();
console.log(emp12);//city property is not avilable


function Employee1(userInputId, userInputName, userInputAge) {
    this.id = userInputId;
    this.name = userInputName;
    this.age = userInputAge;
}
//<--------- prototype property -------->//
Employee1.prototype.city = 'Hyedrabad';// this statemenet should be just after constructor function

let emp3 = new Employee1(); //here object would be like --> Empolyee1 = {id: undifined, name: undefined, age: undefined} after that emp3 variable pointed to Empolyee1 like --> let emp3 = Employee1;
console.log(Employee1);
let emp4 = new Employee1(202107,'Sagar', 26); //here object would be --> Employee1 = {id: 202107, name: 'Sagar', age: 26} after that emp4 variable pointed to Empolyee1 like --> let emp4 = Employee1;

console.log(emp3.city);
console.log(emp4.city);
// console.log(typeof emp3);
// console.log(typeof emp4);
