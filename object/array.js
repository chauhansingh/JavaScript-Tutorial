let array = [123,null,false,true,{x: 1, y: 2},'India',23.1,Infinity]
let myArray = new Array(100);

// console.log(array[0]);
// console.log(array[3]);

// console.log(array);
// console.log(array.length);

// console.log(typeof array);
// console.log(typeof myArray);

for (let i = 0; i < array.length; i++)
    console.log(array[i]);

console.log('------------------------------');

for (let element of array)
    console.log(element);
