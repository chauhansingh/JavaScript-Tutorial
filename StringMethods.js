/*-----program for string methods------*/
//charAt(x)
var msg = 'Massage';
console.log(msg.charAt(4));// output is 'a' because index starts from 0

//concat(string)
var str = 'Hello ';
var finalStr1=str.concat("World ',' Welcom to JS");//use of single qoute within double qoute
console.log(finalStr1);
var finalStr2=str.concat('World "," Welcom to JS');//use of double qoute within single qoute
console.log(finalStr2);
var finalStr3=str.concat('World ','Welcom to JS \n','We are felightians\n','We can show our power');//here comma(,) seprates strings
console.log(finalStr3);

//charCodeAt(position);
var x = 'hello felightians';
console.log(x.charCodeAt(5));

//indexOf(searchString,startPosition)
var str = 'i Love India';
console.log(str.indexOf('India',0));//return index 7, first occurance of specified String 'India' i.e 'I' search starts from index '9'
console.log(str.indexOf('India',8));//returns -1, after index '8' there is no 'India' search starts from index '8'

//lastIndexOf(searchString,startPosition)
console.log(str.lastIndexOf('India',4));//returns -1, before index '4' there is no 'India' search starts from index '4'
console.log(str.lastIndexOf('Love',9));//returns index 2, last occurance of specified string 'Love' i.e 'L' search starts from index '9'

//localeCompare(string,position)
var str1='cd';
console.log(str1.localeCompare('ab'));//returns '1', the reference string is lexicographically(like dictionary) greater than the compare string
console.log(str1.localeCompare('fe'));//returns '-1', the reference string is lexicographically smaller than the compare string
console.log(str1.localeCompare('cd'));//returns '0', the reference string is lexicographically euqualy than the compare string