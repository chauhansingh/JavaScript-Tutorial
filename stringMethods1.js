/*------program for string methods------*/
//replace(searchValue,replaceValue)
var str = 'hello felightians'
console.log(str.replace(' ',','));//here replace space ' ' to ',' o/p 'hello,felightians'

//slice(startNumber,endNumber)
console.log(str.slice(8,13));// strat from index '8' and end before index '13' o/p 'light'

//split(sepratorString,limitNumber)
var word = str.split(' ');
var word1 = str.split('l',1);
console.log(word[0],word[1]);
console.log(word1[0],word1[1],word[3]); 

//subString(startIndex,endIndex)
var str = 'Welcome To Felight'
console.log(str.substring(3,10));//return string start with index '3' and before index '10'

//toLocaleLowerCase()
console.log(str.toLocaleLowerCase());
//toLocaleUpperCase()
console.log(str.toLocaleUpperCase());
//toLowerCase()
console.log(str.toLowerCase());
//toUpperCase()
console.log(str.toUpperCase());
//toString()
var num = 1234;
console.log(num.toString());console.log(typeof (num.toString()));//here the number(1234) converts into a string ('1234')
//forCharCode()
console.log(String.fromCharCode(65,66,67,68,69)); console.log(String.fromCharCode(33,35,36,37));