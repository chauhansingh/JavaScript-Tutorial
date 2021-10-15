//add two number
function add(num1, num2) {
   return num1 + num2;

}
// area of a circle
function circleArea(radius1) {
    return radius1*radius1*3.124;
   
}
// even odd
function isEven(num) {
    return num % 2 == 0;
}

//function to count digit
function countDigit(num) {
    let count = 0;
    while(num) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}

function makeMultiple(count) {
    let multiple = 1;
    while(count) {
        multiple =  10 * multiple;
        count--;
    }
    return multiple;
}

function makeTwice(num) {
    return num * makeMultiple(countDigit(num)) + num;
}

// program to find given no. is palindrome or not
function isPalindrome(num) {
    let temp = num;
    let remenderString ='';
    let count = countDigit(num);
    while(count--) {
        remenderString =  remenderString + num % 10;//here the order of remenderString is very important if we take concate like (num % 10) + remenderString then will get different string so be careful here to make right string.
        num = parseInt(num / 10);
    }
    if (temp === parseInt(remenderString.trim()))
        return true;
    else
        return false;
}

console.log(isPalindrome(121));
console.log(isPalindrome(2121));
console.log(isPalindrome(44122144));
console.log(isPalindrome(567));


// console.log(makeTwice(123));
// console.log(makeTwice(12));
// console.log(makeTwice(1234));
// console.log(makeTwice(4545));

/*console.log(countDigit(34));
console.log(countDigit(1234));
console.log(countDigit(12344));
console.log(countDigit(1234678));

console.log(add(5,6));
console.log(circleArea(6));
console.log(isEven(10));*/

