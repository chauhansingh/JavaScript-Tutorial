//Note --> all the elements sorting happened according to there respective ASCCI values

console.log('1.--------------------------')
let arr = [6,7,8,9,0];
console.log(arr);
arr.sort();
console.log(arr);

console.log('2.--------------------------')
let arr1 = ['a','z','d','c','k']; //according the ASCCI value the got arranged(sorthed)
console.log(arr1);
arr1.sort();
console.log(arr1);

console.log('3.--------------------------')
let arr2 = ['a','F','A','b','k','C','Z','z']; //according the ASCCI value the got arranged(sorthed) 
console.log(arr2);
arr2.sort();
console.log(arr2);

console.log('4.--------------------------')
let arr3 = ['India','Felight','USA','Brazil','Home'];//all words starts with capital latter so sortiing is on first element based
console.log(arr3);
arr3.sort();
console.log(arr3);

console.log('5.--------------------------')
let arr4 = ['Cat','UsA','Brazil','cOme','cAb','hOme'];//here sorting heppened on the base of first letter of worlds afterthat second latter of the words
console.log(arr4);
arr4.sort();
console.log(arr4);

console.log('6.--------------------------')
let arr5 = ['cOme','cAb','come','climb']; //here shorting happend on the base of second letter of worlds
console.log(arr5);
arr5.sort();
console.log(arr5);

console.log('7.--------------------------')
let arr6 = ['c9me','c3b','c41e','c43mb']; //here shorting happend on the base of second letter of worlds
console.log(arr6);
arr6.sort();
console.log(arr6);

console.log('8.--------------------------')
let arr7 = ['C5me','c9K','c7Tme','cimb']; //here shorting happend on the base of first letter of worlds afterthat second letter of worlds
console.log(arr7);
arr7.sort();
console.log(arr7);

console.log('9.--------------------------')
let arr8 = [6,'A',8,9,'a',2,'B',1];
console.log(arr8);
arr8.sort();
console.log(arr8);

console.log('10.--------------------------')
let arr9 = ['6xyz','come','q73ga','climb','india'];
console.log(arr9);
arr9.sort();
console.log(arr9);


console.log('11.--------------------------')
let arr10 = ['6xyz','come','q73ga','climb','india','45loa'];//here tagert is to sort the string which contains number should come first
//in sort function when we use compair function then item1 belongs to next index to the item2 that means if item2 has a index --> 0 then item1 index --> 1
console.log(arr10);
arr10.sort(function compairFun(item1,item2) {
    if(item1.contains()) {
    }
});
console.log(arr10);


