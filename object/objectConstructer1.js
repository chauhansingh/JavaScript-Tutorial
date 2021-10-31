let employee1 = new Object();// an empty object get created i.e --> {} and employee1 is pointed to this object(that means employee1 variable is containing the address the newly creates object using 'Object()' constructor)

//adding the properties to employee1 object
employee1.id = 202101;
employee1.name = 'Arun';
employee1.age = 25;
employee1.function = 'Software Developer';
employee1.address = 'Chennai';
employee1.empDetailes = function () {
    console.log(`Employee Name: ${this.name}\nBatch Id: ${this.id}\nAge: ${this.age}\nDegination: ${this.function}\nCity: ${this.address}`);
}
employee1.working = function () {
    console.log(`${this.name} is developing a Software and after solving some problems`);
}
employee1.workOut = function () {
    console.log(`In evening ${this.name} works out with his collagues`);
}

let employee2 = new Object();
employee2.id = 202104;
employee2.name = 'Isha';
employee2.age = 37;
employee2.function = 'Senior Software Developer';
employee2.address = 'Bangalore';
employee2.empDetailes = function () {
    console.log(`Employee Name: ${this.name}\nBatch Id: ${this.id}\nAge: ${this.age}\nDegination: ${this.function}\nCity: ${this.address}`);
}
employee2.working = function () {
    console.log(`${this.name} is developing a Software and after solving some problems`);
}
employee2.workOut = function () {
    console.log(`In evening ${this.name} works out with his collagues`);
}

let employee3 = new Object();
employee3.id = 302001;
employee3.name = 'Jacob';
employee3.age = 25;
employee3.function = 'Software Tester';
employee3.address = 'Hyedrabad';
employee3.empDetailes = function () {
    console.log(`Employee Name: ${this.name}\nBatch Id: ${this.id}\nAge: ${this.age}\nDegination: ${this.function}\nCity: ${this.address}`);
}
employee3.working = function () {
    console.log(`${this.name} is Testing a Software and some plugins`);
}
employee3.workOut = function () {
    console.log(`In evening ${this.name} works out with his collagues`);
}

let employee4 = new Object();
employee4.id = 202987;
employee4.name = 'Chinmaya';
employee4.age =30;
employee4.function = 'Bussiness devlopement EXecutive';
employee4.address = 'Pune';
employee4.empDetailes = function () {
    console.log(`Employee Name: ${this.name}\nBatch Id: ${this.id}\nAge: ${this.age}\nDegination: ${this.function}\nCity: ${this.address}`);
}
employee4.working = function () {
    console.log(`${this.name} is guiding the Clients to build more interative Customer relationship`);
}
employee4.workOut = function () {
    console.log(`In evening ${this.name} works out with his collagues`);
}

let employee5 = new Object();
employee5.id = 435126;
employee5.name = 'Vivek';
employee5.age = 29;
employee5.function = 'Team Leader';
employee5.address = 'Delh';
employee5.empDetailes = function () {
    console.log(`Employee Name: ${this.name}\nBatch Id: ${this.id}\nAge: ${this.age}\nDegination: ${this.function}\nCity: ${this.address}`);
}
employee5.working = function () {
    console.log(`${this.name} is co-oprating with his team to butter outcome and deal with difficultieds`);
}
employee5.workOut = function () {
    console.log(`In evening ${this.name} works out with his collagues`);
}

employee1.empDetailes();
employee1.working();
employee1.workOut();
console.log('------------------------');
employee2.empDetailes();
employee2.working();
employee2.workOut();
console.log('------------------------');
employee3.empDetailes();
employee3.working();
employee3.workOut();
console.log('------------------------');
employee4.empDetailes();
employee4.working();
employee4.workOut();
console.log('------------------------');
employee5.empDetailes();
employee5.working();
employee5.workOut();
