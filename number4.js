/*program for number and bigint */
//without bigint 
var x = 999999999999999; //this integer no. takes 50 bit to store
var y = 9999999999999999; //this no. losses its precision causue it takes 54 bit to store

console.log(x);
console.log(y);

console.log(typeof x);
console.log(typeof y);

//with bigint 
var x = 999999999999999; //this integer no. takes 50 bit to store
var y = 9999999999999999n; // here now it take 54 bit as a bigint so no precision loss

console.log(x);
console.log(y);

console.log(typeof x);
console.log(typeof y);
